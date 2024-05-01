import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 lg:mr-4">
          <h1 className="text-4xl lg:text-3xl font-bold leading-tight">
            NewsPulse
          </h1>
          <p className="text-sm lg:text-base mt-2 lg:mt-0 lg:max-w-lg">
            Your source for all the latest news, stay updated with our curated
            articles. Your source for all the latest news, stay updated with
            our curated articles.
          </p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
