'use strict'
import Tasks, { ITask } from '../models/task.model';

interface ICreateTaskInput {
  name: ITask['name'];
  status: ITask['status'];
  Created_date: ITask['Created_date'];
}

async function CreateTask ({
    name,
    status,
    Created_date
}: ICreateTaskInput): Promise<ITask> {
  return Tasks.create({
    name,
    status,
    Created_date
  })
    .then((data: ITask) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

interface ICreateTaskInput {
    name: ITask['name'];
    status: ITask['status'];
    Created_date: ITask['Created_date'];
  }
  
  async function CreateTask ({
      name,
      status,
      Created_date
  }: ICreateTaskInput): Promise<ITask> {
    return Tasks.create({
      name,
      status,
      Created_date
    })
      .then((data: ITask) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

export default {
    CreateTask
};

// import mongoose from "mongoose"
// var Task = mongoose.model('Tasks')
// export default all_tasks = function (req, res) {
//     Task.find({}, function (err, task) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task)
//     })
// }

// export default create_task = function (req, res) {
//     var new_task = new Task(req.body);
//     new_task.save(function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

// export default read_task = function (req, res) {
//     console.log(req.params.taskId)
//     Task.findOne({_id: req.params.taskId}, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

// export default update_task = function (req, res) {
//     Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task);
//     })
// }

// export default delete_task = function (req, res, next) {
//     Task.remove({
//         _id: req.params.taskId
//     }, function (err, task) {
//         if (err) {
//             res.send(err)
//         }
//         res.json({ message: ' Task is removed' })
//     })
// }