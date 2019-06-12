'use strict'
import { TRoutesInput } from '../../types/routes';
import UserController from '../controllers/task.controller'

export default ({ app }: TRoutesInput) => {
    app.route('/tasks')
        .get(UserController.all_tasks)
        .post(UserController.create_task)
    
    app.route('/tasks/:taskId')
        .get(UserController.read_task)
        .put(UserController.update_task)
        .delete(UserController.delete_task)
}