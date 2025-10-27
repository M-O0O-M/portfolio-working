import { GraduationCap, Code, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building transformative solutions that create real impact
          </p>
        </div>

        {/* Education Badge */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 px-4 sm:px-6 py-4 sm:py-3 bg-accent/5 border border-accent/20 rounded-2xl sm:rounded-full max-w-full">
              <div className="flex flex-col md:flex-row items-center justify-center sm:justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <span className="font-semibold text-foreground text-sm sm:text-sm">
                  BS in Computer Science
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <span className="text-muted-foreground text-center sm:text-left">
                  Your University
                </span>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <span className="text-accent font-medium text-center sm:text-left">
                  GPA 3.8/4.0
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Journey Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-sm md:text-base">
                With 7 years of experience spanning full-stack development and AI/ML Engineering, I've had the privilege of working with vibrant teams across enterprise companies, building everything from MVPs to large-scale applications serving millions of users.
              </p>
              <p className="text-sm md:text-base">
                My journey has been defined by creating meaningful impact through technology. From research publications to innovation competitions, I've consistently focused on building solutions that genuinely improve people's lives. Whether working on accessibility, security, or wellness applications, I'm driven by the belief that technology should be both powerful and purposeful.
              </p>
              <p className="text-sm md:text-base">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>

          {/* How I Work Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">How I Work</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg iconic mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Clean Code</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Writing maintainable, scalable code that stands the test of time
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg iconic mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Innovation</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Staying ahead of technology trends and implementing cutting-edge solutions
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg iconic mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Collaboration</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Working effectively with cross-functional teams to deliver exceptional results
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg iconic mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Performance</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimizing applications for speed, accessibility, and user experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center glass-card p-4 lg:p-6 rounded-xl">
            <div className="text-2xl lg:text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground font-medium">Projects Completed</div>
          </div>
          <div className="text-center glass-card p-4 lg:p-6 rounded-xl">
            <div className="text-2xl lg:text-4xl font-bold gradient-text mb-2">7+</div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="text-center glass-card p-4 lg:p-6 rounded-xl">
            <div className="text-2xl lg:text-4xl font-bold gradient-text mb-2">30+</div>
            <div className="text-muted-foreground font-medium">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
