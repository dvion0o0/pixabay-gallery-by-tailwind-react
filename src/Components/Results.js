import React from "react";
import { useGlobalContext } from "../ContextAPI/Context";
const Results = () => {
  const { photos } = useGlobalContext();
  if (photos.length === 0) {
    return (
      <h1 className="text-center text-3xl text-red-600 my-24">Loading ....</h1>
    );
  } else {
    return (
      <div className="h-screen max-w-screen-lg mx-auto px-6 md:px-4 md:grid md:grid-cols-3 gap-8">
        {photos.map((photo) => {
          const {
            id,
            user,
            likes,
            views,
            webformatURL: img,
            downloads,
          } = photo;
          return (
            <div
              className="rounded-lg w-full mb-12 bg-white pb-6 shadow-xl"
              key={id}
            >
              <img
                src={img}
                alt={user}
                className="w-full h-64 rounded-t-lg md:h-60"
              />
              <div className="mt-4 px-6">
                <h2 className="text-lg text-gray-500 mb-2 font-semibold">
                  Photo by{" "}
                  <span className="text-blue-500 font-extrabold">{user}</span>
                </h2>
                <p className="text-gray-600 text-lg font-bold">
                  Views:{" "}
                  <span className="font-medium text-blue-400">{views}</span>
                </p>
                <p className="text-gray-600 text-lg font-bold">
                  Downloads:{" "}
                  <span className="font-medium text-blue-400">{downloads}</span>
                </p>
                <p className="text-gray-600 text-lg font-bold">
                  Likes:{" "}
                  <span className="font-medium text-blue-400">{likes}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Results;
