import styled from "styled-components";
import { ReviewType } from "./reviewList";
import { useEffect, useState } from "react";

type ReviewFormProps = {
  chargerId: string;
  userId: string;
  review?: ReviewType;
};

const ReviewFormContainer = styled.div`
  background-color: #ffffff;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  justify-content: space-between;
  height: 100vh;
`;

const ReviewFormBlock = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 16px;
  margin: 8px 0;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  margin: 8px 0;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextCount = styled.div`
  font-size: 14px;
  color: #888;
  text-align: right;
  margin-right: 16px;
`;

const Button = styled.button`
  height: 52px;
  background-color: #28a745;
  color: white;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0px;
`;

const ReviewForm: React.FC<ReviewFormProps> = ({
  chargerId,
  userId,
  review,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (review) {
      setTitle(review.title);
      setContent(review.content);
    }
  }, [review]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <ReviewFormContainer>
      <ReviewFormBlock>
        <Text>제목</Text>
        <Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={handleTitleChange}
        />
        <Text>내용</Text>
        <TextArea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={handleContentChange}
          rows={8} // 초기 행 수
        />
        <TextCount>{`${content.length} / 1200`}</TextCount>
      </ReviewFormBlock>
      <Button>작성 완료</Button>
    </ReviewFormContainer>
  );
};

export default ReviewForm;
