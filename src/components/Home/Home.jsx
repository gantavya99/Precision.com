import React from "react";
import Nav from "../Navbar/Nav";
import hero from "../../assets/div.png";
import Test from "../NavTest/Test";
import "./Home.css";
const Home = () => {
    const data=[
            { id: 1, title: "IronMan" },
           { id: 2, title: "Captain America" },
           { id: 3, title: "Thor" },
           { id: 4, title: "Black Widow",comic:"Marvel" },
           { id: 5, title: "Hulk",cominc:"Marvel" },
    ]
  return (
    <>
      
      <Test data={data} />
    
    </>
  );
};

export default Home;
