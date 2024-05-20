export const selectUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const isLoading = (state) => state.auth.loading;

export const isError = (state) => state.auth.error;
