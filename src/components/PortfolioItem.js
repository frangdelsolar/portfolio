import { GlobalOutlined } from "@ant-design/icons";
import { ProjectOutlined } from "@ant-design/icons";
import { LinkOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";
import { Html5Outlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { portfolioSvc } from "../services/generic-service";
import { Space, Col, Row } from "antd";
import TagsBar from "./TagsBar";

function PortfolioItem() {
  const dispatch = useDispatch();
  const workId = useSelector((state) => state.portfolio.selectedId);
  const work = useSelector((state) => state.portfolio.current);

  let image = {
    path: "https://via.placeholder.com/150",
    title: "placeholder",
  };

  if (work && work.image) {
    image = {
      path: work.image.image_url,
      title: work.title,
    };
  }

  let listItems = [];

  if (work) {
    listItems = [
      {
        key: "Client",
        value: work.client || "N/A",
        icon: <GlobalOutlined />,
      },
      {
        key: "Project",
        value: work.project || "N/A",
        icon: <ProjectOutlined />,
      },
      {
        key: "Url",
        value: work.url ? (
          <a href={work.url} target="_blank" rel="noreferrer">
            {work.url}
          </a>
        ) : (
          "N/A"
        ),
        icon: <LinkOutlined />,
      },
      {
        key: "Start date",
        value: new Date(work.start_date).getFullYear() || "N/A",
        icon: <CalendarOutlined />,
      },
      {
        key: "Technologies",
        value: work.tags ? <TagsBar tags={work.tags} /> : "N/A",
        icon: <Html5Outlined />,
      },
      {
        key: "Repository",
        value: work.repository ? (
          <a href={work.repository} target="_blank" rel="noreferrer">
            {work.repository}
          </a>
        ) : (
          "N/A"
        ),
        icon: <GithubOutlined />,
      },
    ];
  }

  useEffect(() => {
    dispatch(portfolioSvc.getById(workId));
  }, [dispatch, workId]);

  if (!work) {
    return <p>Loading</p>;
  }

  return (
    <Space direction="vertical" style={{ marginTop: "2rem" }}>
      <Row>
        <img src={image.path} alt={image.title} style={{ width: "100%" }} />
      </Row>
      <Row>
        <h1>{work.title}</h1>
      </Row>
      <Row>
        <small>{work.preview}</small>
      </Row>

      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1rem",
          margin: "1rem",
        }}
      >
        {listItems.map((item) => (
          <Col span={12}>
            <Row key={item.key}>
              <Col
                span={4}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "left",
                  fontSize: "1.5rem",
                }}
              >
                {item.icon}
              </Col>
              <Col
                span={19}
                style={{
                  display: "block",
                  alignItems: "start",
                  justifyContent: "left",
                }}
              >
                <Row>{item.key}</Row>
                <Row
                  style={{
                    fontSize: 16,
                    display: "flex",
                    flexWrap: "wrap",
                    inlineSize: "300px",
                  }}
                >
                  <b>{item.value}</b>
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>

      <Row>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: work.content }}
        ></div>
      </Row>
    </Space>
  );
}

export default PortfolioItem;
