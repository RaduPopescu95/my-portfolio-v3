// we will create the basic structure of each React component and export it from that file with export default And finally make sure to import it back in App.js:

import React from "react";



export default function Contact() {

// Once that's done, we'll head back to Contact.js. We're going to use JavaScript in order to submit this form.

// First of all, we're going to create some dedicated state for each of the values that are typed in the form for name, email, and message:



const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

// We will store what the user types into each of the inputs in state with the help of the onChange handler.

// To handle submission of the form, we will add the onSubmit prop to it. The function that will be called, handleSubmit, will make a post request to the endpoint "/" with all of our form data.

// We will set the headers of the request to indicate that we are sending over form data. For the request body, we will include the form name as well as all of the form data from the name, email, and message state variables.

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }



// At the end of our landing page, we're going to include our contact form to allow potential employers to reach out to us.

// This form will have 3 inputs: a name, email, and message input.

// To receive these form submissions, we will use the tool Netlify Forms to very easily take care of saving those messages.

// As you can see above, we are encoding the form data with a special encode function that you see here.

// If the message is sent correctly, we will display an alert that says "Message sent". Otherwise if there is an error, we are going to alert the user of that error.

   return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8650.956397543114!2d25.44558378368585!3d44.9357116712859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f6b03fe9501f%3A0x7c1bd5dbd51c9386!2zU3RyYWRhIFNvcm9jYSwgVMOicmdvdmnImXRl!5e0!3m2!1sro!2sro!4v1629559170340!5m2!1sro!2sro"
          />
          <div className="bg-blue-300 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ADRESĂ
              </h2>
              <p className="mt-1 text-black">
                Târgoviște, România <br />
                
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-black leading-relaxed">
                radu.p1995@yahoo.com
              </a>
              <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                TELEFON
              </h2>
              <p className="leading-relaxed text-black">0787813831</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}