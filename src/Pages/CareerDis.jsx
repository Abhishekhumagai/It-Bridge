import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://itbridge.com.np/api/";

function CareerDis() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  async function ItService() {
    try {
      const response = await fetch(`${BASE_URL}career`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const finaldata = await response.json();
      const foundService = finaldata.data.find(
        (service) => service.slug === slug
      );
      setService(foundService);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    ItService();
  }, [slug]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
          <span className="mt-4 font-semibold">Loading Career Details...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-64 bg-gradient-to-r flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/image/computer.jpg')] bg-cover bg-center "></div>
        <h2 className="text-5xl font-extrabold text-white z-10 ">
          {service.title}
        </h2>
      </div>
      <div className="service-details bg-gray-50 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex-1 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800 transition duration-300">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700 ">
                    Location:
                  </span>{" "}
                  {service.location}
                </p>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700">Deadline:</span>{" "}
                  {service.deadline}
                </p>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700">Slug:</span>{" "}
                  {service.slug}
                </p>

                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700">
                    No. of Placements:
                  </span>{" "}
                  {service.no_of_placement}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl  text-gray-800 mb-4 font-bold">
                  Excerpt
                </h3>
                <p
                  className="text-lg text-gray-600"
                  dangerouslySetInnerHTML={{ __html: service.excerpt }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl f text-gray-800 mb-4  font-bold">
                Responsibilities
              </h3>
              <p
                className="text-lg text-gray-600 "
                dangerouslySetInnerHTML={{ __html: service.responsibilites }}
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg ">
              <h3 className="text-2xl  text-gray-800 mb-4 font-bold">
                Requirements
              </h3>
              <p
                className="text-lg text-gray-600"
                dangerouslySetInnerHTML={{ __html: service.requirements }}
              />
            </div>
          </div>

          {service.features && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Key Features
              </h3>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-600">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                  >
                    <span className="text-blue-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CareerDis;
