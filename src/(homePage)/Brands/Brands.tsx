import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Brands() {
  // Variables
  const brands = [
    { name: "Zara", productsCount: 30 },
    { name: "Dell", productsCount: 5 },
    { name: "Nike", productsCount: 3 },
    { name: "Toshiba", productsCount: 8 },
    { name: "Samsung", productsCount: 5 },
    { name: "Mainden Gifts", productsCount: 5 },
  ];
  return (
    <div className="my-10">
      {/* Heading */}
      <h1 className="font-bold text-[16px] mb-6">Brands</h1>

      {/* Border */}
      <div className="border-[1px] text-[#757F95] mb-6 w-40"></div>

      {/* Radio group */}
      <RadioGroup>
        {brands.map((category) => (
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
