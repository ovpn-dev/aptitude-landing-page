import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.green.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-8xl lg:max-w-8xl">
        <h2 className="py-10 text-4xl font-semibold text-center tracking-tight text-gray-900 sm:text-3xl">
          See what people have been saying about our company over the past year
        </h2>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          className="mx-auto h-12"
          src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
          alt=""
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-regular leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              &ldquo;This company does such an awesome job with painting homes.
              Instead of just showing pictures, they invite you to visit the
              houses they painted in person. We looked at our neighbor’s house
              and quickly decided to get on their schedule. The final product
              was just as expected. We are very pleased. Thank you again!&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-10">
            {/* <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            /> */}
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                07/07/2023 &ndash; Eddie
              </div>
              {/* <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div> */}
            </div>
          </figcaption>
        </figure>
      </div>
      <br />
      <div className="grid mx-auto max-w-6xl mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My Home is Brought Back to Life
            </h3>
            <p className="my-4">
              &ldquo;The painting process was impressive. Aptitude not only
              helped me select the perfect colors but executed the job with
              meticulous precision. The fresh coat of paint has truly
              transformed the appearance of my home and has brought it back to
              life.&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            {/* <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            /> */}
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>06/17/2023 &ndash; Natasha</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Seamless Experience with Aptitude
            </h3>
            <p className="my-4">
              &ldquo;Working with Aptitude on the repair and painting of my home
              was seamless. I was lucky enough to get the whole crew of 5
              working at my house at once. The entire project only took 2 days
              and the amount of paint applied to my house was very impressive.
              All the water intrusion around my windows was stopped
              overnight.&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            {/* <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            /> */}
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>05/22/2023 &ndash; Collin</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              I'm Delighted with the Results of My Exterior Restoration
            </h3>
            <p className="my-4">
              &ldquo;I recently had the pleasure of working with Aptitude
              Associates to restore the exterior of my home, and I couldn't be
              happier with the results. From start to finish, the team at
              Aptitude Associates exhibited a level of professionalism and
              attention to detail that truly impressed me. They took the time to
              thoroughly assess the situation and develop a plan that addressed
              all of my concerns.&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            {/* <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            /> */}
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>05/16/2023 &ndash; Robert</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Trust the Experts for Your Exterior Stucco Restoration,
              Waterproofing, and Painting Needs
            </h3>
            <p className="my-4">
              &ldquo;I highly recommend Aptitude Associates for any exterior
              stucco restoration, waterproofing, or painting needs. Their
              expertise, attention to detail, and exceptional customer service
              make them a top-notch choice. I am thrilled with the outcome of
              the project.&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            {/* <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            /> */}
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>10/24/2022 &ndash; Jessica</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
