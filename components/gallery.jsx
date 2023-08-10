import brown from "../public/apply-brown-coat.jpg";
import final from "../public/apply-final-finish.jpg";
import scratch from "../public/apply-scratch-coat.jpg";
import stucco from "../public/apply-stucco-sealant.jpg";
import lather from "../public/attach-lather.jpg";
import wrb from "../public/banner-about.jpg";
import inspection from "../public/stucco-inspection.jpg";
import paint from "../public/paint-stucco.jpg";
import spray from "../public/stucco-painting-florida.jpg";
import Image from "next/image";
export default function Gallery() {
  return (
    <>
      <div className="mx-auto my-5">
        <h1 className=" text-4xl text-center font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Gallery
        </h1>
      </div>
      {/* <div className="px-20 grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">
        <Image className="object-cover w-full fill border" src={spray} />
        <Image className="object-cover w-full fill border" src={paint} />
        <Image className="object-cover w-full fill border" src={scratch} />
        <Image className="object-cover w-full fill border" src={wrb} />
        <Image className="object-cover w-full fill border" src={lather} />
        <Image className="object-cover w-full fill border" src={stucco} />
      </div> */}

      <div class="px-12 sm:px-24 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="grid gap-4">
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={spray} alt="" />
          </div>
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={wrb} alt="" />
          </div>
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={scratch} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={paint} alt="" />
          </div>
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={lather} alt="" />
          </div>
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={stucco} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={brown} alt="" />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              src={inspection}
              alt=""
            />
          </div>
          <div>
            <Image class="h-auto max-w-full rounded-lg" src={final} alt="" />
          </div>
        </div>
        {/* <div class="grid gap-4">
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
