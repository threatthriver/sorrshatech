import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2, Check, X } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmissionStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20 px-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            Interested in collaboration, partnerships, or joining our research
            efforts? We'd love to hear from you.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
              Collaboration Inquiries
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
              Research Partnerships
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Contact Form */}
          <div data-aos="fade-right" data-aos-delay="100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group relative">
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }));
                      setErrors((prev) => ({ ...prev, firstName: "" }));
                    }}
                    className={`border-2 border-slate-100 hover:border-slate-200 
                              ${errors.firstName ? "border-red-500" : "focus:border-slate-400"}
                              bg-white/80 backdrop-blur-sm py-6 px-4 rounded-xl transition-all duration-300 focus:ring-0 focus:ring-offset-0`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="group relative">
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                      setErrors((prev) => ({ ...prev, lastName: "" }));
                    }}
                    className={`border-2 border-slate-100 hover:border-slate-200 
                              ${errors.lastName ? "border-red-500" : "focus:border-slate-400"}
                              bg-white/80 backdrop-blur-sm py-6 px-4 rounded-xl transition-all duration-300 focus:ring-0 focus:ring-offset-0`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="group relative">
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  className={`border-2 border-slate-100 hover:border-slate-200 
                            ${errors.email ? "border-red-500" : "focus:border-slate-400"}
                            bg-white/80 backdrop-blur-sm py-6 px-4 rounded-xl transition-all duration-300 focus:ring-0 focus:ring-offset-0`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="group relative">
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }));
                    setErrors((prev) => ({ ...prev, subject: "" }));
                  }}
                  className={`border-2 border-slate-100 hover:border-slate-200 
                            ${errors.subject ? "border-red-500" : "focus:border-slate-400"}
                            bg-white/80 backdrop-blur-sm py-6 px-4 rounded-xl transition-all duration-300 focus:ring-0 focus:ring-offset-0`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="group relative">
                <Textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }));
                    setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  className={`border-2 border-slate-100 hover:border-slate-200 
                            ${errors.message ? "border-red-500" : "focus:border-slate-400"}
                            bg-white/80 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 focus:ring-0 focus:ring-offset-0`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`w-full border-2 border-slate-200 bg-white/80 backdrop-blur-sm 
                          text-slate-800 hover:bg-white hover:border-slate-300 hover:text-slate-900 
                          py-6 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-md
                          ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {submissionStatus === "success" ? (
                  <Check className="w-5 h-5 mr-2" />
                ) : isSubmitting ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <span>Send Message</span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <div className="relative p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-slate-200 transition-all duration-300 h-full">
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-slate-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-500">
                        Email
                      </p>
                      <p className="text-base font-medium text-slate-800">
                        team@xenarcai.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-slate-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-500">
                        Location
                      </p>
                      <p className="text-base font-medium text-slate-800">
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Research Partnerships
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">
                    We actively collaborate with academic institutions, industry
                    partners, and research organizations worldwide on joint
                    research projects and initiatives.
                  </p>
                </div>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
