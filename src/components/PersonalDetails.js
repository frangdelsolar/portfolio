import BasicCard from "./UI/Card";
import { Col, Row, Space } from "antd";
import { ContactsOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import SimpleButton from "./UI/SimpleButton";

function PersonalDetails() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const personalDetails = useSelector((state) => state.contact.personalDetails);
  const contactDetails = useSelector((state) => state.contact.contactDetails);

  let imageData = {
    path: "https://picsum.photos/300/200",
    title: "Profile picture",
  };

  let content = [];

  if (personalDetails && contactDetails) {
    if (
      personalDetails.profile_picture &&
      personalDetails.profile_picture.image_url
    ) {
      imageData.path = personalDetails.profile_picture.image_url;
    }
    content = [
      {
        key: "Name",
        value: `${personalDetails.first_name} ${personalDetails.last_name}`,
        icon: <ContactsOutlined />,
      },
      {
        key: "Email",
        value: contactDetails.email,
        icon: <MailOutlined />,
      },
      {
        key: "Phone",
        value: "+" + contactDetails.phone,
        icon: <PhoneOutlined />,
      },
      {
        key: "Location",
        value: `${contactDetails.city}, ${contactDetails.country}`,
        icon: <EnvironmentOutlined />,
      },
      // {
      //   key: "Website",
      //   value: profDetails.website,
      //   icon: <LinkOutlined />,
      // },
    ];
  }

  return (
    <BasicCard title="Personal Details" image={imageData}>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          paddingTop: 30,
          paddingRight: 30,
          justifyItems: "center",
        }}
      >
        {content.map((item) => (
          <Row key={item.key}>
            <Col
              span={4}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "left",
                fontSize: "1.5rem",
              }}
            >
              {item.icon}
            </Col>
            <Col
              span={19}
              style={{
                display: "block",
                alignItems: "start",
                justifyContent: "left",
              }}
            >
              <Row>{item.key}</Row>
              <Row
                style={{
                  fontSize: 16,
                  display: "flex",
                  flexWrap: "wrap",
                  inlineSize: "300px",
                }}
              >
                <b>{item.value}</b>
              </Row>
            </Col>
          </Row>
        ))}
      </Space>
    </BasicCard>
  );
}

export default PersonalDetails;
