import { Trophy } from "lucide-react";
import { Cable } from "lucide-react";
import { Shirt } from "lucide-react";
import { BookText } from "lucide-react";
import { Gift } from "lucide-react";

function Categories() {
  // Variables
  const categories = [
    { name: "Clothes", productsCount: 10, icon: <Shirt /> },
    { name: "Books", productsCount: 15, icon: <BookText /> },
    { name: "Sports", productsCount: 20, icon: <Trophy /> },
    { name: "Electronics", productsCount: 30, icon: <Cable /> },
    { name: "Gifts", productsCount: 5, icon: <Gift /> },
    { name: "Gifts", productsCount: 5, icon: <Gift /> },
  ];

  return (
    <div className="flex lg:flex-row flex-col px-7 lg:px-0 lg:gap-6 gap-4 mx-auto my-6 container overflow-hidden">
      {categories?.map((category) => (
        <div key={category.name} className="basis-1/5">
          <div className="bg-pink-200 py-4 rounded-[20px] flex items-center justify-evenly lg:w-full">
            <div className="rounded-[45px] bg-pink-400 p-5 text-white">
              {/* Category icon */}
              {category.icon}
            </div>
            <div>
              {/* Category name */}
              <h5 className="text-slate-900 font-[600] text-[16px] capitalize">
                {category.name}
              </h5>

              {/* Products count */}
              <p className="text-slate-900 font-[400] text-[16px]">
                {category?.productsCount} items
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
