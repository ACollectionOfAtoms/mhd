import React from 'react';
import Script from 'react-load-script';
import graphql from 'graphql';

import IntroSlide from '../components/IntroSlide';
import MakeItEasySlide from '../components/ValueProp1Slide';
import BlackHole from '../components/ValueProp2Slide';
import style from './styles.module.scss';

export default class IndexPage extends React.Component {
    handleScriptLoad() {
        if (typeof window !== 'undefined' && window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }
        window.netlifyIdentity.init();
    }

    render() {
        return (
            <div className={style.mainContent}>
                <IntroSlide />
                <MakeItEasySlide />
                <BlackHole />
                <Script
                    url="https://identity.netlify.com/v1/netlify-identity-widget.js"
                    onLoad={() => this.handleScriptLoad()}
                />
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
