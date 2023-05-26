import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    about: null,
    experiences: [],
    educations: [],
    skills: [],
  },
  reducers: {
    setAll(state, action) {
      state.about = action.payload.about;
      state.experiences = action.payload.experiences;
      state.educations = action.payload.educations;
      state.skills = action.payload.skills;
    },
  },
});

export const resumeActions = resumeSlice.actions;
export default resumeSlice.reducer;
