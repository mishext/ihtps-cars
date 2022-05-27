import React, { useEffect, useState } from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import data from "../../Cars/Cars.json";
import Icon1 from "../../Images/icon1.png";
import Icon2 from "../../Images/icon2.png";
import Icon3 from "../../Images/icon3.png";
import Icon4 from "../../Images/icon4.png";
import WhatsApp from "../../Images/whatsapp.png";
import Logo from "../../Images/logo2.png";
import Banner from "../../Images/banner.jpg";
import Loader from "react-loader";
import MovingComponent from "react-moving-text";

// data.data

export default function HomePage() {
  const [originalData, setOrignalData] = useState(data.data);

  // const [originalData, setOrignalData] = useState([]);

  // useEffect(() => {
  // fetch here
  // setOrignalData(firebase array )
  // }, []);

  if (!originalData.length) {
    return <Loader loaded={false} />;
  }

  return (
    <div>
      <header className="headerContainer">
        <div className="headerContent">
          <p className="p1">Buy your car online</p>
          <p className="p2">Now with one click</p>
          <button className="headerButton">CLICK HERE TO SEE CARS</button>
        </div>
      </header>
      <div className="MovingContainer">
        <MovingComponent
          type="typewriter"
          dataText={[
            "PROMOTIONS",
            "Discount 10% on all the Cars",
            "Get it Now !",
          ]}
        />
      </div>
      <div className="mainDescription">
        <p>Select Your Car</p>
        <hr />
      </div>
      <main className="mainContainer">
        <div className="typesButton">
          <button
            onClick={() => setOrignalData(data.data)}
            className="buttontypes"
          >
            All Cars
          </button>
          {data.data.map((item, index) => {
            return (
              <button
                className="buttontypes"
                key={String(index)}
                onClick={() => {
                  setOrignalData(
                    data.data.filter(
                      (current) => current.manufacturer == item.manufacturer
                    )
                  );
                }}
              >
                <img src={item.icon} alt="carIcon" className="carIcon" />{" "}
                {item.manufacturer}
              </button>
            );
          })}
        </div>
        <div className="gridContainer">
          {originalData.map((e, index) => {
            {
              return e.cars.map((item, index) => (
                <div key={index}>
                  <Card className="Card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img}
                      alt="car image"
                    />

                    <div className="cardContent">
                      <p className="carType">
                        <p key={String(index)}>{item.manufacturer}</p>
                        <p className="carKm">{item.km}</p>
                      </p>
                      <p className="carPrice">{item.price}</p>
                    </div>
                  </Card>
                </div>
              ));
            }
          })}
        </div>
      </main>
      <div className="featuresSection">
        <div className="featuresCard">
          <img src={Icon1} className="featuresIcon" alt="features icon" />
          <p className="featuresp1">Money Back Guarantee</p>
          <p className="featuresp2">
            A 10-Days return policy on any car purchases through IHTPS-CARS
          </p>
        </div>
        <div className="featuresCard">
          <img src={Icon2} className="featuresIcon" alt="features icon" />
          <p className="featuresp1">1 Year Warranty</p>
          <p className="featuresp2">
            Drive your car for 1 year with the peace of mind of a new car. You
            can even choose to extend it by another year.
          </p>
        </div>
        <div className="featuresCard">
          <img src={Icon3} className="featuresIcon" alt="features icon" />
          <p className="featuresp1">Delivered to Your Doorstep</p>
          <p className="featuresp2">
            Simple viewings at your home or at any of our national branches.
          </p>
        </div>
        <div className="featuresCard">
          <img src={Icon4} className="featuresIcon" alt="features icon" />
          <p className="featuresp1">Multiple Financing Options</p>
          <p className="featuresp2">
            Hassle-free and quick financing made possible.
          </p>
        </div>
      </div>
      <div className="bannerContainer">
        <div className="bannerpContainer">
          <p>
            Unlock your car's value <br /> with quick and easy financing.
          </p>
        </div>
        <img src={Banner} alt="Banner" className="bannerImg" />
      </div>
      <div className="footerContainerbg">
        <footer className="footerContainer">
          <img src={Logo} className="car-Logo" />
          <div className="footerInfo">
            <p className="footerp1">
              Your go-to platform to find high-quality pre-owned cars.
              IHTPS-CARS is UAE's leading website to find, buy <br /> and
              finance your next car.
            </p>
            <p className="footerPhone">+971 50 251 1764</p>
            <p className="footerCopyRights">
              IHTPS-CARS - 2022 © All rights reserved
            </p>
          </div>
        </footer>
      </div>
      <div className="whatsAppIcon">
        <a href="#">
          <img src={WhatsApp} className="whatsAppImg" />
        </a>
      </div>
    </div>
  );
}
