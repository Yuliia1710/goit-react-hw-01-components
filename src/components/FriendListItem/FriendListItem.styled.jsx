import styled from '@emotion/styled';

export const Items = styled.li`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? `green` : `red`)};
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;
