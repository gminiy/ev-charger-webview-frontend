import styled from "styled-components";
import FaultReport from "./faultReport";

export type FaultReportType = {
  id: string;
  title: string;
  content: string;
  userNickname: string;
  chargerId: string;
  updatedAt: number;
};

type FaultReportListProps = {
  faultReports: FaultReportType[];
};
const FaultReportListBlock = styled.div`
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

const FaultReportsCount = styled.div`
  margin-left: 8px;
  font-size: 22px;
  font-weight: bold;
  color: #28a745;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FaultReportList: React.FC<FaultReportListProps> = ({ faultReports }) => {
  return (
    <FaultReportListBlock>
      <Title>
        고장 신고
        <FaultReportsCount>{faultReports.length}</FaultReportsCount>
      </Title>
      {faultReports.map((faultReport) => (
        <FaultReport faultReport={faultReport} />
      ))}
    </FaultReportListBlock>
  );
};

export default FaultReportList;
