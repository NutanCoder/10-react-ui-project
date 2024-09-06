import React from "react";
import contactImage from "../assets/Service 24_7-pana 1.svg";
import ContactHeader from "../components/contact/contact_header";
import ContactForm from "../components/contact/contact_form";

function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <div className="container mx-auto my-4 px-4 lg:px-0">
        <h1 className="text-4xl font-extrabold mb-4">CONTACT US</h1>
        <p className="text-muted leading-6 font-semibold text-base  mb-4 lg:pr-36">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/2 md:order-1 order-2">
            <ContactForm />
          </div>
          <div className="md:w-1/2 md:order-2 order-1 mb-4 md:mb-0">
            <img src={contactImage} alt="Contact Lady" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
