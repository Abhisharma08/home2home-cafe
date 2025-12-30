
import Link from 'next/link';

const Footer = () => {
  return (
    // add mobile-only bottom margin so a fixed mobile bar doesn't cover the footer
    <footer className="bg-primary text-primary-foreground py-6 mb-20 md:mb-0">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-primary-foreground/80">
          &copy; {new Date().getFullYear()} Home 2 Home Furniture. All rights reserved.
        </p>
        <nav className="mt-3">
          <Link href="/privacy-policy" className="text-sm underline hover:text-primary-foreground/100">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
