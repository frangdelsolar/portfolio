import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Attachements from "../components/Attachments";
import { Space, Layout, Row, Col } from "antd";
import PersonalDetails from "../components/PersonalDetails";
import SocialMedia from "../components/SocialMedia";
import ContactMe from "../components/ContactMe";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSvc } from "../services/generic-service";

function RootLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactSvc.get());
  }, [dispatch]);

  return (
    <Space direction="vertical">
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Col
          style={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
          xs={24}
          md={8}
        >
          <PersonalDetails />
          <SocialMedia />
          <Attachements />
          <ContactMe />
        </Col>
        <Col
          style={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
          xs={24}
          md={16}
        >
          <MainNavigation />
          <Outlet />
        </Col>
      </Row>
    </Space>
  );
}

export default RootLayout;
