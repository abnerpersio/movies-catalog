import styled from 'styled-components';

import { Heading } from '../Heading';

export const Container = styled.section`
  width: 100%;

  section.catalog-header {
    width: 100%;
    background: #212125;
    border-top: 2px solid #ff559e;
    box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

    & > ${Heading} {
      h4 {
        font-size: 1.25em;
        font-weight: 300;

        @media (max-width: 400px) {
          font-size: 1.1em;
        }

        & .bold {
          font-weight: 600;
        }
      }
    }
  }
`;
