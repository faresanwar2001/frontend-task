import { Brands } from "./(homePage)/Brands/Brands";
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

      <div className="flex flex-col lg:flex-row container mx-auto gap-4 py-10">
        {/* Category filter */}
        <div className="w-full lg:w-1/4">
          <CategoryFilter />
          <Brands/>
        </div>

        {/* Products */}
        <div className="w-full lg:w-3/4">
          <Products />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
