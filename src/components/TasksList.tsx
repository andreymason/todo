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
import { fetchTasks } from '../reducers/tasks';
import {useSelector, useDispatch} from '../store';

function TasksList() {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    //const token = localStorage.getItem('token');

    useEffect( () => {

        // const fetchData = async () => {

        //     console.log("Fetch data");

        //     const response = await fetch(

        //         'http://localhost:8000/tasks/',

        //         {

        //             headers: {

        //                 "Content-Type" : "application/json",
        //                 "Authorization" : `Token ${token}`

        //             }

        //         }
        //     );
    
        //     if(response.status < 400) {
        //         const json = await response.json();

        //         const transformedTasks = json.map(transformTask);

        //         if(json)
        //             dispatch(setTasks(transformedTasks));

        //     }
        //     else 
        //         console.log(response.body);

        // }

        //fetchData();

        dispatch(fetchTasks());

    }, []);
    
    console.log("Render tasks list");

    return (
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
                    
                    tasks.tasks.map((task) => (

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
    );
}

export default TasksList;


