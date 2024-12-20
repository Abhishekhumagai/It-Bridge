import { useParams } from "react-router-dom";
import { projects } from "./projects";

const OurWorkDes = () => {
  const { id } = useParams();
  console.log(id);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center bg-gradient-to-r bg-[#9c9c9c] text-white py-12 mb-12 rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold">{project.title}</h2>
        </div>
        {project ? (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden mx-6 md:mx-12 lg:mx-24 my-10">
            <div className="flex gap-10">
              <div className="flex justify-center mx-10 w-full my-10">
                <img
                  src={project.image}
                  className=" h-20 md:h-40  object-cover transform transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 text-xl">Project not found!</p>
        )}
      </div>
    </div>
  );
};

export default OurWorkDes;
