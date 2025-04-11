import brand_1 from "@/assets/brand_1.png";
import brand_2 from "@/assets/brand_2.png";
import brand_3 from "@/assets/brand_3.png";
import brand_4 from "@/assets/brand_4.png";
import brand_5 from "@/assets/brand_5.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
function Brands() {
  const images = [
    { img: brand_1 },
    { img: brand_2 },
    { img: brand_3 },
    { img: brand_4 },
    { img: brand_5 },
  ];
  return (
    <div className="bg-pink-100 rounded-2xl px-6 py-9 container text-center mx-auto my-20">
      {/* Heading */}
      <h3 className="text-center mt-5 mb-7 font-bold lg:text-3xl text-xl">
        Trusted by over <span className="text-pink-600">4.5k+ </span>companies
      </h3>

      <div className="flex container lg:justify-between items-center">
        {/* Building image */}
        {images.map((image) => (
          <div className="">
            <img src={image.img} className="lg:w-44 w-25" />
          </div>
        ))}
      </div>

      <Button className="text-white bg-pink-500 rounded-md px-4 py-2 text-center mt-4">
        View All Brands
        <ArrowRight/>
      </Button>
    </div>
  );
}

export default Brands;
