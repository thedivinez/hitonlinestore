import Link from "next/link"
import Image from "next/image"
import { NextPage } from "next";
import { v4 as uuidv4 } from "uuid"
import Footer from "./components/Footer";
import { AiOutlineHeart } from "react-icons/ai";
import NewsLetter from "./components/NewsLetter";
import StoreHeader from "./components/StoreHeader";
import useEcommerceState, { Product } from "../hooks/useEcommerceState";

const Cart: NextPage = () => {
  const cart = useEcommerceState(state => state.cart);
  const totalCartPrice = useEcommerceState(state => state.totalCartPrice);
  const addToWishList = useEcommerceState((state) => state.addToWishList);
  const removeFromCart = useEcommerceState((state) => state.removeFromCart);
  const increaseQuantity = useEcommerceState((state) => state.increaseQuantity);
  const decreaseQuantity = useEcommerceState((state) => state.decreaseQuantity);

  const handleAddToCart = (product: Product) => {
    addToWishList(product)
    removeFromCart(product)
  }

  return (
    <section className="bg-grad min-h-screen flex flex-col justify-between">
      <StoreHeader />
      <section className="flex flex-col h-full w-full flex-1">
        <div className="container max-w-screen-xl mx-auto px-4 mt-10">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {cart.map((product) => (
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4 items-center" key={product.id}>
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <Image src={product.image} height={100} width={100} alt="Title" />
                        </div>
                        <figcaption className="ml-3">
                          <p className="text-secondary-dark">{product.name}</p>
                          <p className="mt-1 text-gray-400"> Color: Black</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="flex space-x-5 text-xl font-bold items-center">
                      <button className="rounded w-8 h-8 border border-secondary-dark" onClick={() => decreaseQuantity(product, "cart")}>-</button>
                      <span>{product.quantity}</span>
                      <button className="rounded w-8 h-8 border border-secondary-dark" onClick={() => increaseQuantity(product, "cart")}>+</button>
                    </div>
                    <div className="leading-5">
                      <p className="font-semibold not-italic">${Math.round((product.price * product.quantity! + Number.EPSILON) * 100) / 100}</p>
                      <small className="text-gray-400"> ${product.price} / per item </small>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button onClick={() => handleAddToCart(product)} className="px-3 py-2 inline-block text-secondary-dark bg-secondary-light/20 border border-transparent rounded-md hover:bg-blue-200">
                        <AiOutlineHeart className="h-6 w-6" />
                      </button>
                      <button onClick={() => removeFromCart(product)} className="px-4 py-2 inline-block text-primary-light bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <hr className="my-4" />
                <h6 className="font-bold">Free Delivery within 1-2 weeks</h6>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
              </article>

            </main>
            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  {cart.map((product) => {
                    return <li className="flex justify-between mb-1" key={uuidv4()}>
                      <span>{product.name} x {product.quantity}</span>
                      <span>${product.price * product.quantity!}</span>
                    </li>
                  })}

                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>${totalCartPrice}</span>
                  </li>
                </ul>
                <Link href="/checkout">
                  <button disabled={cart.length <= 0} className="px-4 py-3 mb-2 inline-block text-md w-full text-center font-medium text-white bg-secondary-light border border-transparent rounded-md hover:bg-secondary-dark" > PLACE ORDER </button>
                </Link>
                <Link href="/">
                  <button className="px-4 py-3 inline-block text-md w-full text-center font-medium text-secondary-dark bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  > BACK TO STORE </button>
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </section >
  )
}
export default Cart