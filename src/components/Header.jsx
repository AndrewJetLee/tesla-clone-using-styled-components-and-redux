import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Link to='/'>
        <img src="/images/logo.svg" alt=""/>
      </Link>
      <Menu>
          <Link to='/ModelS'>Model S</Link>
          <Link to='/ModelS'>Model 3</Link>
          <Link to='/ModelS'>Model X</Link>
          <Link to='/ModelS'>Model Y</Link>
          <Link to='/ModelS'>Solar Roof</Link>
          <Link to='/ModelS'>Solar Panels</Link>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={(e) => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav burgerStatus={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={(e) => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-around;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;


  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 600;
    padding: 0 10px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 10px; 
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    props.burgerStatus ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
