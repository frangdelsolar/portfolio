import { Space } from "antd";
import BasicCard from "../components/UI/Card";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AuthPage() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <BasicCard title="Login"></BasicCard>
    </Space>
  );
}

export default AuthPage;
