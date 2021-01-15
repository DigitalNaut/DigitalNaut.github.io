import React from "react";
import FancyButton from "../components/FancyButton";
import Section from "../components/Section";
import { Title, Paragraph } from "../components/Formatting";
import emailjs from "emailjs-com";
import loadEmailJS from "../modules/emailjs";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactProps {
  innerRef: React.RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ children, innerRef }) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadEmailJS(() => setLoading(false));
  }, []);

  return (
    <Section fit>
      <span ref={innerRef} />
      <Title>Contact</Title>
      <div className="my-6">
        <Paragraph centered untabbed>
          Do you have a comment or a question? <br/> I’d love to hear from you!
        </Paragraph>
        {isLoading ? (
          <p className="m-12 mt-0 text-2xl">Loading forms...</p>
        ) : (
          <ContactForm />
        )}
      </div>
      {children}
    </Section>
  );
};

const ContactForm: React.FC = (props) => {
  const [from_name, setName] = React.useState<string>("");
  const [reply_to, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [errors, setErrors] = React.useState<(string | undefined)[]>([]);
  const [sent, setSent] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<string>("");

  function validateInfo(): (string | undefined)[] {
    type errors = {
      email?: string;
      name?: string;
      message?: string;
    };

    let newErrors: errors = {};
    let emailPattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    let namePattern = /^[\p{L}\s*-]+$/iu;

    if (!emailPattern.test(reply_to.trim())) {
      newErrors["email"] = "Please enter a valid email";
    }

    if (!namePattern.test(from_name.trim()))
      newErrors["name"] = "Please enter your name";

    if (message.trim().length === 0)
      newErrors["message"] = "Please enter a message";

    return Object.values(newErrors);
  }

  function sendEmail() {
    let errorsFound = validateInfo();

    if (errorsFound.length) return setErrors(errorsFound);
    else {
      setErrors([]);
      setSending(true);

      emailjs
        .send("default_service", process.env.REACT_APP_EMAILJS_TEMPLATE || "", {
          from_name,
          reply_to,
          message,
        })
        .then(
          (response) => {
            setSending(false);
            setSent(true);
            console.log(`Response: ${response.status} : ${response.text}`);
          },
          (error) => {
            setServerError(error);
            console.log(error);
          }
        );
    }
  }

  return (
    <>
      {sent ? (
        <div className="m-4 mb-24">
          <div className="max-w-full p-4 text-white bg-green-700 border-white shadow-lg rounded-tr-xl rounded-bl-xl">
            Message sent <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <Paragraph centered untabbed>
            Thank you!
          </Paragraph>
        </div>
      ) : (
        <form name="contactForm" className="flex flex-col w-11/12 mx-auto md:w-5/6 sm:w-10/12">
          <LabeledInputField
            text={from_name}
            setText={setName}
            form="contactForm"
            label="Name"
            type="text"
            maxLength={50}
            disabled={sending}
          />
          <LabeledInputField
            text={reply_to}
            setText={setEmail}
            form="contactForm"
            label="Email"
            type="email"
            maxLength={50}
            disabled={sending}
          />
          <LabeledTextfield
            text={message}
            setText={setMessage}
            form="contactForm"
            label="Message"
            maxLength={2000}
            rows={5}
            disabled={sending}
          />
          {!sending ? (
            <div className="flex justify-end mr-6 place-items-center">
              <div className="mr-6 text-left">
                {errors.length > 0 && (
                  <div className="text-sm text-red-700">
                    <ul className="leading-4 list-disc">
                      {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <FancyButton type="submit" callback={() => sendEmail()}>
                Submit
              </FancyButton>
            </div>
          ) : (
            <div
              className={`max-w-full p-4 m-4 text-white ${
                serverError ? "bg-red-500" : "bg-blue-500"
              } border-white shadow-lg rounded-tr-xl rounded-bl-xl`}>
              {serverError
                ? "Server error: Please try again later."
                : "Sending..."}
            </div>
          )}
        </form>
      )}
    </>
  );
};

interface InputField {
  label: string;
  form: string;
  text: string;
  maxLength: number;
  disabled: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

interface LabeledFieldProps extends InputField {
  type: "text" | "email";
}

const LabeledInputField: React.FC<LabeledFieldProps> = ({
  label,
  type,
  form,
  maxLength,
  text,
  setText,
  disabled,
}) => {
  return (
    <>
      <label
        htmlFor="emessageField"
        className="inline-block w-full px-4 py-2 mt-4 text-left bg-blue-700 shadow-md select-none rounded-tr-xl">
        {label}:
      </label>

      <input
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        className="p-2 text-gray-900 shadow-md outline-none rounded-bl-xl"
        type={type}
        name="emessageField"
        placeholder={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

interface TextareaProps extends InputField {
  rows?: number | undefined;
  cols?: number | undefined;
}

const LabeledTextfield: React.FC<TextareaProps> = ({
  label,
  form,
  maxLength,
  text,
  setText,
  rows,
  cols,
  disabled,
}) => {
  return (
    <>
      <label
        htmlFor="emessageField"
        className="inline-block w-full px-4 py-2 mt-4 text-left bg-blue-700 shadow-md select-none rounded-tr-xl">
        {label}:
      </label>

      <textarea
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        className="p-2 text-gray-900 shadow-md outline-none rounded-bl-xl"
        name="emessageField"
        placeholder={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={rows}
        cols={cols}
      />
    </>
  );
};

export default Contact;
