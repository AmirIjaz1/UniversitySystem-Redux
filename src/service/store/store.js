import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/reducer';


export const store = configureStore({
  reducer: {
    loginReducer,
  }
});
