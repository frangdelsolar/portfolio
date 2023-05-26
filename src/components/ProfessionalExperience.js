import BasicCard from "./UI/Card";
import { List } from "@mui/material";
import ProfessionalExperienceItem from "./ProfessionalExperienceItem";
import { useSelector } from "react-redux";
import { Tabs } from "antd";

function ProfessionalExperience() {
  const experiences = useSelector((state) => state.resume.experiences);

  if (experiences.length <= 0) return <BasicCard>Loading...</BasicCard>;

  let categoryNames = [];
  experiences.forEach((item) => {
    let categoryName = item.category.name;
    if (!categoryNames.includes(categoryName)) {
      categoryNames.push(categoryName);
    }
  });

  let categories = [];

  categoryNames.forEach((categoryName) => {
    let category = {
      key: categoryName,
      label: categoryName,
      experiences: [],
      children: <List></List>,
    };
    category.experiences = experiences.filter(
      (item) => item.category.name === categoryName
    );
    category.children = (
      <List>
        {category.experiences.map((item, ix) => (
          <ProfessionalExperienceItem key={ix} item={item} />
        ))}
      </List>
    );
    categories.push(category);
  });

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <BasicCard title="Professional Experience">
      <Tabs defaultActiveKey="1" items={categories} onChange={onChange} />
    </BasicCard>
  );
}

export default ProfessionalExperience;
