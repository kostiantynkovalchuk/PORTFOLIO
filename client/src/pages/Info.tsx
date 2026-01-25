import ResumeBlock from "@/components/ResumeBlock";
import { Mail, Phone, Linkedin, Code, Bolt, Lightbulb } from "lucide-react";

export default function Info() {
  const languages = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "HTML",
    "CSS",
    "SQL",
  ];

  const tools = [
    "Claude API",
    "OpenAI GPT",
    "Midjourney",
    "ElevenLabs",
    "HeyGen",
    "Higgsfield",
    "Cursor",
    "Replit",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Render",
    "Cloudflare",
    "Git/GitHub",
    "Figma",
    "Notion",
  ];

  const skills = [
    "LLM Integration",
    "Prompt Engineering",
    "AI Agent Development",
    "AI Content Generation",
    "Full-Stack Development",
    "API Integration",
    "Product Management",
    "Agile/Scrum",
  ];

  return (
    <div className="pt-20">
      <ResumeBlock />

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-8">About Me</h2>
            <p className="text-xl md:text-2xl text-electric-blue leading-relaxed max-w-4xl mx-auto mb-6">
              "I bring a unique blend of <span className="text-gray-700 font-bold">creative</span> thinking, <span className="text-gray-700 font-bold">strategic</span> leadership, and <span className="text-gray-700 font-bold">technical</span> understanding — enabling the translation
              of bold ideas into user-centric solutions across Mobile and Web.
            </p>
            <p className="text-xl md:text-2xl text-electric-blue leading-relaxed max-w-4xl mx-auto">
              My background spans <span className="text-gray-700 font-bold">global</span> environments, where I've led projects
              that align design, development, and <span className="text-gray-700 font-bold">business</span> goals. I thrive in
              fast-moving, collaborative settings and focus on building products
              that not only function well — but create impact."
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
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
              <div className="flex flex-wrap gap-2 justify-center">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bolt className="text-electric-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full"
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
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full"
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
              href="mailto:kostiantynkovalchuk32@gmail.com"
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue transition-colors">
                <Mail className="text-electric-blue group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">kos.kova@outlook.com</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+34692480784"
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-electric-blue transition-colors">
                <Phone className="text-electric-blue group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+34 692 480 784</p>
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
