import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../redux/slices/taskSlice';
import RenderTaskItem from './RenderTaskItem';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  return (
    <div>
      {tasks.map((task) => (
        <RenderTaskItem key={task.id} id={task.id} discription={task.discription} date={task.date} 
        time={task.time} completed={task.completed} 
        />
      ))}
    </div>
  )
};

export default TaskList;