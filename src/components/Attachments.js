import BasicCard from "./UI/Card";
import { Avatar, List, Space } from "antd";
import { useSelector } from "react-redux";

function Attachments() {
  const attachments = useSelector((state) => state.contact.attachments);

  return (
    <BasicCard title="Attachments">
      <List
        itemLayout="horizontal"
        dataSource={attachments}
        renderItem={(item, index) => (
          <List.Item
            key={item.name}
            style={{ margin: 0, padding: 0 }}
            actions={[
              <a href={item.file_url} target="_blank">
                Download
              </a>,
            ]}
          >
            <List.Item.Meta title={item.name} description={item.description} />
          </List.Item>
        )}
      />
    </BasicCard>
  );
}

export default Attachments;
