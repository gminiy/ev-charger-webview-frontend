import styled from "styled-components";
import { ReviewType } from "./reviewList";
import { useEffect, useState } from "react";
import axios from "axios";

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

const Warning = styled.div`
  font-size: 12px;
  color: red;
  text-align: right;
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
  const maxTitleLength = 50;
  const maxContentLength = 256;
  const [title, setTitle] = useState("");
  const [isTitleOverflow, setIsTitleOverflow] = useState(false);
  const [content, setContent] = useState("");
  const [isContentOverflow, setIsContentOverflow] = useState(false);

  useEffect(() => {
    if (review) {
      setTitle(review.title);
      setContent(review.content);
    }
  }, [review]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const input = event.target.value;
    if (input.length > maxContentLength) {
      setIsContentOverflow(true);
      return;
    }
    setContent(input);
    setIsContentOverflow(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length > maxTitleLength) {
      setIsTitleOverflow(true);
      return;
    }
    setTitle(input);
    setIsTitleOverflow(false);
  };

  const handleSubmit = async () => {
    if (title.length === 0 || content.length === 0) {
      alert("제목과 내용을 작성해주세요.");
      return;
    }
    try {
      await axios.post("http://10.0.2.2:8080/review/register", {
        title,
        content,
        chargerId,
        userId,
      });
    } catch (e) {
      alert("요청 실패, 다시 시도해주세요.");
    }
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
        {isTitleOverflow && (
          <Warning>입력 가능한 글자 수를 초과했습니다.</Warning>
        )}
        <Text>내용</Text>
        <TextArea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={handleContentChange}
          rows={8}
        />
        <TextCount>{`${content.length} / ${maxContentLength}`}</TextCount>
        {isContentOverflow && (
          <Warning>입력 가능한 글자 수를 초과했습니다.</Warning>
        )}
      </ReviewFormBlock>
      <Button onClick={handleSubmit}>작성 완료</Button>
    </ReviewFormContainer>
  );
};

export default ReviewForm;
