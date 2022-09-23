
import React, { useCallback } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from '../store/';
import {taskEdit, taskEditComplete} from "../reducers/task";
import {updateTask} from "../reducers/tasks";

function TaskEditPopup() {

  const dispatch = useDispatch();

  const { task, isEdit: open } = useSelector(state => state.task);

  const handleClose = useCallback(() => {
    dispatch(updateTask(task!));
    dispatch(taskEditComplete());
  }, [dispatch, task]);

  const onTextChange = useCallback( async (event: any) => {
    
    const newTaskName = event.target.value;
    
    await dispatch(taskEdit({name: newTaskName}));

  }, [dispatch]);

  return (task && (<Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set new name</DialogTitle>

        <TextField value={task.name} onChange={onTextChange}/>

    </Dialog>)) || (<></>)
}

export default TaskEditPopup;
