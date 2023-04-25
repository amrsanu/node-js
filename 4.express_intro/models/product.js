const { v4: uuidv4 } = require('uuid');
const db = require('../util/database');
const Cart = require('./cart');

// Model for storing Products with the propoerties.
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
  return db.execute(`INSERT INTO products (title, imageUrl, description, price) 
    VALUES (?, ?, ?, ?)`, [this.title, this.imageUrl, this.description, this.price])
  }

  static deleteByID(id) {
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products');
  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
  }
};
