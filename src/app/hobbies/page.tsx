function HobbiesSection() {
  const hobbies = [
    { icon: "📚", title: "Reading", desc: "I enjoy reading tech articles, novels, and anything inspiring." },
    { icon: "🎵", title: "Listening to Music", desc: "Relaxing with music and discovering new songs daily." },
    { icon: "🏃‍♂️", title: "Running", desc: "I like to stay active and go for morning runs." },
    { icon: "🎨", title: "Digital Art", desc: "Experimenting with digital drawing and creative designs." },
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
