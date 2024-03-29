import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {opacity: 0.3}
  to {opacity: 1}
`;

type ContainerParams = {
  className?: string;
};

export const Container = styled.section<ContainerParams>`
  display: inline-block;
  vertical-align: top;
  column-gap: 20px;
  width: 50%;
  margin: 15px 0px;
  padding: 0 2.5rem 0 0;
  animation: ${fadeIn} 0.5s forwards;

  &.list-display {
    padding: 0px;
    display: block;
    width: 100%;
    margin: 30px 0px;
  }

  img {
    display: inline-block;
    vertical-align: top;
    width: 40%;
    border-radius: 4px;
    transition: 0.6s;

    &.list-display {
      width: 20%;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.6;
      transform: scale(0.97);
    }

    @media (max-width: 480px) {
      &.list-display {
        width: 100%;
      }

      padding: 1rem;
      width: 100%;
    }
  }

  a.movie-title {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5em;
    font-weight: 500;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.light};
    }
  }

  section {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 60%;
    padding-left: 1.5rem;

    @media (max-width: 480px) {
      margin: 0 auto;
      padding: 1rem;
      width: 100%;
    }

    p.category {
      margin-top: 5px;
      font-size: 1.2em;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    div {
      margin-top: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 10px;
    }

    p.movie-description {
      margin-top: 5px;
      font-size: 0.7em;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 800px) {
    padding: 0px;
    display: block;
    width: 100%;
    margin: 30px 0px;
  }
`;
