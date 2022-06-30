import { createSlice } from "@reduxjs/toolkit";

const innitialState = {
  tasks: [
    {id: 1, author: '', discription: 'take interview', task_date: '25/06/2022', task_time: '10:00 AM', is_created: false, is_completed: false},
    {id: 2, author: '', discription: 'code', task_date: '25/06/2022', task_time: '12:20 PM', is_created: false, is_completed: false},
    {id: 3, author: '', discription: 'take a break', task_date: '25/06/2022', task_time: '03:15 PM', is_created: false, is_completed: false},
    {id: 3, author: '', discription: 'take a break', task_date: '26/06/2022', task_time: '05:30 AM', is_created: false, is_completed: false}
  ]
};

const taskSlice = createSlice({
  name: 'tasks',
  innitialState,
  reducers: {
    //creates task
    creatNewTask: (state, action) => {
      // state.tasks = action.payload.tasks or
      const newTask = {
        id: Date.now(),
        discription: action.payload.discription, //title: action.payload.title,
        task_date: action.payload.date,
        task_time: action.payload.time,
        is_created: true,
        completed: false
      };
      state.push(newTask);
    },

    //update task
    updateTask: (state, action) => {
      const taskIndx = state.findIndex((task) => task.id === action.payload.id);
      state[taskIndx].discription = action.payload.discription;
    },

    //delete task
    deleteTask: (state, action) => {
      return state.filter((task) => task.id == action.payload.id)
    }
  }
});

export const { creatNewTask, updateTask, deleteTask } = taskSlice.actions;

//shoots in to store, grabs and returns the actual value
export const selectTasks = (state) => state.tasks.tasks;

export default taskSlice.reducer;