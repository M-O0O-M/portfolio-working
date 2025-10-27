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
    title: 'React',
    subtitle: 'JavaScript Library for Building User Interfaces',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces. React makes it painless to create interactive UIs with component-based architecture.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    technologies: ['JavaScript', 'React', 'JSX', 'Hooks', 'Virtual DOM'],
    githubUrl: 'https://github.com/facebook/react',
    liveUrl: 'https://react.dev',
    categories: ['Full-Stack', 'Developer Tools'],
    status: 'Featured',
    featured: true
  },
  {
    id: 2,
    title: 'TensorFlow',
    subtitle: 'End-to-End Machine Learning Platform',
    description: 'An open-source machine learning framework for everyone. TensorFlow is a comprehensive ecosystem for building and deploying ML models at scale.',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=400&fit=crop',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'AI'],
    githubUrl: 'https://github.com/tensorflow/tensorflow',
    liveUrl: 'https://www.tensorflow.org',
    categories: ['AI/ML'],
    status: 'Open Source'
  },
  {
    id: 3,
    title: 'Node.js',
    subtitle: 'JavaScript Runtime Built on Chrome V8',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine. It uses an event-driven, non-blocking I/O model for efficient server-side applications.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
    technologies: ['JavaScript', 'Node.js', 'V8', 'NPM', 'Event-Driven'],
    githubUrl: 'https://github.com/nodejs/node',
    liveUrl: 'https://nodejs.org',
    categories: ['Full-Stack', 'Developer Tools'],
    status: 'Open Source'
  },
  {
    id: 4,
    title: 'VS Code',
    subtitle: 'Code Editor Redefined',
    description: 'Visual Studio Code is a lightweight but powerful source code editor with built-in support for debugging, Git control, and extensibility.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    technologies: ['TypeScript', 'Electron', 'Monaco Editor', 'Extensions', 'Git'],
    githubUrl: 'https://github.com/microsoft/vscode',
    liveUrl: 'https://code.visualstudio.com',
    categories: ['Developer Tools'],
    status: 'Open Source'
  },
  {
    id: 5,
    title: 'Docker',
    subtitle: 'Platform for Containerized Applications',
    description: 'Docker enables developers to package applications into containers—standardized executable components combining source code with OS libraries.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
    technologies: ['Go', 'Containers', 'Docker', 'DevOps', 'Microservices'],
    githubUrl: 'https://github.com/docker/docker-ce',
    liveUrl: 'https://www.docker.com',
    categories: ['DevOps', 'Developer Tools'],
    status: 'Open Source'
  },
  {
    id: 6,
    title: 'Kubernetes',
    subtitle: 'Container Orchestration Platform',
    description: 'Kubernetes automates deployment, scaling, and management of containerized applications. Open-source system for managing cloud-native applications.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
    technologies: ['Go', 'Kubernetes', 'Containers', 'Cloud Native', 'Orchestration'],
    githubUrl: 'https://github.com/kubernetes/kubernetes',
    liveUrl: 'https://kubernetes.io',
    categories: ['DevOps', 'Cloud'],
    status: 'Open Source'
  },
];

const categories = ['All', 'AI/ML', 'Full-Stack', 'Developer Tools', 'DevOps', 'Cloud'];

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
