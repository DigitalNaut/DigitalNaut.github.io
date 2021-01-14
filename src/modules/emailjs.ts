import emailjs from "emailjs-com";

const loadEmailJS = (callback: (loaded: boolean, error?: Error) => void) => {
  const existingScript = document.getElementById("emailJSScript");

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";
    script.id = "emailJSScript";
    document.body.appendChild(script);
    script.onload = (e) => {
      emailjs.init(process.env.REACT_APP_EMAILJS_USER || "");
      callback(true);
    };
  }
  if (existingScript)
    callback(false, new Error("EmailJS module already loaded."));
};

export default loadEmailJS;
