import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProjectItem({ slug, title, summary, headerImage }) {
  const image = getImage(headerImage);
  return (
    <Link to={`/projects/${slug}`}>
      <div className="transition shadow hover:scale-105 hover:shadow-lg">
        <GatsbyImage image={image} alt="alt" className="w-full" />
        <div className="p-4 min-h-[6em]">
          <p className="mb-2 text-lg font-bold">{title}</p>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}
