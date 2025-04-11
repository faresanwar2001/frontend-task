import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CategoryFilter() {
  // Variables
  const categories = [
    { name: "Clothes", productsCount: 10 },
    { name: "Books", productsCount: 15 },
    { name: "Sports", productsCount: 20 },
    { name: "Electronics", productsCount: 30 },
    { name: "Gifts", productsCount: 5 },
    { name: "Gifts", productsCount: 5 },
  ];
  return (
    <div>
      {/* Heading */}
      <h1 className="font-bold text-[16px] mb-6">Category</h1>

      {/* Border */}
      <div className="border-[1px] text-[#757F95] mb-6 w-40"></div>

      {/* Radio group */}
      <RadioGroup>
        {categories.map((category) => (
           <div className="flex items-center space-x-2">

           {/* Radio group item */}
           <RadioGroupItem value="default" id="r1" className="text-gray-500" />

           {/* Label */}
           <Label htmlFor="r1" className="font-normal text-[14px] text-gray-600">{category.name}</Label>

           {/* Product count */}
           <span className="text-gray-600 text-sm">
             ({category.productsCount})
           </span>
         </div>
        ))}
      </RadioGroup>
    </div>
  );
}
