import axios from "axios";
import { uiActions } from "../store/ui-slice";

const httpService = {
  get: async (url) => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  },
  post: async (data, url) => {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      return error;
    }
  },
  put: async (data, url) => {
    try {
      const response = await axios.put(url, data);
      return response;
    } catch (error) {
      return error;
    }
  },
  delete: async (url) => {
    try {
      const response = await axios.delete(url);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export const handleRequest = async (config, dispatch) => {
  if (config.loadingNotificationData) {
    dispatch(uiActions.showNotification(config.loadingNotificationData));
  }

  try {
    let response = null;
    if (config.body) {
      response = await config.method(config.body, config.url);
    } else {
      response = await config.method(config.url);
    }
    if (response.status === 200) {
      dispatch(uiActions.closeNotification());
      return response.data;
    } else {
      dispatch(
        uiActions.showNotification({
          severity: "error",
          message: `Error: ${response}`,
        })
      );
    }
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        severity: "error",
        message: `Error: ${error}`,
      })
    );
  }
};

export default httpService;
