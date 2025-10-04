import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(0,225,255,0.25),transparent_60%)]" />
      </div>

      <div className="container text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">
          Darko Gymaholic
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
          Build The <span className="text-green-400">Physique</span>, Routine &
          Mindset
          <br className="hidden md:block" /> That Matches Your Potential
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-white/70">
          You’ll get the structure, support and accountability to finally
          transform - and keep the results.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="btn btn-primary">
            Sign me up
          </a>
          <a href="#included" className="btn btn-ghost">
            What’s included
          </a>
        </div>

        <div className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-5">
          <Image
            src="/transformations.jpg"
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
