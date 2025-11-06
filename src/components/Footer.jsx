// components/Footer.jsx
import { Code, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

function Footer({ navigate }) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">IT Solutions</div>
                <div className="text-gray-500 text-sm">Digital Excellence</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for comprehensive IT solutions. We transform businesses through innovative web development, social media management, video editing, and graphic design services.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800">
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Website Development</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Social Media Management</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Video Editing</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Graphic Design</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Content Writing</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on projects, offers, and industry insights</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 focus:border-gray-700 outline-none text-white placeholder-gray-500"
              />
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 IT Solutions. All rights reserved. Built with excellence.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigate('contact')}
        className="fixed bottom-8 right-8 bg-white text-black w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-40 border-4 border-black"
        title="Contact Us"
      >
        <Mail className="w-6 h-6" />
      </button>
    </footer>
  );
}

export default Footer;