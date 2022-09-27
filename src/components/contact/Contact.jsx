import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";
import { FaPaperPlane} from "react-icons/fa";
 
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  //validation
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "service_rd16j9m",
        "template_se6s2md",
        templateParams,
        "2Y4IOB6zCNHcvDgF-"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <div className="google-map-code">
              <iframe
                title="myMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.64373339365!2d45.30744274520391!3d35.563237443938874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2sSulaymaniyah!5e0!3m2!1sen!2siq!4v1660720191099!5m2!1sen!2siq"
                width="100%"
                height="100%"
                className="absolute inset-0"
                scrolling="no"
              ></iframe>
            </div>
          </div>

          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 bg-[#ebebebda] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h1 className="text-2xl text-slate-600 font-bold">
                  Contact Us
                </h1>
                <p className="leading-relaxed mb-5 text-gray-600">
                  For more information, please fill in this form
                </p>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your User Name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    placeholder="UserName"
                    className="w-full bg-white rounded border border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.name && (
                    <span className="errorMessage text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    placeholder="Email address"
                    className="w-full bg-white rounded border border-orange-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && (
                    <span className="errorMessage text-red-500">
                      Please enter a valid email address
                    </span>
                  )}
                </div>

                <div className="relative mb-4">
                  <textarea
                    className="w-full bg-white rounded border border-gray-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-400
                  h-32 text-base outline-none text-gray-700 py-1 px-3
                  resize-none leading-6 transition-colors duration-200
                  ease-in-out"
                    rows={3}
                    name="message"
                    {...register("message", {
                      required: true,
                    })}
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="errorMessage text-red-500">
                      Please enter a message
                    </span>
                  )}
                </div>
                <button
                  disabled={disabled}
                  type="submit"
                  className="flex flex-row justify-center font-bold text-white bg-orange-400 border-0 py-2  focus:outline-none hover:bg-gray-400 rounded text-lg"
                >
                  <span className="px-3">Send</span>
                  <FaPaperPlane size={25} />
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </section>
      </div>
    </>
  );
};

export default Contact;
