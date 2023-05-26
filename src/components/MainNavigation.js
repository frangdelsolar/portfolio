import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import BasicCard from "./UI/Card";

const items = [
  {
    label: (
      <Link to="/" end="true">
        Resume
      </Link>
    ),
    key: "resume",
    icon: <AccountBoxTwoToneIcon />,
  },
  {
    label: <Link to="/works">Works</Link>,
    key: "works",
    icon: <CollectionsTwoToneIcon />,
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: "blog",
    icon: <BookTwoToneIcon />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
    icon: <ContactPhoneTwoToneIcon />,
  },
];

function MainNavigation() {
  const [current, setCurrent] = useState("resume");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const key = path === "/" ? "resume" : path.slice(1);
    setCurrent(key);
  }, [current]);

  return (
    <BasicCard>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </BasicCard>
  );
}

export default MainNavigation;
