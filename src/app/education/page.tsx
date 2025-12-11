export default function EducationSection() {
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
            <p><b>Senior High:</b> IConnect Global Institute, Inc. — GAS Strand</p>
            <p><b>High School:</b> Ocampo National High School</p>
            <p><b>Elementary:</b> Ocampo Central School</p>
          </div>
        </div>
      </div>
    </section>
  );
}
