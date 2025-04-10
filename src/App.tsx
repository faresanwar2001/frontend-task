import Categories from "./(homePage)/Categories/Categories";
import Products from "./(homePage)/Products/Products";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";

function App() {
  return <>
  {/* Header */}
  <Header/>

  <Categories/>

  <Products/>

  {/* Footer */}
  <Footer/>
  </>;
}

export default App;
