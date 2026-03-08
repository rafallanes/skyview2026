import { TFunction } from "i18next";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const getBlogPosts = (t: TFunction): BlogPost[] => [
  {
    id: "sustainable-architecture-future",
    title: t("blogPosts.post1.title"),
    excerpt: t("blogPosts.post1.excerpt"),
    content: `
# ${t("blogPosts.post1.title")}

The architectural landscape is undergoing a profound transformation as we face the urgent need to address climate change and environmental degradation. Sustainable architecture is no longer a niche consideration—it has become the cornerstone of responsible design practice.

## Defining Sustainable Architecture

Sustainable architecture encompasses more than just energy efficiency. It represents a holistic approach to building design that considers the entire lifecycle of a structure, from material sourcing to end-of-life disposal.

## Key Principles of Sustainable Design

### Material Selection
- Recycled and upcycled materials
- Locally sourced materials to reduce transportation emissions
- Bio-based materials like bamboo, cork, and mycelium

### Energy Efficiency
- Passive solar design principles
- High-performance insulation systems
- Smart building technologies
- Renewable energy integration

## Emerging Trends

### Biophilic Design
The integration of natural elements into built environments is gaining momentum.

### Circular Economy Principles
Architects are beginning to design for disassembly, creating buildings that can be easily deconstructed and their materials reused.

### Carbon-Neutral and Carbon-Negative Buildings
The next generation of sustainable buildings aims not just to minimize carbon emissions but to actively remove carbon from the atmosphere.

## Conclusion

The future of architecture lies in our ability to create buildings that work in harmony with natural systems.
    `,
    author: "Sarah Chen",
    date: "2024-03-15",
    readTime: t("blogPosts.post1.readTime"),
    category: "SUSTAINABILITY",
    image: "/src/assets/blog-sustainable-architecture.jpg"
  },
  {
    id: "minimalism-modern-living",
    title: t("blogPosts.post2.title"),
    excerpt: t("blogPosts.post2.excerpt"),
    content: `
# ${t("blogPosts.post2.title")}

In an era of overwhelming digital noise and material excess, minimalist architecture offers a sanctuary of calm and clarity.

## The Philosophy Behind Minimalism

Minimalist architecture is not about creating empty or stark spaces—it's about intentional design choices that prioritize function, beauty, and the essential elements of living.

## Core Elements of Minimalist Design

### Clean Lines and Geometric Forms
Minimalist architecture favors simple geometric shapes and clean lines.

### Natural Materials
- Raw concrete
- Natural wood
- Steel and glass
- Stone and marble

### Strategic Use of Light
Natural light becomes a design element in minimalist spaces.

## The Psychology of Minimalist Living

Research in environmental psychology suggests that minimalist spaces can have profound effects on mental well-being.

## Conclusion

Minimalism in modern living spaces represents more than just an aesthetic choice—it's a lifestyle philosophy that prioritizes intention, quality, and well-being.
    `,
    author: "Marcus Rodriguez",
    date: "2024-03-10",
    readTime: t("blogPosts.post2.readTime"),
    category: "DESIGN",
    image: "/src/assets/blog-minimalist-living.jpg"
  },
  {
    id: "urban-planning-community-spaces",
    title: t("blogPosts.post3.title"),
    excerpt: t("blogPosts.post3.excerpt"),
    content: `
# ${t("blogPosts.post3.title")}

The fabric of our cities is woven through the careful orchestration of public and private spaces, each contributing to the complex ecosystem of urban life.

## The Evolution of Urban Planning

Urban planning has evolved from purely functional considerations to encompass broader goals of social equity, environmental sustainability, and community well-being.

### From Zoning to Place-Making
Contemporary urban planning embraces mixed-use development and place-making strategies.

## The Architecture of Community

Community spaces serve as the living rooms of our cities—places where strangers become neighbors.

## Principles of Inclusive Design

Creating truly community-centered spaces requires attention to inclusivity and accessibility.

## Conclusion

The future of our cities depends on our ability to create spaces that strengthen community bonds while addressing the challenges of urbanization, climate change, and social inequality.
    `,
    author: "Elena Nakamura",
    date: "2024-03-05",
    readTime: t("blogPosts.post3.readTime"),
    category: "URBAN PLANNING",
    image: "/src/assets/blog-urban-planning.jpg"
  }
];

// Keep backward-compatible export for any imports that use the old pattern
export const blogPosts: BlogPost[] = getBlogPosts(((key: string) => {
  // Fallback English values for static contexts
  const fallbacks: Record<string, string> = {
    "blogPosts.post1.title": "The Future of Sustainable Architecture",
    "blogPosts.post1.excerpt": "Exploring how modern architectural practices are evolving to meet environmental challenges while maintaining design excellence.",
    "blogPosts.post1.readTime": "8 min read",
    "blogPosts.post2.title": "Minimalism in Modern Living Spaces",
    "blogPosts.post2.excerpt": "How the principles of minimalist design are reshaping contemporary residential architecture and interior spaces.",
    "blogPosts.post2.readTime": "6 min read",
    "blogPosts.post3.title": "Urban Planning and Community Spaces",
    "blogPosts.post3.excerpt": "Examining the role of thoughtful urban planning in creating vibrant, inclusive communities through architectural design.",
    "blogPosts.post3.readTime": "10 min read",
  };
  return fallbacks[key] || key;
}) as TFunction);
