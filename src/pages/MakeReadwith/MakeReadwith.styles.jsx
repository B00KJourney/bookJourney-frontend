import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;

  * {
    outline: none; /* 기본 포커스 스타일 제거 */
    &:focus {
      outline: none; /* 포커스 상태에서도 기본 포커스 스타일 제거 */
    }
  }
`;

export const Button = styled.button`
  width: 152px;
  height: 90px;
  border-radius: 9px;
  border: ${({ $isSelected }) => ($isSelected ? '3px' : '1px')} solid #6aa5f8;
  background: #f6f7f9;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : ''};

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '400')};
  }

  &:hover {
    background: #e6f0ff;
  }
`;

export const ButtonContainer = styled.div`
  width: 393px;
  height: 110px;
  padding-top: 22px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 18px;
`;
