import styled from "styled-components";


const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;   
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 10px;
    color: white;
`;

const Button = styled.button`
    margin: 10px;
    border: none;
    padding: 15px;
    background-color: rgba(190,190,190,0.6);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: rgba(190,190,190,1);
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>    
  )
}

export default CategoryItem;
