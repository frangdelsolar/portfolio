import BasicCard from "./UI/Card";
import { Button, Form, Input, Space } from "antd";

import mailSvc from "../services/mail-service";
import { useDispatch } from "react-redux";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function ContactMe() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(mailSvc.create(values));
  };

  return (
    <BasicCard title="Contact Me">
      <Space
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "right",
        }}
        direction="horizontal"
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 500,
          }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </BasicCard>
  );
}

export default ContactMe;
