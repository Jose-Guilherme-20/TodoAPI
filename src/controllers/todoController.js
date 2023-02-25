const todo = require("../models/todo");

const all = async (req, res) => {
  const allList = await todo.findAll();
  res.status(200);
  res.json({ allList });
};
const add = async (req, res) => {
  const { title, done } = req.body;
  let addTarefa = todo.create({
    title: title,
    done: done,
  });
  await addTarefa.save();
  res.json({});
};
const update = async (req, res) => {};
const remove = async (req, res) => {};

module.exports = {
  all,
  add,
  update,
  remove,
};
