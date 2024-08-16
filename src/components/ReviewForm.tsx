import React, { useState, useEffect } from "react";
import pic8 from "../pictures/pic8.jpg";
import { FaHeart, FaRegUserCircle, FaStar } from "react-icons/fa";
import axios from "axios";
import "../styles.css";

const NAME_MAX_LENGTH = 15;
const TEXT_MAX_LENGTH = 100;

const ReviewForm: React.FC = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState("");
  const [textError, setTextError] = useState("");
  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [rating, setRating] = useState(0); // New state for slider

  const validateForm = () => {
    let isValid = true;

    if (name.length > NAME_MAX_LENGTH) {
      setNameError(`Name cannot exceed ${NAME_MAX_LENGTH} characters`);
      isValid = false;
    } else {
      setNameError("");
    }

    if (text.length > TEXT_MAX_LENGTH) {
      setTextError(`Review text cannot exceed ${TEXT_MAX_LENGTH} characters`);
      isValid = false;
    } else {
      setTextError("");
    }

    // Ensure rating is greater than 0
    if (rating <= 0) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await axios.post("http://localhost:5000/submit-review", {
        name,
        text,
        rating, // Include the slider value
        timestamp: new Date().toISOString(), // Generate ISO 8601 timestamp
      });
      alert(response.data.message);
      setName("");
      setText("");
      setRating(0); // Reset the slider
      fetchReviews(); // Refresh reviews after submission
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Failed to submit review: ${
            error.response?.data?.error || error.message
          }`
        );
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reviews");
      setReviews(response.data.reviews);
      setReviewCount(response.data.count);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Failed to fetch reviews: ${
            error.response?.data?.error || error.message
          }`
        );
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount
  }, []);

  return (
    <div className="bg-amber-50 py-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-medium text-3xl py-4">
          WE COULD ALWAYS USE YOUR FEEDBACK!
        </h1>
        <div className="flex flex-col items-center">
          <img
            className="w-[500px] h-[450px] rounded-lg"
            src={pic8}
            alt="Brewery"
          />
          <h1 className="font-medium text-xl">WHY WE CARE...</h1>
          <p className="text-left w-1/2 py-10 relative tracking-tight">
            At our brewery, your review is like the perfect blend of
            coffee—essential and cherished. Each sip of feedback enriches our
            understanding and helps us fine-tune our brews to deliver that
            exceptional cup you love. Your thoughts are the secret ingredient
            that fuels our passion and innovation, ensuring every cup is crafted
            with care and precision. We deeply appreciate the time you take to
            share your experience, as it helps us keep our offerings fresh and
            delightful. So, cheers to your feedback—it's the perfect shot of
            inspiration we need to keep brewing excellence!
            <FaHeart className="text-red-400 absolute bottom-11 left-20 hover:text-red-600 duration-1000" />
          </p>
        </div>
      </div>
      <form
        className="flex flex-col gap-3 items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="flex gap-2">
            Name:
            <input
              className="pl-2 bg-yellow-50 border-[1px] border-black"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {nameError && <p className="text-red-600">{nameError}</p>}{" "}
          {/* Display name error */}
        </div>
        <div>
          <label className="flex gap-2 pr-[10px]">
            Review:
            <textarea
              className="pl-2 bg-yellow-50 border-[1px] border-black"
              placeholder="Write a review here!"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </label>
          {textError && <p className="text-red-600">{textError}</p>}{" "}
          {/* Display text error */}
        </div>
        <div className="pl-8 flex flex-col items-center">
          <div>
            <button
              className={`bg-black text-white py-2 px-2 hover:bg-green-700 duration-300 ${
                rating <= 0 ? "opacity-50 cursor-not-allowed" : ""
              }`} // Disable button if no rating
              type="submit"
              disabled={rating <= 0} // Disable button if no rating
            >
              Submit Review
            </button>
          </div>
          <div>
            <p>Rate us!</p>
            <input
              type="range"
              min="1" // Start range at 1 instead of 0
              max="5"
              value={rating} // Bind slider value to state
              onChange={(e) => setRating(Number(e.target.value))} // Update state on slider change
              className={`appearance-none cursor-pointer w-30 h-2 bg-gray-300 range-thumb`}
            />
            <p>Selected rating: {rating}</p>{" "}
            {/* Display current slider value */}
          </div>
        </div>
      </form>
      <div className="pl-44">
        <div className="w-1/4 flex flex-col gap-2">
          <h1>{`Customer Reviews (${reviewCount})`}</h1>
          {reviews.map((review, index) => (
            <div className="flex flex-col border-2 relative py-20" key={index}>
              <div className="flex gap-2 items-center absolute top-3 left-[17px]">
                <FaRegUserCircle className="text-3xl" />

                <div className="flex gap-2">
                  <h2>{review.name}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(review.timestamp).toLocaleString()}{" "}
                  </p>
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-yellow-500 ${
                          i < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <p className="ml-2 text-sm text-gray-500">
                      {review.rating}
                    </p>
                  </div>
                </div>
              </div>
              <p className="absolute top-10 left-14 w-1/2 break-words">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
