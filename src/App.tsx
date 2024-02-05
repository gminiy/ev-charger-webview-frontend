import styled, { createGlobalStyle } from "styled-components";
import ChargerInfo from "./components/chargerInfo";
import ReviewList from "./components/reviewList";
import FaultReportList from "./components/faultReportList";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChargerDetailScreen from "./screen/chargerDetailScreen";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding-bottom: 60px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
let isFlutterInAppWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", () => {
  isFlutterInAppWebViewReady = true;
});

declare global {
  interface Window {
    flutter_inappwebview: any;
  }
}

function App() {
  const [chargerId, setChargerId] = useState("");
  const [userId, setUserId] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isFlutterInAppWebViewReady) {
      window.flutter_inappwebview
        .callHandler("initDataHandler")
        .then((data: string) => {
          const initData: { userId: string; chargerId: string } =
            JSON.parse(data);
          setChargerId(initData.chargerId);
          setUserId(initData.userId);
        });
      return;
    }
    setCount(count + 1);
  }, [count]);

  if (!chargerId || !userId) {
    return <></>;
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ChargerDetailScreen chargerId={chargerId} userId={userId} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
