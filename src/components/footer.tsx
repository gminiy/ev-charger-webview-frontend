import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import CampaignIcon from "@mui/icons-material/Campaign";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #f8f8f8;
  padding: 10px 0;
`;

const Button = styled.button`
  flex: 1;
  height: 52px;
  background-color: #28a745;
  color: white;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 8px;
`;

const Footer: React.FC = () => {
  const faultReportHandler = () => {};

  const writeReviewHandler = () => {};

  return (
    <FooterContainer>
      <Button onClick={faultReportHandler}>
        <CampaignIcon fontSize="small" />
        <Text>신고/제보</Text>
      </Button>
      <Button onClick={writeReviewHandler}>
        <EditIcon fontSize="small" />
        <Text>리뷰 쓰기</Text>
      </Button>
    </FooterContainer>
  );
};

export default Footer;
