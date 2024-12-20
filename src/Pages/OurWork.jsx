import { useEffect, useState } from "react";

const BASE_URL = "https://itbridge.com.np/api/";

const OurWork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchWorkData() {
    try {
      const response = await fetch(`${BASE_URL}work`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const finaldata = await response.json();
      setData(finaldata.data);
    } catch (error) {
      setError("Failed to load projects. Please try again later.");
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWorkData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-75"></div>
          <span className="mt-4">Loading services...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 bg-gray-50 ">
      <div className="bg-[#9c9c9c] bg-[url('/image/computer.jpg')] bg-cover bg-center h-60 flex justify-center items-center text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <h2 className="text-5xl font-extrabold text-white tracking-wider relative z-10">
          Our Work
        </h2>
      </div>

      <div className="text-gray-700 text-lg text-center md:text-left max-w-7xl mx-auto px-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
            >
              <img
                src={project.photo}
                alt={project.title}
                className="w-full h-48 object-cover object-top rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">{project.alias}</p>
              <p className="text-gray-500 text-sm">{project.slug}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
