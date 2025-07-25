import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior UX/UI Designer",
      period: "Jan 2020 - Present",
      company: "Bergnaum, Hills and Howe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
      title: "Product Designer",
      period: "Jan 2016 - December 2019",
      company: "Langosh, Sipes and Raynor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
      title: "UI/UX Designer",
      period: "Jan 2014 - December 2015",
      company: "Strosin, Maggio and Homenick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    }
  ];

  const education = [
    {
      title: "Master of Computer Science",
      period: "2015 - 2016",
      institution: "University of XYZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
      title: "Bachelor of Computer Science",
      period: "2010 - 2014",
      institution: "University of ABC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
      title: "Diploma in Computer Science",
      period: "2006 - 2010",
      institution: "XYZ Institution",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                    <div className="text-primary font-medium mb-2">{exp.period}</div>
                    <div className="text-primary text-lg font-medium mb-3">{exp.company}</div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2"></div>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{edu.title}</h4>
                    <div className="text-primary font-medium mb-2">{edu.period}</div>
                    <div className="text-primary text-lg font-medium mb-3">{edu.institution}</div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
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