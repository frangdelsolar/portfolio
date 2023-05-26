import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SimpleButton(props) {
  return <Button icon={<SearchOutlined />}>Search</Button>;
}
