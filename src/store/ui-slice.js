import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    showModal: false,
    modalData: {},
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        show: true,
        severity: action.payload.severity,
        message: action.payload.message,
      };
    },
    closeNotification(state) {
      state.notification = {
        show: false,
        severity: "",
        message: "",
      };
    },
    openModal(state, action) {
      state.showModal = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.showModal = false;
      state.modalData = {};
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
