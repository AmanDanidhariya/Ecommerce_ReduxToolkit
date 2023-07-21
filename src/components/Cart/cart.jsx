import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

const cart = ({ openModel, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Its a simple dialog.</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4 ">
                      <div>
                        <img
                          className="h-[125px] rounded"
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
                Total Price of All Product :{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </>
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
          {/* <DialogFooter></DialogFooter> */}
        </Dialog>
      )}
    </div>
  );
};

export default cart;
