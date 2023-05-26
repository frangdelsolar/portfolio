import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    personalDetails: {
      first_name: null,
      last_name: null,
      title: null,
      profile_picture: null,
    },
    contactDetails: {
      email: null,
      phone: null,
      city: null,
      country: null,
      website: null,
      github: null,
      facebook: null,
      twitter: null,
      linkedin: null,
      instagram: null,
    },
    attachments: [],
  },
  reducers: {
    setAll(state, action) {
      state.personalDetails = action.payload.personal_details;
      state.contactDetails = action.payload.contact_details;
      state.attachments = action.payload.attachments;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
