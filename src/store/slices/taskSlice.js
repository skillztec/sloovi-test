import { createSlice } from "@reduxjs/toolkit";
import { createTaskAsync } from "./apiCrud";

const innitialState = {
  tasks: [
    {
      task_id: 1656706396481,
      task_msg: "Coding and repeat",
      task_date: "25/06/2022",
      task_time: "10:30am",
      is_completed: false
    }
  ]
};

    // {
    //   id: 1656706343365,
    //   task_msg: "code",
    //   task_date: "25/06/2022",
    //   task_time: "12:20 PM",
    //   is_completed: false,
    // },
    // {
    //   id: 1656706149751,
    //   task_msg: "take a break",
    //   task_date: "25/06/2022",
    //   task_time: "03:15 PM",
    //   is_completed: false,
    // },
    // {
    //   id: 1656705955897,
    //   task_msg: "take a break",
    //   task_date: "26/06/2022",
    //   task_time: "05:30 AM",
    //   is_completed: false,
    // },
//   ],
// };

const taskSlice = createSlice({
  name: 'task',
  innitialState,
  reducers: {
    //creates task
    creatNewTask: (state, action) => {
      // state.tasks = action.payload.tasks or
      const newTask = {
        task_id: Date.now(),
        task_msg: action.payload.discription, 
        task_date: action.payload.date,
        task_time: action.payload.time,
        is_completed: false,
      };
      state.push(newTask);
    },

    //update task
    updateTask: (state, action) => {
      const taskIndx = state.findIndex((task) => task.task_id === action.payload.task_id);
      state.push(taskIndx);
    },
      
    //delete task
    deleteTask: (state, action) => {
      return state.filter((task) => task.task_id === action.payload.task_id)
    }
  },

  //extra reducers
  extraReducers: {}
});

export const { creatNewTask, updateTask, deleteTask } = taskSlice.actions;

//shoots in to store, grabs and returns the actual value
export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;