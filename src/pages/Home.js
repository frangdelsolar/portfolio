import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ProfessionalExperience from "../components/ProfessionalExperience";
import AcademicBackground from "../components/AcademicBackground";
import { Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeSvc } from "../services/generic-service";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resumeSvc.get());
  }, [dispatch]);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <AboutMe />
      <Skills />
      <ProfessionalExperience />
      <AcademicBackground />
    </Space>
  );
}

export default HomePage;
