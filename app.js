import React from "react";
import ReactDOM from "react-dom/client";

// header
//logo-nav_items
//body
//restaurent_container

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"  src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = (props) => {
    const { resName, catagory, cuisine, rating } = props;
    console.log(props)
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/slheenytwb3iaypqf4yd"/>
            <div className="res-details">
            <h2>{resName}</h2>
            <h5>{catagory}</h5>
            <h5>{cuisine}</h5>
            <div className="rating">
                <h6>{rating}</h6>
                <img className="rat-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQ8HybrVN6zjwN1JbQbDAEMHwDIEaXb4wmCWU0aoJbnMDO_UJhSMlky6MqmBoL7U6qhY&usqp=CAU"/>
                
            </div>
                
            </div>
            
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body"> 
            <div className="search_bar"> Search</div>
            <div className="res-container">
                <ResCard resName="RR Salem" catagory="Biryani, Non-Veg" cuisine="North Indian" rating="4.6"></ResCard>
                <ResCard resName="Thalapakattu" catagory="Biryani, Non-Veg" cuisine="North Indian" rating="4.0"></ResCard>
                <ResCard resName="A2B" catagory="Dosa, Veg" cuisine="South Indian" rating="4.1"></ResCard>
                <ResCard resName="Sangeetha" catagory="Pongal, Veg" cuisine="South Indian" rating="4.4"></ResCard>
                
                
            </div>

        </div>
        
    )
}

const AppComp = () =>{
    return(
        <div className="app">
            <Header/>
            <Body></Body>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("divEle"));
root.render(<AppComp/>)
       
    