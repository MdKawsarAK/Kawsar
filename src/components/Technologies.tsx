const Technologies = () => {
  const technologies = [
    // Programming Languages & Frameworks
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React js", category: "frontend" },
    { name: "Bootstrap & Tailwind", category: "frontend" },
    { name: "PHP", category: "backend" },
    { name: "Laravel", category: "backend" },
    { name: "Vue js", category: "frontend" },
    { name: "WordPress", category: "cms" },
    { name: "Next.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "UI/UX Designer", category: "design" },
    { name: "MERN Stack", category: "fullstack" },
    // Tools & Databases
    { name: "MySQL", category: "database" },
    { name: "postman", category: "tool" },
    { name: "VS Code", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "Github", category: "tool" }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">TECH STACK</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technologies & Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build modern web applications.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group px-6 py-3 bg-card border border-border rounded-full 
                         hover:border-primary/50 hover:bg-primary/5 transition-all duration-300
                         cursor-default select-none animate-fade-in"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
              }}
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;