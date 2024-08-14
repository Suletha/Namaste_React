const ResCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img
                className="res-img"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
                alt={resData.info.name}
            />
            <div className="res-details">
                <h2>{resData.info.name}</h2>
                <h5>{resData.info.cuisines.join(', ')}</h5>
                <h5>{resData.info.avgRating}</h5>
                <h5>{resData.info.costForTwo}</h5>
            </div>
        </div>
    );
  };
export default ResCard;  