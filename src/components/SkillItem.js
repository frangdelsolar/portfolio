import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Col, Row } from "antd";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function SkillItem({ skill }) {
  return (
    <Row style={{ display: "flex", alignItems: "center" }}>
      <Col span={9}>
        <p>{skill.name}</p>
      </Col>
      <Col span={13}>
        <BorderLinearProgress variant="determinate" value={skill.level} />
      </Col>
    </Row>
  );
}

export default SkillItem;
