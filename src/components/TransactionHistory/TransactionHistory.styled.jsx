import styled from '@emotion/styled';

export const StatisticContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;

  background-color: #5be0e0;
  border-radius: 8px;
`;

export const Table = styled.table`
  margin: auto;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin-bottom: 30px;
`;

export const TableHead = styled.thead`
  font-size: 18px;
  background-color: #369a9a;
  border: 1px solid black;
`;

export const Tr = styled.tr`
  font-size: 16px;
`;
