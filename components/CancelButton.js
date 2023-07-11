import styled from 'styled-components';

export const CancelButton = styled.button`
  background-color: white;
  color: black;
  padding: 5px 30px;
  font-size: 16px;
  border-radius: 3px;
  margin: 10px 0;
  cursor: pointer;

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;