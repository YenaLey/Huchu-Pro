const db = require("../config/db");

// 모든 아이템을 가져오는 함수
exports.getAllItems = (callback) => {
  const query = "SELECT * FROM items";
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

// 새로운 아이템을 DB에 추가하는 함수
exports.insertItem = (name, description, callback) => {
  const query = "INSERT INTO items (name, description) VALUES (?, ?)";
  db.query(query, [name, description], (err, result) => {
    callback(err, result);
  });
};
