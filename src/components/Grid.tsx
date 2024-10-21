"use client";
import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { BentoGridItem } from "./ui/BentoGridItem";

const Grid = () => {
  const isClient = typeof window !== "undefined";

  if (!isClient) return null;
  return (
    <section id="about">
      <BentoGrid className="bg-transparent">
        {gridItems?.map(
          ({
            id,
            title,
            description,
            img,
            imgClassName,
            spareImg,
            className,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              img={img}
              className={className}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
