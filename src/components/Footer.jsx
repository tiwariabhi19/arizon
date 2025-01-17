const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 10.5V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2h14a2 2 0 012 2v7.5"
                  ></path>
                </svg>
                <span>1234 Main St, City, Country</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m4-4V8m0 8v-4m4 4h4m0-4h-4m0 4h4m0 0H4"
                  ></path>
                </svg>
                <span>support@company.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 11.5a8 8 0 10-8 8 8 8 0 008-8z"
                  ></path>
                </svg>
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stay in Touch</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 px-6 py-2 bg-blue-600 rounded-r-md text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Company Name. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
