import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'pageSwitcher',
    initialState: {
        name: 'userName',
        password: 'password'
    },
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserPassword: (state, action) => {
            state.password = action.payload;
        }
    },
});

export const { setUserName, setUserPassword } = pageSlice.actions;

export default pageSlice.reducer;
