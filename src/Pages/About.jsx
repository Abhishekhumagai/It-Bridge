import { useEffect, useState } from "react";

const BASE_URL = "https://itbridge.com.np/api/";

function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAboutData() {
    try {
      const response = await fetch(`${BASE_URL}about-us`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const result = await response.json();
      setData(result.data);
    } catch (err) {
      setError("Failed to load data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAboutData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-75"></div>
          <span className="mt-4">Loading About...</span>
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
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center  bg-[url('/image/computer.jpg')] h-60 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
        <h2 className="text-5xl font-extrabold text-white z-10 drop-shadow-lg">
          About Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 lg:px-20">
        <div className="flex flex-col gap-12">
          {data.map((member, index) => (
            <div
              key={index}
              className={`w-full  bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } items-center gap-8`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/3">
                  <img
                    src={member.photo}
                    alt={member.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {member.title}
                  </h3>
                  <p
                    className="text-lg text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: member.excerpt }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
