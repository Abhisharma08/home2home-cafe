const Introduction = () => {
  return (
    <section className="bg-secondary text-primary-foreground py-10 md:py-10">
      <div className="container mx-auto px-6 text-center max-w-4xl">

        {/* Paragraph 1 */}
        <p className="text-primary font-bold text-xl mb-6 leading-relaxed">
          <span className="font-bold">Home2Home</span> offers a curated range of café furniture designed to meet the functional 
          and visual demands of modern hospitality spaces. Each piece reflects a balance of 
          refined aesthetics and long-term durability, ensuring it performs consistently in 
          high-usage environments while maintaining a premium, well-finished look.
        </p>

        {/* Paragraph 2 */}
        <p className="text-primary font-bold text-xxl leading-relaxed">
          Whether you are setting up a new café or upgrading an existing space, our furniture 
          solutions are designed to align with your layout, brand identity, and operational 
          requirements.
        </p>

      </div>
    </section>
  );
};

export default Introduction;