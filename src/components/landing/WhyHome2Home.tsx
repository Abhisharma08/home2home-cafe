import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Layers, Armchair, Hammer, Sparkles, LayoutGrid } from 'lucide-react';

const whyPoints = [
  {
    icon: Layers,
    title: 'Built for High Usage',
    description:
      'Crafted with materials and finishes that withstand continuous use in busy café environments without compromising on appearance.',
  },
  {
    icon: Armchair,
    title: 'Comfort-Oriented Design',
    description:
      'Seating designed to offer consistent comfort, encouraging customers to spend more time in your space.',
  },
  {
    icon: Hammer,
    title: 'Handcrafted with Attention to Detail',
    description:
      'Each piece is thoughtfully handcrafted, ensuring precision, quality, and a distinctive finish that sets your space apart.',
  },
  {
    icon: Sparkles,
    title: 'Refined Aesthetic Appeal',
    description:
      'Clean designs and carefully selected finishes that elevate the overall look and feel of your café.',
  },
  {
    icon: LayoutGrid,
    title: 'Efficient Space Utilisation',
    description:
      'Smart configurations that help optimise seating layouts and improve movement within the space.',
  },
];

const WhyHome2Home = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-semibold uppercase tracking-widest text-accent mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">
            Why Home2Home
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-primary border-accent/50 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full w-fit mb-4 bg-accent/10">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-primary-foreground/80">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyHome2Home;