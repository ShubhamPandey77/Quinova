import { useState } from "react";

const benefits = [
  {
    icon: "✦",
    title: "Hands-On Projects",
    description:
      "Work on real-world projects and gain practical experience from day one.",
  },
  {
    icon: "▣",
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced professionals and industry experts.",
  },
  {
    icon: "◷",
    title: "Flexible Schedule",
    description:
      "Balance your internship with your studies through flexible working hours.",
  },
  {
    icon: "↗",
    title: "Career Growth",
    description:
      "Build your skills, portfolio and professional network for your future career.",
  },
];

const internshipTracks = [
  {
    title: "Web Development",
    description:
      "Build modern and responsive websites using the latest technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive and user-friendly digital experiences.",
  },
  {
    title: "Data Science",
    description:
      "Work with data, analytics and machine learning to solve real problems.",
  },
  {
    title: "Digital Marketing",
    description:
      "Learn SEO, social media, content marketing and digital growth strategies.",
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  qualification: "",
  college: "",
  internshipTrack: "",
  message: "",
  linkedin: "",
};

export default function CareerPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove old success/error message when user starts editing
    if (submitMessage.text) {
      setSubmitMessage({
        type: "",
        text: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Basic frontend validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.qualification.trim() ||
      !formData.college.trim() ||
      !formData.internshipTrack ||
      !formData.message.trim()
    ) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });

      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });

      return;
    }

    setIsSubmitting(true);

    setSubmitMessage({
      type: "",
      text: "",
    });

    try {
      const postData = {
        type: "career",

        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),

        qualification: formData.qualification.trim(),
        college: formData.college.trim(),
        internshipTrack: formData.internshipTrack,

        message: formData.message.trim(),
        linkedin: formData.linkedin.trim(),

        date: new Date().toISOString(),
      };

      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();

      if (!response.ok || result.status !== "success") {
        throw new Error(
          result.message || "Failed to submit application."
        );
      }

      setSubmitMessage({
        type: "success",
        text: "Application submitted successfully! Our team will get back to you soon.",
      });

      setFormData(initialFormData);

      // Scroll slightly toward the message
      window.scrollTo({
        top: document.getElementById("application")?.offsetTop - 80 || 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Career application error:", error);

      setSubmitMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#17152b]">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#fdfcff] to-[#f8f7ff] px-5 py-20 text-center sm:min-h-[480px]">

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-[15%] h-24 w-24 rounded-full bg-[#f0edff]" />

        <div className="absolute bottom-[12%] right-[18%] h-12 w-12 rounded-full bg-[#f3eaff]" />

        <div className="absolute left-[8%] top-[20%] h-16 w-16 rounded-full bg-[#faf8ff]" />

        <div className="absolute bottom-[20%] left-[15%] h-8 w-8 rounded-full bg-[#f1edff]" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <span className="mt-10 inline-flex rounded-full bg-[#eeeaff] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#6048ed]">
            Build Your Career With Us
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#17152b] sm:text-5xl md:text-6xl">
            Launch Your Career with
            <span className="block bg-gradient-to-r from-[#5b4bea] to-[#8238ee] bg-clip-text text-transparent">
              Quinova Tech
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777286] sm:text-base">
            Gain real-world experience, work alongside industry experts,
            and contribute to exciting projects that prepare you for
            your future.
          </p>

          <a
            href="#application"
            className="mt-7 inline-flex rounded-lg bg-gradient-to-r from-[#5b4bea] to-[#7d36ed] px-7 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Apply Now
          </a>

        </div>
      </section>


      {/* ================= WHY INTERN ================= */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-[#eeeaff] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#6048ed]">
            Why Us?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17152b] sm:text-4xl">
            Why Intern With Us
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#817d8e] sm:text-base">
            We believe in empowering the next generation of tech
            professionals through meaningful work, mentorship and
            continuous learning.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-[#eeeef4] bg-white p-6 shadow-[0_8px_25px_rgba(35,28,70,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(35,28,70,0.1)]"
            >

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#eeeaff] text-lg text-[#6048ed] transition-all duration-300 group-hover:bg-[#6048ed] group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="text-sm font-bold text-[#252137]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#85818f]">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* ================= INTERNSHIP TRACKS ================= */}
      <section className="bg-[#fcfbff] px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="inline-flex rounded-full bg-[#eeeaff] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#6048ed]">
              Opportunities
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17152b] sm:text-4xl">
              Open Internship Tracks
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#817d8e] sm:text-base">
              Discover the perfect path to start your career and gain
              valuable industry experience.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {internshipTracks.map((track, index) => (
              <div
                key={track.title}
                className="group relative overflow-hidden rounded-xl border border-[#eeeef4] bg-white p-6 shadow-[0_8px_25px_rgba(35,28,70,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(35,28,70,0.1)]"
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="text-xs font-bold text-[#7259ee]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full bg-[#f5f3ff] px-3 py-1 text-[9px] font-medium text-[#7259ee]">
                    Internship
                  </span>

                </div>

                <h3 className="text-sm font-bold text-[#252137]">
                  {track.title}
                </h3>

                <p className="mt-3 min-h-[65px] text-xs leading-6 text-[#85818f]">
                  {track.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-[#f0eff4] pt-4 text-[10px] font-medium text-[#7055eb]">
                  <span>◷</span>
                  <span>3–6 Months</span>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= APPLICATION FORM ================= */}
      <section
        id="application"
        className="mx-auto max-w-4xl px-5 py-20 sm:px-8"
      >

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-[#eeeaff] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#6048ed]">
            Get Started
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17152b] sm:text-4xl">
            Application Form
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#817d8e]">
            Complete the form below and submit your application. Our team
            will review your profile and get back to you.
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#ededf4] bg-white p-6 shadow-[0_12px_40px_rgba(35,28,70,0.08)] sm:p-8"
        >

          {/* ================= FORM FIELDS ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />
            </div>


            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />
            </div>


            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                placeholder="Enter phone number"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />
            </div>


            {/* Qualification */}
            <div>
              <label
                htmlFor="qualification"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Current Qualification <span className="text-red-500">*</span>
              </label>

              <input
                id="qualification"
                name="qualification"
                type="text"
                value={formData.qualification}
                onChange={handleChange}
                required
                placeholder="e.g. B.Tech Computer Science"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />
            </div>


            {/* College */}
            <div>
              <label
                htmlFor="college"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                College / University <span className="text-red-500">*</span>
              </label>

              <input
                id="college"
                name="college"
                type="text"
                value={formData.college}
                onChange={handleChange}
                required
                placeholder="Enter your college name"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />
            </div>


            {/* Internship Track */}
            <div>
              <label
                htmlFor="internshipTrack"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Internship Track <span className="text-red-500">*</span>
              </label>

              <select
                id="internshipTrack"
                name="internshipTrack"
                value={formData.internshipTrack}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#e6e4ec] bg-white px-4 py-3 text-xs text-[#3e3a4d] outline-none transition focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              >
                <option value="" disabled>
                  Select internship track
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="UI/UX Design">
                  UI/UX Design
                </option>

                <option value="Data Science">
                  Data Science
                </option>

                <option value="Digital Marketing">
                  Digital Marketing
                </option>
              </select>
            </div>


            {/* Message */}
            <div className="sm:col-span-2">

              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Why do you want to join us?{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us briefly about your interest..."
                className="w-full resize-none rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />

            </div>


            {/* Portfolio / LinkedIn */}
            <div className="sm:col-span-2">

              <label
                htmlFor="linkedin"
                className="mb-2 block text-xs font-semibold text-[#4f4a60]"
              >
                Portfolio / LinkedIn URL
              </label>

              <input
                id="linkedin"
                name="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/your-profile"
                className="w-full rounded-lg border border-[#e6e4ec] px-4 py-3 text-xs text-[#3e3a4d] outline-none transition placeholder:text-[#aaa6b4] focus:border-[#765bed] focus:ring-4 focus:ring-purple-50"
              />

            </div>

          </div>


          {/* ================= STATUS MESSAGE ================= */}
          {submitMessage.text && (
            <div
              className={`mt-5 rounded-lg px-4 py-3 text-xs font-medium ${
                submitMessage.type === "success"
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "border border-red-200 bg-red-50 text-red-600"
              }`}
            >
              {submitMessage.text}
            </div>
          )}


          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-7 w-full rounded-lg bg-gradient-to-r from-[#5b4bea] to-[#7d36ed] py-3.5 text-xs font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 ${
              isSubmitting
                ? "cursor-not-allowed opacity-70"
                : "hover:-translate-y-0.5 hover:shadow-xl"
            }`}
          >
            {isSubmitting ? "Submitting Application..." : "Submit Application"}
          </button>

          <p className="mt-4 text-center text-[10px] leading-5 text-[#9a96a5]">
            By submitting this form, you agree to be contacted by the Quinova
            Tech team regarding your internship application.
          </p>

        </form>
      </section>

    </div>
  );
}