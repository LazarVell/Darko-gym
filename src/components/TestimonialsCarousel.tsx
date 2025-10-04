"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    quote: "I finally broke the cycle and built a routine I love.",
    name: "Client A",
  },
  {
    quote: "Coaching + accountability changed everything for me.",
    name: "Client B",
  },
  {
    quote: "The Education Hub made nutrition actually make sense.",
    name: "Client C",
  },
  { quote: "Clear plan. Real support. Real results.", name: "Client D" },
];

export default function TestimonialsCarousel() {
  return (
    <section className="section bg-white/5">
      <div className="container">
        <h2 className="text-center">Real People. Real Results</h2>
        <p className="mt-2 text-center text-white/70">
          Swipe through a few words from clients.
        </p>

        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="h-full card flex flex-col px-[50px]! min-h-36">
                  <div className="flex-1">
                    <p className="text-white/90">“{t.quote}”</p>
                  </div>
                  <p className="mt-4 text-sm text-white/60">- {t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
