import Inovation from "../../img/innovation.png";
import Trust from "../../img/trust.png";
import Cooporate from "../../img/cooporate.png";
import Grow from "../../img/grow.png";
import styled from "styled-components";

const CoreValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 8rem;
`;

const CoreValueTitle = styled.div`
  font-size: 3.4rem;
  padding: 2rem;
`;

const CoreValueASK = styled.span`
  font-size: 3rem;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.primary};
`;

const CoreValueContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr; /* 2열 */
  grid-template-rows: 1fr 1fr; /* 2행 */
  gap: 1.8rem;
`;

const CoreValueElement = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  font-size: 1.2rem;
`;

const StyledIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const CoreValueElementTitle = styled.div`
  font-weight: bold;
  text-align: center;
`;

const CoreValueElementContent = styled.div``;

function CompanyCoreValue() {
  return (
    <>
      <CoreValue>
        <CoreValueTitle>
          <CoreValueASK>ASK</CoreValueASK> 핵심 가치
        </CoreValueTitle>
        <CoreValueContainer>
          <CoreValueElement>
            <StyledIcon src={Inovation} />
            <CoreValueElementTitle>혁신 (Innovation)</CoreValueElementTitle>
            <CoreValueElementContent>
              끊임없이 도전하고, 변화를 주도합니다.
            </CoreValueElementContent>
          </CoreValueElement>
          <CoreValueElement>
            <StyledIcon src={Trust} />
            <CoreValueElementTitle>신뢰 (Trust)</CoreValueElementTitle>
            <CoreValueElementContent>
              고객과의 신뢰를 바탕으로 성장을 이룹니다.
            </CoreValueElementContent>
          </CoreValueElement>
          <CoreValueElement>
            <StyledIcon src={Cooporate} />
            <CoreValueElementTitle>협력 (Collaboration)</CoreValueElementTitle>
            <CoreValueElementContent>
              팀워크를 통해 더 큰 가치를 창출합니다.
            </CoreValueElementContent>
          </CoreValueElement>
          <CoreValueElement>
            <StyledIcon src={Grow} />
            <CoreValueElementTitle>성장 (Growth)</CoreValueElementTitle>
            <CoreValueElementContent>
              지속적인 학습과 발전을 추구합니다.
            </CoreValueElementContent>
          </CoreValueElement>
        </CoreValueContainer>
      </CoreValue>
    </>
  );
}

export default CompanyCoreValue;
