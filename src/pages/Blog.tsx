import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/data/blogPosts";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import SEO from "@/components/SEO";

const Blog = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const lp = useLocalizedPath();

  const posts = getBlogPosts(t);

  const categoryMap: Record<string, string> = {
    ALL: t("blogPage.all"),
    SUSTAINABILITY: t("blogPage.sustainability"),
    DESIGN: t("blogPage.design"),
    "URBAN PLANNING": t("blogPage.urbanPlanning"),
  };
  
  const categories = ["ALL", "SUSTAINABILITY", "DESIGN", "URBAN PLANNING"];
  
  const filteredPosts = activeCategory === "ALL" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        titleKey="seo.blog.title"
        descriptionKey="seo.blog.description"
        routeKey="blog"
        breadcrumbs={[
          { name: t("nav.home", "Home"), routeKey: "home" },
          { name: t("nav.resources"), routeKey: "blog" },
        ]}
      />
      <Navigation />
      
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                {t("blogPage.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {t("blogPage.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {categoryMap[category] || category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={lp("blogPost", { id: post.id })} className="block">
                    <div className="relative overflow-hidden mb-6">
                      <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1">
                        <span className="text-xs text-foreground font-medium">{categoryMap[post.category] || post.category}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center text-xs text-muted-foreground space-x-4">
                        <span>{post.date}</span><span>•</span><span>{post.readTime}</span><span>•</span><span>{post.author}</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">{post.title}</h2>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="pt-4">
                        <span className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group-hover:underline">
                          {t("blogPage.readMore")}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">{t("blogPage.stayInformed")}</h2>
            <p className="text-xl text-muted-foreground mb-12">{t("blogPage.newsletterDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder={t("blogPage.emailPlaceholder")} className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground" />
              <button className="px-8 py-4 bg-foreground text-background hover:bg-muted-foreground transition-colors duration-300">{t("blogPage.subscribe")}</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
