import styled from "styled-components";
import { FaultReportType } from "./faultReportList";
import moment from "moment";

type FaultReportProps = {
  faultReport: FaultReportType;
};

const FaultReportBlock = styled.div`
  background-color: #ffffff;
  padding-bottom: 16px;
`;

const FaultReportInfoBlock = styled.div`
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

const FaultReport: React.FC<FaultReportProps> = ({ faultReport }) => {
  return (
    <FaultReportBlock>
      <FaultReportInfoBlock>
        <Nickname>{faultReport.userNickname}</Nickname>
        <UpdatedDate>
          {moment(faultReport.updatedAt * 1000).format("YYYY-MM-DD")}
        </UpdatedDate>
      </FaultReportInfoBlock>
      <Title>{faultReport.title}</Title>
      <Content>{faultReport.content}</Content>
    </FaultReportBlock>
  );
};

export default FaultReport;
