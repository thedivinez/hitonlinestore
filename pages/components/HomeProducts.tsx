import Link from "next/link";
import Image from "next/image";
import { v4 as uuid4 } from "uuid";
import { AiOutlineHeart } from "react-icons/ai";
import useEcommerceState from "../../hooks/useEcommerceState";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeProducts() {
  const addToCart = useEcommerceState((state) => state.addToCart);
  const addToWishList = useEcommerceState((state) => state.addToWishList);

  const products = [
    {
      price: 122,
      shipping: 0,
      id: "343543",
      name: "Helmets",
      category: "Clothing",
      image: "/uploads/trending/helmets.jpg",
    },
    {
      price: 122,
      shipping: 0,
      id: "9876785",
      name: "Sweaters",
      category: "Clothing",
      image: "/uploads/trending/sweaters.jpg",
    },
    {
      price: 100,
      shipping: 0,
      id: "0996786875",
      name: "T-Shirts",
      category: "Clothing",
      image: "/uploads/trending/tshirts.jpg",
    },
    {
      price: 122,
      shipping: 0,
      name: "Caps",
      id: "89698578576",
      category: "Clothing",
      image: "/uploads/trending/caps.jpg",
    },
    {
      price: 122,
      shipping: 0,
      id: "8769866",
      name: "Work Suits",
      category: "Clothing",
      image: "/uploads/trending/worksuits.jpg",
    },
    {
      price: 100,
      shipping: 0,
      id: "43632451",
      name: "Diaries",
      category: "Stationary",
      image: "/uploads/trending/diaries.jpg",
    },

    {
      price: 100,
      shipping: 0,
      name: "Tents",
      id: "43632451",
      category: "Events",
      image: "/uploads/trending/tents.jpg",
    },
    {
      price: 100,
      shipping: 0,
      name: "Flags",
      id: "2543256463",
      category: "Events",
      image: "/uploads/trending/flags.jpg",
    },

  ];
  return (
    <section className="flex flex-col space-y-5 bg-slate-100 py-12">
      <div className="container mx-auto max-w-screen-xl px-4" key={uuid4()}>
        <h2 className="mb-8 text-3xl font-bold">Trending Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="block text-gray-600 hover:text-secondary-dark"
            >
              <article className="cursor-pointer rounded-md border border-gray-200 bg-white shadow-sm">
                <Link href={`/products/${product.id}`}>
                  <Image
                    width={300}
                    height={300}
                    alt={product.name}
                    src={product.image}
                    className="mx-auto w-auto"
                  />
                </Link>
                <div className="border-t border-t-gray-200 p-4">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col">
                      <p className="font-semibold text-secondary-dark">${product.price}</p>
                      <span className="mb-3 block text-secondary-light">
                        {product.name}
                      </span>
                    </div>
                    <span className="bg-secondary-light/30 rounded-md px-1 text-xs">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-md border border-transparent bg-secondary-light px-4 py-2 text-center text-white hover:bg-secondary-dark"
                    >
                      Add to cart
                    </button>
                    <button
                      onClick={() => addToWishList(product)}
                      className="rounded-md border border-transparent bg-yellow-500 px-3 py-2 text-secondary-dark hover:bg-yellow-600"
                    >
                      <AiOutlineHeart className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
