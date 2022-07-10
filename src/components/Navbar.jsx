import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    outline: none;
`;



const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`;



const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 15px;
    margin-right: 15px;
`;


const Navbar = () => {
  return (
    <Container>
       <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchOutlinedIcon style={{color: 'gray', fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>NCL Sell</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
                </MenuItem>
            </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar;
