import { useState } from "react";
import axios from "axios";
import validator from "validator";
export default function Form(props) {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [inputColor1, setInputColor1] = useState("input-form-global");
  const [inputColor2, setInputColor2] = useState("input-form-global");
  const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number);
    return isValidPhoneNumber;
  };
  const eventTest = (e) => {
    e.preventDefault();
    var data = {
      service_id: "service_eipc355",
      template_id: "template_fxu7yid",
      user_id: "cwwAjO1jN8-CEK0ry",
      template_params: {
        username: "James",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
        message: `${firstName}, ${phone}`,
      },
    };
    const thanksBlock = document.querySelector(".thanks-for-mail");
    const badPhone = document.querySelector(".bad-try-phone");
    const badName = document.querySelector(".bad-try-name");
    const contactsForm = document.querySelector("form");
    if (firstName.length > 2) {
      if (validatePhoneNumber(phone)) {
        axios({
          method: "post",
          url: "https://api.emailjs.com/api/v1.0/email/send",
          contentType: "application/json",
          data: data,
        });
        thanksBlock.classList = "thanks-for-mail mail-sended";
        contactsForm.classList = "disable";

        ym(87992635, "reachGoal", "lead");
      } else {
        badPhone.classList = "bad-try-phone active";
      }
    } else {
      badName.classList = "bad-try-name active";
      if (!validatePhoneNumber(phone)) {
        badPhone.classList = "bad-try-phone active";
      }
    }
  };

  return (
    <>
      <form onSubmit={eventTest}>
        <div className={inputColor1}>
          <div className="input-wrapper">
            <input
              className="inp1"
              type="text"
              value={firstName}
              name="firstName"
              placeholder="Имя"
              required=""
              onFocus={() => setInputColor1("input-form-global on-focus")}
              onBlur={() => {
                setInputColor1("input-form-global");
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <span className="bad-try-name">
            Пожалуйста заполните это поле и попробуйте ещё раз
          </span>
        </div>
        <div className={inputColor2}>
          <div className="input-wrapper">
            <input
              className="inp2"
              type="text"
              value={phone}
              name="phone"
              placeholder="Телефон"
              required=""
              onFocus={() => setInputColor2("input-form-global on-focus")}
              onBlur={() => {
                setInputColor2("input-form-global");
              }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <span className="bad-try-phone">
            Пожалуйста заполните это поле и попробуйте ещё раз
          </span>
        </div>
        <button className="form-button" type="submit">
          <span>Начать проект</span>
        </button>
      </form>
      <div className="thanks-for-mail">
        <span>Спасибо за заявку, мы свяжемся с вами в ближайшее время!</span>
      </div>
    </>
  );
}
