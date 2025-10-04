"use client";
import { useState } from "react";

const plans = [
  {
    id: "monthly",
    name: "Monthly Coaching",
    price: "$199 / mo",
    features: [
      "Personalised training plan",
      "Nutrition guidance",
      "Weekly check-ins",
      "Access to Education Hub",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly Coaching",
    price: "$499 / 3 mo",
    originalPrice: "$597",
    features: [
      "Personalised training plan",
      "Nutrition guidance",
      "Weekly check-ins",
      "Access to Education Hub",
      "Discounted rate",
    ],
  },
];

export default function NewPricing() {
  const [selected, setSelected] = useState(plans[0]);
  const [popup, setPopup] = useState(false);

  const handleSignup = () => {
    const subject = encodeURIComponent(`${selected.name} – Sign Up`);
    const body = encodeURIComponent(
      `Hi Darko, I would like to sign up for ${selected.name}. Please contact me and show me how to do MOST EFFICIENT EVERYTHING, but no iskorak!`
    );
    window.location.href = `mailto:darko.gymcoach@gmail.com?subject=${subject}&body=${body}`;
    setPopup(true);
    setTimeout(() => setPopup(false), 4000);
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-center">Pricing</h2>
        <p className="mt-2 text-center text-white/70">
          Choose the plan that works for you.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card cursor-pointer transition ${
                selected.id === plan.id ? "ring-2 ring-green-400" : ""
              }`}
              onClick={() => setSelected(plan)}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>

              {plan.id === "quarterly" ? (
                <p className="text-3xl font-bold mt-2">
                  <span className="line-through text-white/60 mr-2">
                    {plan.originalPrice}
                  </span>
                  <span className="text-green-400">{plan.price}</span>
                </p>
              ) : (
                <p className="text-3xl font-bold text-green-400 mt-2">
                  {plan.price}
                </p>
              )}

              <ul className="mt-4 space-y-2 list-disc pl-5 text-white/80">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleSignup} className="btn btn-primary">
            Sign up for {selected.name}
          </button>
        </div>

        {popup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="card max-w-sm text-center">
              <h3 className="text-lg font-semibold">Message Ready</h3>
              <p className="mt-2 text-white/70">
                Your email client has opened with a prefilled message. Send it
                to complete your sign-up.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
