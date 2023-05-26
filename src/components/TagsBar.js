import { Space, Tag } from "antd";
import React from "react";

function TagsBar({ tags }) {
  return (
    <Space
      direction="horizontal"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tags.map((tag) => (
        <React.Fragment key={tag}>
          <Tag color={tag.color}>{tag.name}</Tag>
        </React.Fragment>
      ))}
    </Space>
  );
}

export default TagsBar;
