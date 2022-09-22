import Task from "../data/Task";

const transformTask = (task: any): Task => {
    return ({
        id: task.id,
        name: task.name,
        listId: task.list.id,
        listName: task.list.name
    })
}

export default transformTask;