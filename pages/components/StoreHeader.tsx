import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

function StoreHeader() {
  return (
    <header className="border-b bg-white py-3">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <Image src="/logos/hit-logo.png" objectFit="cover" height={40} width={105} alt="hit-logo" />
          </div>
          <div className="order-last mt-5 flex w-full flex-nowrap items-center md:order-none md:mt-0 md:w-2/4 lg:w-2/4">
            <input
              className="mr-2 flex-grow appearance-none rounded-md border border-gray-200 bg-gray-100 py-2 px-3 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
              placeholder="Search"
            />
            <button className="inline-block rounded-md border border-transparent bg-secondary-light px-4 py-2 text-white hover:bg-secondary-dark">
              <FiSearch className="h-6 w-6" />
            </button>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Link href="/wishlist">
              <button className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-secondary-dark shadow-sm hover:border-secondary-light hover:bg-gray-100">
                <AiOutlineHeart className="h-5 w-5 text-secondary-dark" />
                <span className="ml-1 hidden lg:inline">Wishlist</span>
              </button>
            </Link>
            <Link href="/cart">
              <button className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-secondary-dark shadow-sm hover:border-secondary-light hover:bg-gray-100">
                <FiShoppingCart className="h-5 w-5 text-secondary-dark" />
                <span className="ml-1 hidden lg:inline">My cart</span>
              </button>
            </Link>
          </div>

          <div className="ml-2 lg:hidden">
            <button className="inline-flex items-center rounded-md border border-transparent bg-white p-3 text-black hover:bg-gray-200 hover:text-gray-800">
              <span className="sr-only">Open menu</span>
              <AiOutlineMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;
