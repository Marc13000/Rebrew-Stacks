import React from 'react';

const reviews = [
  {
    id: 1,
    reviewerName: "John Doe",
    reviewerImage: "https://via.placeholder.com/50",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-22",
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: 2,
    reviewerName: "Jane Smith",
    reviewerImage: "https://via.placeholder.com/50",
    reviewText: "Ut fringilla neque eget tincidunt.",
    date: "2023-10-21",
    upvotes: 5,
    downvotes: 1,
  },
  // Add more review objects here
];

const BitcoinReviews = () => {
  return (
    <div className="bg-gray-100 p-4">
      <header className="text-center my-8">
        <img src="/bitcoin-logo.png" alt="Bitcoin Logo" className="w-16 mx-auto" />
        <h1 className="text-2xl font-semibold mt-2">Bitcoin Reviews</h1>
        <p className="text-gray-500 text-lg mt-2">Collection of reviews</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src={review.reviewerImage}
                alt={`Profile of ${review.reviewerName}`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-lg">{review.reviewerName}</p>
                <p className="text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.reviewText}</p>
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">
                <button className="mr-2">Upvote ({review.upvotes})</button>
                <button>Downvote ({review.downvotes})</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitcoinReviews;