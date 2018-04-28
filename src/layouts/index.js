import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';

import '../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="MHD - Mental Health Directory" />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
