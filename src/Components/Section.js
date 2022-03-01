import React from "react";
import styled from "styled-components";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Fade } from "react-awesome-reveal";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Section = (
  { title, description, backgroundImg, leftBtnText, rightBtnText },
  test
) => {
  const [clicked, setClicked] = useState(false);
  const [blur, setBlur] = useState(false);

  //   const cars = useSelector(selectCars);
  //   useEffect(() => {
  //     if (clicked) {
  //       //   <Link
  //       //     to={{
  //       //       pathname: "/",
  //       //       state: clicked, // your data array of objects
  //       //     }}
  //       //   ></Link>;
  //       setBlur(true);
  //     }
  //   }, [clicked]);

  return (
    <div className="selction">
      <Wrap bgImage={backgroundImg}>
        <WrapText>
          <Fade bottom>
            <h1>{title}</h1>
            <p classname="wrap__description">{description}</p>
          </Fade>
        </WrapText>
        <WrapFooter>
          <Fade bottom>
            <WrapButton>
              {rightBtnText ? (
                <>
                  <LeftButton>{leftBtnText}</LeftButton>
                  <RightButton>{rightBtnText}</RightButton>
                </>
              ) : (
                <>
                  <LeftButton>{leftBtnText}</LeftButton>
                </>
              )}
            </WrapButton>
          </Fade>
          {rightBtnText ? (
            <DownArrow>
              <KeyboardArrowDownSharpIcon />
            </DownArrow>
          ) : (
            <>
              <DownArrow>
                <KeyboardArrowUpSharpIcon />
              </DownArrow>
            </>
          )}
        </WrapFooter>
      </Wrap>
    </div>
  );
};

export default Section;
// when we change the direction of trhe flex
// we also  change the direction of the align-items
const Wrap = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : `url("Big F")`};
  backgrounf-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const WrapText = styled.div`
  text-align: center;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WrapButton = styled.div`
  display: flex;
  margin-bottom: 16px;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;
const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 230px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.div`
  margin-top: 20px;
  height: 40px;
  margin-bottom: 10px;
  animation: animationDown infinite 1.5s;
`;

const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
