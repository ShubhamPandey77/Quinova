import { RotateCcw, Calendar, CheckCircle, AlertCircle, DollarSign, FileText, Zap, Mail } from 'lucide-react';

function RefundPolicy() {
  const sections = [
    {
      id: 'overview',
      title: 'Refund Policy Overview',
      icon: <RotateCcw className="w-6 h-6" />,
      content: 'At Quinova IT Solutions, we stand behind the quality of our work. Our refund policy is designed to protect both our clients and our team while ensuring fair and transparent terms.'
    },
    {
      id: 'eligibility',
      title: 'Refund Eligibility',
      icon: <CheckCircle className="w-6 h-6" />,
      content: 'Refunds are available under the following conditions:',
      list: [
        'Refund requests must be made within 7 days of project completion',
        'The project deliverables do not meet the agreed specifications',
        'Quinova IT Solutions fails to deliver the project within the agreed timeline',
        'The client cancels the project before work begins (100% refund of advance)',
        'The client cancels during the initial phase (75% refund of advance)',
        'The client requests a refund within 48 hours of receiving the work'
      ]
    },
    {
      id: 'non-refundable',
      title: 'Non-Refundable Situations',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Refunds are NOT applicable in the following scenarios:',
      list: [
        'Client-requested changes or modifications that deviate from original specifications',
        'Client changes mind after work is substantially completed (>75%)',
        'Project completion is delayed due to client\'s lack of response or provided materials',
        'Client fails to pay full payment by the agreed deadline',
        'Work has been delivered and used for 14+ days without refund request',
        'Disputes arising from misunderstanding of original project scope',
        'Third-party software, plugins, or licenses the client requested',
        'Work completed per agreed specifications but client changed requirements'
      ]
    },
    {
      id: 'refund-process',
      title: 'Refund Process',
      icon: <DollarSign className="w-6 h-6" />,
      content: 'If you are eligible for a refund, follow these steps:',
      subsections: [
        {
          heading: 'Step 1: Submit Request',
          content: 'Contact us at QuinovaITSolutions@gmail.com or solutions@quinova.tech with your project details and reason for the refund request.'
        },
        {
          heading: 'Step 2: Review',
          content: 'Our team will review your request within 3 business days to verify eligibility and assess the work completed.'
        },
        {
          heading: 'Step 3: Communication',
          content: 'We will contact you to discuss your concerns and explore solutions such as revisions or amendments.'
        },
        {
          heading: 'Step 4: Resolution',
          content: 'If eligible, we will process your refund. Processing typically takes 5-7 business days depending on your payment method.'
        }
      ]
    },
    {
      id: 'refund-timeline',
      title: 'Refund Timeline',
      icon: <Calendar className="w-6 h-6" />,
      content: 'Refund processing times depend on the stage of work:',
      list: [
        'Before work starts: 100% refund within 7 days',
        'During initial phase (<25% complete): 75% refund within 7-10 days',
        'During development (25-50% complete): 50% refund within 10-14 days',
        'Near completion (>50%): 25% refund or revision-based settlement',
        'Delivery method refund time varies: Credit card (5-7 days), Bank transfer (7-10 days), Digital wallet (2-3 days)'
      ]
    },
    {
      id: 'partial-refunds',
      title: 'Partial Refunds & Credits',
      icon: <FileText className="w-6 h-6" />,
      content: 'Instead of full refunds, we offer flexible alternatives:',
      list: [
        'Revisions: Unlimited revisions within 30 days at no extra cost',
        'Account credits: Convert refund amount to credit for future projects (10% bonus)',
        'Scope reduction: Reduce project scope and refund the difference',
        'Service swap: Apply refund amount to a different service',
        'Payment installments: Split remaining payment into manageable installments'
      ]
    },
    {
      id: 'revision-policy',
      title: 'Revision Policy',
      icon: <Zap className="w-6 h-6" />,
      content: 'Before requesting a refund, know that we offer revision rounds:',
      list: [
        'Unlimited revisions during the 30-day post-delivery period',
        'Revisions must be within the scope of the original agreement',
        'Major changes beyond original scope may require additional fees',
        'Revision requests should be specific and actionable',
        'Response time for revisions: 3-5 business days'
      ]
    },
    {
      id: 'special-cases',
      title: 'Special Cases',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Certain situations may qualify for exceptions:',
      subsections: [
        {
          heading: 'Technical Failures',
          content: 'If the deliverable has technical issues preventing functionality, we will fix it at no cost or provide a full refund.'
        },
        {
          heading: 'Force Majeure',
          content: 'In case of unforeseen circumstances preventing project completion, we will offer a refund or timeline extension.'
        },
        {
          heading: 'Service Quality Issues',
          content: 'If we fail to maintain professional standards, refunds or credits may be offered at our discretion.'
        }
      ]
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      icon: <FileText className="w-6 h-6" />,
      content: 'In case of disputes about refund eligibility:',
      list: [
        'Contact our support team to discuss and resolve the issue',
        'Provide documentation of the issue (screenshots, emails, etc.)',
        'Allow 5 business days for investigation',
        'We aim to reach a fair resolution for both parties',
        'Final decisions are made by our management team'
      ]
    },
    {
      id: 'no-refund-guarantee',
      title: 'Results & Guarantees',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Please note:',
      list: [
        'We guarantee quality work, not specific business results',
        'Marketing and SEO results are not guaranteed unless explicitly promised in writing',
        'Results depend on external factors beyond our control (market, competition, algorithms)',
        'Refunds will not be issued for unmet expectations of results',
        'We deliver according to specifications, not desired outcomes'
      ]
    },
    {
      id: 'contact',
      title: 'Questions About Refunds?',
      icon: <Mail className="w-6 h-6" />,
      content: 'Have questions? Contact us:',
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
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
            Transparent & Fair
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in transparent policies and fair terms. Learn when and how refunds are processed.
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
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
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6 mb-6">
                  {section.subsections.map((subsection, index) => (
                    <div key={index} className="pl-6 border-l-2 border-green-200">
                      <h3 className="font-semibold text-slate-900 mb-2">{subsection.heading}</h3>
                      <p className="text-slate-700">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.contact && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-slate-800 font-semibold mb-3">
                    Email: {Array.isArray(section.contact.email) ? (
                      section.contact.email.map((email, idx) => (
                        <span key={idx}>
                          <a href={`mailto:${email}`} className="text-green-600 hover:text-green-800 hover:underline">{email}</a>
                          {idx < section.contact.email.length - 1 && " / "}
                        </span>
                      ))
                    ) : (
                      <a href={`mailto:${section.contact.email}`} className="text-green-600 hover:text-green-800 hover:underline">{section.contact.email}</a>
                    )}
                  </p>
                  <p className="text-slate-800 font-semibold">
                    Phone: <a href={`tel:${section.contact.phone.replace(/\s/g, '')}`} className="text-green-600 hover:text-green-800 hover:underline">{section.contact.phone}</a>
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-green-50 to-slate-50 border border-green-200 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Points to Remember</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-green-100">
                <h4 className="font-bold text-slate-900 mb-2">📋 7-Day Window</h4>
                <p className="text-slate-700 text-sm">Refund requests must be made within 7 days of project completion.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-green-100">
                <h4 className="font-bold text-slate-900 mb-2">✨ Unlimited Revisions</h4>
                <p className="text-slate-700 text-sm">Get unlimited revisions within 30 days instead of a refund.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-green-100">
                <h4 className="font-bold text-slate-900 mb-2">💡 Flexible Options</h4>
                <p className="text-slate-700 text-sm">Choose credits, payment plans, or scope reduction as alternatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RefundPolicy;
