
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Description } from '@radix-ui/react-toast';

const productCategories = [
  { name: 'Café Chairs', imageId: 'outdoor-furniture', Description: 'Stable, well-crafted seating options designed for both comfort and visual consistency.' },
  { name: 'Tables', imageId: 'office-furniture', Description: 'Durable, easy-to-maintain surfaces available in a range of sizes and finishes.' },
  { name: 'Bar Stools and High Seating', imageId: 'living-room-furniture', Description: 'Ideal for layered seating formats and making effective use of vertical space.' },
  { name: 'Outdoor Café Furniture', imageId: 'bedroom-furniture', Description: 'Weather-resistant designs suitable for outdoor and semi-open environments.' },
];

const ProductRange = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-semibold uppercase tracking-widest text-accent mb-2">Crafted With Love</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Our Product Range
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(img => img.id === category.imageId);
            return (
              <div className="flex flex-col items-center text-center">
                <div className="w-[500px] h-[500px] overflow-hidden rounded-lg mb-4">
                  {image && (
                    <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
/>
                  )}
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-1">{category.name}</h3>
                <p className="text-primary text-sm">{category.Description}</p>
              
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10 max-w-5xl mx-auto">
          <p className="text-primary font-bold text-xl leading-relaxed">
                       Suitable for a wide range of café formats including quick-service cafés, premium coffee spaces, casual dining setups, and outdoor seating areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
