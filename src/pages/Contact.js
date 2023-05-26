import { Space } from "antd";
import ContactMe from "../components/ContactMe";

function ContactPage() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <ContactMe />
    </Space>
  );
}

export default ContactPage;
