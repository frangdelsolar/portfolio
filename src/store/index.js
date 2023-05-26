import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";
import postReducer from "./post-slice";
import portfolioReducer from "./portfolio-slice";
import resumeReducer from "./resume-slice";
import contactReducer from "./contact-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    post: postReducer,
    portfolio: portfolioReducer,
    resume: resumeReducer,
    contact: contactReducer,
  },
});

export default store;
