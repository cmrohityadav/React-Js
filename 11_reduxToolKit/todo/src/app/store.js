// step first
import {configureStore} from '@reduxjs/toolkit';
import todoRohit from '../features/todo/todoSlice';
// step 2
export const store = configureStore({

    reducer: todoRohit
})