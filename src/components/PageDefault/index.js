import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    display: flex;
    flex-direction: column;
    width: 100vw
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
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array,
};

export default PageDefault;
