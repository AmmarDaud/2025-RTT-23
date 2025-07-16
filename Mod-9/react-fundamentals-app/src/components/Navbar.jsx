function NavBar() {
  const navStyles = {
    margin: "20px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <nav style={navStyles}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
}
export default NavBar;