import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import data from "../constants/info";
import colors from "../constants/colors";
import ocean from "../images/ocean-bg.jpg";
import profile from "../images/profile-pic.jpeg";
import ln from "../images/linkedin-logo.svg";
import twitter from "../images/twitter-circular.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin-circular.svg";
// import medium from "../images/medium.svg";
// import github from "../images/medium.svg";
// import stackoverflow from "../images/stackoveflow.svg";

const Container = styled.div`
  color: ${colors.primaryText};
  overflow-y: scroll;
  position: relative;
  width: 25%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  overflow-x: hidden;
  background-size: cover;
  background-image: url(${ocean});
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  .child {
    position: relative;
    z-index: 100;
    height: 100%;
  }

  .child::before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #161414;
    opacity: 0.6;
    z-index: -10;
  }

  .activeLink {
    color: white !important;
    width: 100%;
    :after {
      content: " >";
      right: 0;
    }
  }

  .name {
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px 0px;
  }

  .designation {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .ul {
    list-style: none;
    text-align: left;
  }
  .ul li {
    margin: 20px 0px 0px 20px;
    position: relative;
  }

  .activeLink:after {
    content: " ";
    display: block;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-right: 8px solid #fff;
    bottom: 6px;
    left: auto;
    right: 0;
    position: absolute;
  }

  .social {
    display: flex;
    padding-left: 0px;
    list-style: none;
    a {
      text-decoration: none;
    }

    color: white !important;
  }

  .arrow:after {
    content: " >";
    right: 0;
    color: white;
  }

  .arrow {
    display: inline;
  }

  .child li a {
    color: rgba(255, 255, 255, 0.6);
  }

  .child .ul li:hover {
    border-left: 3px solid #e59595;
    padding-left: 5px;
    transition: padding 0.5s;
  }

  .get-in-touch {
    margin-top: 80px;
    padding-left: 40px;
    margin-left: 0px;
    list-style: none;
    text-align: left;
    position: relative;

    li {
      margin: 20px 0px 0px 20px;
      margin-top: 0px;

      img:hover {
        width: 50px;
        height: 50px;
        transition: width 0.5s;
        transition: height 0.5s;
      }
    }
  }
`;

const Img = styled.img`
  width: ${props => (props.width ? props.width : "300px")};
  height: ${props => (props.height ? props.height : "auto")};
  border-radius: ${props => (props.radius ? props.radius : "0px")};
`;

const Avatar = props => {
  return (
    <Img
      src={props.img}
      style={{ width: "200px", height: "160px" }}
      radius="600px"
    />
  );
};

const Header = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <Avatar img={profile} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "25px"
        }}
      >
        <h1 className="name">{data.profile.name}</h1>
        <h2 className="designation">{data.profile.designation}</h2>
      </div>
    </div>
  );
};

class SideMenu extends Component {
  render() {
    console.log(this.props.location);
    return (
      <Container>
        <div className="child">
          <div>
            <Header />
            <ul
              className="ul"
              style={{
                listStyle: "none",
                textAlign: "left"
              }}
            >
              {data.menu.map((menuItem, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      activeClassName={
                        window.location.pathname == menuItem.route
                          ? "activeLink"
                          : ""
                      }
                      onClick={() => console.log("Clicked route")}
                      style={{
                        textDecoration: "none"
                      }}
                      to={menuItem.route}
                    >
                      {menuItem.label}
                      <div
                        className={
                          window.location.pathname == menuItem.route
                            ? "arrow"
                            : ""
                        }
                      />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="get-in-touch" style={{ textAlign: "left" }}>
            <span style={{ marginLeft: "20px", color: "rgba(255,255,255,.6)" }}>
              Get In Touch
            </span>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/rahul-rana-b713499a/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <img src={linkedin} width="40px" height="40px" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/3rahul4" target="_blank">
                  <img src={facebook} width="40px" height="40px" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/rahulrana_95" target="_blank">
                  <img src={twitter} width="40px" height="40px" />
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default SideMenu;
