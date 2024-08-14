import ResCard from "./RestaurantCard";
import resObj from "./utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search_bar">Search</div>
            <div className="res-container">
                <ResCard resData={resObj[0]} />
                <ResCard resData={resObj[1]} />
                <ResCard resData={resObj[2]} /> 
                <ResCard resData={resObj[3]} />
                {/* <ResCard resData={resObj[4]} />
                <ResCard resData={resObj[5]} />  */}
                
                
            </div>
        </div>
    );
};

export default Body;