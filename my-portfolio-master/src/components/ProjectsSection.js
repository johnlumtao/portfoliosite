import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              summary
              title
              headerImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            body
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    summary: node.frontmatter.summary,
    headerImage: node.frontmatter.headerImage,
    slug: node.slug,
    id: node.id,
  }));

  return (
    <div>
      <h2 className="mb-12 text-3xl font-medium text-center">
        Here are some of my work
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {projects.map(({ id, slug, title, summary, headerImage }) => (
          <div>
            <ProjectItem
              slug={slug}
              title={title}
              summary={summary}
              headerImage={headerImage}
              key={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
