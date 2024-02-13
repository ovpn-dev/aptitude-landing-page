import Image from "next/image";
import GeoHome from "./geoHome";
import vdtest from "../public/vdtest.jpg";

export default function VideoBg() {
  return (
    <section class="relative bg-white h-screen flex flex-col items-center justify-center text-center text-white py-3 px-0">
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          class="min-w-full min-h-full absolute object-cover img-responsive"
          src="https://player.vimeo.com/video/372722996/?autoplay=1&loop=1&title=0&background=1&byline=0&portrait=0"
          frameborder="0"
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-content my-10 space-y-2">
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
          <div className="text-center">
            <h1 className=" text-4xl font-bold tracking-tight text-gray-900 md:text-5xl sm:text-6xl">
              STUCCO RESTORATION & FULL PAINTING
            </h1>
            <br />
            <h2 className="text-2xl tracking-tight text-gray-900 sm:text-5xl">
              Serving all of Florida from 5 local offices
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
      </div>
    </section>
  );
}
