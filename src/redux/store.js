import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
// import { tasksReducer, filtersReducer } from './reducer'; - так як файлу reducer вже немає, а самі редюсери створюються у slices, заміняємо імпорти

// import { rootReducer } from './reducer'; - видаляємо оскільки вже не потрібно, configureStore сам створить, лише імпортуємо редюсери

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
