import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { postSvc } from "../services/generic-service";
import { Space, Row, Col } from "antd";
import TagsBar from "./TagsBar";

function Post() {
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.post.selectedId);
  const post = useSelector((state) => state.post.current);

  let image = {
    path: "https://picsum.photos/300/200",
    title: "Image",
  };

  if (post && post.image) {
    image = {
      path: post.image.image_url,
      title: post.title,
    };
  }

  useEffect(() => {
    dispatch(postSvc.getById(postId));
  }, [dispatch, postId]);

  if (!post) {
    return <p>Loading</p>;
  }

  return (
    <Space direction="vertical" style={{ marginTop: "2rem" }}>
      <Row>
        <img src={image.path} alt={image.title} style={{ width: "100%" }} />
      </Row>
      <Row>
        <h1>{post.title}</h1>
      </Row>
      <Row>
        <b>{post.category.name}</b>&emsp;
        <TagsBar tags={post.tags} />
      </Row>
      <Row>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </Row>
    </Space>
  );
}

export default Post;
