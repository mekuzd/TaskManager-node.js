const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true, //gets rid of white spaces
    maxlength: [20, "name can not be more than 20 characters"], // if name is more than 10 characters it becomes an error
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
