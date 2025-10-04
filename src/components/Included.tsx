export default function Included() {
  const items = [
    {
      title: "Coaching: The Right Way",
      points: [
        "Full support, clear guidance, high standards",
        "Built around your life and goals",
        "A true high-value service",
      ],
    },
    {
      title: "Training Programming",
      points: [
        "Custom plans based on goals, kit & schedule",
        "Ongoing tweaks to keep you progressing",
        "Log everything inside the coaching system",
      ],
    },
    {
      title: "Nutrition Structure",
      points: [
        "Clear, no‑BS plan tailored to you",
        "Flexible, sustainable & results-driven",
        "Know exactly what to do and why it works",
      ],
    },
  ];

  return (
    <section id="included" className="section">
      <div className="container">
        <h2 className="text-center">What’s Included?</h2>
        <p className="mt-2 text-center text-white/70">
          You’re investing in the result. Here’s how we deliver.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {items.map((box) => (
            <div key={box.title} className="card">
              <h3 className="text-xl font-semibold">{box.title}</h3>
              <ul className="mt-3 space-y-2 text-white/80 list-disc pl-5">
                {box.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
