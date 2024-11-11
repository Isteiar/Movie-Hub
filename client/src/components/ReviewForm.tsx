import { useState } from "react";
import { addReview } from "../services/review.services";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";

type ReviewFormProps = {
  movieId: string;
  newReviewAddedCallback: () => void
};

const ReviewForm = ({ movieId , newReviewAddedCallback}: ReviewFormProps) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const submitReviewHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addReview(movieId, review, rating);
      setReview("");
      setRating(0);
      newReviewAddedCallback()
      // console.log("first")
    } catch (err) {
      toast.error("Something error ", { pauseOnHover: false });
    }
  };

  return (
    <form onSubmit={submitReviewHandle} className="p-4 border  w-full">
      <h2 className="text-lg font-bold mb-2">Write a Review</h2>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows={4}
      ></textarea>

      <div className="flex items-center gap-2">
        <div>Rating:</div>
        <Rating initialValue={rating} onClick={setRating} allowFraction={true}/>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
