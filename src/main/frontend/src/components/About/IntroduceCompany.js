import styled from "styled-components";

const Introduce = styled.div`
  padding: 2rem 1rem;
  background-image: url("../img/company_Indroduce.jpg") no-repeat center center;
`;

const IntroduceTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 8rem;
`;

const IntroduceASK = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const IntroduceContentFirst = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4rem;
  padding-bottom: 2rem;
  font-size: 1.8rem;
`;

const IntroduceContentSecond = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  font-size: 1.8rem;
`;

const IntroduceContentThird = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 10rem 0;
  text-align: center;
`;

function IntroduceCompany() {
  return (
    <>
      <Introduce>
        <IntroduceTitle>
          기술로 연결된 세상, <IntroduceASK>ASK</IntroduceASK>가 만들어 갑니다.
        </IntroduceTitle>
        <IntroduceContentFirst>
          우리는 사람과 기술을 연결하여,
        </IntroduceContentFirst>
        <IntroduceContentSecond>
          새로운 가능성을 여는 글로벌 IT 파트너입니다.
        </IntroduceContentSecond>
        <IntroduceContentThird>
          함께 꿈꾸고, 함께 이루어 나가겠습니다.
        </IntroduceContentThird>
      </Introduce>
    </>
  );
}

export default IntroduceCompany;
