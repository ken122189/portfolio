export default function AboutSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-3xl w-full text-center bg-pink-100/60 p-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-pink-700">About Me</h1>
        <p className="text-lg leading-relaxed text-pink-900">
          Hi! I'm <span className="font-semibold">Ken Weljane Brojan</span>,
          a 20-year-old BSIT student from Naga College Foundation. I was born and raised in
          <span className="font-semibold"> Camarines Sur</span>.
          <br /><br />
          We are a family of four, and I'm the <span className="font-semibold">youngest sibling</span>.
          <br /><br />
         "Reading, Listening to music, Running, Digital art – that’s my kind of day!"
        </p>
      </div>
    </section>
  );
}
