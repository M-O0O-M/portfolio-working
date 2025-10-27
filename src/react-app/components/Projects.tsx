import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
  status: 'Published Research' | 'Open Source' | 'Active Development' | 'Completed' | 'Featured';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Vite',
    subtitle: 'Next Generation Frontend Tooling',
    description: 'Lightning-fast build tool that provides instant server start and hot module replacement. Vite leverages native ES modules for a superior development experience.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    technologies: ['TypeScript', 'Rollup', 'ESBuild', 'HMR', 'ES Modules'],
    githubUrl: 'https://github.com/vitejs/vite',
    liveUrl: 'https://vitejs.dev',
    categories: ['Developer Tools', 'Build Tools'],
    status: 'Featured',
    featured: true
  },
  {
    id: 2,
    title: 'Bun',
    subtitle: 'All-in-One JavaScript Runtime & Toolkit',
    description: 'Incredibly fast JavaScript runtime, bundler, test runner, and package manager all in one. Built from scratch to speed up your workflow with native performance.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop',
    technologies: ['Zig', 'JavaScript', 'Runtime', 'Bundler', 'Package Manager'],
    githubUrl: 'https://github.com/oven-sh/bun',
    liveUrl: 'https://bun.sh',
    categories: ['Developer Tools', 'Runtime'],
    status: 'Open Source'
  },
  {
    id: 3,
    title: 'Astro',
    subtitle: 'The Web Framework for Content-Driven Websites',
    description: 'Modern static site builder that delivers lightning-fast performance with partial hydration. Build faster websites with less client-side JavaScript.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    technologies: ['TypeScript', 'Astro', 'SSG', 'Partial Hydration', 'Islands'],
    githubUrl: 'https://github.com/withastro/astro',
    liveUrl: 'https://astro.build',
    categories: ['Web Framework', 'Static Site'],
    status: 'Open Source'
  },
  {
    id: 4,
    title: 'Tauri',
    subtitle: 'Build Smaller, Faster Desktop Apps',
    description: 'Framework for building tiny, blazing fast binaries for major desktop platforms. Uses web frontend with a Rust core for security and performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    technologies: ['Rust', 'WebView', 'Desktop Apps', 'Cross-Platform', 'Security'],
    githubUrl: 'https://github.com/tauri-apps/tauri',
    liveUrl: 'https://tauri.app',
    categories: ['Desktop Apps', 'Framework'],
    status: 'Open Source'
  },
  {
    id: 5,
    title: 'tRPC',
    subtitle: 'End-to-End Typesafe APIs',
    description: 'Build fully typesafe APIs without schemas or code generation. tRPC lets you easily share types between client and server with incredible DX.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    technologies: ['TypeScript', 'RPC', 'Type Safety', 'React Query', 'API'],
    githubUrl: 'https://github.com/trpc/trpc',
    liveUrl: 'https://trpc.io',
    categories: ['API', 'TypeScript'],
    status: 'Open Source'
  },
  {
    id: 6,
    title: 'Turborepo',
    subtitle: 'High-Performance Build System for JavaScript',
    description: 'Incremental bundler and build system optimized for JavaScript and TypeScript monorepos. Never do the same work twice with intelligent caching.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop',
    technologies: ['Go', 'Monorepo', 'Build System', 'Caching', 'CI/CD'],
    githubUrl: 'https://github.com/vercel/turbo',
    liveUrl: 'https://turbo.build',
    categories: ['Build Tools', 'Monorepo'],
    status: 'Open Source'
  },
];

const categories = ['All', 'Developer Tools', 'Build Tools', 'Framework', 'API', 'Runtime', 'TypeScript', 'Desktop Apps', 'Web Framework', 'Static Site', 'Monorepo'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that bridge cutting-edge technology with real-world impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="md:hidden">
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-background border border-border rounded-full px-4 py-3 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category} Projects</option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden group animate-fade-in-up ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs ${
                    project.status === 'Featured' 
                      ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80'
                      : 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}>
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <div 
                      key={tech}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-primary/10"
                    >
                      {tech}
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-primary/10">
                      +{project.technologies.length - 4} more
                    </div>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 group/view-code"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in collaborating on innovative projects?</p>
          <button 
            onClick={scrollToContact}
            className="glow-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
