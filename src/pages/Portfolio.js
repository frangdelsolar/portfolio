import { Space, Row, Col } from "antd";
import BasicCard from "../components/UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { portfolioSvc } from "../services/generic-service";
import { useEffect } from "react";
import { portfolioActions } from "../store/portfolio-slice";
import PortfolioItem from "../components/PortfolioItem";
import { uiActions } from "../store/ui-slice";

function PortfolioPage() {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio.items);

  useEffect(() => {
    dispatch(portfolioSvc.getAll());
  }, [dispatch]);

  const handlePostClick = (workId, event) => {
    dispatch(portfolioActions.setSelectedId(workId));
    const modalData = {
      content: <PortfolioItem />,
    };
    dispatch(uiActions.openModal(modalData));
  };

  if (portfolio.length <= 0) return <BasicCard>No works to display</BasicCard>;

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <BasicCard title="Portfolio">
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "1rem",
            columnGap: "22px",
            rowGap: "22px",
          }}
        >
          {portfolio.map((work) => (
            <Col span={8}>
              <BasicCard
                key={work.id}
                title={work.title}
                image={{ path: work.image.thumbnail_url, title: work.title }}
                hoverable={true}
                onClick={handlePostClick.bind(this, work.id)}
              >
                <p style={{ padding: 0, marginTop: 0 }}>
                  <small>{new Date().toLocaleDateString()}</small>
                </p>
                {work.preview}
              </BasicCard>
            </Col>
          ))}
        </Row>
      </BasicCard>
    </Space>
  );
}

export default PortfolioPage;
