import styled from 'styled-components';
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`

`;
const InfoContainer = styled.div`
    flex: 1;
`;


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src='https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo'/>
                </ImgContainer>
                <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
