import { configureStore } from '@reduxjs/toolkit'
import { stateUMS } from '../reducers/reducer'


export default configureStore({
    reducer: {
        states: stateUMS.reducer
    },
})