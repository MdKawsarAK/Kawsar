import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">CONTACT</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">GET IN TOUCH</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Let's work together!</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">📧</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">devis@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 876-369-9009</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">2661 Hich meadow lane bear creek</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-foreground font-semibold mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center group">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center group">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center group">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Your Name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <Input 
                  placeholder="Subject"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message"
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;