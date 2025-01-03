import { FaUsers } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { RiCupLine } from "react-icons/ri";
import { IoCodeSlashOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp from "react-countup";
import { about, happpy } from "../api/home";
import { useQuery } from "@tanstack/react-query";
import { service } from "../api/service.js";
import { NavLink } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { IoRocketOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
function Home() {
  const {
    error,
    isLoading,
    isError,
    data: axiosData,
  } = useQuery({
    queryKey: ["happy"],
    queryFn: happpy,
  });

  const data = axiosData?.data;
  const {
    serviceisLoading,
    serviceisError,
    data: serviceaxiosData,
  } = useQuery({
    queryKey: ["service"],
    queryFn: service,
  });

  const serData = serviceaxiosData?.data?.slice(0, 3);

  const {
    aboutisLoading,
    aboutisError,
    data: aboutaxiosData,
  } = useQuery({
    queryKey: ["about"],
    queryFn: about,
  });
  console.log(aboutaxiosData);
  if (isLoading || serviceisLoading || aboutisLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-75"></div>
          <span className="mt-4">Loading Home...</span>
        </div>
      </div>
    );
  }

  if (isError || serviceisError || aboutisError) {
    console.error(error);
    return <div>{error.message || "An error occurred"}</div>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const stats = [
    { Icon: FaUsers, number: 35, title: "Employees" },
    { Icon: AiOutlineLike, number: 100, title: "Happy Clients" },
    { Icon: RiCupLine, number: 7, title: "Business Years" },
    { Icon: IoCodeSlashOutline, number: 500, title: "Projects Completed" },
  ];

  return (
    <div className="font-sans overflow-clip">
      {/* <section className="bg-[url('/image/home.jpg')] bg-cover bg-center text-white h-screen flex flex-col items-center justify-center relative bg-[#ffffff]">
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-2xl "></div>
        <div className="text-center px-4 sm:px-6 md:px-12 relative z-auto ">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Discover the joy of cycling while contributing to a sustainable
            future.
          </p>

          <div className="flex flex-col items-center">
            <button className="bg-white text-blue-600 px-6 py-3 w-40 mt-40 align-middle rounded-md text-sm sm:text-lg font-semibold hover:bg-gray-100 transition ">
              Get Started
            </button>
          </div>
        </div>
      </section> */}
      <div className="parallax bg-gradient-to-r from-blue-500 to-indigo-600 relative h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-12 text-white z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Discover the joy of developing website while contributing to a
            sustainable future.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:bg-gray-200 hover:scale-105 transition transform duration-300">
            Get Started
          </button>
        </div>

        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://source.unsplash.com/1920x1080/?technology,web')`,
            transform: "translateZ(-1px) scale(1.5)",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {aboutaxiosData?.data?.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10 my-8 md:my-12"
            >
              {index === 0 && (
                <div className="w-full md:w-1/2 h-auto flex justify-center">
                  <img
                    src={member.photo}
                    alt={member.title}
                    className="w-full max-w-sm md:max-w-md object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              )}

              {index === 0 && (
                <div className="w-full md:w-1/2  text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-shadow-lg"></h3>
                  <p
                    className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: member.excerpt }}
                  />
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-wrap gap-8 justify-center py-10">
            {aboutaxiosData?.data?.map(
              (member, index) =>
                index !== 0 && (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
                  >
                    <div className="w-full">
                      <img
                        src={member.photo}
                        alt={member.title}
                        className="h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] w-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                      <h4 className="text-white text-lg font-semibold">
                        {member.title}
                      </h4>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          IT Bridge is Perfect for Your Business
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <CgWebsite className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">Domain Expert</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <IoRocketOutline className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">Rocket Strategy</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <FaAward className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">Award Winning</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <GiTeamIdea className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">Creative Team</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <CgWebsite className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">
              Responsive Design
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <MdOutlineSecurity className="text-4xl text-red-500 mb-2" />
            <p className="text-lg font-medium text-gray-700">Secure Systems</p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-[#ffffff] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {serData?.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <img
                  src={service.photo}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <NavLink to={"/ourservice"}>
          <div className="flex justify-between mx-24 ">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ml-auto">
              View More...
            </button>
          </div>
        </NavLink>
      </section>

      <div className="flex flex-wrap justify-center gap-20 p-10 bg-[#8e0438] text-white">
        {stats.map(({ Icon, number, title }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[150px]"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#4c1416] shadow-md">
              <Icon size={50} />
            </div>
            <p className="mt-2 text-lg font-bold">
              <CountUp start={0} end={number} duration={5} separator="," />
            </p>
            <p className="mt-1 text-sm">{title}</p>
          </div>
        ))}
      </div>

      <section className="py-10 bg-white h-96  " data-aos="slide-left ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Happy Clients
          </h2>
          <div className="">
            <Carousel responsive={responsive} className="mx-20">
              {data?.map((client, index) => {
                return (
                  <div key={index} className="flex justify-center ">
                    <img
                      src={client.photo}
                      alt={client?.slug}
                      className=" sm:w-[150px] md:w-[200px] bg-white"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 text-black
       py-12 sm:py-16 my-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-52 text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ">
            Ready to Develope?
          </h2>
          <p className="text-sm sm:text-lg md:text-xl mb-8">
            Sign up today and embark on an exciting journey with us.
          </p>
          <NavLink to={"/contact"}>
            <button className="bg-white  px-6 py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-gray-100 transition bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              Join Us
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;
