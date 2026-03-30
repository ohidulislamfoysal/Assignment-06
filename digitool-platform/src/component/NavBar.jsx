const NavBar = () => {
  return (
    <div className="navbar container mx-auto justify-around ">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl ">
          <h1 className="text-4xl pb-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digitools</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className=" btn border-none bg-white relative "><img src="assets\products\shopping-cart.png"/> <span id="cart-count" className="absolute   top-1/5 left-6 flex items-center justify-center text-[10px] w-3 h-3 text-white bg-red-600 rounded-full">0</span></a>
        <a className="btn border-none bg-white">login</a>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;