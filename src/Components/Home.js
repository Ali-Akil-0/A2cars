import React from "react";
import styled from "styled-components";
import Section from "./Section";
import ModelS from "../images/model-s.jpg";
import Model3 from "../images/model-3.jpg";
import ModelX from "../images/model-x.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import ModelY from "../images/model-y.jpg";
import Accessories from "../images/accessories.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  //   const [clicked, setClicked] = useState(false);
  //   useEffect(() => {
  //     // const { state } = this.props.location;
  //     // console.log(state);
  //   });
  const [top, setTop] = useState(false);
  useEffect(() => {
    console.log("Top => ");
    console.log(top);
  });
  console.log(top);

  return (
    <Container>
      <div className="SnapContainer">
        <section>
          <Section
            // parentCallback={this.handleCallback}
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelS}
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            test={(word) => setTop(word)}
          />
        </section>
        <section>
          <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg={Model3}
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
          />
        </section>
        <section>
          <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelX}
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
          />
        </section>
        <section>
          <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelY}
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
          />
        </section>
        <section>
          <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg={SolarPanel}
            leftBtnText="Order Now"
            rightBtnText="Learn More"
          />
        </section>
        <section>
          <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg={SolarRoof}
            leftBtnText="Order Now"
            rightBtnText="Learn More"
          />
        </section>
        <section>
          <Section
            title="Accessories"
            description=""
            backgroundImg={Accessories}
            leftBtnText="Shop Now"
          />
        </section>
        {/* <Section />
      <Section />
      <Section /> */}
      </div>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: x mandatory;
`;
