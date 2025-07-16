// import { ProductDetails } from "./Product";


function UserProfile({userName, bio, image}) {
    
  return (
    <>
      <div class="profile">
        <img src={image} alt="User Avatar" />
        <h2>User Profile</h2>
        
        <h3>{userName}</h3>
        <p>Bio: {bio}</p>
        <br />
      </div>
     
    </>
  );
}

export default UserProfile;