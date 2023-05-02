import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 380px;
  text-align: center;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.03em;
  line-height: 1.1875;

  background-color: #5be0e0;
  border-radius: 8px;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  padding: 6px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;

  font-size: 16px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

export const Percentage = styled.span`
  font-size: 16px;
`;
