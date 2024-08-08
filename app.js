import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="logo" />
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
    );
};

const ResCard = (props) => {
    const { resData } = props;
    const { info } = resData;  // Extract the info object from resData
    return (
        <div className="res-card">
            <img 
                className="res-img" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/slheenytwb3iaypqf4yd" 
                alt="restaurant" 
            />
            <div className="res-details">
                <h2>{info.name}</h2>
                <h5>{info.cuisines.join(', ')}</h5> {/* Joining array elements with a comma */}
                <h5>{info.avgRating}</h5>
                <h5>{info.costForTwo}</h5>
            </div>
        </div>
    );
};

const resObj = {
    "info": {
        "id": "485445",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Old Mahabalipuram Road OMR",
        "areaName": "Old Mahabalipuram Road OMR",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
        ],
        "avgRating": 3.9,
        "parentId": "61955",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-08-08 02:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.3",
                "ratingCount": "20+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
        "type": "WEBLINK"
    }
};

const Body = () => {
    return (
        <div className="body">
            <div className="search_bar">Search</div>
            <div className="res-container">
                <ResCard resData={resObj} />
            </div>
        </div>
    );
};

const AppComp = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("divEle"));
root.render(<AppComp />);
