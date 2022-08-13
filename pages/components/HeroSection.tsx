import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

function HeroSection() {
  return (
    <section className="pt-5">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-5 md:grid-cols-4">
          <div className="md:col-span-3">
            <article className="h-96 rounded bg-secondary-dark p-10 lg:p-16">
              <h1 className="text-3xl font-semibold text-white md:text-4xl">
                Get the best &amp; authentic<br />
                products from  our store
              </h1>
              <p className="mt-4 mb-6 text-lg font-normal text-gray-300">
                All products in this store where designed <br />
                at Harare Institute of Technology
              </p>
              <div className="flex space-x-10">
                <Link href="#">
                  <span className="cursor-pointer rounded-md border border-transparent bg-yellow-500 px-4 py-2 font-semibold text-white hover:bg-yellow-600">
                    Discover Products
                  </span>
                </Link>
                <Link href="#">
                  <span className="cursor-pointer rounded-md border border-transparent bg-white px-4 py-2 font-semibold text-secondary-dark hover:bg-gray-100">
                    Enquire
                  </span>
                </Link>
              </div>
            </article>
          </div>
          <div className="col-span-1">
            <article className="h-96 rounded bg-yellow-500">
              <img
                src="uploads/carousel/slide-1.png"
                className="flex h-full w-full object-cover"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
