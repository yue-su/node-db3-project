const db = require("../data/dbconfig")

const find = () => {
  return db("schemes")
}
const findById = (id) => {
  return db("schemes").where('id', id)
}
const add = (body) => {
    //difference between item and item[0]
  return db("schemes").insert(body).then(item => {return findById(item)})
}
const remove = (id) => {
  return db("schemes").where('id', id).del()
}

/*
select steps.id, schemes.scheme_name, steps.step_number, steps.instructions
from steps join schemes on steps.scheme_id = schemes.id
where schemes.id = 2
order by step_number;
*/

const findSteps = (id) => {
    return db("steps")
        .join("schemes", "steps.scheme_id", "schemes.id")
        .select(
            "schemes.scheme_name",
            "steps.step_number",
            "steps.instructions",
            "steps.id",
        )
        .where("schemes.id", id)
    .orderBy('steps.step_number')
}


const update = (changes, id) => {
  return db("schemes")
}

const addStep = (body) => {
    return db('scheme')
}

module.exports = {
  find,
  findById,
  add,
  findSteps,
  remove,
  update,
  addStep,
}
