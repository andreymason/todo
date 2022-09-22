import Task from '../data/Task';

interface TaskEditPopupProps {
    task: Task;
    open: boolean;
    onClose: (task: Task) => void;
} 

export default TaskEditPopupProps;