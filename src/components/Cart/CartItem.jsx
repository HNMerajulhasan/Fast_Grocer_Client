import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { AiFillDelete } from "react-icons/ai";


// This is a cartItem section

const CartItem = ({ cart }) => {
  const { handleDecrement, handleIncrement, handleRemove } = useContext(StateContext);
  const subTotal = Number(cart?.qunatity) * Number(cart?.price);

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-3 gap-x-5 w-full">

          <div className="flex items-center">
            <div className="">
              <img
                src={cart?.imageUrl}
                className="w-20 h-20 object-contain mr-3" alt=""
              />
            </div>
            <div>
              <p className="font-semibold text-sm">{cart?.name}</p>
              <p className="text-slate-600 text-[12px]">{cart?.bundle}</p>
              <p className="text-slate-600 text-[12px]">Price: {cart?.price} ৳</p>
            </div>
          </div>
          <div className="rounded-[2px] mx-auto my-auto">
            <span className="mr-2 text-sm">{" "}Qty:</span>
            <span
              onClick={(e) => handleDecrement(e, cart?._id)}
              className=" hover:bg-slate-200 cursor-pointer bg-slate-100 border-[1px] border-slate-200 px-2 rounded-l-full text-sm">-</span>
            <span className=" bg-slate-100 border-[1px] border-slate-200 px-3 text-sm">
              {cart?.qunatity}
            </span>
            <span
              onClick={(e) => handleIncrement(e, cart?._id)}
              className="hover:bg-slate-200  cursor-pointer bg-slate-100 border-[1px] border-slate-200 px-2 rounded-r-full text-sm">
              +
            </span>
          </div>

          <p className="text-slate-600 text-sm text-center my-auto font-semibold">SubTotal: {subTotal} ৳</p>
        </div>
        <div>
          <div
            onClick={(e) => handleRemove(e, cart?._id)}
            className="p-2 text-2xl bg-red-100  rounded-full cursor-pointer hover:bg-red-200 mr-5"
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
