import styled from "styled-components";
import ChargerInfo from "../components/chargerInfo";
import ReviewList from "../components/reviewList";
import FaultReportList from "../components/faultReportList";
import Footer from "../components/footer";

type ChargerDetailScreenProps = {
  chargerId: string;
  userId: string;
};

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

const ChargerDetailScreen: React.FC<ChargerDetailScreenProps> = ({
  chargerId,
  userId,
}) => {
  return (
    <>
      <Wrapper>
        <ContentContainer>
          <ChargerInfo chargerId={chargerId} />
          <ReviewList chargerId={chargerId} />
          <FaultReportList chargerId={chargerId} />
        </ContentContainer>
        <Footer chargerId={chargerId} userId={userId} />
      </Wrapper>
    </>
  );
};

export default ChargerDetailScreen;
