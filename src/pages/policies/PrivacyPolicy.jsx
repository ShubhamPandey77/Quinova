import { Shield, Mail, Lock, Eye, Settings, Users, MapPin } from 'lucide-react';

function PrivacyPolicy() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield className="w-6 h-6" />,
      content: 'At Quinova IT Solutions, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, and safeguard your information.'
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Eye className="w-6 h-6" />,
      subsections: [
        {
          heading: 'Personal Information',
          content: 'When you contact us or use our services, we may collect: Name, Email address, Phone number, Company name, Project details, Payment information'
        },
        {
          heading: 'Technical Information',
          content: 'We automatically collect: Browser type and version, IP address, Pages visited, Time and date of visit, Device information, Referral source'
        },
        {
          heading: 'Cookies and Tracking',
          content: 'We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and understand how you interact with our site.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Mail className="w-6 h-6" />,
      content: 'We use collected information to:',
      list: [
        'Provide and improve our services',
        'Respond to your inquiries and requests',
        'Process transactions and send confirmations',
        'Send promotional emails and updates (with your consent)',
        'Analyze website usage and improve user experience',
        'Comply with legal obligations',
        'Prevent fraudulent activities'
      ]
    },
    {
      id: 'information-protection',
      title: 'Information Security',
      icon: <Lock className="w-6 h-6" />,
      content: 'We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.'
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: <Users className="w-6 h-6" />,
      content: 'We do not sell, rent, or share your personal information with third parties without your explicit consent, except:',
      list: [
        'Service providers who assist us in operations',
        'Legal requirements or court orders',
        'Protection of our rights and user safety',
        'Business transfers or acquisitions'
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: <Settings className="w-6 h-6" />,
      content: 'You have the right to:',
      list: [
        'Access your personal information',
        'Request correction of inaccurate data',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Request a copy of your information'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      icon: <MapPin className="w-6 h-6" />,
      content: 'Our website uses cookies to improve functionality and user experience. You can control cookie settings through your browser. Disabling cookies may affect site functionality.'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Mail className="w-6 h-6" />,
      content: 'For privacy-related inquiries or to exercise your rights, contact us at:',
      contact: {
        email: ['QuinovaITSolutions@gmail.com', 'solutions@quinova.tech'],
        phone: '+91 7991214170'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-slate-200">
            Your Privacy Matters
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We take your privacy seriously. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-6">Last updated: January 2024</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-white sticky top-16 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 pt-2">{section.title}</h2>
              </div>

              {section.content && (
                <p className="text-slate-700 leading-relaxed mb-6">{section.content}</p>
              )}

              {section.list && (
                <ul className="space-y-3 mb-6">
                  {section.list.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6 mb-6">
                  {section.subsections.map((subsection, index) => (
                    <div key={index} className="pl-6 border-l-2 border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-2">{subsection.heading}</h3>
                      <p className="text-slate-700">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.contact && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <p className="text-slate-800 font-semibold mb-3">
                    Email: {Array.isArray(section.contact.email) ? (
                      section.contact.email.map((email, idx) => (
                        <span key={idx}>
                          <a href={`mailto:${email}`} className="text-slate-900 hover:underline">{email}</a>
                          {idx < section.contact.email.length - 1 && " / "}
                        </span>
                      ))
                    ) : (
                      <a href={`mailto:${section.contact.email}`} className="text-slate-900 hover:underline">{section.contact.email}</a>
                    )}
                  </p>
                  <p className="text-slate-800 font-semibold">
                    Phone: <a href={`tel:${section.contact.phone.replace(/\s/g, '')}`} className="text-slate-900 hover:underline">{section.contact.phone}</a>
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Policy Updates</h3>
            <p className="text-slate-700 mb-4">
              We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
            <p className="text-sm text-slate-600">
              If you have questions about this policy or our privacy practices, please contact us using the information provided above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
