const Skills = () => {
  const skills = [
    { name: "Photoshop", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "WordPress", percentage: 85 },
    { name: "React", percentage: 88 },
    { name: "PHP", percentage: 80 },
    { name: "CSS/HTML", percentage: 92 }
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
              All the skills that I have in that field of work are mentioned.
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt.
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