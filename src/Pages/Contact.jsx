import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { contact } from "../api/api";
import { BASE_URL } from "../constants/Envconstants";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  console.log(queryClient);

  const { mutate: addcontactMutate, isLoading } = useMutation({
    mutationFn: contact,
    onError: (err) => {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add contact!",
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message sent successfully!",
      });
      reset();
    },
  });

  const onsubmit = (data) => {
    const contactdata = {
      name: data.name,
      email: data.email,
      phone_no: data.phone_no,
      subject: data.subject,
      message: data.message,
      status: true,
    };

    addcontactMutate(contactdata);
  };
  console.log(BASE_URL);
  return (
    <div className="min-h-screen text-black">
      <div className="text-center bg-[#9c9c9c] h-60 mb-12  bg-[url('/image/contact.jpg')] bg-cover bg-center flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white ">Contact</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-semibold text-lg">
            Contact us about anything related to our company or services.
            <br /> We will do our best to get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="space-y-6 bg-white p-6 md:p-8 rounded-md shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Please enter your name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                {...register("name", { required: true })}
              />

              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                {...register("phone_no", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Phone number must have at least 10 digits",
                  },
                })}
              />

              {errors.phone_no && (
                <span className="text-red-600">{errors.phone_no.message}</span>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                {...register("subject", { required: true })}
              />

              {errors.subject && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${
                  isLoading
                    ? "bg-gray-400"
                    : "bg-purple-600 hover:bg-purple-700"
                } text-white font-semibold py-2 px-4 rounded-md shadow`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          <div className="space-y-6 text-center lg:text-left">
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-4">Contact Details</h3>
              <p className="text-sm">
                <strong>Phone:</strong>977-9845046048
              </p>
              <p className="text-sm mt-2">
                <strong>Email:</strong> info@itbridge.com.np
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> Banepa-8 Shantinagar
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.689627449083!2d85.50365186578503!3d27.633459648976384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f33b1a23b53%3A0xe8ec0b92bdf38a54!2sBanepa!5e0!3m2!1sen!2snp!4v1733123872860!5m2!1sen!2snp"
              height="200"
              className="w-full  h-[420px] rounded-lg shadow-md"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
