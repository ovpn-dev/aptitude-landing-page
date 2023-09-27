import logo from "../public/logo.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="http://aptitudeassociates.com/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <Image src={logo} className="h-16 w-auto" alt="Aptitude logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="http://www.aptitudeassociates.com/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://www.aptitudeassociates.com/about"
                  className="mr-4 hover:underline md:mr-6"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://www.aptitudeassociates.com/stucco-restoration"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Stucco
                </a>
              </li>
              <li>
                <a
                  href="http://www.aptitudeassociates.com/painting-siding-services"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Painting & Siding
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/aptitudecalls"
                  class="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Copyright {currentYear} -
            <a href="http://aptitudeassociates.com/" class="hover:underline">
              Aptitude Associates Inc
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
