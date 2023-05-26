import { Row, Col, Typography } from "antd";
import TagsBar from "./TagsBar";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

const { Panel } = Collapse;

const ProfessionalExperienceItem = (props) => {
  const item = props.item;
  const startDate = new Date(item.start_date).getFullYear();
  const endDate = item.end_date
    ? new Date(item.end_date).getFullYear()
    : "to date";

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Row style={{ marginBottom: "3rem" }}>
      <Col span={6}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {startDate} - {endDate}
        </Typography.Title>
      </Col>
      <Col span={18}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {item.title}
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0, marginBottom: "1rem" }}>
          {item.company} - {item.city}, {item.country}
        </Typography.Title>

        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
        >
          <Panel header="Description" key={item.id} style={panelStyle}>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </Panel>
        </Collapse>
        <TagsBar tags={item.tags} />
      </Col>
    </Row>
  );
};

export default ProfessionalExperienceItem;
