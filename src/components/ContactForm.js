import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
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
      style={{ marginTop: "50px", marginBottom: "50px", width: "40%" }}
    >
    <div className="container-info">
      <div className="container-title">
        <h1 style={{ marginTop: "25px", textAlign: "center" }}>Contact</h1>
      </div>
      <div className="container-text">
        <p> Want to discuss your next project? </p>
      </div>
      </div>
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
          <button className="btn contact-btn btn-dark" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} size="sm" style={{ marginRight: "10px"}} />Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default СontactForm;
