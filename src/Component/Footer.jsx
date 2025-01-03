import { useQuery } from "@tanstack/react-query";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { footer } from "../api/home";

function Footer() {
  const {
    error,
    isLoading,
    isError,
    data: axiosData,
  } = useQuery({
    queryKey: ["foot"],
    queryFn: footer,
  });

  const data = axiosData?.data;
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          {error.message || "An error occurred"}
        </p>
      </div>
    );
  }

  return (
    <footer className="max-lg:w-full">
      {location.pathname !== "/contact" && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 bg-[#8e0438] py-8 px-6 md:px-12">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">
                Want to work together?
              </h1>
              <p className="text-lg text-gray-300">
                We are the perfect partner for your business.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.689627449083!2d85.50365186578503!3d27.633459648976384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f33b1a23b53%3A0xe8ec0b92bdf38a54!2sBanepa!5e0!3m2!1sen!2snp!4v1733123872860!5m2!1sen!2snp"
              height="200"
              allowFullScreen=""
              style={{ border: "0" }}
              loading="lazy"
              className="rounded-lg shadow-md w-full sm:w-80 mt-6 md:mt-0"
            ></iframe>
          </div>

          <div className="bg-[#272526] py-10 px-6 md:px-12">
            {data.map((service, index) => (
              <>
                <div
                  key={index}
                  className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Pages
                    </h3>
                    <ul>
                      <li>
                        <a
                          href="/about"
                          className="hover:underline text-gray-400 text-base"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/home"
                          className="hover:underline text-gray-400 text-base"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="hover:underline text-gray-400 text-base"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="/career"
                          className="hover:underline text-gray-400 text-base"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourwork"
                          className="hover:underline text-gray-400 text-base"
                        >
                          Our Work
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourservice"
                          className="hover:underline text-gray-400 text-base"
                        >
                          our service
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div key={index} className="text-center ">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Follow Us
                    </h3>
                    <div className="flex justify-center  space-x-4">
                      <a
                        href={service.facebook_link}
                        className="text-gray-400 hover:text-white text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href={service.insta_link}
                        className="text-gray-400 hover:text-white text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href={service.insta_link}
                        className="text-gray-400 hover:text-white text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube />
                      </a>
                    </div>
                  </div>

                  {data.map((service, index) => (
                    <div key={index} className="text-center ">
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        Contact
                      </h3>

                      <p className="text-gray-400 text-base">
                        {service.location}
                      </p>
                      <p className="text-gray-400 text-base">{service.email}</p>
                      <p className="text-gray-400 text-base">{service.phone}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full">
                  <p className="text-gray-400 text-base text-center ">
                    @CopyRight 2024 |{service.copyright}| All Right Reserved
                  </p>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
