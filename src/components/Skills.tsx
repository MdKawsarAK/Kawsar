const Skills = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 95 },
    { name: "React.js & Vue.js js", percentage: 80 },
    { name: "Bootstrap & Tailwind", percentage: 80 },
    { name: "PHP & Laravel", percentage: 80 },
    { name: "Wordpress", percentage: 90 },
    { name: "MySQL", percentage: 85 }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">MY SKILLS</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">MY SKILLS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Technical expertise across the full development stack.
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I specialize in front-end technologies including HTML, CSS, JavaScript, and modern frameworks like
              React.js and Vue.js. My back-end expertise centers around PHP with Laravel framework, complemented
              by strong database management skills with MySQL.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm proficient with development tools including GitHub for version control, VS Code for development,
              and package managers like npm and Composer. I also work with styling frameworks like Bootstrap and Tailwind CSS.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-semibold">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out group-hover:from-primary/80 group-hover:to-primary"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;