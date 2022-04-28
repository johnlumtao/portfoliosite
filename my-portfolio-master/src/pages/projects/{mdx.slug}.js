import { graphql, Link } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

export default function Project({ data }) {
  const image = getImage(data.mdx.frontmatter.headerImage);
  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto">
        <div className="flex flex-col items-center max-w-md mx-auto mb-8 text-center">
          <GatsbyImage image={image} alt="alt" />
          <h1 className="text-4xl font-bold">{data.mdx.frontmatter.title}</h1>
          <p className="text-lg">{data.mdx.frontmatter.summary}</p>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        summary
        headerImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
