
import React, { useCallback } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import TaskEditPopupProps from './TaskEditPopupProps';
import {updateTaskName} from '../reducers/tasks';
import {useDispatch} from '../store/';

function TaskEditPopup(props: TaskEditPopupProps) {

  const dispatch = useDispatch();

  const { onClose, task, open } = props;

  const handleClose = () => {
    onClose(task);
  };

  const onTextChange = useCallback( async (event: any) => {

    //const newTask = { ...task };
    
    console.log("onTextChange");

    const newTaskName = event.target.value;
    
    dispatch(updateTaskName([task.id, newTaskName]));

  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set new name</DialogTitle>

        <TextField value={task.name} onChange={onTextChange}/>

    </Dialog>
  );
}

export default TaskEditPopup;
