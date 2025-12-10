export default function ContactSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-8 py-20">
      <div className="max-w-3xl w-full text-center bg-pink-100/60 p-10 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-8 text-pink-700">Contact</h1>
        <p className="text-xl text-pink-900 mb-4"><b>Email:</b> kenbrojan@email.com</p>
        <p className="text-xl text-pink-900 mb-4"><b>Phone:</b> 09364789266</p>
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
