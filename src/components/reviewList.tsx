import styled from "styled-components";
import Review from "./review";
import axios from "axios";
import usePromise from "../lib/usePromise";

export type ReviewType = {
  id: string;
  title: string;
  content: string;
  userNickname: string;
  chargerId: string;
  updatedAt: number;
};

type ReviewListProps = {
  chargerId: string;
};

const ReviewListBlock = styled.div`
  background-color: #ffffff;
  padding: 16px 32px;
  line-height: 1.5;
  line-width: 1.5;
  margin-bottom: 10px;
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

const ReviewList: React.FC<ReviewListProps> = ({ chargerId }) => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(`http://10.0.2.2:8080/review/${chargerId}`);
  }, [chargerId]);

  if (loading) {
    return <ReviewListBlock />;
  }

  if (error) {
    return <ReviewListBlock>에러 발생</ReviewListBlock>;
  }

  if (!response) {
    return null;
  }

  const reviews = response.data;

  return (
    <ReviewListBlock>
      <Title>
        충전기 리뷰
        <ReviewsCount>{reviews.length}</ReviewsCount>
      </Title>
      {reviews.map((review: ReviewType) => (
        <Review review={review} />
      ))}
    </ReviewListBlock>
  );
};

export default ReviewList;
