const CardBlue = props => {
  const classes = 'feature-card bg-blue-feature-card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CardBlue;
