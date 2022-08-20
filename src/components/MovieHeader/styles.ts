import styled from 'styled-components';

import Theather from '../../images/theather.png';

export const Container = styled.section`
  padding-bottom: 2rem;
  width: 100%;
  background-image: url(${Theather});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 650px) {
    background: transparent;
  }
`;

export const MovieSection = styled.section`
  padding: 4rem;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  column-gap: 50px;
  row-gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const About = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const Image = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 40%;
  border-radius: 4px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled.h4`
  font-size: 2.6em;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 2.2em;
  }
`;

export const HalfSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  color: #fe3189;
`;

export const Description = styled.p`
  margin-top: 40px;
  font-size: 0.9em;
  font-weight: 100;
  color: #eaeaea;

  & span {
    display: block;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 10px;
  }
`;

export const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;
