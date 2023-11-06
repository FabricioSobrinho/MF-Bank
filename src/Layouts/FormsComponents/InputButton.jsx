// eslint-disable-next-line react/prop-types
function InputButton({
  text,
  widthButton,
  heightButton,
  handleClick,
  route,
}) {
  const styles = {
    height: `${heightButton}rem`,
    width: `${widthButton}rem`,
    margin: `0.8rem`,
    background: ` #2d3136`,
    color: `#f0f8ff`,
    borderRadius: `0.3125rem`,
    border: `none`,
    outline: `none`,
    boxShadow: `0px 0px 40px -15px #000000`,
    fontSize: ` 1.7rem`,
    textTransform: `uppercase`,
    fontStyle: `normal`,
    fontWeight: `700`,
    lineHeight: `normal`,
    transition: `0.4s`,

    cursor: "pointer",
  };
  return (
    <a href={route}>
      <input type="button" style={styles} onClick={handleClick} value={text} />
    </a>
  );
}

export default InputButton;
