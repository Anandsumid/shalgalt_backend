const express = require("express");
const { validationResult } = require("express-validator");
const List = require("../models/list");

get_lists = (req, res, next) => {
  List.aggregate([{ $project: { __v: 0 } }])
    .then((data) => res.status(200).json({ success: true, message: data }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
create_lists = (req, res, next) => {
  const data = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, message: errors });
  }
  List.create(data)
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};
update_lists = (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  List.findOneAndUpdate({ _id: id }, data)
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};
delete_lists = (req, res, next) => {
  const id = req.params.id;
  List.deleteMany({ _id: id })
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

module.exports = { get_lists, create_lists, update_lists, delete_lists};
