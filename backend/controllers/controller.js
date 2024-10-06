const Model = require("../models/model");

// 모든 아이템을 조회
exports.getItems = (req, res) => {
  Model.getAllItems((err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
};

// 새로운 아이템을 추가
exports.addItem = (req, res) => {
  const { name, description } = req.body;
  Model.insertItem(name, description, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res
        .status(201)
        .json({ message: "Item added successfully", id: result.insertId });
    }
  });
};
