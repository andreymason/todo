import React, {useEffect} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


//import transformTask from '../transformers/Tasks';
import TaskActions from './TaskActions';
import { setTasks } from '../reducers/tasks';
import {useSelector, useDispatch} from '../store';
import Task from "../data/Task";
import TaskEditPopup from "./TaskEditPopup";

function TasksList() {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    //const token = localStorage.getItem('token');

    useEffect( () => {
        const tasks = [...Array(500).keys()].map((key) => {
            return {id: key, name: `Task${key}`, listId: 1, listName: "task1"} as Task
        })

        dispatch(setTasks(tasks));

    }, [dispatch]);

    return (
        <>
            <TaskEditPopup/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task Name</TableCell>
                        <TableCell>List Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        tasks.map((task) => (

                        <TableRow
                        key={task.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {task.name}
                            </TableCell>
                            <TableCell>{task.listName}</TableCell>
                            <TableCell>
                                <TaskActions task={task}/>
                            </TableCell>
                        </TableRow>
                    ))
                    
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default TasksList;


