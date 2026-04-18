const Footer = () => {
  return (
    <footer className="py-8 bg-bg-primary border-t border-white/5 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 font-mono text-sm">
          Built with <span className="text-accent-primary">Next.js</span> &{' '}
          <span className="text-accent-secondary">Tailwind</span> by Eneri Junior.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
