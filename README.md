# nanisore

> a chrome extension to help native Japanese speakers learn English

<!-- [![Mergify Status](https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/melink14/rikaikun&style=flat)](https://mergify.com)
[![codecov](https://codecov.io/gh/melink14/rikaikun/branch/main/graph/badge.svg?token=4nZ7madoqJ)](https://codecov.io/gh/melink14/rikaikun)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e342d582357449f38d9255c247e37159)](https://www.codacy.com/gh/melink14/rikaikun/dashboard?utm_source=github.com&utm_medium=referral&utm_content=melink14/rikaikun&utm_campaign=Badge_Grade) -->

[![semantic-release: conventional](https://img.shields.io/badge/semantic--release-conventional-commits?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Standard Readme Compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat)](https://github.com/RichardLitt/standard-readme)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat)](https://conventionalcommits.org)
[![All Contributors](https://img.shields.io/github/all-contributors/tora-pan/nanisore?color=orange)](#contributors)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Table of Contents <!-- omit in toc -->

- [Background](#background)
  - [Current Goals](#current-goals)
- [Install](#install)
  - [Via the Chrome Web Store](#via-the-chrome-web-store)
  - [Via Microsoft Edge Add-ons](#via-microsoft-edge-add-ons)
  - [As an Unpacked Extension](#as-an-unpacked-extension)
- [Usage](#usage)
  - [Features](#features)
  - [Options](#options)
    - [Keyboard Shortcuts](#keyboard-shortcuts)
- [Maintainers](#maintainers)
- [Credits](#credits)
- [Contributing](#contributing)
  - [Contributors ✨](#contributors)
- [License](#license)

## Background

rikaikun is a port of [Rikaichan](https://www.polarcloud.com/getrcx/) I started in 2010 when Chrome released its extension API. It was originally hosted on Google Code until Google Code was canceled and everything was migrated to GitHub.

Rikaichan was a Firefox extension that emulated the popup translations of RikaiXUL. It was the best Japanese-to-English inline translation tool in the browser.

I started with the idea that I would create the Chrome equivalent of Rikaichan from scratch using my own ideas. However, after I tried Rikaichan, I realized that it was already quite good, and starting from scratch would be wasting the excellent work of its developers. Instead, I forked Rikaichan and updated the APIs to work with the Chrome extension model.

In 2018, Firefox killed the extension model that Rikaichan was based on, but other similar extensions have since been created and ported to various browsers. Not much was happening with rikaikun during that time but we've started to work on it again!

### Current Goals

- Refactor code base such that it becomes very easy to maintain and contribute to.
- Fix bugs in dictionary output.
- Work on new features like other dictionaries, OCR, and static popup/lookup bar. Feel free to suggest/:thumbsup: more.

## Install

### Via the Chrome Web Store

Visit rikaikun on the [Chrome Web Store](https://chrome.google.com/webstore/detail/rikaikun/jipdnfibhldikgcjhfnomkfpcebammhp) and click 'Add to Chrome'.

### Via Microsoft Edge Add-ons

Visit rikaikun on [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/rikaikun/ebdggalafggfhdllgohjbpgnmfppdfih) and click 'Get'.

### As an Unpacked Extension

You can also install rikaikun from the source as an unpacked extension:

- Get the [latest release](https://github.com/melink14/rikaikun/releases/latest) from Github:
- Follow [these instructions](https://github.com/web-scrobbler/web-scrobbler/wiki/Install-an-unpacked-extension) from the web-scrobbler Chrome extension. (substituting rikaikun where appropriate)

## Usage

Activate the extension by clicking on the 理 in the top right. When the introductory pop up appears, rikaikun is ready for action.

When rikaikun is active, hovering over Japanese words will trigger a translation pop-up.

See it in action in this [Youtube demo](https://www.youtube.com/watch?v=DFRTt6d0s3c) by [Tariq Sheikh](https://www.youtube.com/channel/UCRAL2bcBZ1Cw-xyPwelpi8A).

### Features

- Read out the Japanese words using Chrome Text To Speech capabilities. (Off by default)
- Change where the popup appears on your screen. (Where your mouse cursor is by default)
- Copy current definitions to they keyboard.
- Add a delay before popup is shown to avoid constant distractions.
- Require a modifier key to be held down in order to see popups.
- Hide definitions to see only the readings of words.

### Options

You can access the options from [the extension page](chrome://extensions/?options=jipdnfibhldikgcjhfnomkfpcebammhp) if you have it installed or by right clicking on the rikaikun icon.

#### Keyboard Shortcuts

<!-- Generated with https://www.tablesgenerator.com/markdown_tables -->

| Key         | Explanation                |
| ----------- | -------------------------- |
| A           | Alternate popup location   |
| Y           | Move popup location down   |
| C           | Copy to clipboard          |
| D           | Hide/show definitions      |
| Shift/Enter | Switch dictionaries        |
| B           | Previous character         |
| M           | Next character             |
| N           | Next word                  |
| J           | Scroll back definitions    |
| K           | Scroll forward definitions |

## Maintainers

[@melink14](https://github.com/melink14)

## Credits

- [Jon Zarate](https://www.polarcloud.com/) for their work on [Rikaichan](https://www.polarcloud.com/getrcx/)
- [Todd Rudick](http://www.rikai.com) for their work on the original [RikaiXUL](http://rikaixul.mozdev.org)
- This extension uses [JMdict/EDICT](http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project) and [KANJIDIC](http://www.edrdg.org/wiki/index.php/KANJIDIC_Project) dictionary files. These files are the property of the [Electronic Dictionary Research and Development Group](http://www.edrdg.org/), and are used in conformance with the Group's [licence](http://www.edrdg.org/edrdg/licence.html).

## Contributing

Contribute by submitting pull requests, filing bug reports, requesting features and more!

See the [contributing file](CONTRIBUTING.md) for the full details!

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

### Contributors ✨

!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
