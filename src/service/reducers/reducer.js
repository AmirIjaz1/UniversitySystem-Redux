import { createSlice } from '@reduxjs/toolkit'

export const stateUMS = createSlice({
    name: 'states',
    initialState: {
        islogin: false,
        userId: "",
    },
    reducers: {
        isLogin: (state, action) => {
            debugger
            state.islogin = true;
            state.userId=action.payload;
        },
        isLogout: (state) => {
            state.islogin = false;
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { isLogin, isLogout } = stateUMS.actions

export default stateUMS.reducer


