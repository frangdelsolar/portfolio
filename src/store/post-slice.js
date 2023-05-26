import createSliceByName from "./generic-slice";

const postSlice = createSliceByName("post");

export const postActions = postSlice.actions;
export default postSlice.reducer;
