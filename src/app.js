
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <div className="header">
    <div className="logo">
      <img alt="logo" src="https://b.zmtcdn.com/images/logo/zomato_logo_2017.png" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
}


const RestaurantCard = (props)=>{
  const {resData}=props;
  console.log(resData);
  return <div className="res-card">
    <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zeok8qdkwokjmrjbxres" />
    <h3>sdf</h3>
    <h4>dfgdfg</h4>
    <h4>4.4 stars</h4>
    <h4>39 minutes</h4>

  </div>
}

const resData=   [];


const Body=()=>{

  return <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {/* <RestaurantCard resName="Meghana foods" resCuisine="Vadapav, Indian, Mumbai" /> */}
      <RestaurantCard resData={resData[0]}/>
      
      
    </div>
  </div>
}
const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

