"use client";
import ReactPlayer from "react-player";


export default function Education() {
  const tags = ["Training", "Nutrition", "Fat Loss", "Muscle Gain"];
  const modules = [
    { title: "How The Coaching Process Works", url: "https://www.youtube.com/watch?v=oEgLRDLpsyE" },
    { title: "The Fundamentals of Progress", url: "https://www.youtube.com/watch?v=EOCLlkg7Ncs" },
    { title: "Training", url: "https://www.youtube.com/watch?v=Jyb0E5XO9d0" },
    { title: "Nutrition", url: "https://www.youtube.com/watch?v=DcJkrfUWHKE" },
  ];

  return (
    <section className="section">
      <div className="container text-center">
        <h2>Education & Resources</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Access the exclusive Gymaholic Education Hub. Learn the why behind
          the plan so you stay consistent and confident.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="card flex flex-col p-6">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                <ReactPlayer
                  src={m.url}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-lg">{m.title}</p>
                <span className="text-green-400 text-sm">Watch now →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
