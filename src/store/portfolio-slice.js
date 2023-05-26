import createSliceByName from "./generic-slice";

const porfolioSlice = createSliceByName("portfolio");

export const portfolioActions = porfolioSlice.actions;
export default porfolioSlice.reducer;
