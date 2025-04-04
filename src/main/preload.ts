// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

contextBridge.exposeInMainWorld('api', {
  countAllItems: () => ipcRenderer.invoke('db:countAllItems'),
  getAllItems: () => ipcRenderer.invoke('db:getAllItems'),
  getItemById: (id: string) => ipcRenderer.invoke('db:getItemById', id),
  countAllCategories: () => ipcRenderer.invoke('db:countAllCategories'),
  getAllCategories: () => ipcRenderer.invoke('db:getAllCategories'),
  getCategoryById: (id: string) => ipcRenderer.invoke('db:getCategoryById', id),
  countCategoryItems: (id: string) => ipcRenderer.invoke('db:countCategoryItems', id),
  getCategoryItems: (id: string) => ipcRenderer.invoke('db:getCategoryItems', id),
});

export type ElectronHandler = typeof electronHandler;
