import React, { useState } from 'react';
import { Container } from './Record.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BackBtn from '../../assets/arrow.svg';
import Sort from './sort.svg';
import Line from './line.svg';
import Checked from '../bookmark/checked.svg';
import Book from './Book';
import Dummy1 from './dummy1.svg';
import Dummy2 from './dummy2.svg';
import Dummy3 from './dummy3.svg';
import Dummy4 from './dummy4.svg';
import InfoPopup from '../../components/infoPopup/InfoPopup';

const Record = () => {
  const [showSortPopup, setShowSortPopup] = useState(false); // Sort 팝업 상태
  const [showInfoPopup, setShowInfoPopup] = useState(false); // InfoPopup 상태
  const [selectedOrder, setSelectedOrder] = useState('latest-order'); // 기본 선택: 최신순
  const [selectedBook, setSelectedBook] = useState(null); // 현재 선택된 책 정보

  // Sort 팝업 관련
  const handleSortClick = () => {
    setShowSortPopup(true); // Sort 팝업 표시
  };

  const handleSortClose = () => {
    setShowSortPopup(false); // Sort 팝업 숨김
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order); // 선택된 정렬 기준 업데이트
    setShowSortPopup(false); // Sort 팝업 숨김
  };

  // InfoPopup 관련
  const handleDotsClick = (book) => {
    setSelectedBook(book); // 선택된 책 업데이트
    setShowInfoPopup(true); // InfoPopup 표시
  };

  const handleCloseInfoPopup = () => {
    setShowInfoPopup(false); // InfoPopup 숨김
    setSelectedBook(null); // 선택된 책 초기화
  };

  const handleLine1Click = () => {
    console.log(`[${selectedBook.bookTitle}] 정보 보기`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleLine2Click = () => {
    console.log(`[${selectedBook.bookTitle}]를 기록에서 삭제`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  return (
    <Container>
      <StatusBar />
      {/* Sort 팝업의 overlay */}
      {showSortPopup && (
        <div className="overlay" onClick={handleSortClose}></div>
      )}

      {/* InfoPopup의 overlay */}
      {showInfoPopup && (
        <div className="overlay" onClick={handleCloseInfoPopup}></div>
      )}

      <div className="header">
        <img className="back-btn" src={BackBtn} alt="뒤로가기" />
        <p className="title-message">
          <span className="nickname">닉네임</span>님의 진행중 기록
        </p>
        <p className="total">
          전체 <span className="number">5</span>
        </p>
        <p className="sort" onClick={handleSortClick}>
          {selectedOrder === 'latest-order' ? '최신순' : '유저진행도순'}
          <img className="sort-img" src={Sort} alt="정렬 이미지" />
        </p>
      </div>
      <div className="content">
        <Book
          imageSrc={Dummy1}
          bookTitle="밤의 여행자들"
          readType="같이"
          writer="윤고은"
          hour={1}
          percentage={50}
          onDotsClick={handleDotsClick}
        />
        <Book
          imageSrc={Dummy2}
          bookTitle="모든 삶은 흐른다"
          readType="혼자"
          writer="로랑스 드빌레르"
          hour={1}
          percentage={100}
          onDotsClick={handleDotsClick}
        />
        <Book
          imageSrc={Dummy3}
          bookTitle="말의 품격"
          readType="혼자"
          writer="이기주"
          hour={1}
          percentage={50}
          onDotsClick={handleDotsClick}
        />
        <Book
          imageSrc={Dummy4}
          bookTitle="이기적 유전자"
          readType="같이"
          writer="리처드 도킨스"
          hour={1}
          percentage={50}
          onDotsClick={handleDotsClick}
        />
        <Book
          imageSrc={Dummy2}
          bookTitle="모든 삶은 흐른다"
          readType="혼자"
          writer="로랑스 드빌레르"
          hour={1}
          percentage={100}
          onDotsClick={handleDotsClick}
        />
        <Book
          imageSrc={Dummy2}
          bookTitle="모든 삶은 흐른다"
          readType="혼자"
          writer="로랑스 드빌레르"
          hour={1}
          percentage={100}
          onDotsClick={handleDotsClick}
        />
        {/* 다른 Book 컴포넌트들 */}
      </div>

      {/* Sort 팝업 */}
      {showSortPopup && (
        <div className="popup">
          <img className="line" src={Line} alt="검정선" />
          <div
            className={`latest-order ${
              selectedOrder === 'latest-order' ? 'selected' : ''
            }`}
            onClick={() => handleOrderClick('latest-order')}
          >
            <span className="order-text">최신순</span>
            {selectedOrder === 'latest-order' && (
              <img className="check-icon" src={Checked} alt="체크" />
            )}
          </div>
          <div
            className={`progressive-order ${
              selectedOrder === 'progressive-order' ? 'selected' : ''
            }`}
            onClick={() => handleOrderClick('progressive-order')}
          >
            <span className="order-text">유저진행도순</span>
            {selectedOrder === 'progressive-order' && (
              <img className="check-icon" src={Checked} alt="체크" />
            )}
          </div>
        </div>
      )}

      {/* InfoPopup */}
      {showInfoPopup && selectedBook && (
        <InfoPopup
          onLine1Click={handleLine1Click}
          onLine2Click={handleLine2Click}
        />
      )}
    </Container>
  );
};

export default Record;