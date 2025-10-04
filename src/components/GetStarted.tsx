const steps = [
  {
    title: "Step 1: Sign-up",
    desc: "Scroll down, choose your preferred package and sign up using the simple email process.",
  },
  {
    title: "Step 2: Book Kickstarter Call",
    desc: "After signing up, you’ll automatically receive your Kickstarter call booking link and pre-call assessment questionnaire.",
  },
  {
    title: "Step 3: Receive Your Plans",
    desc: "Gain access to the Gymaholic coaching system & receive your personalised plans alongside a video breakdown of your initial programming set-up.",
  },
  {
    title: "Step 4: Begin Coaching",
    desc: "Where the real fun begins. Follow the plan. Track your progress. Check-in weekly & receive direct support.",
  },
  {
    title: "Step 5: Start Making Progress",
    desc: "Watch yourself transform and achieve things you never thought possible.",
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="section">
      <div className="container text-center">
        <h2>How to Get Started</h2>
        <p className="mt-2 text-white/70 max-w-2xl mx-auto">
          If you’re ready to change, I’m ready to coach you. The process is
          simple.
        </p>

        <div className="mt-10 space-y-6">
          {steps.map((s) => (
            <div key={s.title} className="card text-left">
              <h3 className="text-lg md:text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-3 text-center text-white/40">↓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
