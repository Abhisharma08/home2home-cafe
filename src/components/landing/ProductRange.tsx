
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Description } from '@radix-ui/react-toast';

const productCategories = [

  { name: 'Café Chairs', imageId: 'cafe-furniture', Description: ( <>  Stable, well-crafted seating options designed for <br /> both comfort and visual consistency. </> ) },
  { name: 'Tables', imageId: 'cafe-tables', Description: ( <>  Durable, easy-to-maintain <br />surfaces available  in a range of <br />sizes and finishes. </> ) },
  { name: 'Bar Stools and High Seating', imageId: 'cafe-barstools', Description: ( <>  Ideal for layered seating formats and making <br /> effective use of vertical space. </> ) },
  { name: 'Outdoor Café Furniture', imageId: 'cafe-outdoor-furniture', Description: ( <>  Weather-resistant designs suitable for outdoor <br /> and semi-open environments. </> ) },
];

const ProductRange = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-10 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <p className="font-semibold uppercase tracking-widest text-accent mb-2">Crafted With Love</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Our Product Range
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(img => img.id === category.imageId);
            return (
               <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-[300px] h-[300px] overflow-hidden rounded-lg mb-4">
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

                <Link href="#form" className="mt-6 inline-block px-5 py-2 bg-accent text-black text-sm rounded-md hover:opacity-90 transition">
                  Enquire Now
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-20 max-w-5xl mx-auto">
          <p className="text-primary font-bold text-xl leading-relaxed">
                       Suitable for a wide range of café formats including quick-service cafés, premium coffee spaces, casual dining setups, and outdoor seating areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
