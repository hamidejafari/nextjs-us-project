import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
const StarRating = (props) => {

  const [hover, setHover] = useState(0);
  const rating = props.rating;
  const setRating = props.setRating;

  return (
    <div className={"star-rating"}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            style={index <= (hover || rating) ? {
              color: '#f1c40f', 
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize:'2rem',
              padding: '0px'
            } : {
              color: '#ccc', 
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize:'2rem',
              padding: '0px'
            }}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}

          >
            <span className="star">
              <StarIcon fontSize="large"/>
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;