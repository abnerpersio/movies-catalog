import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 2rem;
  max-width: 1000px;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
`;

export const Select = styled.select`
  background: linear-gradient(180deg, #212125 0%, #2e2e35 100%), #212125;
  border: 2px solid #2e2d31;
  border-radius: 4px;
  color: #eaeaea;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  font-size: 1em;

  & option {
    background: #212125;
    color: #eaeaea;
  }
`;

export const DarkButton = styled.button`
  background: linear-gradient(180deg, #212125 0%, #2e2e35 100%), #212125;
  border: 2px solid #2e2d31;
  border-radius: 4px;
  color: #eaeaea;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(180deg, #fe3189 0%, #fe3189 100%), #fe3189;
  box-shadow: 0px 0px 6px #ff0772;
  border: 1px solid #fe3189;
  border-radius: 4px;
  color: #eaeaea;
  font-weight: 600;
  font-size: 1em;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    background: #ff0772;
  }
`;

export const CenterButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 25px;

  &:hover {
    background: transparent;
    color: #fe3189;
  }
`;

CenterButton.propTypes = {
  onClick: PropTypes.func,
};

export const MoviesList = styled.div`
  margin-top: 45px;
  width: 100%;
`;
