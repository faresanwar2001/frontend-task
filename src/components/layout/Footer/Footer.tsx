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
    <footer className='bg-pink-300 py-20 flex justify-center items-center flex-col space-y-5'>
        {/* Links */}
      <ul className="flex lg:flex-row flex-col lg:gap-10 gap-5 text-center">
        {LinksFooter.map((link, index) => (
          <li className="text-[16px] font-semibold" key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Discount */}
      <p className='text-2xl font-bold'>Get <span className='text-pink-600'>20% </span>Off Discount Coupon</p>
    </footer>
  )
}

export default Footer
