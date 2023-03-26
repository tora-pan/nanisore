const defaultConfig = {
  popupcolor: "blue",
  popupLocation: 0,
};
type MutableConfig = typeof defaultConfig;
type Config = Readonly<MutableConfig>;

// Simply wrapper which makes `sync.get` `Promise` based.
// async function getStorage(): Promise<MutableConfig> {
//   const config = await new Promise<MutableConfig>((resolve) => {
//     chrome.storage.sync.get(defaultConfig, (cloudStorage) => {
//       resolve(cloudStorage as MutableConfig);
//     });
//   });
//   return config;
// }

// function isLegacyKanjiInfo(
//   kanjiInfo: unknown[] | Record<string, unknown>,
// ): kanjiInfo is { [kanjiInfoCode: string]: boolean } {
//   return !(kanjiInfo instanceof Array);
// }

// async function applyMigrations(storageConfig: MutableConfig): Promise<void> {
//   if (isLegacyKanjiInfo(storageConfig.kanjiInfo)) {
//     const newKanjiInfo = [];
//     for (const info of defaultConfig.kanjiInfo) {
//       newKanjiInfo.push({
//         ...info,
//         shouldDisplay: storageConfig.kanjiInfo[info.code],
//       });
//     }
//     storageConfig.kanjiInfo = newKanjiInfo;
//     await new Promise<void>((resolve) => {
//       chrome.storage.sync.set(storageConfig, resolve);
//     });
//   }
// }

// async function createNormalizedConfiguration(): Promise<MutableConfig> {
//   const storageConfig = await getStorage();
//   await applyMigrations(storageConfig);
//   return storageConfig;
// }

// const configPromise: Promise<MutableConfig> = createNormalizedConfiguration();

// chrome.storage.onChanged.addListener((changes, area) => {
//   if (area !== "sync") {
//     return;
//   }
//   void (async () => {
//     const config = await configPromise;

//     Object.entries(changes).map((change) => {
//       (config[change[0] as keyof MutableConfig] as unknown) = change[1].newValue;
//     });
//   })();
// });

// const immutableConfigPromise = configPromise as Promise<Config>;
// export { immutableConfigPromise as configPromise };
export type { Config };
