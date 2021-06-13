import styled from 'styled-components';

export const Container = styled.section`
  display: inline-block;
  vertical-align: top;
  column-gap: 20px;
  width: 50%;
  justify-content: flex-start;
  margin: 15px 0px;
  padding: 0 2.5rem 0 0;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 40%;
  border-radius: 4px;
  transition: 0.6s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transform: scale(0.97);
  }
`;

export const About = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  width: 60%;
  padding-left: 1.5rem;
`;

export const Title = styled.h4`
  font-size: 1.5em;
  font-weight: 500;
`;

export const Category = styled.p`
  margin-top: 5px;
  font-size: 1.2em;
  font-weight: 300;
  color: #fe3189;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-size: 0.7em;
  font-weight: 300;
  color: #eaeaea;
`;

export const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;
