const Header = (props) => {
  return (
    <div>
      <h1>
        functional component {props.children} {props.name} - {props.player}
      </h1>
    </div>
  );
};
export default Header;
