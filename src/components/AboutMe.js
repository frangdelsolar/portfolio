import BasicCard from "./UI/Card";
import { useSelector } from "react-redux";

function AboutMe() {
  const aboutMeText = useSelector((state) => state.resume.about);

  return (
    <BasicCard title="About Me">
      {aboutMeText && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: aboutMeText }}
        ></div>
      )}
    </BasicCard>
  );
}

export default AboutMe;
