import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'changeTheme',
    initialState: {
        value: 'light',
    },
    reducers: {
        toggleTheme: (state) => {
            let theme = state.value;
            // eslint-disable-next-line no-unused-expressions
            theme === 'light' ? (theme = 'dark') : (theme = 'light');
            // eslint-disable-next-line no-param-reassign
            state.value = theme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
