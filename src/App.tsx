import Brands from "./(homePage)/Brands/Brands";
import { BrandsFilter } from "./(homePage)/BrandsFilter/BrandsFilter";
import Categories from "./(homePage)/Categories/Categories";
import { CategoryFilter } from "./(homePage)/CategoryFilter/CategoryFilter";
import Products from "./(homePage)/Products/Products";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Categories */}
      <Categories />

      <div className="lg:flex flex-col lg:flex-row container mx-auto lg:gap-x-10 gap-x-10 py-10">
        {/* Category filter */}
        <div className=" lg:w-[25%] lg:block hidden">
          <CategoryFilter />
          <BrandsFilter/>
        </div>

        {/* Products */}
        <div className="lg:w-full w-full ">
          <Products />
        </div>
      </div>

      {/* Brands */}
      <Brands/>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
