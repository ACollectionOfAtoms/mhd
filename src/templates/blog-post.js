import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      { helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
  />);
};
