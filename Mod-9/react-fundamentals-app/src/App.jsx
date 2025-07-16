// import './App.css'
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";

function App() {
  const handleClick = () => console.log("searching....");

  function formatUserName(user) {
    return user.firstName + " " + user.lastName;
  }


  const user = {
    userName: "Alex",
    bio: "From Chicago",
    image: "https://picsum.photos/200/300",
  };

  const isLoggedIn = true;

  return (
    <Layout>
      {/* Navbar  */}
      <NavBar />

      {/* Search  */}
      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" placeholder="Search" />
        <button onClick={handleClick}>Search</button>
      </div>

      {/* Main Section  */}
      <main>
        <h1>React Fundamentals App</h1>
        <h2>Welcome {formatUserName(user)}</h2>
        <p>User is {isLoggedIn ? "currently" : "not"} logged in.</p>

        <h3>
          {user.firstName} {user.lastName} undefined age:{user.age}
        </h3>

        {/* Section 1  */}
        <section>
          <h2>Latest Products</h2>

          <p>Checkout our new products</p>
        </section>

        {/* Section 2  */}
        <section>
          <h2>Register for a discount</h2>
          <a href="#">Click here</a>"
        </section>
      </main>

      {/* Footer  */}
      <Footer />
      <hr />
      <UserProfile
        userName="Ammar "
        bio="From Ohio"
        image="https://picsum.photos/200/300"
      />
      <UserProfile
        userName="Dora"
        bio="From Illinious"
        image="https://picsum.photos/200/"
      />

      <UserProfile userName={user.userName} bio={user.bio} image={user.image} />
    </Layout>
  );
}

export default App;