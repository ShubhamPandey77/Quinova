// pages/aboutUs.jsx
import { Award, Users, Target, Heart, Zap, Shield } from 'lucide-react';

function AboutUs({ navigate }) {
    const values = [
        { icon: <Target className="w-8 h-8" />, title: "Mission-Driven", desc: "We're committed to delivering excellence in every project" },
        { icon: <Heart className="w-8 h-8" />, title: "Client-Focused", desc: "Your success is our success, always putting clients first" },
        { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "Staying ahead with cutting-edge technologies and methods" },
        { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "Consistent quality and on-time delivery you can count on" }
    ];

   const team = [
  {
    name: "Ashish Dueby",
    role: "Full Stack Developer",
    image: "Ashish.jpg", 
  },
  {
    name: "Shubham Pandey",
    role: "Full Stack Developer",
    image: "Shubham.jpg",
  },
  {
    name: "Priyesh Singh",
    role: "Python Developer And Marketing Expert",
    image: "Priyesh.jpg",
  },
  {
    name: "Jigyasa Pandey",
    role: "Social Media Manager And Content Writer",
    image: "Jigyasa.jpg",
  },
  {
    name: "Ashutosh Singh",
    role: "Full Stack Developer",
    image: "",
  },
];


   

    return (
        <div className="pt-24 bg-white">
            {/* Hero */}
            <section className="py-20 px-6 bg-linear-to-br from-black to-gray-900 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We're a team of passionate professionals dedicated to transforming businesses through innovative IT solutions
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-gray-600 font-semibold text-lg">Our Story</span>
                            <h2 className="text-4xl font-bold text-black mt-2 mb-6">
                                Building Digital Excellence Since 2019
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    IT Solutions was founded with a simple mission: to help businesses thrive in the digital age. What started as a small team of developers has grown into a full-service digital agency.
                                </p>
                                <p>
                                    Today, we're proud to serve clients worldwide, delivering exceptional web development, social media management, video editing, and graphic design services that drive real results.
                                </p>
                                <p>
                                    Our commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses of all sizes.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-black text-white rounded-2xl p-8 text-center">
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-gray-400">Projects Completed</div>
                            </div>
                            <div className="bg-gray-100 text-black rounded-2xl p-8 text-center">
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-gray-600">Happy Clients</div>
                            </div>
                            <div className="bg-gray-100 text-black rounded-2xl p-8 text-center">
                                <div className="text-4xl font-bold mb-2">1+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div className="bg-black text-white rounded-2xl p-8 text-center">
                                <div className="text-4xl font-bold mb-2">98%</div>
                                <div className="text-gray-400">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gray-600 font-semibold text-lg">Our Values</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
                            What Drives Us
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gray-600 font-semibold text-lg">Our Team</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
                            Meet The Experts
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Talented professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            

            {/* CTA */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create something amazing for your business
                    </p>
                    <button
                        onClick={() => navigate('contact')}
                        className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
                    >
                        Get In Touch
                    </button>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;