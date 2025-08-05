import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/03b8f4a3-c455-406e-bd90-e2c58c02ab45.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Floating particles background effect */}
      <div className="floating-particles"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile Photo */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 mx-auto relative group">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-foreground">Hi, I am </span>
          <span className="text-primary">Kawsar Hossain</span>
        </h1>

        {/* Animated Programming Skills */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {['HTML','CSS','Bootstrap','Tailwind', 'JavaScript', 'React', 'Node.js', 'PHP', 'Laravel','Vue.js', 'MySQL', 'Wordpress',].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm
                         hover:bg-primary/20 transition-all duration-500 cursor-default
                         opacity-0 animate-fade-in transform translate-y-4"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards',
                  animationDuration: '0.6s'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/Kawsarhossain.AK/"
            className="w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
          >
             <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z" /></svg>

          </a>
          <a
            href="https://www.linkedin.com/in/kawsarhossain-ak/"
            className="w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://github.com/MdKawsarAK"
            className="w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;