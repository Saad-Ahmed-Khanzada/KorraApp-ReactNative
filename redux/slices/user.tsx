import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

// Define a type for the slice state
interface UserState {
  user: {
    uid: string;
    email: string | null;
    displayName: string | null;
  } | null;
  userLoading: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
