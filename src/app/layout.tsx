import "./globals.css";

export const metadata = {
  title: "Gymaholic Coaching",
  description: "Build The Physique, Routine & Mindset",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
