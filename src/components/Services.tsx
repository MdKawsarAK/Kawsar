const Services = () => {
  const services = [
    {
      title: "Sketches",
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "✏️"
    },
    {
      title: "UI/UX Design", 
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "🎨"
    },
    {
      title: "Product Design",
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "📱"
    },
    {
      title: "App Design",
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "💻"
    },
    {
      title: "Motion Graphics",
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "🎬"
    },
    {
      title: "Responsive Design",
      description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      icon: "📐"
    }
  ];

  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">SERVICES</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">SERVICES</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;