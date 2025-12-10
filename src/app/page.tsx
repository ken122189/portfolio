"use client";

import { useRef } from "react";
import Image from "next/image";

// Home Section
function HomeSection() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center px-6 py-20">
      <div className="absolute top-20 md:top-28 flex justify-center w-full">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-xl">
          <Image
            src="/images/brojan.jpg"
            alt="Ken Weljane Brojan"
            width={288}
            height={288}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="mt-80 text-center">
        <h1 className="text-6xl font-extrabold drop-shadow-lg mb-4 text-pink-700">
          Ken Weljane Brojan
        </h1>
        <p className="text-xl mb-2 text-pink-600">Welcome to my personal website ✨</p>
        <p className="text-md max-w-xl mx-auto text-pink-700/80">
          Explore my sections below to know more about me.
        </p>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-3xl w-full text-center bg-pink-100/60 p-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-pink-700">About Me</h1>
        <p className="text-lg leading-relaxed text-pink-900">
          Hi! I'm <span className="font-semibold">Ken Weljane Brojan</span>,
          a 19-year-old BSIT student from Naga College Foundation. I was born and raised in
          <span className="font-semibold"> Camarines Sur</span>.
          <br /><br />
          We are a family of 7, and I'm the <span className="font-semibold">second child</span>.
          <br /><br />
          I enjoy reading, listening to music, running, and creating digital art. I also like scrolling on my phone,
          watching tutorials, and learning new things through fun content online.
        </p>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-10 text-pink-700">Education</h1>
        <div className="bg-pink-100/60 p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-pink-700">Naga College Foundation</h2>
          <p className="text-xl mb-4 text-pink-800">Bachelor of Science in Information Technology - 2nd Year</p>
          <p className="text-lg leading-relaxed text-pink-900/90 mb-4">
            Currently a 2nd-year BSIT student. I enjoy programming, web development, and exploring technology.
          </p>
          <div className="text-left text-pink-900 space-y-2">
            <p><b>Senior High:</b> Genesis Colleges Incorporated</p>
            <p><b>High School:</b> Ocampo National High School</p>
            <p><b>Elementary:</b> Ocampo Central School</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hobbies Section
function HobbiesSection() {
  const hobbies = [
    { icon: "📚", title: "Reading", desc: "Reading helps me gain knowledge and stay inspired." },
    { icon: "🎵", title: "Listening to Music", desc: "Music relaxes my mind and motivates me daily." },
    { icon: "🏃‍♂️", title: "Running", desc: "Running keeps me active and focused." },
    { icon: "🎨", title: "Digital Art", desc: "Creating art improves my creativity and skills." },
  ];

  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-10 text-pink-700">My Hobbies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hobbies.map((item, i) => (
            <div
              key={i}
              className="bg-pink-100/60 p-6 rounded-2xl shadow-lg hover:bg-pink-200 transition"
            >
              <div className="text-4xl">{item.icon}</div>
              <h2 className="text-2xl font-bold mt-2 text-pink-700">{item.title}</h2>
              <p className="text-pink-900 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-3xl w-full text-center bg-pink-100/60 p-10 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-pink-700">Contact</h1>
        <p className="text-xl text-pink-900 mb-4"><b>Email:</b> kenbrojan@email.com</p>
        <p className="text-xl text-pink-900 mb-4"><b>Phone:</b> 09123456789</p>
        <p className="text-xl text-pink-900 mb-2">
          <b>Instagram:</b> <a className="underline text-pink-700" href="#">@kenbrojan</a>
        </p>
        <p className="text-xl text-pink-900">
          <b>Facebook:</b> <a className="underline text-pink-700" href="#">Ken Brojan</a>
        </p>
      </div>
    </section>
  );
}

// Main Page
export default function Page() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref?: any) => {
    if (!ref) window.scrollTo({ top: 0, behavior: "smooth" });
    else ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth font-[Poppins] text-pink-900 bg-pink-50">
      {/* NAV BUTTONS */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 bg-pink-200/90 p-3 rounded-full shadow-lg backdrop-blur-md">
        {["Home", "About", "Education", "Hobbies", "Contact"].map((label, i) => {
          const refs = [undefined, aboutRef, educationRef, hobbiesRef, contactRef];
          return (
            <button
              key={i}
              onClick={() => scrollToSection(refs[i])}
              className="px-4 py-2 rounded-full bg-pink-400 text-white hover:bg-pink-500 transition"
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Sections */}
      <HomeSection />
      <div ref={aboutRef}><AboutSection /></div>
      <div ref={educationRef}><EducationSection /></div>
      <div ref={hobbiesRef}><HobbiesSection /></div>
      <div ref={contactRef}><ContactSection /></div>
    </div>
  );
}
