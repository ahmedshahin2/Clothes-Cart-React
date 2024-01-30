import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { IoArrowBackSharp } from "react-icons/io5";

function InCart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div className=" flex items-center justify-center w-screen h-screen flex-col ">
        <h1 className=" mt-5 text-8xl mb-8 justify-center ">
          Your Cart Empaty
        </h1>
        <Link to={"/"}>
          <button class="inline-flex items-center mt-6 w-70px rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            <IoArrowBackSharp /> Back To Shopping
          </button>
        </Link>
      </div>
    );

  return (
    <>
      <div class="font-[sans-serif]">
        <div class="grid lg:grid-cols-3">
          <div class="lg:col-span-2 p-10 bg-white overflow-x-auto">
            <div class="flex border-b pb-4">
              <h3 class="text-xl font-extrabold text-[#333]">
                {totalUniqueItems} UniqueItems
              </h3>
              <h2 class="text-3xl font-extrabold text-[#333] flex-1">
                Shopping Cart
              </h2>
              <h3 class="text-xl font-extrabold text-[#333]">
                {totalItems} Items
              </h3>
            </div>
            <div>
              <table class="mt-6 w-full border-collapse divide-y">
                <thead class="whitespace-nowrap text-left">
                  <tr>
                    <th class="text-base text-[#333] p-4">Description</th>
                    <th class="text-base text-[#333] p-4">Quantity</th>
                    <th class="text-base text-[#333] p-4">Price</th>
                  </tr>
                </thead>
                <tbody class="whitespace-nowrap divide-y">
                  {/* ///////////////Map//////////////////////////////////////////////////////// */}
                  {items.map((item, index) => {
                    return (
                      <tr>
                        <td class="py-6 px-4" key={index}>
                          <div class="flex items-center gap-6 w-max">
                            <div class="h-36 shrink-0">
                              <img
                                src={item.img}
                                class="w-full h-full object-contain "
                                alt="Hoodie Pic"
                              />
                            </div>
                            <div>
                              <p class="text-md font-bold text-[#333]">
                                {item.title} Hoodie
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="py-6 px-4">
                          <div class="flex divide-x  w-max">
                            <div class="flex divide-x border w-max">
                              <button
                                type="button"
                                class="bg-gray-100 px-4 py-2 font-semibold"
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                              >
                                -
                              </button>
                              <h4
                                type="button"
                                class="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                              >
                                {item.quantity}
                              </h4>
                              <button
                                type="button"
                                class="bg-gray-800 text-white px-4 py-2 font-semibold"
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              class=" text-white px-4 py-2 font-semibold bg-red-500 ml-5"
                              onClick={() => removeItem(item.id)}
                            >
                              x
                            </button>
                          </div>
                        </td>
                        <td class="py-6 px-4">
                          <h4 class="text-md font-bold text-[#333]">
                            ${item.price}
                          </h4>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* //////////////////////////////////////////////shopping cart//////// */}
          <div class="bg-gray-50 p-10">
            <h3 class="text-xl font-extrabold text-[#333] border-b pb-4">
              Order Summary
            </h3>
            <ul class="text-[#333] divide-y mt-6">
              <li class="flex flex-wrap gap-4 text-md py-4">
                Subtotal <span class="ml-auto font-bold">${cartTotal}</span>
              </li>
              <li class="flex flex-wrap gap-4 text-md py-4">
                Shipping <span class="ml-auto font-bold">$5.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-md py-4">
                Tax <span class="ml-auto font-bold">$1.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span class="ml-auto">${cartTotal + 6}</span>
              </li>
            </ul>
            <button
              type="button"
              class="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button>
            <Link to={"/"}>
              <button
                type="button"
                class="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                BACK YO SHOPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InCart;
/*
  {/* //////////////////////////////////////////////////////////////// 
      {/* <table>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.img} style={{ height: "6rem" }} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Quantity({item.quantity})</td>
                <td>
                  <button
                    className=" mr-5"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button onClick={() => removeItem(item.id)}>
                    Remove Item{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <h2>Total price : {cartTotal} $</h2>
      </div>
      <div>
        <button onClick={() => emptyCart()}> Clear Cart </button>
      </div>
      {/* //////////////////////////////////////////////////////////////// */
/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */
/* //////////////////////////////////////////////////////////////// */
