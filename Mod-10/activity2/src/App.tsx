
import RegistrationForm from "./Components/RegistrationForm";

function App() {
  return (
    
    <div className="min-h-screen bg-blue gray-400 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-red-300 ">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;