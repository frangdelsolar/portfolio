import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BasicCard from "./UI/Card";
import { Button, Space } from "antd";
import { useSelector } from "react-redux";

function SocialMedia() {
  const socialMedia = useSelector((state) => state.contact.contactDetails);

  const handleButtonClick = (value, ev) => {
    window.open(value, "_blank");
  };

  if (!socialMedia || Object.keys(socialMedia).length === 0) {
    return null;
  }

  return (
    <BasicCard>
      <Space
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          columnGap: 10,
        }}
      >
        {socialMedia.github && (
          <Button
            shape="circle"
            onClick={handleButtonClick.bind(this, socialMedia.github)}
            icon={<GitHubIcon />}
          />
        )}
        {socialMedia.linkedin && (
          <Button
            shape="circle"
            onClick={handleButtonClick.bind(this, socialMedia.linkedin)}
            icon={<LinkedInIcon />}
          />
        )}
        {socialMedia.twitter && (
          <Button
            shape="circle"
            onClick={handleButtonClick.bind(this, socialMedia.twitter)}
            icon={<TwitterIcon />}
          />
        )}
        {socialMedia.facebook && (
          <Button
            shape="circle"
            onClick={handleButtonClick.bind(this, socialMedia.facebook)}
            icon={<FacebookIcon />}
          />
        )}
        {socialMedia.instagram && (
          <Button
            shape="circle"
            onClick={handleButtonClick.bind(this, socialMedia.instagram)}
            icon={<InstagramIcon />}
          />
        )}
      </Space>
    </BasicCard>
  );
}

export default SocialMedia;
