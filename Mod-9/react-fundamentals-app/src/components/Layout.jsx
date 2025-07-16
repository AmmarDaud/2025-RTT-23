const layoutStyles = {
    backgroundColor: "black",
    color: '#fff',
    fontFamily: 'sans-serif',
    padding: '15px',
}


function Layout({ children }) {
  return <div style={layoutStyles}>{children}</div>;
}

export default Layout;