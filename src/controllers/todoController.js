const todo = require("../models/todo");

const all = async (req, res) => {
  const allList = await todo.findAll();
  res.status(200);
  res.json({ allList });
};
const add = async (req, res) => {
  const { title } = req.body;
  if (title) {
    let addTarefa = await todo.create({
      title: title,
    });

    res.status(201);
    await addTarefa.save();
    res.json({ item: addTarefa });
  } else {
    res.json({ error: "tarefa não foi criada" });
  }
};
const update = async (req, res) => {};
const remove = async (req, res) => {};

module.exports = {
  all,
  add,
  update,
  remove,
};
