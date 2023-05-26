import BasicCard from "./UI/Card";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import SkillItem from "./SkillItem";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

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

function Skills() {
  const skills = useSelector((state) => state.resume.skills);

  return (
    <BasicCard title="Skills">
      <Row>
        {skills.map((skill) => (
          <Col span={8}>
            <SkillItem key={skill.name} skill={skill} />
          </Col>
        ))}
      </Row>
    </BasicCard>
  );
}

export default Skills;
