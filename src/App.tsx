import { createGlobalStyle } from "styled-components";
import ChargerInfo from "./components/chargerInfo";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5; // 옅은 회색 배경
  }
`;

const mockCharger = {
  id: "20",
  chargeType: 2,
  location: "B 구역 3",
  status: 1,
  lastStatusUpdatedAt: 1706156202,
  output: 7,
  lastStartChargingTimestamp: 1706155870,
  lastEndChargingTimestamp: 1706159470,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ChargerInfo
        charger={mockCharger}
        address="서울특별시 강남구 역삼동 1000-100"
      />
    </>
  );
}

export default App;
