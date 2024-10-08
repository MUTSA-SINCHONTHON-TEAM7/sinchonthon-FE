import styled from "styled-components";
import { AfterLoginNavBar } from "../components/AfterLoginNavBar.jsx";
import { BeforeLoginNavBar } from "../components/BeforeLoginNavBar.jsx";
import { useState, useEffect } from "react";
import { axiosInstance } from "../api/index.js";
import { useParams } from 'react-router-dom'; // useParams 훅을 import

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0px 145px 250px 145px;
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    margin-top: 20px;
`

const LectureImg = styled.img`
    width: 600px;
    height: 370px;
    border-radius: 21px;
    background: #EBEBEB;
`
const Title = styled.div`
    width: 600px;
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 14px;
    margin-top: 30px;
`
const DetailText = styled.div`
    width: 600px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
`
const Category = styled.div`
    display: inline-flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: 1px solid #000;
    background: #F5F5F5;
    max-width: fit-content;
`;

const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 30px;
    margin-bottom: 20px;
`
const FundingBtn = styled.button`
    display: flex;
    width: 600px;
    height: 55px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 11px;
    background: #FF7134;
    color: #FFF;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
`
const CurrentPeople = styled.div`
    color: #FF7134;
    text-align: right;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const TotalPeople = styled.div`
    color: #787878;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const RemainPeople = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: auto;
`
const Orange = styled.span`
    color: #FF7134;
`
const LectureDetail = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    useEffect(() => {
        // localStorage에서 access_token을 가져옴
        const token = localStorage.getItem('access_token');
        // 토큰이 있으면 로그인 상태로 설정
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    }, []);

    return(
        <Container>
            {isLoggedIn ? <AfterLoginNavBar /> : <BeforeLoginNavBar/>}
            <RowContainer>
                <ColumnContainer>
                    <LectureImg src="https://s3-alpha-sig.figma.com/img/49b5/e464/406e017f4f94678506177839606966a9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kya0OzI0w2rgjLNrO3k4~x2SS7jkNWh6rtGoc4rWyDJMqiN51c0mUOSuATqHu3J4sPNeNYOqyeDmXGc6QC82odjfVPgpgoudfjCn9zcLufCHkICHoZLMhY3Y-ia09HaS9Rq6Ek3aNitDTzCMB3BuyYPb5~Icn7DpvoGJMNtHkViwrTLj0VEU6qGeAvKLeDu2cITDOPG2ivV1tGb3xMLxXrN7WHNze-2a05oemqg2Tiq2vp3JNzHNwPCYMGHAV8z1zql1C81wnEoIOWidoDwe~NOFf2SdUjFHAZTckJ0r7zuevhCKUEnUKzST6h7ASfHFT04hXdMqyXVBqELK-da0iA__"/>
                    <Title>강의 소개</Title>
                    <DetailText>
                    개발 공부를 시작하고도 갈피를 못 잡는 분들, 백엔드 개발자의 커리어를 어떻게 쌓아야 할지 막막한 분들, 나는 프론트엔드가 맞을까? 백엔드가 맞을까? 고민이신 분들이라면 모두 주목해주세요.
네이버에서 커리어를 시작해 현재 스타트업을 거쳐 대기업의 CTO가 되기까지. 다수의 채용 면접을 진행하고 개발 조직을 이끌면서 느꼈던 경험과 지식을 체계적으로 정리하여 전달합니다. 주니어 백엔드 개발자가 갖추어야 할 실력, 그리고 취업을 하기 위해 갖추어야 할 경험, 그리고 회사 생활에 필요한 역량까지 클래스에 모두 담았습니다.
                    </DetailText>
                </ColumnContainer>
                <ColumnContainer>
                    <Category>IT</Category>
                    <Title>네이버 출신 CTO가 말하는 백엔드 개발자 커리어의 정석</Title>
                    <DetailText>박유정</DetailText>
                    <ProgressContainer>
                        <CurrentPeople>45</CurrentPeople>
                        <TotalPeople> / 50명</TotalPeople>
                        <RemainPeople>개설까지 <Orange>5명 </Orange>남았어요.</RemainPeople>
                    </ProgressContainer>
                    <FundingBtn>10000 캐시 펀딩하기</FundingBtn>
                </ColumnContainer>
            </RowContainer>
        </Container>
    );
};

export default LectureDetail;