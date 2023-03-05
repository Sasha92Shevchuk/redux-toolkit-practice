// !!!! вже не потрібний цей файл, оскільки використовуємо createSlice

// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from 'redux'; - видаляємо оскільки вже не потрібно configureStore сам створить
import { statusFilters } from './constants';

import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';
// додаємо функцію створення редюсера
import { createReducer } from '@reduxjs/toolkit';

//  оновлений і правильний код
const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
// застосовуємо функцію редюсер
export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // return [...state, action.payload]; замість цього бібліотека immer під капотом оновлює стейт, а не перезаписує, але виглядає як перезаписує
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // immer =>
    // const index = state.findIndex(task => task.id === action.payload);
    // state.splice(index, 1);
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    // immer
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
    // return state.map(task => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return { ...task, completed: !task.completed };
    // });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // immer
    state.status = action.payload;
    // return {
    //   ...state,
    //   status: action.payload,
    // };
  },
});
