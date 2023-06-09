import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import UseTitle from "../../hooks/UseTitle";
import CartItem from "./CartItem";

// This is a cart section

const Cart = () => {
  UseTitle('Cart')
  const { isAdmin, isDeliveryman, cart, totalPrice, clearCart, totalQuantity } = useContext(StateContext);

  return (
    <div className="mt-6 sm:mt-[50px] m-5  md:m-10">
      {cart.length === 0 && (
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-3xl font-bold text-red-500 ">
            No Item In Your Bag
          </p>
        </div>
      )}

      {
        cart.length !== 0 &&
        <div className="flex justify-between mb-5">
          <h2 className="text-2xl font-semibold text-slate-700">My Cart:</h2>
          <div className="flex items-center gap-4">
            <p className="underline text-slate-700 text-lg font-semibold">{totalQuantity} Item</p>
            <button onClick={clearCart} className="btn btn-sm bg-red-500 border-none"> Clear Cart </button>
          </div>
        </div>
      }

      <div className="flex flex-col">
        {cart.length > 0 && cart.length && (
          <div>
            <div className="flex flex-col gap-5">
              {cart?.map((cart) => (<CartItem cart={cart} key={cart._id} />))}
            </div>

            <div className="divider"></div>

            <div className="p-2 sm:p-1">
              <div className="flex relative items-end flex-col gap-2 justify-end">
                <button className="text-xl  font-bold"> Total : ৳{totalPrice} </button>
                <Link to="/place-order">
                  <button
                    className={isAdmin || isDeliveryman ?
                      "hidden bg-[#84b840] hover:bg-[#6a9333] text-white font-semibold px-3 py-1 rounded-md duration-300" :
                      "bg-[#84b840] hover:bg-[#6a9333] text-white font-semibold px-3 py-1 rounded-md duration-300"
                    }>
                    Place Order
                  </button>
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
