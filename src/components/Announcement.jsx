import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over R$50
    </Container>
  )
}

export default Announcement
