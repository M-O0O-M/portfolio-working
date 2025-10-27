import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, Zap, Code } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    duration: 'Jan 2022 – Present',
    description: 'Leading full-stack development initiatives and mentoring junior developers while architecting scalable solutions for enterprise applications.',
    achievements: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented AI-powered features reducing manual work by 40%',
      'Mentored 5 junior developers and established code review processes',
      'Optimized database queries resulting in 60% performance improvement',
      'Designed and deployed CI/CD pipelines reducing deployment time by 80%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes'],
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=96&h=96&fit=crop'
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Innovation Labs',
    location: 'New York, NY',
    duration: 'Jun 2019 – Dec 2021',
    description: 'Developed and maintained multiple client-facing applications using modern web technologies and best practices.',
    achievements: [
      'Built responsive web applications used by 100K+ users',
      'Integrated machine learning models into production systems',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Reduced application load times by 50% through optimization'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'MongoDB', 'AWS', 'TensorFlow'],
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=96&h=96&fit=crop'
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'StartupCo',
    location: 'Austin, TX',
    duration: 'May 2018 – Aug 2018',
    description: 'Contributed to early-stage product development and gained hands-on experience with agile development methodologies.',
    achievements: [
      'Developed key features for MVP launch',
      'Participated in daily standups and sprint planning',
      'Improved test coverage from 60% to 90%',
      'Learned industry best practices for software development'
    ],
    technologies: ['JavaScript', 'React', 'Express', 'MySQL', 'Git'],
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=96&h=96&fit=crop'
  },
];

function ExperienceCard({ experience, isExpanded, onToggle }: { 
  experience: ExperienceItem; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-2 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-primary to-accent rounded-full border-2 md:border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
      <div className="absolute left-4 md:left-8 top-6 md:top-8 w-4 md:w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
      
      <div className="ml-8 md:ml-20 w-full">
        <div className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between md:mb-4 md:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-start justify-between md:block w-full sm:w-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-white backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg flex-shrink-0 p-2">
                  <img 
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 md:hidden text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{experience.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 leading-tight">
                  {experience.title}
                </h3>
                <h4 className="text-base md:text-lg font-semibold text-primary mb-2 leading-tight">
                  {experience.company}
                </h4>
                <div className="hidden md:flex md:flex-wrap md:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-2 flex-shrink-0" />
                    <span className="truncate">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
                    <span className="truncate">{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`} />
            </button>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            {experience.description}
          </p>

          {isExpanded && (
            <div className="transition-all duration-500 overflow-hidden">
              <div className="mb-4 md:mb-6">
                <h5 className="text-xs md:text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                  Key Achievements
                </h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs md:text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {experience.technologies.map((tech) => (
                    <div 
                      key={tech}
                      className="inline-flex items-center rounded-full border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 text-xs px-2 py-1"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-primary/10 rotate-45 float-animation animate-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/10 rotate-12 float-animation animate-delay-4000"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-primary/5 -rotate-12 float-animation animate-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From startups to enterprise solutions, building scalable systems and leading innovative initiatives across diverse technology stacks
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isExpanded={expandedId === experience.id}
                onToggle={() => setExpandedId(expandedId === experience.id ? 0 : experience.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
