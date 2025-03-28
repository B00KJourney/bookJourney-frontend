import styled from 'styled-components';

export const LoginContainer = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  background-color: #f6f7f9;

  & > *:nth-child(3) {
    margin-top: 50px;
    margin-bottom: 61px;
  }

  .error-message {
    position: relative;
    color: red;
    font-size: 11px;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    top: -57px;
    left: 40px;
  }

  .title {
    position: relative;
    margin-top: 97px;
    margin-left: 155px;
    margin-bottom: 160px;
  }

  .input-field {
    position: relative;
    left: 25px;
  }

  /**
  .find-password {
    position: absolute;
    left: 20px;
    margin-top: 34px;
    padding: 0;
    width: auto;
    height: 20px;
    background: none; /* 버튼 배경 제거 */
  //border: none; /* 버튼 테두리 제거 */
  //color: var(--sds-color-text-default-default);
  //font-family: Pretendard;
  //font-size: 14px;
  //font-style: normal;
  //text-decoration: underline; /* 밑줄 추가 */
  //outline: none;
  //}

  .question {
    position: absolute;
    margin-top: 134px;
    left: 106px;
    display: inline-block;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 114.286% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// 버튼을 정렬하는 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly; /* 버튼이 1개일 경우 중앙 배치 */
  width: 100%; /* 부모 컨테이너의 전체 너비 */
  margin-top: 20px;
`;
