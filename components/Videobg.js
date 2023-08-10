import CTA from "./CTA";
import Hero from "./Hero";

export default function VideoBg() {
  return (
    <section class="relative  h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* <iframe
          src="https://player.vimeo.com/video/372722996?autoplay=1&loop=1&background=1"
          class="img-responsive"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe> */}
        <iframe
          class="min-w-full min-h-full absolute img-responsive"
          src="https://player.vimeo.com/video/372722996/?autoplay=1&loop=1&title=0&background=1&byline=0&portrait=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-content my-10 space-y-2">
        <Hero />
        {/* <CTA /> */}
      </div>
    </section>
  );
}
