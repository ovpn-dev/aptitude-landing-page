import banner from "../public/banner-contact.jpg";
import Image from "next/image";

export default function CTA() {
  return (
    <section class="relative bg-gray shadow dark:bg-gray-900 my-20">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {" "}
            Contact our Aptitude team today.
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Is your stucco looking cracked, peeling, or stained? Our team can
            fix it up in no time! Schedule an appointment or discuss your
            project in more detail. <br />
            <br /> Contact us today for a quote.
          </p>
          <a
            href="https://calendly.com/aptitudecalls"
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Contact us
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <Image
          class="w-full mt-5 dark:hidden rounded-lg"
          src={banner}
          alt="dashboard image"
          height={1080}
        />
        <img
          class="w-full hidden dark:block"
          src={banner}
          alt="dashboard image"
        />
      </div>{" "}
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
    </section>

    // <div className="bg-white">
    //   <div className="mx-auto max-w-9xl py-y sm:px-6 sm:py-32 lg:px-8">
    //     <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
    //       <svg
    //         viewBox="0 0 1024 1024"
    //         className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
    //         aria-hidden="true"
    //       >
    //         <circle
    //           cx={512}
    //           cy={512}
    //           r={512}
    //           fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
    //           fillOpacity="0.7"
    //         />
    //         <defs>
    //           <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
    //             <stop stopColor="#7775D6" />
    //             <stop offset={1} stopColor="#E935C1" />
    //           </radialGradient>
    //         </defs>
    //       </svg>
    //       <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
    //         <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
    //           Get a quote.
    //           <br />
    //           Contact our Aptitude team today.
    //         </h2>
    //         <p className="mt-6 text-lg leading-8 text-gray-300">
    //           Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
    //           Malesuada adipiscing sagittis vel nulla.
    //         </p>
    //         <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
    //           <a
    //             href="https://calendly.com/aptitudecalls"
    //             className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    //           >
    //             Contact us <span aria-hidden="true">→</span>
    //           </a>
    //           {/* <a
    //             href=""
    //             className="text-sm font-semibold leading-6 text-white"
    //           >
    //             Contact us <span aria-hidden="true">→</span>
    //           </a> */}
    //         </div>
    //       </div>
    //       <div className="relative mt-16 h-80 lg:mt-8">
    //         <Image
    //           className="absolute left-0 top-0 w-[60rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    //           src={banner}
    //           alt="App screenshot"
    //           width={1824}
    //           height={1080}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
