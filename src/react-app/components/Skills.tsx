import { Code, Brain, Server, Monitor, Cloud } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: string;
  description: string;
  experience: string;
  level: 'primary' | 'secondary' | 'basic';
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-4 h-4 text-white" />,
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'AI/ML, automation, APIs', experience: '7y+', level: 'primary' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Full-stack, React, Node.js', experience: '6y+', level: 'primary' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Enterprise React/Next.js', experience: '4y+', level: 'secondary' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Spring Boot, enterprise', experience: '1y+', level: 'basic' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'Systems, algorithms', experience: 'Academic', level: 'basic' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Database design, queries', experience: '5y+', level: 'secondary' },
    ]
  },
  {
    title: 'AI/ML Technologies',
    icon: <Brain className="w-4 h-4 text-white" />,
    skills: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', description: 'Deep learning, neural networks', experience: '3y+', level: 'secondary' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', description: 'Research, experimentation', experience: '1y+', level: 'basic' },
      { name: 'OpenAI SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', description: 'GPT integration, automation', experience: '1y+', level: 'basic' },
      { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', description: 'Transformers, fine-tuning', experience: '1y+', level: 'basic' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', description: 'Traditional ML, preprocessing', experience: '4y+', level: 'secondary' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', description: 'Data analysis, manipulation', experience: '4y+', level: 'secondary' },
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-4 h-4 text-white" />,
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'RESTful APIs, microservices', experience: '6y+', level: 'primary' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Web frameworks, middleware', experience: '6y+', level: 'primary' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', description: 'High-performance Python APIs', experience: '4y+', level: 'secondary' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', description: 'Web apps, admin panels', experience: '1y+', level: 'basic' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', description: 'Lightweight APIs', experience: '1y+', level: 'basic' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Enterprise Java apps', experience: '1y+', level: 'basic' },
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Monitor className="w-4 h-4 text-white" />,
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Component architecture, hooks', experience: '6y+', level: 'primary' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'SSG/SSR applications', experience: '1y+', level: 'basic' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', description: 'Progressive web apps', experience: 'Project-based', level: 'basic' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first styling', experience: '3y+', level: 'secondary' },
      { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Responsive design', experience: '7y+', level: 'primary' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-4 h-4 text-white" />,
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', description: 'EC2, S3, Lambda, RDS', experience: '4y+', level: 'secondary' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization', experience: '4y+', level: 'secondary' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', description: 'Container orchestration', experience: 'Project-based', level: 'basic' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'NoSQL databases', experience: '4y+', level: 'secondary' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Relational databases', experience: '5y+', level: 'secondary' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control, collaboration', experience: '7y+', level: 'primary' },
    ]
  },
];

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="glass-card p-4 rounded-xl w-96 flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 iconic rounded-lg bg-primary mr-3 flex items-center justify-center flex-shrink-0">
          {category.icon}
        </div>
        <h3 className="md:text-lg font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-2">
        {category.skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between py-1.5 px-2 rounded-md bg-secondary/30 hover:bg-primary/10 transition-colors duration-200">
            <div className="lg:flex items-center gap-2 min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-shrink-0">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`} 
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className="font-normal md:font-medium text-foreground text-xs md:text-sm text-nowrap">
                  {skill.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs text-muted-foreground hidden sm:inline truncate">
                {skill.description}
              </span>
            </div>
            <div className={`rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs flex items-center gap-1 px-1.5 py-0.5 ml-2 flex-shrink-0 ${
              skill.level === 'primary' 
                ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80'
                : skill.level === 'secondary'
                ? 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
                : 'text-foreground border-border hover:bg-accent'
            }`}>
              <span className="text-xs md:text-sm">{skill.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies I've worked with in real-world projects and professional environments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          <div className="text-center glass-card p-3 rounded-lg">
            <div className="w-8 h-8 iconic rounded-lg bg-primary mx-auto mb-2 flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-muted-foreground font-medium text-xs">Languages</div>
          </div>
          <div className="text-center glass-card p-3 rounded-lg">
            <div className="w-8 h-8 iconic rounded-lg bg-primary mx-auto mb-2 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-muted-foreground font-medium text-xs">AI/ML Tools</div>
          </div>
          <div className="text-center glass-card p-3 rounded-lg">
            <div className="w-8 h-8 iconic rounded-lg bg-primary mx-auto mb-2 flex items-center justify-center">
              <Server className="w-4 h-4 text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-muted-foreground font-medium text-xs">Frameworks</div>
          </div>
          <div className="text-center glass-card p-3 rounded-lg">
            <div className="w-8 h-8 iconic rounded-lg bg-primary mx-auto mb-2 flex items-center justify-center">
              <Cloud className="w-4 h-4 text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-muted-foreground font-medium text-xs">Cloud Tech</div>
          </div>
        </div>
      </div>
    </section>
  );
}
