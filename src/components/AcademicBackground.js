import { List } from "@mui/material";
import BasicCard from "./UI/Card";
import AcademicItem from "./AcademicItem";
import { useSelector } from "react-redux";

function AcademicBackground() {
  const academicBackground = useSelector((state) => state.resume.educations);

  return (
    <BasicCard title="Academic Background">
      <List>
        {academicBackground.map((item, ix) => (
          <AcademicItem key={ix} item={item} />
        ))}
      </List>
    </BasicCard>
  );
}

export default AcademicBackground;
