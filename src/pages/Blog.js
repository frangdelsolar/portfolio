import { Space, Col, Row } from "antd";
import BasicCard from "../components/UI/Card";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postSvc } from "../services/generic-service";
import { postActions } from "../store/post-slice";

function BlogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postSvc.getAll());
  }, [dispatch]);

  const posts = useSelector((state) => state.post.items);

  const handlePostClick = (postId, event) => {
    dispatch(postActions.setSelectedId(postId));
    const modalData = {
      content: <Post />,
    };
    dispatch(uiActions.openModal(modalData));
  };

  if (posts.length <= 0) return <BasicCard>No posts to display</BasicCard>;

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <BasicCard title="Blog">
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
          {posts.map((post) => (
            <Col span={8}>
              <BasicCard
                key={post.id}
                title={post.title}
                image={{ path: post.image.image_url, title: post.title }}
                hoverable={true}
                onClick={handlePostClick.bind(this, post.id)}
              >
                <p style={{ padding: 0, marginTop: 0 }}>
                  <small>{new Date().toLocaleDateString()}</small>
                </p>
                {post.preview}
              </BasicCard>
            </Col>
          ))}
        </Row>
      </BasicCard>
    </Space>
  );
}

export default BlogPage;
