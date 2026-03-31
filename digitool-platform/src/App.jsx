import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Models />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;