// Імпортуємо функцію композиції редюсерів
import { combineReducers } from 'redux';
import { statusFilters } from './constants';
//  щоб не робити занадто великим кореневий редюсер ділимо його на частини, кожен з яких буде відповідати за свою частину стану і тоді код буде чистішим
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case 'tasks/addTask': {
//       // Потрібно повернути новий об'єкт стану
//       return {
//         // в якому є всі дані існуючого стану
//         ...state,
//         // та новий масив задач
//         tasks: [
//           // в якому є всі існуючі завдання
//           ...state.tasks,
//           // та об'єкт нового завдання
//           action.payload,
//         ],
//       };
//     }
//     //   для видалення фільтруємо на співпадіння Id
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     //Перевіряємо, чи відповідає тип відправленого екшену рядку "tasks/toggleCompleted" та повертаємо новий об'єкт стану.
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     //перевіряємо чи відповідає тип відправленого екшену рядку "filters/setStatusFilter" та повертаємо новий об'єкт стану.
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       // Кожен редюсер отримує всі екшени, відправлені в стор.
//       // Якщо редюсер не повинен обробляти якийсь тип екшену,
//       // необхідно повернути наявний стан без змін.
//       return state;
//   }
// };

//  оновлений і правильний код
const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
