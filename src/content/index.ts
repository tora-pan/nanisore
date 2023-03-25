type Config = {
  popupLocation: 0;
  popupColor: '';
};
type Popup = {
  text: string;
  elem?: HTMLElement;
  looseWidth?: boolean;
  x: number;
  y: number;
};
type ContentWindow = {
  config: Config;
  prevTarget?: HTMLElement;
  popX?: number;
  popY?: number;
  prevSelView?: Window;
  selText?: string;
  oldTA?: HTMLTextAreaElement | HTMLInputElement;
  oldCaret?: number;
  uofs?: number;
  uofsNext?: number;
  prevRangeNode?: CharacterData;
  prevRangeOfs?: number;
  title?: string;
};

declare global {
  interface Window {
    contentWindow?: ContentWindow;
  }
}
class Content {
  private altView = 0;
  enableTab(config: Config) {
    if (window.contentWindow === undefined) {
      window.contentWindow = { config: config };
      window.addEventListener('mousemove', this.onMouseMove, false);
      window.addEventListener('keydown', this.onKeyDown, true);
      window.addEventListener('keyup', this.onKeyUp, true);
      window.addEventListener('mousedown', this.onMouseDown, false);
      window.addEventListener('mouseup', this.onMouseUp, false);
    }
    window.contentWindow.config = config;
    this.altView = config.popupLocation;
  }
  disableTab() {
    if (window.contentWindow !== undefined) {
      window.removeEventListener('mousemove', this.onMouseMove, false);
      window.removeEventListener('keydown', this.onKeyDown, true);
      window.removeEventListener('keyup', this.onKeyUp, true);
      window.removeEventListener('mousedown', this.onMouseDown, false);
      window.removeEventListener('mouseup', this.onMouseUp, false);

      // disable/remove windows
      const contentWindow = document.getElementById('content-window');
      if (contentWindow?.parentNode) {
        contentWindow.parentNode.removeChild(contentWindow);
      }
      delete window.contentWindow;
    }
  }

  showPopup({ text, elem, looseWidth, x = 0, y = 0 }: Popup) {
    const mainDoc = window.document;
    const css = mainDoc.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', chrome.extension.getURL('css/content.css'));
    if (isNaN(x) || isNaN(y)) {
      x = y = 0;
    }
    let popup = mainDoc.getElementById('content-window');
    if (!popup) {
      //render popup
      popup = mainDoc.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      popup.setAttribute('id', 'content-window');
      popup.setAttribute('lang', 'ja');
      popup.attachShadow({ mode: 'open' });

      mainDoc.body.appendChild(popup);

      popup.addEventListener(
        'dblclick',
        (ev: Event) => {
          this.hidePopup();
          ev.stopPropagation();
        },
        true,
      );

      const shadowcontainer = mainDoc.createElement('div');
      shadowcontainer.setAttribute('id', 'content-shadow');
      popup.shadowRoot!.appendChild(css);
      popup.shadowRoot!.appendChild(shadowcontainer);
    }
    const shadowContainer = this.getContentPopup(popup);
    shadowContainer.setAttribute('data-theme', window.contentWindow!.config.popupColor);
    shadowContainer.style.width = 'auto';
    shadowContainer.style.height = 'auto';
    shadowContainer.style.maxWidth = looseWidth ? '' : '600px';
    shadowContainer.innerHTML = text;

    if (elem) {
      // move popup off screen and recalculate size
      shadowContainer.className = '';
      shadowContainer.classList.add('resizeHidden');
      // positioning of popup logic goes here
    }
  }

  hidePopup() {
    const popup = document.getElementById('content-window');
    if (popup) {
      this.getContentPopup(popup).style.display = 'none';
      this.getContentPopup(popup).innerHTML = '';
    }
  }

  movePopup(ev: MouseEvent) {}

  onMouseMove(ev: MouseEvent) {}
  onKeyDown(ev: MouseEvent) {}
  onKeyUp(ev: MouseEvent) {}
  onMouseDown(ev: MouseEvent) {}
  onMouseUp(ev: MouseEvent) {}
  highlightWord() {}

  private getContentPopup(popup: HTMLElement): HTMLDivElement {
    return popup.shadowRoot!.querySelector<HTMLDivElement>('#content-shadow')!;
  }
}

const content = new Content();

chrome.runtime.onMessage.addListener((request) => {
  switch (request.type) {
    case 'enable':
      //enable it
      content.enableTab(request.config);
      break;
    case 'disable':
      content.disableTab();
      break;
    case 'showPopup':
      content.showPopup(request.text);
      break;
    default:
      console.log('default case from content.ts');
  }
});

chrome.runtime.sendMessage({ type: 'enable?' });

export { Content as TestOnlyContent }; //stop errors
