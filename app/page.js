"use client";
import { useEffect } from "react";
import GeoHome from "../components/geoHome";
import { Chat } from "../components/chat";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Gallery from "../components/gallery";
import Nav from "../components/Nav";
import VideoBg from "../components/Videobg";
import Testimonial from "../components/Testimonials";

export default function Home() {
  useEffect(() => {
    const showText = () => {
      var Tawk_API = Tawk_API || {};
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/64d3606ccc26a871b02e330d/1h7cr1c2k";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    };

    showText();
  }, []);

  // var Tawk_API = Tawk_API || {},
  //   Tawk_LoadStart = new Date();
  // (function () {
  //   var s1 = document.createElement("script"),
  //     s0 = document.getElementsByTagName("script")[0];
  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/64d3606ccc26a871b02e330d/1h7cr1c2k";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");
  //   s0.parentNode.insertBefore(s1, s0);
  // })();
  return (
    <>
      <Nav />
      <Hero />
      {/* <VideoBg /> */}
      <CTA />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
}
