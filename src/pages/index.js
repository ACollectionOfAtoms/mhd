import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const html = data.allMarkdownRemark.edges[0].node.html;
    return (
      <div>
          <section className="hero is-medium is-primary is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Welcome to the
                    <br/>
                    Mental Health Directory
                  </h1>
                  <h2 className="subtitle">
                    A site that will promote the destigmatization of mental health needs by creating relatable, compassionate access to mental health resources.
                  </h2>
                </div>
              </div>
            </section>
          <section className="section">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={() => this.handleScriptLoad()}
          />
          <div className="container">
            <div
              className="about-page-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`;
