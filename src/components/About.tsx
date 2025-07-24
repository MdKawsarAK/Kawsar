import { Button } from "@/components/ui/button";

const About = () => {
  const personalInfo = [
    { label: "Birthday", value: "May 07, 1990" },
    { label: "Phone", value: "+1 876-369-9009" },
    { label: "Email", value: "devis@example.com" },
    { label: "From", value: "2661 Hich meadow lane bear creek" },
    { label: "Language", value: "English, Germanic" },
    { label: "Freelance", value: "Available" }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">ABOUT ME</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ABOUT ME</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hi There! I'm Edward Davis
            </h3>
            <h4 className="text-xl text-primary font-semibold mb-6">Visual Designer</h4>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract,
              inspire, create desires and motivate people to respond to messages, with a view to making a
              favorable impact.
            </p>

            {/* Personal Information Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex">
                  <span className="text-foreground font-medium min-w-[80px]">{info.label} :</span>
                  <span className="text-muted-foreground ml-2">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>

          {/* Right Column - Image or Stats */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;