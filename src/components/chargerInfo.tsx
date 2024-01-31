import styled from "styled-components";
import { getTimeDifferenceString } from "../lib/getTimeDifferenceString";
type Charger = {
  id: string;
  chargeType: number;
  location: string;
  status: number;
  lastStatusUpdatedAt: number;
  output: number;
  lastStartChargingTimestamp?: number;
  lastEndChargingTimestamp?: number;
};

type ChargerInfoProps = {
  charger: Charger;
  address: string;
};

type StatusProps = {
  isAvailableCharger: boolean;
};

const CHARGER_TYPES = [
  "DC 차데모",
  "AC 완속",
  "DC차데모+AC3상",
  "DC콤보",
  "DC차데모+DC콤보",
  "DC차데모+AC3상",
  "+DC콤보",
  "AC3상",
];

const STATUS = [
  "통신이상",
  "충전가능",
  "충전중",
  "운영중지",
  "점검중",
  "상태미확인",
];

const ChargerInfoBlock = styled.div`
  background-color: #ffffff;
  padding: 16px 32px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const Location = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555555;
`;

const Address = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;

const Output = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 8px;
  margin-right: 16px;
`;

const ChargerType = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  padding: 0px 10px;
  border-left: 3px solid #eee;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  max-width: 300px;
  box-sizing: border-box;
`;

const Status = styled.div<StatusProps>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.isAvailableCharger ? "#28a745" : "#dc3545")};
  margin-bottom: 8px;
`;

const ChargingTimeInfo = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
  padding-left: 10px;
  border-left: 2px solid #ddd;
`;

const OutputBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ChargerInfo: React.FC<ChargerInfoProps> = ({ address, charger }) => {
  let chargingTimeInfoString;

  if (charger.lastStartChargingTimestamp && charger.lastEndChargingTimestamp) {
    if (charger.lastStartChargingTimestamp > charger.lastEndChargingTimestamp) {
      chargingTimeInfoString = `${getTimeDifferenceString(
        charger.lastStartChargingTimestamp
      )} 시작`;
    } else {
      chargingTimeInfoString = `${getTimeDifferenceString(
        charger.lastEndChargingTimestamp
      )} 종료`;
    }
  } else if (
    charger.lastStartChargingTimestamp &&
    !charger.lastEndChargingTimestamp
  ) {
    chargingTimeInfoString = `${getTimeDifferenceString(
      charger.lastStartChargingTimestamp
    )} 시작`;
  }

  return (
    <ChargerInfoBlock>
      <Title>충전기 정보</Title>
      <Location>{charger.location}</Location>
      <Address>{address}</Address>
      <OutputBlock>
        <Output>{charger.output}kW</Output>
        <ChargerType>{CHARGER_TYPES[charger.chargeType]}</ChargerType>
      </OutputBlock>

      <Card>
        <Status isAvailableCharger={charger.status === 1}>
          {STATUS[charger.status]}
        </Status>
        <ChargingTimeInfo>{chargingTimeInfoString}</ChargingTimeInfo>
      </Card>
    </ChargerInfoBlock>
  );
};

export default ChargerInfo;
