export function Footer() {
  return (
    <footer className="bg-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} app.babl.tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
