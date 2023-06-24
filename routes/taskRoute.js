const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = require("express").Router()

//Altenative
//router.route("/").get(getTasks).post(createTask)
//router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

router.post("/", createTask)
router.get("/", getTasks)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id",  updateTask)

module.exports = router;