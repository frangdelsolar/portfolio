// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/en-gb";
import Notification from "./components/UI/Notification";
import { useSelector } from "react-redux";
import FormDialog from "./components/UI/Modal";
import { Space, Row } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "works", element: <PortfolioPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  // { path: "login", element: <AuthPage /> },
]);

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const showModal = useSelector((state) => state.ui.showModal);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
      {showModal && <FormDialog />}
      {notification && (
        <Notification
          show={notification.show}
          severity={notification.severity}
          message={notification.message}
        />
      )}
      <Row
        style={{
          display: "flex",
          padding: 1,
          margin: 0,
          backgroundColor: "#2f2f2f",
        }}
      >
        <RouterProvider router={router} />
      </Row>
    </LocalizationProvider>
  );
}

export default App;
