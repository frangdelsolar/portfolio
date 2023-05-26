import httpService, { handleRequest } from "./http-service";
import { uiActions } from "../store/ui-slice";
import { postActions } from "../store/post-slice";
import { portfolioActions } from "../store/portfolio-slice";
import { resumeActions } from "../store/resume-slice";
import { contactActions } from "../store/contact-slice";

const hostUrl = `${process.env.REACT_APP_API_URL}/`;

console.log(hostUrl);

export const mailSvc = genericActionHandler(
  "Mail",
  contactActions,
  hostUrl + "mail"
);

export const contactSvc = genericActionHandler(
  "Contact",
  contactActions,
  hostUrl + "api/contact"
);

export const resumeSvc = genericActionHandler(
  "Resume",
  resumeActions,
  hostUrl + "api/resume"
);

export const postSvc = genericActionHandler(
  "Post",
  postActions,
  hostUrl + "api/posts"
);

export const portfolioSvc = genericActionHandler(
  "Portfolio",
  portfolioActions,
  hostUrl + "api/works"
);

function genericActionHandler(entityName, entityActions, apiUrl) {
  const get = () => {
    return async (dispatch) => {
      const config = {
        method: httpService.get,
        url: `${apiUrl}`,
        loadingNotificationData: {
          severity: "info",
          message: "Loading...",
        },
      };

      const data = await handleRequest(config, dispatch);
      dispatch(entityActions.setAll(data));
    };
  };

  const getAll = () => {
    return async (dispatch) => {
      const config = {
        method: httpService.get,
        url: `${apiUrl}`,
        loadingNotificationData: {
          severity: "info",
          message: "Loading...",
        },
      };

      const data = await handleRequest(config, dispatch);

      let updatedItems = [];
      if (data) {
        Object.entries(data).map((value) => {
          updatedItems.push({
            id: value[0],
            ...value[1],
          });
        });
      }
      dispatch(entityActions.setItems(updatedItems));
    };
  };

  const getById = (id) => {
    return async (dispatch) => {
      const config = {
        method: httpService.get,
        url: `${apiUrl}/${id}`,
        loadingNotificationData: {
          severity: "info",
          message: "Loading...",
        },
      };

      const data = await handleRequest(config, dispatch);
      dispatch(entityActions.setCurrent({ id: id, ...data }));
    };
  };

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
      dispatch(entityActions.addItem({ id: responseData.name, ...data }));
      dispatch(
        uiActions.showNotification({
          severity: "success",
          message: "Item created successfully!",
        })
      );
    };
  };

  const update = (id, data) => {
    return async (dispatch) => {
      const config = {
        method: httpService.put,
        url: `${apiUrl}/${id}`,
        body: data,
        loadingNotificationData: {
          severity: "info",
          message: "Sending...",
        },
      };

      await handleRequest(config, dispatch);
      dispatch(entityActions.updateItem(data));
      dispatch(
        uiActions.showNotification({
          severity: "success",
          message: "Item updated successfully!",
        })
      );
    };
  };

  const destroy = (id) => {
    return async (dispatch) => {
      const config = {
        method: httpService.delete,
        url: `${apiUrl}/${id}`,
        loadingNotificationData: {
          severity: "info",
          message: "Sending request...",
        },
      };

      await handleRequest(config, dispatch);
      dispatch(entityActions.deleteItem(id));
      dispatch(
        uiActions.showNotification({
          severity: "success",
          message: "Item deleted successfully!",
        })
      );
    };
  };

  return { get, getAll, getById, create, update, destroy };
}
