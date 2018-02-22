import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="MHD - Mental Health Directory" />
    <div>{children()}</div>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <h3>
            <strong>MHD</strong>
          </h3>
        </div>
      </div>
    </footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
