import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Introduction = () => {
  const image = PlaceHolderImages.find(img => img.id === "intro-image"); // 👈 change ID as needed

  return (
    <section className="bg-secondary py-10 md:py-14">
      <div className="container mx-auto px-10 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: Image */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[600px] h-[320px] overflow-hidden rounded-lg mb-4">
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
          </div>

          {/* RIGHT: Content */}
          <div className="text-left">
            <p className="text-primary text-lg md:text-xl mb-6 leading-relaxed">
              <span className="font-bold text-2xl">Home2Home</span> offers a curated range of café furniture designed to meet the functional 
              and visual demands of modern hospitality spaces. Each piece reflects a balance of 
              refined aesthetics and long-term durability, ensuring it performs consistently in 
              high-usage environments while maintaining a premium, well-finished look.
            </p>

            <p className="text-primary text-lg md:text-xl leading-relaxed">
              Whether you are setting up a new café or upgrading an existing space, our furniture 
              solutions are designed to align with your layout, brand identity, and operational 
              requirements.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Introduction;