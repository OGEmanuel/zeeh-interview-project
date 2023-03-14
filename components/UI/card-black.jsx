const CardBlack = props => {
  const classes =
    'feature-card bg-black-feature-card h-full ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CardBlack;
