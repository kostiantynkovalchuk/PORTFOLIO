import ResumeBlock from "@/components/ResumeBlock";
import { Mail, Phone, Linkedin, Code, Bolt, Lightbulb } from "lucide-react";

export default function Info() {
  const languages = ["HTML", "CSS", "JavaScript", "React", "Firebase"];
  const tools = ["Figma", "Behance", "Trello", "GitHub"];
  const skills = ["Product Management", "UX Design", "App Prototyping"];

  return (
    <div className="pt-20">
      <ResumeBlock />

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate Product Owner and Frontend Developer with over 5
              years of experience building digital products that make a
              difference. I bridge the gap between user needs and technical
              implementation, ensuring every product delivers exceptional value.
              My expertise spans from strategic product planning to hands-on
              development with modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Bolt Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="text-electric-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 m-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Bolt */}
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bolt className="text-electric-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bolt</h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 m-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-electric-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 m-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Let's Connect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:kostiantyn@email.com"
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue transition-colors">
                <Mail className="text-electric-blue group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">kostiantyn@email.com</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+34123456789"
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue transition-colors">
                <Phone className="text-electric-blue group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+34 123 456 789</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kostiantyn-kovalchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue transition-colors">
                <Linkedin className="text-electric-blue group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
