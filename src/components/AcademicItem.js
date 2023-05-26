import { Row, Col, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;

const AcademicItem = (props) => {
  const item = props.item;
  const startDate = new Date(item.start_date);
  const endDate = new Date(item.end_date);
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Row style={{ marginBottom: "1rem" }}>
      <Col span={6}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {startDate.getFullYear()} - {endDate.getFullYear()}
        </Typography.Title>
      </Col>
      <Col span={18}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {item.qualification}
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0, marginBottom: "1rem" }}>
          {item.institution} - {item.city}, {item.country}
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
          <Panel header="Details" key={item.id} style={panelStyle}>
            <div dangerouslySetInnerHTML={{ __html: item.details }}></div>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default AcademicItem;
