import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './InputHistory.styles';

function InputHistory({ setCurrentStep }) {
  const { title, details } = useSelector(state => state.history);

  const handleButtonClick = step => {
    console.log(`Button for step ${step} clicked`); // 디버깅
    setCurrentStep(step);
  };

  return (
    <S.Container>
      <S.Header>축제 기획하기</S.Header>
      <S.Title>{title || '축제 제목을 입력하세요'}</S.Title>
      <S.ButtonContainer>
        <S.Button onClick={() => handleButtonClick(2)}>{details.location || '장소'}</S.Button>
        <S.Button onClick={() => handleButtonClick(3)}>{details.theme || '축제 테마'}</S.Button>
        <S.Button onClick={() => handleButtonClick(4)}>{details.period || '축제 기간'}</S.Button>
        <S.Button onClick={() => handleButtonClick(5)}>{details.target || '참여 대상'}</S.Button>
        <S.Button onClick={() => handleButtonClick(6)}>{details.cost || '참가 비용'}</S.Button>
        <S.Button onClick={() => handleButtonClick(7)}>{details.ticket || '티켓 방식'}</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default InputHistory;
