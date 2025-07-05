import "./App.css";
import AppleNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <AppleNavbar />
      <div className="pt-16">
        <h1 className="text-4xl font-bold text-center mt-20">Apple Clone</h1>
        <p className="text-center mt-4">If you can see this, the app is working!</p>
      </div>
    </>
  );
}

export default App;
