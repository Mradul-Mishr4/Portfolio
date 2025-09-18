import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-16">
        <h2 className="heading text-slate-900 dark:text-slate-100 mb-4">
          Why Choose an Emerging Developer
        </h2>
        <p className="subheading max-w-2xl mx-auto">
          Fresh perspective, modern skills, and passionate dedication to
          creating innovative web solutions with the latest technologies.
        </p>
      </div>

      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
