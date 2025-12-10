import Image from "next/image";

export default function HomeSection() {
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
