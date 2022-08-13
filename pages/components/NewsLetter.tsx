import { FormEvent } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function NewsLetter() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    toast.success("You have subscribes to our news letter")
  }
  return (
    <section className="bg-slate-300 border-t py-6">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center flex-col lg:flex-row space-y-7 lg:space-y-0">
          <div className="flex items-center mr-10">
            <div className="flex mr-5 items-center justify-center rounded w-11 h-11 bg-white shadow-sm">
              <FaEnvelope className="w-5 h-5 text-secondary-light" />
            </div>
            <div>
              <p className="font-semibold text-lg">Subscribe</p>
              <p className="text-sm text-gray-400">Get notified on offers</p>
            </div>
          </div>

          <form className="flex w-80" onSubmit={handleSubmit}>
            <input
              className="text-black w-full appearance-none  border border-gray-200 bg-white py-2 px-3 rounded-tl-md rounded-bl-md focus:outline-none  focus:border-blue-600 hover:border-gray-400"
              type="email"
              placeholder="Email"
            />
            <button className="px-4 bg-secondary-dark text-white border border-gray-200 rounded-tr-md rounded-br-md hover:text-white hover:bg-secondary-light">
              Subscribe
            </button>
          </form>

          <nav className="flex lg:ml-auto space-x-2">
            <a
              className="px-3 py-2 inline-block text-center text-secondary-light bg-white shadow-sm border border-gray-200 rounded-md hover:text-secondary-dark"
              href="#"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube className="w-4 h-4" />
            </a>
            <a
              className="px-3 py-2 inline-block text-center text-secondary-light bg-white shadow-sm border border-gray-200 rounded-md hover:text-secondary-dark"
              href="#"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare className="w-4 h-4" />
            </a>
            <a
              className="px-3 py-2 inline-block text-center text-secondary-light bg-white shadow-sm border border-gray-200 rounded-md hover:text-secondary-dark"
              href="#"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              className="px-3 py-2 inline-block text-center text-secondary-light bg-white shadow-sm border border-gray-200 rounded-md hover:text-secondary-dark"
              href="#"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
