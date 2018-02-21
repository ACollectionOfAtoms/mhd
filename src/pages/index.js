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
    console.log(data);
    // const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
          <section className="hero is-medium is-primary is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Welcome to The
                    <br/>
                    Mental Health Directory
                  </h1>
                  <h2 className="subtitle">
                    A site that will promote the destigmatization of mental health needs by creating relatable, compassionate mental health resources.
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
            <h1> And then</h1>
            <p> that was it</p>
            <h1> And then</h1>
            <p> that was it</p>
            <h1> And then</h1>
            <p> that was it</p>
            <h1> And then</h1>
            <p> that was it</p>
            <h1> And then</h1>
            <p> that was it</p>
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
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
