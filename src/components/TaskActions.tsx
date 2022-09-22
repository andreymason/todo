import React, {useCallback, useState} from 'react';

import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import TaskEditPopup from './TaskEditPopup';
import TaskActionsProps from './TaskActionsProps';


const TaskActions = (props: TaskActionsProps) => {

    const {task} = props;

    const [open, setOpen] = useState(false);


    const onEditClick = useCallback(() => {
        setOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Fab color="secondary" aria-label="edit">
                <EditIcon onClick={onEditClick}/>
            </Fab>
            <TaskEditPopup open={open} task={task} onClose={onClose}/>
        </>
    );

};

export default TaskActions;
