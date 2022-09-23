import React, {useCallback} from 'react';

import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import TaskActionsProps from './TaskActionsProps';
import {useDispatch} from "../store";
import {taskEditInit} from "../reducers/task";


const TaskActions = (props: TaskActionsProps) => {
    const {task} = props;

    const dispatch = useDispatch();

    const onEditClick = useCallback(() => {
        dispatch(taskEditInit(task))
    }, [dispatch, task]);

    return (
        <>
            <Fab color="secondary" aria-label="edit">
                <EditIcon onClick={onEditClick}/>
            </Fab>
        </>
    );

};

export default TaskActions;
