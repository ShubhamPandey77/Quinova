// components/Content.jsx
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}

export function SectionHeader({ subtitle, title, description, className = '' }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && <span className="text-gray-600 font-semibold text-lg">{subtitle}</span>}
      <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">{title}</h2>
      {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  );
}

export function ServiceCard({ icon, title, description, features, price, onGetStarted, className = '' }) {
  return (
    <div className={`group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {price && (
        <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
          <span className="text-xl font-bold text-black">{price}</span>
          {onGetStarted && (
            <button 
              onClick={onGetStarted}
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function TestimonialCard({ name, company, text, rating, avatar, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${className}`}>
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-black text-xl">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-black">{name}</div>
          <div className="text-sm text-gray-600">{company}</div>
        </div>
      </div>
    </div>
  );
}

export function StatCard({ number, label, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export function FeatureCard({ icon, title, description, onClick, className = '' }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform cursor-pointer group ${className}`}
    >
      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <button className="mt-6 text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function InputField({ label, type = 'text', required = false, value, onChange, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-black mb-2">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
        placeholder={placeholder}
      />
    </div>
  );
}

export function SelectField({ label, required = false, value, onChange, options, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-black mb-2">
        {label} {required && '*'}
      </label>
      <select 
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({ label, required = false, value, onChange, placeholder, rows = 5, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-black mb-2">
        {label} {required && '*'}
      </label>
      <textarea
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors resize-none bg-white"
        placeholder={placeholder}
      />
    </div>
  );
}

export function ContactInfoCard({ icon, title, info, className = '' }) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-black mb-1">{title}</div>
        {info.map((item, index) => (
          <div key={index} className="text-gray-600">{item}</div>
        ))}
      </div>
    </div>
  );
}

export function FAQItem({ question, answer, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <h3 className="font-bold text-black text-lg mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}