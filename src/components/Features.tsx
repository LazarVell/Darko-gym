import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Personalised Programming",
      desc: "Progressive plans tailored to you with smart progression.",
    },
    {
      title: "Comprehensive Support",
      desc: "Daily support, weekly check‑ins and 1–1 calls.",
    },
    {
      title: "Exclusive Client Education",
      desc: "Access the Gymaholic Education Hub to learn the ‘why’.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2>Real People. Real Results</h2>
            <p className="mt-3 text-white/70">
              This could be you. With the right plan and accountability, you can
              build a physique you’re proud of - and keep it.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f) => (
                <div key={f.title} className="card">
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-white/70 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            <Image
              src="/Dare.jpg"
              alt="Client transformations"
              width={600}
              height={800}
              className="rounded-xl object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
