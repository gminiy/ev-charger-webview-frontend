import styled from "styled-components";
import { ReviewType } from "./reviewList";
import moment from "moment";

type ReviewFormProps = {
  chargerId: string;
  userId: string;
  review?: ReviewType;
};

const ReviewFormBlock = styled.div`
  background-color: #ffffff;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: bolod;
`;

const ReviewForm: React.FC<ReviewFormProps> = ({
  chargerId,
  userId,
  review,
}) => {
  return <ReviewFormBlock></ReviewFormBlock>;
};

export default ReviewForm;
