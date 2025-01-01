"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null); // For displaying messages
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // For showing submission progress

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state
    setFormStatus(null); // Reset form status

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('Message submitted successfully!');
        form.reset(); // Clear the form
      } else {
        setFormStatus('Failed to submit the form. Please try again.');
      }
    } catch  {
      setFormStatus('An error occurred while submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
        <div className="text-center px-6">
          <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
          <div className="p-4 lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xlddlrap" // Formspree endpoint
              method="POST"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    required
                    className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Write Message"
                    required
                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                  ></textarea>
                </div>

                <div className="col-span-full">
                  <h6 className="text-sm text-gray-800">Select Subject</h6>
                  <div className="flex max-lg:flex-col gap-6 mt-4">
                    <div className="flex items-center">
                      <input
                        id="radio1"
                        type="radio"
                        name="subject"
                        value="General Inquiry"
                        required
                        className="hidden peer"
                        defaultChecked
                      />
                      <label className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                        <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">General Inquiry</p>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="radio2"
                        type="radio"
                        name="subject"
                        value="Technical Support"
                        className="hidden peer"
                      />
                      <label className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                        <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">Technical Support</p>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="radio3"
                        type="radio"
                        name="subject"
                        value="Website Feedback"
                        className="hidden peer"
                      />
                      <label className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                        <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">Website Feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white ${
                  isSubmitting ? 'bg-gray-500' : 'bg-red-700 hover:bg-red-800'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
            {formStatus && (
              <p className={`mt-4 text-center ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {formStatus}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


// // "use client"
// // import { useState } from 'react';

// // const ContactPage = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [status, setStatus] = useState('');

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const formData = {
// //       name,
// //       email,
// //       message,
// //     };

// //     try {
// //       // Formspree URL integrated into the form tag
// //       const response = await fetch('https://formspree.io/f/xlddlrap', {
// //         method: 'POST',
// //         body: JSON.stringify(formData),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       if (response.ok) {
// //         setStatus('Message sent successfully!');
// //         setName('');
// //         setEmail('');
// //         setMessage('');
// //       } else {
// //         setStatus('There was an issue sending your message.');
// //       }
// //     } catch (error) {
// //       setStatus('An error occurred.');
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
// //       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="name" className="block text-lg font-medium text-gray-700">
// //             Name
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="email" className="block text-lg font-medium text-gray-700">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="message" className="block text-lg font-medium text-gray-700">
// //             Message
// //           </label>
// //           <textarea
// //             id="message"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             required
// //             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             rows={4}
// //           ></textarea>
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200"
// //         >
// //           Send Message
// //         </button>
// //       </form>

// //       {status && <p className="mt-4 text-center text-lg text-gray-700">{status}</p>}
// //     </div>
// //   );
// // };

// // export default ContactPage;

