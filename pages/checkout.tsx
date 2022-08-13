import Link from "next/link"
import Image from "next/image"
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid"
import Footer from "./components/Footer";
import { GoChevronRight } from "react-icons/go"
import NewsLetter from "./components/NewsLetter";
import StoreHeader from "./components/StoreHeader";
import useEcommerceState from "../hooks/useEcommerceState";

function Checkout() {
  const cart = useEcommerceState((state) => state.cart);
  const totalCartPrice = useEcommerceState(state => state.totalCartPrice);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    toast.success("Order Received")
  }

  return (
    <section className="bg-grad min-h-screen flex flex-col justify-between">
      <StoreHeader />
      <section className="py-5 sm:py-7 bg-secondary-dark">
        <div className="max-w-screen-xl mx-auto text-gray-300">
          <ol className="inline-flex flex-wrap space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <Link href="/"><span className="hover:text-blue-600 cursor-pointer">Store</span></Link>
              <GoChevronRight className="ml-3" />
            </li>
            <li className="inline-flex items-center" aria-current="page">
              <Link href="/cart"><span className="hover:text-blue-600 cursor-pointer">Cart</span></Link>
              <GoChevronRight className="ml-3" />
            </li>
            <li className="inline-flex items-center"> Checkout </li>
          </ol>
        </div>
      </section>
      <main className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
          <form className="md:w-2/3" onSubmit={handleSubmit}>
            <article className="bg-secondary-dark shadow-sm rounded p-4 lg:p-6 mb-5 text-white">
              <h2 className="text-xl font-semibold mb-5">Checkout</h2>
              <div className="grid grid-cols-2 gap-x-3">
                <div className="mb-4">
                  <label className="block mb-1"> First name </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>

                <div className="mb-4">
                  <label className="block mb-1"> Last name </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-x-3">
                <div className="mb-4">
                  <label className="block mb-1"> Phone </label>
                  <div className="flex  w-full">
                    <input className="appearance-none w-24 border border-secondary-light bg-secondary-dark rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" placeholder="Code" />
                    <input className="appearance-none flex-1 border border-secondary-light bg-secondary-dark rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" placeholder="Type phone" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-1"> Email </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="email" placeholder="Type here" />
                </div>
              </div>

              <hr className="my-4 bg-secondary-light" />

              <h2 className="text-xl font-semibold mb-5">Shipping information</h2>

              <div className="grid md:grid-cols-3 gap-x-3">
                <div className="mb-4 md:col-span-2">
                  <label className="block mb-1"> Address* </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>

                <div className="mb-4 md:col-span-1">
                  <label className="block mb-1"> City* </label>
                  <div className="relative">
                    <select className="block appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                      <option>Select here</option>
                      <option>Second option</option>
                      <option>Third option</option>
                    </select>
                    <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                      <svg width="22" height="22" className="fill-current" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                    </i>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-x-3">
                <div className="mb-4 md:col-span-1">
                  <label className="block mb-1"> House </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>

                <div className="mb-4 md:col-span-1">
                  <label className="block mb-1"> Building </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>

                <div className="mb-4 md:col-span-1">
                  <label className="block mb-1"> ZIP code </label>
                  <input className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" placeholder="Type here" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1"> Other info </label>
                <textarea placeholder="Type your wishes" className="appearance-none border border-secondary-light bg-secondary-dark rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" />
              </div>

              <div className="flex justify-end space-x-2">
                <Link href="/cart">
                  <button className="px-5 py-2 inline-block text-gray-700 bg-gray-300 shadow-sm border border-secondary-light rounded-md">  Back  </button>
                </Link>
                <button type="submit" className="px-5 py-2 inline-block text-white bg-secondary-light border border-transparent rounded-md hover:bg-secondary-light/80"> Continue </button>
              </div>
            </article>

          </form>
          <aside className="md:w-1/3">
            <article className="text-gray-200 max-w-28">
              <h2 className="text-lg font-semibold mb-3">Summary</h2>
              <ul>
                {cart.map((product) => {
                  return <li className="flex justify-between mb-1" key={uuidv4()}>
                    <span>{product.name} x {product.quantity!}</span>
                    <span>${product.price * product.quantity!}</span>
                  </li>
                })}
                <li className="border-t flex justify-between mt-3 pt-3">
                  <span>Total price:</span>
                  <span className="text-white font-bold">${totalCartPrice}</span>
                </li>
              </ul>
              <hr className="my-4" />
              <h2 className="text-lg font-semibold mb-3">Items in cart</h2>
              {cart.map((product) => (
                <figure className="flex items-center mb-4 leading-5" key={product.id}>
                  <div>
                    <div className="block relative w-20 h-20 rounded p-1 border border-secondary-light">
                      <Image width="70" height="70" src={product.image} alt="Title" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-secondary-dark rounded-full"> {product.quantity}</span>
                    </div>
                  </div>
                  <figcaption className="ml-3">
                    <p> {product.name} </p>
                    <p className="mt-1 text-gray-400"> Total: ${Math.round((product.price * product.quantity! + Number.EPSILON) * 100) / 100}</p>
                  </figcaption>
                </figure>
              ))}

            </article>
          </aside>
        </div>
      </main>
      <NewsLetter />
      <Footer />
    </section>
  )
}

export default Checkout