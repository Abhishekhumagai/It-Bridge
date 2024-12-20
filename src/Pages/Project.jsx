import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();

  const handleNavigation = (serviceName) => {
    navigate(`/servicedetails/${serviceName}`);
  };

  async function ItService() {
    try {
      const response = await fetch(`https://itbridge.com.np/api/service`, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data, status: " + response.status);
      }

      const finaldata = await response.json();
      console.log(finaldata.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    ItService();
  }, []);

  return (
    <div className="flex flex-col gap-12 bg-gray-50">
      <div className="bg-[#9c9c9c] bg-[url('/image/computer.jpg')] bg-cover bg-center h-60 flex justify-center text-center about-image relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <h2 className="text-5xl font-extrabold text-white tracking-wider relative">
          Our Service
        </h2>
      </div>
      <div className="text-gray-700 text-lg text-center md:text-left max-w-4xl mx-auto">
        <p>
          We provide premium rental cycles and vehicle servicing solutions.
          Enjoy doorstep pickup, hassle-free maintenance, and contribute to
          community projects with every ride. Your journey starts with us.
        </p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {[
            { name: "DIGITAL MARKETING", image: "../../public/image/app.jpg" },
            {
              name: "CLOUD COMPUTING",
              image: "../../public/image/digital.jpg",
            },
            { name: "IT CONSULTING", image: "../../public/image/download.jpg" },
            {
              name: "MOBILE APP DEVELOPMENT",
              image: "../../public/image/it.jpg",
            },
            {
              name: "WEBSITE DEVELOPMENT",
              image: "../../public/image/software.jpg",
            },
            {
              name: "CUSTOM SOFTWARE",
              image: "../../public/image/website.jpg",
            },
          ].map((service, index) => (
            <figure
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              onClick={() => handleNavigation(service.name)}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white bg-black bg-opacity-60 p-3 rounded-lg text-center">
                {service.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
