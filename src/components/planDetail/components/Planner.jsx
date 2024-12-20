import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Planner.styles';
import defaultProfileImage from '../../../assets/images/default-profile-image.svg';

function Planner() {
  const navigate = useNavigate();
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    if (currentPlan) {
      setUserName(currentPlan.username);
      setName(currentPlan.name);
      setFollowerCount(currentPlan.followerCount);
    }
  }, [currentPlan]);
  const handleNavigate = () => {
    navigate(`/notmypage/${userName}`);
  };
  return (
    <S.PlannerContainer onClick={handleNavigate}>
      <S.PlannerTitle>기획자</S.PlannerTitle>
      <S.Planner>
        <S.PlannerProfile src={defaultProfileImage} alt="image" />
        <S.PlannerDetailContainer>
          <S.PlannerDetail>
            <S.PlannerName>{name}</S.PlannerName>
            <S.PlannerFollower>팔로워 {followerCount}</S.PlannerFollower>
          </S.PlannerDetail>
          <S.FollowButton>팔로우</S.FollowButton>
        </S.PlannerDetailContainer>
      </S.Planner>
    </S.PlannerContainer>
  );
}
export default Planner;
