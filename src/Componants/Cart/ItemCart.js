import React from "react";
import { useCart } from "react-use-cart";
import { FiShoppingCart } from "react-icons/fi";

function ItemCart(props) {
  const { addItem } = useCart();
  return (
    <div class=" bg-black flex justify-center aitems-center ">
      <section class=" bg-black flex justify-center aitems-center">
        <div class="bg-black flex justify-center aitems-center ">
          {/*  flex justify-center aitems-center flex-row */}
          <article class=" rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <div class="relative flex items-end overflow-hidden rounded-xl ">
              {/*  */}
              <div
                style={{
                  backgroundImage: `url(${props.img})`,
                  width: "200px",
                  height: "200px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  // backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700"> {props.title}</h2>
              <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

              <div class="mt-3 flex items-end justify-between">
                <p class="text-lg font-bold text-blue-500">${props.price}</p>

                <div
                  class=" space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 cursor-pointer"
                  onClick={() => addItem(props.item)}
                >
                  <button
                    class="text-sm inline-flex items-center gap-1"
                    // onClick={() => addItem(props.item)}
                  >
                    <FiShoppingCart />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>{" "}
    </div>
  );
}

export default ItemCart;
