import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  const nome = "Wisner";
  const ano = 2023;
  return (
    <div>
      <Header />
      <Outlet />
      <Footer nome={nome} ano={ano} />
    </div>
  );
}

export default App;
