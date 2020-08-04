import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top:30px;
    padding-left: 20px;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: [],
};

PageDefault.propTypes = {
  children: PropTypes.array,
};

export default PageDefault;
