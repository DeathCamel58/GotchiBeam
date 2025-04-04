import { ipcMain } from 'electron';
import {
  countAllCategories,
  getAllCategories,
  countAllItems,
  getAllItems,
  getCategoryById,
  getItemById,
  countCategoryItems,
  getCategoryItems,
} from './database';

ipcMain.handle('db:countAllItems', () => countAllItems());
ipcMain.handle('db:getAllItems', () => getAllItems());
ipcMain.handle('db:getItemById', (_, id) => getItemById(id));
ipcMain.handle('db:countAllCategories', () => countAllCategories());
ipcMain.handle('db:getAllCategories', () => getAllCategories());
ipcMain.handle('db:getCategoryById', (_, id) => getCategoryById(id));
ipcMain.handle('db:countCategoryItems', (_, id) => countCategoryItems(id));
ipcMain.handle('db:getCategoryItems', (_, id) => getCategoryItems(id));
