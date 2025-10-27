import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-jerry.jpg';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary/20 rotate-45 float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-accent/20 rotate-12 float-animation animate-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-primary/15 rotate-45 float-animation animate-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-primary/10 -rotate-12 float-animation animate-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border border-accent/10 rotate-30 float-animation animate-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-8 h-8 border border-primary/10 rotate-45 float-animation animate-delay-5000"></div>
        <div className="absolute top-2/3 right-1/5 w-14 h-14 border border-accent/15 -rotate-20 float-animation animate-delay-2500"></div>
        <div className="absolute top-1/5 right-1/2 w-6 h-6 border border-primary/5 rotate-15 float-animation animate-delay-1500"></div>
        <div className="absolute bottom-2/5 left-2/3 w-4 h-4 border border-accent/5 rotate-30 float-animation animate-delay-3500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Mobile Profile Image */}
          <div className="flex justify-center lg:hidden">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-700 overflow-hidden glass-card p-2">
                <img 
                  src={profileImage}
                  alt="Jerry James - Professional Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-spin animate-duration-8000"></div>
              <div className="absolute -inset-8 rounded-full border border-accent/10 animate-spin animate-duration-12000 animate-reverse"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="gradient-text lg:text-7xl">Jerry James</span>
            </h1>
            <p className="text-xl md:text-2xl font-normal lg:font-light text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              AI Engineer & Full-Stack Developer
            </p>
            <p className="hidden xs-tall:block text-sm md:text-lg lg:text-base text-muted-foreground max-w-2xl leading-relaxed">
              I architect intelligent solutions at the intersection of AI and full-stack development. From building accessibility-first applications to automating complex workflows, I transform ideas into impactful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="glow-button font-semibold px-8 py-6 text-lg inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Get In Touch
              </button>
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 border-primary/50 hover:border-primary hover:bg-primary/10 hover:text-primary px-8 py-6 text-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Desktop Profile Image */}
        <div className="hidden lg:flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-slate-700 overflow-hidden glass-card p-2">
              <img 
                src={profileImage}
                alt="Jerry James - Professional Developer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-spin animate-duration-8000"></div>
            <div className="absolute -inset-8 rounded-full border border-accent/10 animate-spin animate-duration-12000 animate-reverse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute lg:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
