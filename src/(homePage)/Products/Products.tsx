import axios from "axios"
import { useEffect, useState } from "react";
import { ShoppingBag } from 'lucide-react';


function Products() {
    // State
    const [products, setProducts] = useState<Products[] | null>(null)
    
    // Functions
    async function getProducts(){
        await axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
           setProducts(response.data)      
        })
        .then((error)=>{
            console.log(error);     
        })
    }

    // Effects
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">

        {products?.map((product)=><div key={product?.id} className="lg:w-54 w-full px-7 lg:px-0">
            {/*  Building image*/}
            <img src={product.image} alt={product.title} className="w-full lg:h-54 h-54" />

            {/* Product category */}
            <p className="font-semibold text-[17px] text-slate-950 my-4">{product.category}</p>

            <div className="flex justify-between text-white px-2 items-center">
                {/* Price */}
                <p className="text-pink-600 font-semibold">${product.price}</p>

                {/* Shopping bag */}
                <div className="bg-[#8C52FF] rounded-[21px] px-[9px] py-[10px]">
                    <ShoppingBag/>
                </div>
            </div>
        </div>)}
      
    </div>
  )
}

export default Products
