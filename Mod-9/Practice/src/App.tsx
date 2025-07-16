// import './App.css'
import {AlertBox} from "./components/AlertBox";
import {UserProfileCard} from "./components/UserProfileCard";
import {ProductDisplay} from "./components/ProductDisplay";

function App() {
const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://th.bing.com/th/id/OIP.ttSME0VWqw9y1eDPUMrXOgHaI3?w=106&h=104&c=7&bgcl=27e1ef&r=0&o=6&dpr=1.5&pid=13.1'
};
 const product = {
    id: '1',
    name: 'Signature Sleep Adjustable bed',
    price: 149.99,
    description: 'Logged out of VS Code, logged into nap mode',
    imageUrl: 'https://i5.walmartimages.com/asr/f0a6d0cd-69dd-43e4-9859-69cc545870ed_1.aac87f7665caef70673e0b7c937a2f81.jpeg',
    inStock: true
  };

  return (
    <>
     <h1>Components Library</h1>

     <AlertBox type="success" message="Hello World"/>
     <AlertBox type="error" message="Hello World"/>
     <AlertBox type="info" message="Hello World"/>
     <AlertBox type="warning" message="Hello World"/>

<div className="flex flex-col items-center mt-6 mb-4">
  <div className="w-full max-w-md">
  <AlertBox
    type="success"
    message="Your profile has been updated successfully!"
    onClose={() => alert('Alert closed')}
  >
    <p className="text-sm">You can now continue using the application.</p>
  </AlertBox>

  <UserProfileCard
    user={user}
    showEmail={true}
    showRole={true}
    onEdit={(userId) => alert(`Editing user ${userId}`)}
  >
    <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
  </UserProfileCard>
</div>
</div>

      {/* ProductDisplay Usage */}
      <div className="flex justify-center">
      <ProductDisplay
      
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">
    Free shipping available
  </div>
      </ProductDisplay>
      </div>
    </>
  )
}

export default App