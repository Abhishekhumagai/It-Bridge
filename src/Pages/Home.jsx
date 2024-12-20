import { FaUsers } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { RiCupLine } from "react-icons/ri";
import { IoCodeSlashOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp from "react-countup";
import { happpy } from "../api/home";
import { useQuery } from "@tanstack/react-query";
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>{error.message || "An error occurred"}</div>;
  }
  const services = [
    {
      img: "/public/image/website.jpg",
      title: "Web Development",
      description:
        "Web development is the process of creating, designing, and maintaining websites or web applications using technologies .",
    },
    {
      img: "/public/image/website.jpg",
      title: "Hassle-Free Servicing",
      description:
        "Hassle-Free Servicing offers seamless, convenient, and reliable service solutions with minimal effort required from the customer.",
    },
    {
      img: "/public/image/website.jpg",
      title: "Community Contributions",
      description:
        "Community Contributions enable individuals to support collective initiatives, charitable causes, research projects, and social campaigns, fostering positive impact and shared progress.",
    },
  ];
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
    { Icon: RiCupLine, number: 500, title: "Business Years" },
    { Icon: IoCodeSlashOutline, number: 7, title: "Projects Completed" },
  ];

  return (
    <div className="font-sans overflow-clip">
      <section className="bg-[url('/image/home.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-2xl"></div>
        <div className="text-center px-4 sm:px-6 md:px-12 relative z-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Discover the joy of cycling while contributing to a sustainable
            future.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-gray-100 transition ">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
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

      <section className="py-10 bg-gray-100 h-96  " data-aos="slide-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Happy Clients
          </h2>
          <div className="">
            <Carousel responsive={responsive} className="mx-20">
              {data?.map((client, index) => {
                return (
                  <div key={index} className="px-8 m-0">
                    <img
                      src={client.photo}
                      alt={client?.slug}
                      className="rounded-lg shadow-md sm:w-[150px] md:w-[200px]"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section
        className="bg-white text-black
       py-12 sm:py-16 my-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Develope?
          </h2>
          <p className="text-sm sm:text-lg md:text-xl mb-8">
            Sign up today and embark on an exciting journey with us.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-gray-100 transition">
            Join Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
