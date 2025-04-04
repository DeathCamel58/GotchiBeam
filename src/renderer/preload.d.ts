import { ElectronHandler } from '../main/preload';
import { Item } from '@/types/Item';
import { CategoryItem } from '@/types/CategoryItem';
import { Category } from '@/types/Category';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    api: {
      countAllItems: () => Promise<number>;
      getAllItems: () => Promise<Item[]>;
      getItemById: (id: string) => Promise<Item | null>;
      countAllCategories: () => Promise<number>;
      getAllCategories: () => Promise<Category[]>;
      getCategoryById: (id: string) => Promise<Category | null>;
      countCategoryItems: (id: string) => Promise<number>;
      getCategoryItems: (id: string) => Promise<CategoryItem[]>;
    };
  }
}

export {};
