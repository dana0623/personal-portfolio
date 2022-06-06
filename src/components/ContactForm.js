import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "react-toastify/dist/ReactToastify.min.css";

const СontactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  // function sendEmail(e) {
  //     e.preventDefault();

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, user_email, message } = data;
    try {
      const templateParams = {
        name,
        user_email,
        message,
      };

      emailjs
        .send(
          "service_2fe55lr",
          "template_77or7bi",
          templateParams,
          "user_e7dINfAF8zgEoSrxjx18J"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className="container"
      id="contact"
      style={{ marginTop: "50px", marginBottom: "50px", width: "100%" }}
    >
      <div className="container-info">
        <div className="container-title">
          <h1 style={{ marginTop: "25px", textAlign: "center" }}>
            Let's Talk!
          </h1>
        </div>
        <div className="container-text">
          <p> Want to discuss your next project? </p>
        </div>
      </div>
      <div className="row">
        <div className="contact-info col-sm">
          <h3>dana0623@business.kaist.edu</h3>
          <button
            className="btn-social btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://facebook.com/dana0623", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </button>
          <button
            className="btn-social btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://linkedin.com/in/nataliadadasova", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </button>
          <button
            className="btn-social btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://github.com/dana0623", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </button>
        </div>
        <div className="contact-form col-sm">
          <form
            className="row"
            style={{ margin: "auto" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="form-control"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                {...register("user_email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              ></input>
              {errors.user_email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                {...register("message", {
                  required: true,
                })}
                className="form-control"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
            <div className="text-center">
              <button
                className="btn rounded-pill contact-btn btn-dark"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="sm"
                  style={{ marginRight: "10px" }}
                />
                Send
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
export default СontactForm;
