import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./context";

function App() {
  const { currentWidth } = useGlobalContext();

  return (
    <>
      <Header />
      <Section />
      {currentWidth > 1000 && <Lightbox />}
      <Sidebar />
    </>
  );
}

export default App;
