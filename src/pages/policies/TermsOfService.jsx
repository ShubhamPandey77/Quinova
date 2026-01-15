import { FileText, Handshake, AlertCircle, DollarSign, Briefcase, Lock, Zap, Mail } from 'lucide-react';

function TermsOfService() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="w-6 h-6" />,
      content: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: <Briefcase className="w-6 h-6" />,
      content: 'Quinova IT Solutions provides digital services including but not limited to: Website Development, Social Media Management, Video Editing, Graphic Design, Content Writing, and Digital Marketing. Services are provided as described in our service agreements and project specifications.'
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <Handshake className="w-6 h-6" />,
      content: 'You agree to:',
      list: [
        'Provide accurate and complete information',
        'Maintain confidentiality of your account credentials',
        'Use services legally and ethically',
        'Not engage in unauthorized access or misuse',
        'Comply with all applicable laws and regulations',
        'Notify us immediately of any unauthorized use'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: <Lock className="w-6 h-6" />,
      content: 'Original work created by Quinova IT Solutions for clients remains our intellectual property until full payment is received. Upon full payment, ownership transfers to the client. Clients may not reproduce, distribute, or create derivative works without permission.',
      subsections: [
        {
          heading: 'Client Content',
          content: 'You retain ownership of content you provide. By providing it, you grant us permission to use it to create your commissioned work.'
        },
        {
          heading: 'License Grant',
          content: 'We grant you a limited, non-exclusive, non-transferable license to use completed work for the purpose specified in your agreement.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: <DollarSign className="w-6 h-6" />,
      content: 'Payment terms are specified in individual project agreements.',
      list: [
        'Quotes are valid for 7 days from the date of issue',
        'A 50% advance payment is required to begin work',
        'Final payment must be made before project delivery',
        'Late payments may incur additional charges',
        'Payment is due within the timeframe specified in your agreement',
        'All prices are in INR unless otherwise stated'
      ]
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Quinova IT Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid for the service in question.'
    },
    {
      id: 'warranties',
      title: 'Disclaimers and Warranties',
      icon: <Zap className="w-6 h-6" />,
      content: 'Our services are provided "as is" without warranties of any kind, expressed or implied. We do not guarantee:',
      list: [
        'Specific results or outcomes from our services',
        'Error-free or uninterrupted service',
        'Website uptime or performance metrics',
        'Third-party platform functionality or changes',
        'Increased traffic, sales, or rankings (unless guaranteed in writing)'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Briefcase className="w-6 h-6" />,
      content: 'Either party may terminate a project under these conditions:',
      list: [
        'Termination must be in writing with 7 days notice',
        'Client is responsible for payment of work completed to date',
        'Upon termination, all work in progress reverts to Quinova IT Solutions',
        'We reserve the right to terminate for non-payment or violation of terms',
        'Early termination may incur additional fees'
      ]
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: <Lock className="w-6 h-6" />,
      content: 'Both parties agree to maintain confidentiality of sensitive business information shared during the course of work, except where required by law or for marketing purposes with written permission.'
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'You agree to indemnify and hold Quinova IT Solutions harmless from any claims, damages, or costs (including legal fees) arising from your violation of these terms or infringement of third-party rights by content you provide.'
    },
    {
      id: 'modifications',
      title: 'Changes to Terms',
      icon: <FileText className="w-6 h-6" />,
      content: 'We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms. We will notify you of significant changes via email.'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Mail className="w-6 h-6" />,
      content: 'For questions regarding these Terms of Service:',
      contact: {
        email: ['quinovaitsolutions@gmail.com'],
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
            Legal Agreement
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-slate-500 mt-6">Last updated: January 2024</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-white sticky top-16 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.slice(0, 8).map((section) => (
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

          {/* Important Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mt-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Important Notice</h3>
                <p className="text-slate-700 text-sm">
                  These terms constitute the entire agreement between you and Quinova IT Solutions. Individual project agreements and statements of work may contain additional terms specific to your project. In case of conflict, project-specific terms will prevail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
