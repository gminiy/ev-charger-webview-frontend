import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChargerDetailScreen from "./screen/chargerDetailScreen";
import ReviewForm from "./components/reviewForm";
import FaultReportForm from "./components/faultReportForm";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    line-height: 1.5;
    letter-spacing: 1px;
  }
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
          <Route
            path="/review-form"
            element={<ReviewForm chargerId={chargerId} userId={userId} />}
          />
          <Route
            path="/fault-report-form"
            element={<FaultReportForm chargerId={chargerId} userId={userId} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
