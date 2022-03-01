import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Header.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [close, setClose] = useState(true);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      {/* Logo */}
      <Link to="/">
        <img
          className="container__image"
          alt="TeslaLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/1200px-Tesla_Motors_Logo.svg.png"
        />
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <>
              <Link key={index} to="/" style={{ textDecoration: "none" }}>
                <p>{car}</p>
              </Link>
            </>
          ))}
      </Menu>
      <RightMenu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Shop</p>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Tesla Account</p>
        </Link>
      </RightMenu>
      <CustomMenu>
        <IconButton onClick={() => setClose(false)}>
          <MenuSharpIcon />
        </IconButton>
      </CustomMenu>
      {!close && (
        <>
          <Nav>
            <CloseIcon>
              <IconButton onClick={() => setClose(true)}>
                <CloseSharpIcon />
              </IconButton>
            </CloseIcon>
            {cars &&
              cars.map((car, index) => (
                <>
                  <Link key={index} to="/" style={{ textDecoration: "none" }}>
                    <li>{car}</li>
                  </Link>
                </>
              ))}
            <li> Solar Panel</li>
            <li> Solar Roof</li>
            <li> Existing Inventory</li>
            <li> Used Inventory</li>
            <li> Trade-in</li>
            <li> Cybertruck</li>
          </Nav>
        </>
      )}

      {/* Models */}
      {/* SHop  */}
      {/* TEsla Account  */}
      {/* Navbar */}
    </Container>
  );
};

export default Header;
const Container = styled.div`
  position: fixed;
  z-index: 100;
  min-height: 60px;
  max-height: 100px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  text-decoration: none;
  width: 100%;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  flex: 1;

  p {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 10px;
    font-size: 15px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0 10px;
    font-size: 15px;
  }
`;
const CustomMenu = styled.div`
  cursor: pointer;
`;

const Nav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 250px;
  z-index: 101;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
`;
const CloseIcon = styled.div`
  width: 100%;
  display: flex;
  padding-left: 80%;
  align-items: flex-end;
`;
