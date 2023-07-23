import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
          Welcome ALL
        </h3>
      </div>
      <div className="flex justify-around items-center font-bold cursor-pointer">
        <div>
          <img className="h-28 w-full " src={logo} alt="brandLogo"></img>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button className="font-inter text-base font-bold tracking-normal leading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-inter text-base font-bold tracking-normal leading-none text-center mr-2 mt-1">
              Wish List
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
          {/* if, there is no totalAmount , showing a bag */}
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            )}

            <p className="font-inter text-base font-bold tracking-normal leading-none text-center mr-2 mt-1">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModel={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 flex w-full justify-around">
        <div className="text-white font-inter text-base font-bold tracking-normal leading-none text-center mr-2 mt-1">
          50% Off
        </div>
        <div className="text-white font-inter text-base font-bold tracking-normal leading-none text-center mr-2 mt-1">
          Free shipping and returns
        </div>
        <div className="text-white font-inter text-base font-bold tracking-normal leading-none text-center mr-2 mt-1">
          Different payment method
        </div>
      </div>
    </>
  );
};

export default Navbar;
