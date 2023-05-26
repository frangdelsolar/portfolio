import { uiActions } from "../store/ui-slice";
import httpService, { handleRequest } from "./http-service";

const hostUrl = `${process.env.REACT_APP_API_URL}/`;

const apiUrl = hostUrl + "mail/";

const create = (data) => {
  return async (dispatch) => {
    const config = {
      method: httpService.post,
      url: `${apiUrl}`,
      body: data,
      loadingNotificationData: {
        severity: "info",
        message: "Sending...",
      },
    };

    const responseData = await handleRequest(config, dispatch);

    dispatch(
      uiActions.showNotification({
        severity: "info",
        message: responseData.message,
      })
    );
  };
};

const mailSvc = { create };

export default mailSvc;
