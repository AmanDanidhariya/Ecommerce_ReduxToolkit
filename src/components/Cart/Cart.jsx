import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlices";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Cart = ({ openModel, setOpen }) => {
  // const [modelClose, setModelClose] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  
  // const handleClose = () =>{
  //   console.log('setOpen', setOpen);
  //   setOpen(false);
  // }

  const dispatch = useDispatch();
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <Dialog
            className="border-0 outline-0 max-h-[80%] overflow-auto rounded-none relative"
            open={openModel}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader className="-z-50 w-[60%]">Shopping Bag</DialogHeader>
            {/* closeButton start */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="filled"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 absolute top-2 right-2  cursor-pointer z-50"
              //onclick model value change to false 
              onClick={handleClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
    
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 absolute top-2 right-2  cursor-pointer"
              onClick={()=>setOpen(false)}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg> */}

            {/* closeButton End */}
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="flex flex-col items-start"></div>
                        <h4 className="text-black text-base font-bold tracking-normal leading-none pt-2">
                          {item.name}
                        </h4>
                        <div className="max-w-xs">
                          <p className="text-black text-xs tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div className="text-black text-sm tracking-normal leading-none pt-2">
                        <p>
                          Selected Size :{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p>
                          Selected Color :{" "}
                          <span
                            className="ml-2 rounded-full px-3"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p>
                          Amount : <span className="ml-2">{item.amount}</span>
                        </p>
                        <p>
                          Single Item Price :{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p>
                          Total Item Price :{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove From The Cart"
                            placement="bottom"
                          >
                            <Button
                              size="sm"
                              color="red"
                              onClick={() => {
                                dispatch(removeFromCart(item));
                              }}
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base tracking-normal leading-none pt-2">
                Total Price of All Product :
                <span className="ml-2 font-bold text-2xl">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </div>
      ) : (
        <Dialog
          className="border-0 outline-0"
          open={openModel}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody divider>
            <div>
              <h1 className="text-black text-3xl font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base tracking-normal leading-none">
                Add some products
              </p>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
