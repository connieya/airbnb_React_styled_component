/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 90%;
    margin: 10px auto;


`;

const CardContainer =  styled.div`
    margin-top: 10px;
    margin-bottom:10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    font-weight: bold;
`;

const CardBox = styled.div`

    border: 1px solid #bbbbbb;
    border-radius: 6px;
    height :90px;
    display:grid;
    grid-template-columns: 1fr 3fr;
    
  
    
`;

const MiddleImage = styled.div`
    
    background-image: url('images/ad1.jpg');
    background-size: 100% 100%;
    height: 400px;
    border-radius: 30px;
    background-repeat: no-repeat;
    margin: 35px 0;
`;

const CardImage1 = styled.div`
    background-image: url('images/card1.jpg');
    background-size: 100% 100%;
`;
const CardImage2 = styled.div`
    background-image: url('images/card2.jpg');
    background-size: 100% 100%;
`;
const CardImage3 = styled.div`
    background-image: url('images/card3.jpg');
    background-size: 100% 100%;
`;
const CardImage4 = styled.div`
    background-image: url('images/card4.jpg');
    background-size: 100% 100%;
`;

const CardInfo = styled.div`
    
    display: grid;
    align-items: center;
    margin-left: 10px;
`;

const TripBox = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    grid-column-gap:10px;
    margin : 20px 0 ;
`;

const TripImage1 = styled.div`
    background-image: url('images/choo1.png');
    background-size: 100% 100%;
    
    height:350px;
`;
const TripImage2 = styled.div`
    background-image: url('images/choo2.png');
    background-size: 100% 100%;
    
    height:350px;
`;
const TripImage3 = styled.div`
    background-image: url('images/choo3.png');
    background-size: 100% 100%;
    
    height:350px;
`;
const TripImage4 = styled.div`
    background-image: url('images/choo4.png');
    background-size: 100% 100%;
    
    height:350px;
`;
const TripImage5 = styled.div`
    background-image: url('images/choo5.png');
    background-size: 100% 100%;
    
    height:350px;
`;

const AdImage = styled.div`
    background-image: url('images/ad2.png');
    height: 400px;
    background-size: 100% 100%;
    margin: 20px 0;
`;

const RoomContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 20px 0;
`;

const RoomBox = styled.div`
    display: grid;
    grid-template-rows : 2fr 1fr;
`;

const RoomImage1 = styled.div`

    background-image: url('images/home1.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage2 = styled.div`

    background-image: url('images/home2.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage3 = styled.div`

    background-image: url('images/home3.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage4 = styled.div`

    background-image: url('images/home4.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage5 = styled.div`

    background-image: url('images/home5.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage6 = styled.div`

    background-image: url('images/home6.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage7 = styled.div`

    background-image: url('images/home7.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomImage8 = styled.div`

    background-image: url('images/home8.png');
    background-size: 100% 100%;
    height: 250px;
`;

const RoomInfo = styled.div`
   
`;

const P1 = styled.p`
     margin: 5px 0;
     color: gray;
     font-size: 13px;
`;

const H2 =styled.h2`
    font-size: 18px;
    color: rgb(60,60,60);
`;
const Span = styled.span`

    font-size: 12px;
    color: greenyellow;
    font-weight: 800;
`;

const P2 = styled.p`
     margin: 5px 0;
     font-size: 12px;
`;
const Main = () => {
    return (
        <div>
            <Container>
            <h2>에어비앤비 둘러보기</h2>
            <CardContainer>
                <CardBox>
                    <CardImage1></CardImage1>
                <CardInfo>숙소 및 부티크 호텔</CardInfo>
                </CardBox>
                <CardBox>
                    <CardImage2></CardImage2>
                <CardInfo>트립</CardInfo>
                </CardBox>
                <CardBox>
                    <CardImage3></CardImage3>
                <CardInfo>어드벤처</CardInfo>
                </CardBox>
                <CardBox>
                    <CardImage4></CardImage4>
                <CardInfo>레스토랑</CardInfo>
                </CardBox>

            </CardContainer>
            <MiddleImage></MiddleImage>
           
            <div>
                <div><h2>추천 여행지</h2></div>
                <TripBox>
                    <TripImage1></TripImage1>
                    <TripImage2></TripImage2>
                    <TripImage3></TripImage3>
                    <TripImage4></TripImage4>
                    <TripImage5></TripImage5>

                </TripBox>
            </div>

            <div>
                <div><h2>에어비앤비 플러스를 만나보세요!</h2></div>
                <div><p>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</p></div>
                <AdImage></AdImage>

            </div>

            <div>
            <div><h2>전 세계 숙소</h2></div>
            <RoomContainer>
                <RoomBox>
                    <RoomImage1></RoomImage1>
                    <RoomInfo>
                        <P1>오두막 - BALIAN BEACH, BALI </P1>
                        <H2>BALIAN TREEHOUSE w<br/> beautiful pool</H2>
                        <P2> <Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>185 슈퍼호스트</P2>
                    </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage2></RoomImage2>
                         <RoomInfo>
                        <P1>키클라데스 주택 - 이아(OIA) </P1>
                        <H2>Unique Architecture Cave House</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>188 슈퍼호스트</P2>
                    </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage3></RoomImage3>
                        <RoomInfo>
                         <P1>성 - 트웬티나인 팜스(TWENTYNINE PALMS) </P1>
                        <H2>Tile House</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>367 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage4></RoomImage4>
                         <RoomInfo>
                        <P1>검증된 - 케이프타운 </P1>
                        <H2>Modern, Chic Penthouse with Mountain, City & Sea Views</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>177 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage5></RoomImage5>
                         <RoomInfo>
                        <P1>아파트 전체 - 마드리드(MADRID) </P1>
                        <H2>솔광장에 위치한 개인 스튜디오</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>459 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage6></RoomImage6>
                        <RoomInfo>
                        <P1>집 전체 - HUMAC </P1>
                        <H2>Vacation house in etno-eco village Humac</H2>
                         {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                        <P2><Span role="img" aria-label="Star">⭐ ⭐ ⭐ ⭐ ⭐</Span>119 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage7></RoomImage7>
                        <RoomInfo>
                        <P1>개인실- 마라케시 </P1>
                        <H2>The Cozy Palace</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>559 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>
                <RoomBox>
                    <RoomImage8></RoomImage8>
                        <RoomInfo>
                        <P1>게스트용 별채 전체 - 로스엔젤레스 </P1>
                        <H2>Private Pool House with Amazing Views!</H2>
                        <P2><Span>⭐ ⭐ ⭐ ⭐ ⭐</Span>170 슈퍼호스트</P2>
                        </RoomInfo>
                </RoomBox>

            </RoomContainer>

            </div>

            </Container>
        </div>
    );
};

export default Main;