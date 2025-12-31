import { X, Mail, ArrowRight } from 'lucide-react';

function ContactForm({ showContactForm, handleCloseForm, formData, setFormData, handleSubmit }) {
  if (!showContactForm) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleCloseForm}
      ></div>

      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={handleCloseForm}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
            <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours</p>
          </div>

          <div className="space-y-5">
            {[
              { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
              { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label className="block text-sm font-medium text-slate-900 mb-2">{label}</label>
                <input
                  type={type}
                  required={label.includes("*")}
                  value={formData[id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  placeholder={placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Service Interested In *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
              >
                <option value="">Select a service</option>
                <option value="website">Website Development</option>
                <option value="social-media">Social Media Management</option>
                <option value="video">Video Editing</option>
                <option value="design">Graphic Design</option>
                <option value="content">Content Writing</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Project Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
              >
                <option value="">Select budget range</option>
                <option value="499-5000">₹499 - ₹5,000</option>
                <option value="5000-9999">₹5,000 - ₹9,999</option>
                <option value="9999-19999">₹9,999 - ₹19,999</option>
                <option value="19999+">₹19,999+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Project Details *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-sm text-slate-600 text-center">
              We'll respond within 24 hours. Your information is confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
