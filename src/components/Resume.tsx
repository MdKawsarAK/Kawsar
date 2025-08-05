import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Jr. Programmer",
      period: "2024 - Present",
      institution: "Intellect Software Limited",
      description: "Developed and maintained scalable web applications using PHP (Laravel), MySQL, and Vue.js. Built responsive front-end interfaces with HTML, CSS, Bootstrap, Tailwind, and JavaScript. Worked on key projects including HR Management Software, Academic Management System, and POS Software."
    },
    {
      title: "Web-Application Development with Laravel React Vuejs and WordPress (WDPF)",
      period: "October 2025",
      institution: "Islamic Development Bank Bangladesh-Islamic Solidarity Education Wakf (IDB-BISEW) IT Scholarship Project",
      description: "Professional certification in full-stack web development covering Laravel, React, Vue.js, and WordPress. 788 hours comprehensive training program."
    },
  ];

  const education = [
    {
      title: "Bachelor of Masters",
      period: "2023 - 2024",
      institution: "Rajshahi University",
      description: "GPA: 3.25 / 4.0. Advanced studies in computer science and software development methodologies."
    },
    {
      title: "Bachelor of Arts",
      period: "2019 - 2022",
      institution: "Rajshahi University",
      description: "GPA: 3.38 / 4.0. Foundation in analytical thinking and problem-solving skills."
    },
        {
      title: "Higher Secondary Certificate (HSC) - Humanities",
      period: "2015 - 2016",
      institution: "Board: Rajshahi",
      description: "GPA: 4.25 out of 5.00. Strong foundation in humanities and critical thinking."
    }
  ];

  return (
    <section id="resume" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">RESUME</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">RESUME</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="w-full">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                    <div className="text-primary font-medium mb-2">{exp.period}</div>
                    <div className="text-primary text-base font-medium mb-3 leading-tight">{exp.institution}</div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="w-full">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">{edu.title}</h4>
                    <div className="text-primary font-medium mb-2">{edu.period}</div>
                    <div className="text-primary text-base font-medium mb-3 leading-tight">{edu.institution}</div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;