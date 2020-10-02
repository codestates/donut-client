import React from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from '../Common/ResponsiveWrapper';
import ActivityItem from './ActivityItem';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const WriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Activity = ({ loading, error, activities, showWriteBtn }) => {
  if (error) {
    return <ResponsiveWrapper>에러가 발생했습니다.</ResponsiveWrapper>;
  }
  return (
    <ResponsiveWrapper>
      {showWriteBtn && (
        <WriteButtonWrapper>
          <Link to="/write">
            <Button>활동 작성</Button>
          </Link>
        </WriteButtonWrapper>
      )}
      <Wrapper>{!loading && activities && <ActivityItem />}</Wrapper>
    </ResponsiveWrapper>
  );
};

export default Activity;
