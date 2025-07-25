import { Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What are the latest trends in Graphic design according to you?",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=entropy&auto=format",
      author: "Admin",
      date: "27-09-2020"
    },
    {
      id: 2,
      title: "What do you think makes someone a good designer?",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop&crop=entropy&auto=format",
      author: "Admin", 
      date: "27-09-2020"
    },
    {
      id: 3,
      title: "Were there any mistakes you've made as a designer",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=entropy&auto=format",
      author: "Admin",
      date: "27-09-2020"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">BLOG</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">LATEST NEWS</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>By: <span className="text-primary">{post.author}</span></span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Section - Repeating pattern */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={`repeat-${post.id}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>By: <span className="text-primary">{post.author}</span></span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-full transition-all duration-300 ${
                num === 1 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;