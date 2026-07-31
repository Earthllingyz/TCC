import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function RatingStars({ nota }) {

  const estrelas = [];

  for (let i = 1; i <= 5; i++) {

    if (nota >= i) {

      estrelas.push(<FaStar key={i} />);

    } else if (nota >= i - 0.5) {

      estrelas.push(<FaStarHalfAlt key={i} />);

    } else {

      estrelas.push(<FaRegStar key={i} />);

    }

  }

  return (

    <div className="rating-stars">

      {estrelas}

    </div>

  );

}

export default RatingStars;