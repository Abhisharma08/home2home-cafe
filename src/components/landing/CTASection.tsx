import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          Plan Your Café with Furniture That Performs
        </h2>
        <p className="max-w-2xl mx-auto mb-8 font-bold text-secondary-foreground/80">
          Work with Home2Home to create a café space that is efficient, comfortable, and visually aligned with your brand.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="#form">Enquire Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
