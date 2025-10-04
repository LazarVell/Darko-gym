const faqs = [
  {
    q: "Who is this for?",
    a: "Men who want a clear plan, real accountability and long‑term results.",
  },
  {
    q: "Do I need a gym?",
    a: "No. We’ll tailor your programming to your equipment and schedule.",
  },
  {
    q: "Is nutrition included?",
    a: "Yes - you’ll get a simple, personalised structure.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">All Your Questions Answered</h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary className="cursor-pointer text-lg font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
