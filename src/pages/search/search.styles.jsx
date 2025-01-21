import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // min-height 대신 height 사용
  background: #ffffff;
  position: relative;
  overflow: hidden; // 스크롤이 ContentContainer 내부에서만 발생하도록
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 56px 0 72px; // HeaderContainer 높이(56px)만큼 상단 패딩, FooterContainer 높이(56px) + 여유공간(16px)만큼 하단 패딩
  margin: 0;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 10;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px;
`;

export const BookListSection = styled.section`
  margin-top: 0px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 12px;

  span {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  button {
    font-family: Pretendard;
    font-size: 12px;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoResultsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
`;

export const ListTypeContainer = styled.div`
  display: ${(props) => (props.searchQuery ? 'flex' : 'none')};
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 5px;
`;

export const ListTypeButton = styled.button`
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  font-family: Pretendard;
  font-size: 14px;
  color: ${(props) => (props.isSelected ? '#000000' : '#666666')};
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    min-width: ${(props) => (props.isSelected ? 'calc(100% - 24px)' : '0')};
    height: 2px;
    background-color: ${(props) => (props.isSelected ? '#000000' : '#FFF')};
  }
`;