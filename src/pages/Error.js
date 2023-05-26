import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Some error happened";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "Couldnot find resource";
  }
  return (
    <>
      <MainNavigation />
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
