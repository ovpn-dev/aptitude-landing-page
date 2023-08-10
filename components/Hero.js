import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GeoHome from "./geoHome";
import logo from "../public/logo.png";
import Image from "next/image";
import { Chat } from "./chat";

const navigation = [
  { name: "Home", href: "http://www.aptitudeassociates.com/" },
  { name: "About Us", href: "http://www.aptitudeassociates.com/about" },
  {
    name: "Stucco",
    href: "http://www.aptitudeassociates.com/stucco-restoration",
  },
  {
    name: "Painting & Siding",
    href: "http://www.aptitudeassociates.com/painting-siding-services",
  },
  { name: "Contact", href: "http://www.aptitudeassociates.com/contact" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#14ff2c] to-[#493dff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          {/* <div className="relative items-center justify-center h-screen overflow-hidden">
            <video
              src="https://player.vimeo.com/video/372722996?autoplay=1&loop=1&background=1"
              autoplay="{true}"
              loop
              muted
              className="absolute z-10 w-auto 
              min-w-full min-h-full max-w-none"
            ></video>
          </div> */}
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-36 lg:py-36">
          {" "}
          <div className="text-center">
            <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              STUCCO RESTORATION & FULL PAINTING
            </h1>
            <br />
            <h2 className="text-2xl tracking-tight text-gray-900 sm:text-5xl">
              Serving all of Florida from 5 local officies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Aptitude Associates is the leading stucco restoration and full
              painting team in Florida for residential housing. Our team is
              recognized for our high standards of quality, professionalism, and
              expertise.
            </p>
          </div>
          <div>
            <GeoHome />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#493dff] to-[#14ff2c] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
