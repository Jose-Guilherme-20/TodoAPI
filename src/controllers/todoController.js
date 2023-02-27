const Todo = require("../models/Todo");

const all = async (req, res) => {
  const allList = await Todo.findAll();
  res.status(200);
  res.json({ allList });
};
const add = async (req, res) => {
  const { title } = req.body;
  if (title) {
    let addTarefa = await Todo.create({
      title: title,
    });

    res.status(201);
    await addTarefa.save();
    res.json({ item: addTarefa });
  } else {
    res.json({ error: "tarefa não foi criada" });
  }
};
const update = async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.findByPk(id);
  if (todo) {
    if (req.body.title) {
      todo.title = req.body.title;
    }
    if (req.body.done) {
      switch (req.body.done.toLowerCase()) {
        case "true":
        case "1":
          todo.done = true;
          break;
        case "false":
        case "0":
          todo.done = false;
          break;
      }
    }
    await todo.save();
    res.json({
      item: todo,
    });
  }
};
const remove = async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
  }
  res.json({});
};

module.exports = {
  all,
  add,
  update,
  remove,
};
