import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid red;
  padding: 24px;
  border-radius: 6px;
  ${props =>
    props.$dark &&
    `
      background-color: black;
      color: white;
      border:none;
    `}}
`;
export default function Card() {
  return (
    <CardContainer $dark>
      <h2>styled components</h2>
      <p>이것은 styled-components로 만든 카드입니다.</p>
    </CardContainer>
  );
}
