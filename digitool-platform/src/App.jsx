import { useState } from "react";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cartCount={cart.length} />
      <Banner />
      <Models cart={cart} setCart={setCart} />
      <Steps/>
      <Pricing/>
      <Footer />
      <ToastContainer />

    </>
  );
}

export default App;