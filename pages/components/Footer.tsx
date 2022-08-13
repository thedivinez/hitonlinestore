import React from 'react'

function Footer() {
  return (<footer className="bg-secondary-light">
    <section className="py-10 text-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap">
          <aside className="w-full md:w-1/3 lg:w-1/4 mb-5">
            <img src="logos/hit-logo-white.png" className='h-10' alt="Harare Institute Of Technology" />
            <p className="my-4">
              © 2022 All rights reserved.
            </p>
          </aside>
          <aside className="w-1/2 sm:w-auto flex-auto mb-5">
            <h3 className="font-semibold"> Store </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> Find Product </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> Categories </a>
              </li>
            </ul>
          </aside>
          <aside className="w-1/2 sm:w-auto flex-auto mb-5">
            <h3 className="font-semibold"> About </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> About us </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> Offices </a>
              </li>
            </ul>
          </aside>
          <aside className="w-1/2 sm:w-auto flex-auto  mb-5">
            <h3 className="font-semibold"> Help </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> Contact us </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100"> Submit ticket </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section className="bg-secondary-dark py-6 text-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <img src="logos/violine-logo.png" className="h-7" alt="Payment methods" />
          <div className="space-x-6">
            <nav className="text-sm space-x-4">
              <a href="#" className="opacity-70 hover:opacity-100">
                Support
              </a>
              <a href="#" className="opacity-70 hover:opacity-100">
                Privacy &amp; Cookies
              </a>
              <a href="#" className="opacity-70 hover:opacity-100">
                Accessibility
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}

export default Footer