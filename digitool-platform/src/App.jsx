import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";

const getModels = async () => {
  const res = await fetch("/models.json");
};

const modelPromise = getModels();

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Models modelPromise={modelPromise} />
      <Footer />
    </>
  );
}

export default App;