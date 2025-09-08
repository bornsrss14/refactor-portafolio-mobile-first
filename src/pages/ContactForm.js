import { useForm, ValidationError } from "@formspree/react";
import Footer from "../components/Footer";
import LogoScalable from "../core/LogoScalable";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("manbkqel");

  return (
    <>
      <main className="grid-footer-main extra-margin-extra">
        <div className="mariposa hidden-mobile">
          <img
            className="img-full-cover"
            alt="clip"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2Fpaper-clip-removebg-preview.png?alt=media&token=4d0787a5-affd-49f9-a96d-31e5bbb7cce5"
          ></img>
        </div>
        <section className="itemForm leftForm">
          <div className="flex-top-form">
            <div className="flex-row">
              <LogoScalable
                customWidth={"19px"}
                customHeight={"19px"}
                imagenImg={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
                }
              />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/bornsrss/"
                className="typeWork-txt"
              >
                /pandasneezing
              </a>
            </div>
            <div className="flex-row">
              <p className="typeWork-txt">UX </p>
              <p className="typeWork-txt">/</p>
              <p className="typeWork-txt">UI</p>
            </div>
          </div>
          <div className="div-item-left">
            <h2 id="contact-title" className="font-form-sub">
              question or feedback?
            </h2>
            <p>
              Hit the button, and I’ll contact you by e-mail within 24 hours.
            </p>
            <p className="carita-desktop-10rem">ツ</p>
          </div>
        </section>

        <section className="itemForm rightForm">
          {state.succeeded ? (
            <p>Thanks for joining!</p>
          ) : (
            <>
              <div className="div-item-left">
                <h2 id="contact-title" className="font-sub-titles">
                  Don't hesitate to reach out! ⌨️
                </h2>
                <p>
                  Drop me a message - I’ll reply as soon as I can. Can’t wait to
                  hear from you!
                </p>
                <form className="form-style-main" onSubmit={handleSubmit}>
                  <div className="div-inputs-form">
                    <div className="div-label-input">
                      <label className="" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className=""
                        id="name"
                        name="name"
                      />
                    </div>

                    <div className="div-label-input">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" required id="email" name="email" />
                    </div>

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <textarea
                      placeholder="enter your message here"
                      required
                      id="message"
                      name="message"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />

                    <button
                      className="btn-clasic-blue"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* Mensaje de éxito solo en esta sección */}
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactForm;
