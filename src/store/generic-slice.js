import { createSlice } from "@reduxjs/toolkit";

function createSliceByName(name) {
  return createSlice({
    name: name,
    initialState: {
      items: [],
      current: null,
      selectedId: null,
    },
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload);
      },
      updateItem: (state, action) => {
        let newItems = [];
        state.items.forEach((item) => {
          if (item.id !== action.payload.id) {
            newItems.push({ ...item });
          } else {
            newItems.push({ ...action.payload });
          }
        });
        state.items = newItems;
      },
      deleteItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
      setItems: (state, action) => {
        state.items = action.payload;
      },
      setCurrent: (state, action) => {
        state.current = action.payload;
      },
      setSelectedId: (state, action) => {
        state.selectedId = action.payload;
      },
    },
  });
}

export default createSliceByName;
