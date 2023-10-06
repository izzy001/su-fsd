import React from "react";

interface GridProps {
    data: { filename: string; createdAt: string }[];
  }

const Grid: React.FC<GridProps> = ({ data }) => {
  return (

    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
       

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {data.map((item, index) => (
            <div key={index} className="lg:flex">
              {/* <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={item.image} alt="" /> */}
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
                  {item.filename}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: {item.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Grid;
