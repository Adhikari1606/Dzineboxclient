import { useState, useRef, useEffect } from "react";
import { X, Mail, Phone } from "lucide-react";
import SlideInFull from "../motion/slideInfull";

export default function ContactFormPopover({ trigger, classNames="" }) {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const Port = import.meta.env.VITE_REACT_EMAIL_PORT

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRobot) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:${Port}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Close modal after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
        }, 3000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {
        <button
          ref={buttonRef}
          id="contact-button"
          onClick={() => setIsOpen(!isOpen)}
          href="/careers"
          className={
            classNames +
            " bg-blue-200 cursor-pointer hover:bg-blue-300 text-black py-3 px-6 rounded-full text-sm transition-all"
          }
        >
          {trigger ?? "Contact Us"}
          {/* </a> */}
        </button>
      }
      <div className="relative animate__fadeInRight animate__animated animate__delay-2s">
        {/* <button
      ref={buttonRef}
      onClick={() => setIsOpen(!isOpen)}
      className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 flex items-center space-x-2"
    >
      <Mail size={16} />
      <span>Contact Us</span> */}

        <div
          ref={popoverRef}
          className={`absolute right-0 top-full mt-2 bg-[var(--color2)] rounded-lg shadow-xl w-full max-w-4xl z-10 
                    transform origin-top-right transition-all duration-300 ease-in-out 
                    ${
                      isOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
          style={{ minWidth: "320px", width: "max-content" }}
        >
          <div className="flex justify-end items-center pt-2 px-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          <div className=" p-4 grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 space-y-6">
              <div className="border-b pb-4 mb-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Be In Touch</h2>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[var(--color5)]  text-gray-800 placeholder:text-gray-700 rounded border-0 focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email-ID"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[var(--color5)] text-gray-800 placeholder:text-gray-700 rounded border-0 focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[var(--color5)] text-gray-800 placeholder:text-gray-700 rounded border-0 focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-[var(--color5)] text-gray-800 placeholder:text-gray-700 rounded border-0 focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <div
                    className={`w-5 h-5 border ${
                      isRobot ? "bg-white" : "bg-blue-600"
                    } cursor-pointer flex items-center justify-center`}
                    onClick={() => setIsRobot(!isRobot)}
                  >
                    {!isRobot && <span className="text-white">✓</span>}
                  </div>
                  <label className="text-sm">I'm not a robot</label>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting || isRobot}
                    className={`px-6 py-2 rounded bg-[var(--color5)] font-medium text-black font-bold hover:bg-[var(--color4)] 
                    ${
                      isSubmitting || isRobot
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-[var(--color4)] cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="h-64 md:h-80 bg-gray-100 rounded overflow-hidden">
                {/* Replace the src with your Google Maps embed URL */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40uNzQ4NMKwTiA3M8KwNTkuMTM1J1c!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Company Location"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-600" />
                  <span className="text-white">011 4069 1399</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-white">info@dbprojects.in</span>
                    <span className="text-white">balbeer@dbprojects.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
