import styled from 'styled-components';

import { Heading } from '../Heading';

export const Container = styled.section`
  width: 100%;

  section.catalog-header {
    width: 100%;
    background: ${({ theme }) => theme.colors.dark[300]};
    border-top: 2px solid ${({ theme }) => theme.colors.primary[300]};
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

  section.catalog-body {
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    padding: 0 2rem;
    max-width: 1000px;

    div.filter-bar {
      display: flex;
      justify-content: flex-start;
      column-gap: 20px;

      @media (max-width: 480px) {
        flex-direction: column;
        row-gap: 25px;
        margin: 0 auto;
        text-align: center;
        padding: 1rem;
      }
    }

    div.movies-list {
      margin-top: 45px;
      width: 100%;
    }

    div.controls {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      button + button {
        margin-left: 20px;
      }
    }

    @media (max-width: 480px) {
      .hide-mobile {
        display: none;
      }
    }
  }
`;
