import { Button } from "@/components/ui/button";
import CountUp from "@/components/CountUp";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const personalInfo = [
    { label: "Birthday", value: "May 07, 1990" },
    { label: "Phone", value: "+1 876-369-9009" },
    { label: "Email", value: "devis@example.com" },
    { label: "From", value: "2661 Hich meadow lane bear creek" },
    { label: "Language", value: "English, Germanic" },
    { label: "Freelance", value: "Available" }
  ];

  const stats = [
    { number: 5, suffix: "+", title: "Years Experience" },
    { number: 200, suffix: "+", title: "Projects Completed" },
    { number: 150, suffix: "+", title: "Happy Clients" },
    { number: 50, suffix: "+", title: "Awards Won" }
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
          {/* Left Column - Profile Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Edward Davis" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Column - About Details */}
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
          </div>
        </div>

        {/* Stats Section - Below the main content */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Professional Statistics</h3>
            <p className="text-muted-foreground">Numbers that speak for my expertise</p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                  <div className="text-muted-foreground mt-2">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Section - Below stats */}
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;