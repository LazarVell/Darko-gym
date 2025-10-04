import Image from "next/image";

export default function Accountability() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2>Accountability & Support</h2>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-white/80">
            <li>The missing link for 90% of people</li>
            <li>Full daily support, weekly check‑ins and 1–1 calls</li>
            <li>A coach who cares about your progress</li>
          </ul>
          <a href="#pricing" className="btn btn-primary mt-6 inline-block">
            Get Started
          </a>
        </div>
        <div className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                    <Image
                      src="/Dare-2.jpg"
                      alt="Client transformations"
                      width={600}
                      height={800}
                      className="rounded-xl object-contain w-full h-auto"
                      priority
                    />
                  </div>
      </div>
    </section>
  );
}
