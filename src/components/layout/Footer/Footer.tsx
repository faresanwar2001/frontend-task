import { ArrowRight } from "lucide-react"

function Footer() {
    // Variables
    const LinksFooter=[
        {href:'#' , label:"About us"},
        {href:'#' , label:"New products"},
        {href:'#' , label:"Recommmended"},
        {href:'#' , label:"Brands"},
        {href:'#' , label:"Delivery"},
        {href:'#' , label:"Policy"},
    ]
  return (
    <footer className='bg-pink-200 py-20 flex justify-center items-center flex-col space-y-5'>
        {/* Links */}
      <ul className="flex lg:flex-row flex-col lg:gap-22 gap-5 text-center mb-12 ">
        {LinksFooter.map((link, index) => (
          <li className="text-slate-900 font-bold" key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Discount */}
      <p className='text-2xl font-bold'>Get <span className='text-pink-600'>20% </span>Off Discount Coupon</p>

      {/* Subscribe form */}
      <form
          className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-10"
        >
          <div className="relative w-full">
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-4 pe-[120px] rounded-[30px] text-gray-700 font-semibold focus:outline-none bg-white"
            />

            {/* Button */}
            <button
              type="submit"
              className="flex items-center gap-1 absolute px-5 py-4 top-[2px] -translate-y-[2px] bg-pink-500 hover:bg-pink-800 text-white rounded-full rtl:left-0 ltr:right-0"
            >
              Subscribe

              {/* Arrow icon */}
              <ArrowRight />
            </button>
          </div>
        </form>

    </footer>
  )
}

export default Footer
