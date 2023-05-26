import { Card } from "antd";

const { Meta } = Card;

export default function BasicCard(props) {
  const actions = props.actions;
  const image = props.image;
  const hoverable = props.hoverable;
  return (
    <Card
      title={props.title && !image && props.title}
      cover={image && <img alt={image.title} src={image.path} />}
      sx={{ minWidth: 250 }}
      actions={actions && actions}
      hoverable={hoverable && hoverable}
      onClick={props.onClick}
    >
      {props.image && <Meta title={props.title} />}
      {props.children}
    </Card>
  );
}
