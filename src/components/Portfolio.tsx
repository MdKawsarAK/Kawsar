import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Product Design",
      category: "Design / Marketing",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 2,
      title: "Product Design",
      category: "Design / Marketing", 
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 3,
      title: "Product Design",
      category: "Design / Marketing",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 4,
      title: "Product Design", 
      category: "Design / Marketing",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 5,
      title: "Product Design",
      category: "Design / Marketing",
      image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 6,
      title: "Product Design",
      category: "Design / Marketing", 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">PORTFOLIOS</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">PORTFOLIOS</h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-primary">{item.category}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-10 h-10 p-0"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;