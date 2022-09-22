import fetch from "node-fetch";


const useTasks = async () => {

    const response = await fetch("http://localhost:8000/tasks");

    const data = await response.json();

    return data;

}

export default useTasks;