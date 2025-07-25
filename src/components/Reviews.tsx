import { Quote } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem do eiusmod.",
      name: "Richard Miles",
      position: "Chairman",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem do eiusmod.",
      name: "Vesta Shufelt",
      position: "Executive Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem do eiusmod.",
      name: "Joseph Alves",
      position: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">REVIEWS</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">REVIEWS</h2>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Quote className="text-primary-foreground" size={32} />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                      "{review.quote}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-foreground">{review.name}</h4>
                        <p className="text-primary">{review.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;