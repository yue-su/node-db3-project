const db = require("../data/dbconfig")

const find = () => {
  return db("schemes")
}
const findById = (id) => {
  return db("schemes").where('id', id)
}
const add = () => {
  db("schemes")
}
const remove = () => {
  db("schemes")
}
const findSteps = () => {
  db("schemes")
}
const update = () => {
  db("schemes")
}

module.exports = {
  find,
  findById,
  add,
  remove,
  findSteps,
  update,
}
