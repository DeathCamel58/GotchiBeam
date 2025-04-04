import Database from 'better-sqlite3';
import path from 'path';
import webpackPaths from '../../.erb/configs/webpack.paths';

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
const dbPath = isDevelopment
  ? path.join(webpackPaths.appPath, 'db/db.sqlite')
  : path.join(__dirname, '../../db/db.sqlite');
const db = new Database(dbPath);

export function countAllItems() {
  const query = db.prepare('SELECT COUNT(*) FROM item').all() as {
    'COUNT(*)': number;
  }[];
  return query[0]['COUNT(*)'];
}

export function getAllItems() {
  return db.prepare('SELECT * FROM item').all();
}

export function countAllCategories() {
  const query = db.prepare('SELECT COUNT(*) FROM category').all() as {
    'COUNT(*)': number;
  }[];
  return query[0]['COUNT(*)'];
}

export function getAllCategories() {
  return db.prepare('SELECT * FROM category').all();
}

export function getItemById(id: string) {
  return db.prepare('SELECT * FROM item WHERE id = ?').get(id);
}

export function getCategoryById(id: string) {
  return db.prepare('SELECT * FROM category WHERE id = ?').get(id);
}

export function countCategoryItems(id: string) {
  return db
    .prepare('SELECT COUNT(*) FROM category_item WHERE category_id = ?')
    .get(id);
}

export function getCategoryItems(id: string) {
  return db
    .prepare('SELECT * FROM category_item WHERE category_id = ?')
    .all(id);
}
