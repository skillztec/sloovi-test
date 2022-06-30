import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {creatNewTask, updateTask, deleteTask } from '../../redux/slices/taskSlice';

const CreateTask = () => {
  const [taskInput, setTaskInpu] = useState('');
  const dispatch = useDispatch();
  // const newTask = useSelector(creatNewTask);

  //create new task
  const createNewTask = (e) => {
    e.preventDefault();
    dispatch(creatNewTask({
      discription: taskInput
    }))
    setTaskInpu('');
  };
  
  return (
    <div>
      <form onSubmit={createNewTask}>
        <input type="text" value={taskInput} 
          onChange={(e) => setTaskInpu(e.target.value)} />
      </form>
    </div>
  )
}

export default CreateTask;