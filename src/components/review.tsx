import styled from "styled-components";
import { ReviewType } from "./reviewList";
import moment from "moment";

type ReviewListProps = {
  review: ReviewType;
};

const ReviewBlock = styled.div`
  background-color: #ffffff;
  padding-bottom: 16px;
`;

const ReviewInfoBlock = styled.div`
  display: flex;
`;

const Nickname = styled.div`
  font-size: 16px;
  color: #333;
`;

const UpdatedDate = styled.div`
  font-size: 12px;
  color: #333;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 4px 0px;
`;

const Content = styled.div`
  display: -webkit-box;
  font-size: 16px;
  color: #333;
  margin: 4px 0px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Review: React.FC<ReviewListProps> = ({ review }) => {
  return (
    <ReviewBlock>
      <ReviewInfoBlock>
        <Nickname>{review.userNickname}</Nickname>
        <UpdatedDate>
          {moment(review.updatedAt * 1000).format("YYYY-MM-DD")}
        </UpdatedDate>
      </ReviewInfoBlock>
      <Title>{review.title}</Title>
      <Content>{review.content}</Content>
    </ReviewBlock>
  );
};

export default Review;
