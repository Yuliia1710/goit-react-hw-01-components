import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
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

  background-color: #8ae1cd;
  border-radius: 8px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const ListStats = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 6px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  gap: 8px;
  /* display: flex;
  flex-wrap: wrap;
  gap: 15px; */
`;

export const Username = styled.p`
  font-weight: bold;
`;

export const Tag = styled.p`
  color: #7a7676c1;
  font-size: 18px;
`;

export const Location = styled.p`
  color: #7a7676c1;
  font-size: 18px;
`;
