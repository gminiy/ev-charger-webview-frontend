import styled from "styled-components";
import Review from "./review";

export type ReviewType = {
  id: string;
  title: string;
  content: string;
  userNickname: string;
  chargerId: string;
  updatedAt: number;
};

type ReviewListProps = {
  reviews: ReviewType[];
};
const ReviewListBlock = styled.div`
  background-color: #ffffff;
  padding: 16px 32px;
  line-height: 1.5;
  line-width: 1.5;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: flex;
`;

const ReviewsCount = styled.div`
  margin-left: 8px;
  font-size: 22px;
  font-weight: bold;
  color: #28a745;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <ReviewListBlock>
      <Title>
        충전기 리뷰
        <ReviewsCount>{reviews.length}</ReviewsCount>
      </Title>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </ReviewListBlock>
  );
};

export default ReviewList;
