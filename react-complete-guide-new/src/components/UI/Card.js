import "./Card.css";

const card = (props) => {
  let classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default card;