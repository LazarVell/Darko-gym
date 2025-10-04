export default function Footer() {
  return (
    <footer className="section pt-10 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50">
            © {new Date().getFullYear()} Gymaholic Coaching
          </p>
          <nav className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#included" className="hover:text-white">
              What’s included
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
