import { Rating } from "react-simple-star-rating";
import { IReview } from "../interfaces/Review.interface";
import { getFormatedDate } from "../util";

type ReviewCardProps = {
  review: IReview;
};
const ReviewCard = ({ review: data }: ReviewCardProps) => {
  return (
    <div className=" border p-2 ">
      <div className="font-semibold text-md">{`Review: ${data.review}`}</div>
      <div className="text-sm text-gray-600">{`Reviewed by: ${data.user.username}`}</div>
      <div className="text-sm text-gray-600">
        <Rating initialValue={data.rating} size={25} allowFraction readonly />
      </div>
      <div className="text-sm text-gray-600">
        {getFormatedDate(data.createdAt)}
      </div>
    </div>
  );
};

export default ReviewCard;
