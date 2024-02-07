import styled from "styled-components";
import FaultReport from "./faultReport";
import axios from "axios";
import usePromise from "../lib/usePromise";

export type FaultReportType = {
  id: string;
  title: string;
  content: string;
  userNickname: string;
  chargerId: string;
  updatedAt: number;
};

type FaultReportListProps = {
  chargerId: string;
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

const FaultReportList: React.FC<FaultReportListProps> = ({ chargerId }) => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(`http://10.0.2.2:8080/fault-report/${chargerId}`);
  }, [chargerId]);

  if (loading) {
    return <FaultReportListBlock />;
  }

  if (error) {
    return <FaultReportListBlock>에러 발생</FaultReportListBlock>;
  }

  if (!response) {
    return null;
  }

  const faultReports = response.data;

  return (
    <FaultReportListBlock>
      <Title>
        고장 신고
        <FaultReportsCount>{faultReports.length}</FaultReportsCount>
      </Title>
      {faultReports
        .sort(
          (a: FaultReportType, b: FaultReportType) => b.updatedAt - a.updatedAt
        )
        .map((faultReport: FaultReportType) => (
          <FaultReport key={faultReport.id} faultReport={faultReport} />
        ))}
    </FaultReportListBlock>
  );
};

export default FaultReportList;
