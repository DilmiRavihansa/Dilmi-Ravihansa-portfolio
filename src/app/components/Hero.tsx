import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Terminal,
  Sparkles,
  FileText as Resume,
  Bug,
  Snowflake,
  Star,
  Circle,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface Social {
  icon: React.ElementType;
  href: string;
  label: string;
  handle: string;
  accent: string;
  accentText: string;
  darkBg: string;
  orbitColor: string;
}

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroVideo = new URL('../../assets/videos/video8.mp4', import.meta.url).href;
  const heroimage = new URL('../../assets/images/IMG1.png', import.meta.url).href;

  // Updated resume link
  const resumeFile =
    'https://1drv.ms/b/c/14d80c7f795708ba/IQBKfilFl7kgRbGiyaifdSUXAZ-fJfAQJFJGR36TaL8vPXc?e=a2ahAK';

  const socials: Social[] = [
    {
      icon: Github,
      href: 'https://github.com/DilmiRavihansa',
      label: 'GitHub',
      handle: 'DilmiRavihansa',
      accent: '#30363d',
      accentText: '#e6edf3',
      darkBg: '#161b22',
      orbitColor: '#30363d',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dilmi-ravihansa-28258224b/',
      label: 'LinkedIn',
      handle: 'Dilmi Ravihansa',
      accent: '#0a66c2',
      accentText: '#5ba4f5',
      darkBg: '#0a1628',
      orbitColor: '#0a66c2',
    },
    {
      icon: Mail,
      href: 'mailto:dilmiravihansa2002.1.14@gmail.com',
      label: 'Email',
      handle: 'dilmiravihansa2002.1.14@gmail.com',
      accent: '#0891b2',
      accentText: '#22d3ee',
      darkBg: '#0c1f26',
      orbitColor: '#0891b2',
    },
    {
      icon: Resume,
      href: resumeFile,
      label: 'Resume',
      handle: 'View Resume',
      accent: '#6d28d9',
      accentText: '#a78bfa',
      darkBg: '#13082b',
      orbitColor: '#6d28d9',
    },
  ];

  function OrbitalIcon({ social, index }: { social: Social; index: number }) {
    const { icon: Icon, href, label, accent, accentText, darkBg, orbitColor } = social;

    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        initial={{ opacity: 0, scale: 0.6, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.9 + index * 0.1,
          duration: 0.45,
          type: 'spring',
          stiffness: 200,
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-14 w-14 items-center justify-center"
        style={{ outline: 'none' }}
      >
        <span
          className="absolute inset-[-7px] rounded-full border border-dashed opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderColor: orbitColor,
            animation: 'hero-spin 7s linear infinite',
          }}
        />

        <span
          className="absolute inset-0 rounded-full border border-white/10 transition-all duration-300 group-hover:scale-105"
          style={{
            boxShadow: `0 0 0 0 ${accent}00`,
          }}
        />

        <span
          className="absolute inset-[3px] flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            background: '#0f172a',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />

        <Icon
          className="relative z-10 h-5 w-5 transition-all duration-300"
          style={{ color: '#475569' }}
        />

        <span
          className="pointer-events-none absolute -bottom-7 whitespace-nowrap text-[9px] uppercase tracking-[0.18em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: accentText }}
        >
          {label}
        </span>

        <span
          className="absolute inset-[3px] z-[5] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{ background: darkBg, border: `1px solid ${accent}` }}
        />

        <Icon
          className="absolute z-10 h-5 w-5 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
          style={{ color: accentText }}
        />
      </motion.a>
    );
  }

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.7 ? 'star' : 'circle',
    size: Math.random() * 6 + 2,
    left: Math.random() * 60,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 5,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  const floatingIcons = [
    { Icon: Snowflake, delay: 0, left: '10%', top: '20%' },
    { Icon: Star, delay: 2, left: '25%', top: '60%' },
    { Icon: Circle, delay: 4, left: '15%', top: '80%' },
    { Icon: Snowflake, delay: 1, left: '5%', top: '40%' },
    { Icon: Star, delay: 3, left: '20%', top: '10%' },
    { Icon: Circle, delay: 5, left: '30%', top: '70%' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroimage})`,
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/30 to-black/50" />

        <div className="absolute inset-0 lg:right-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="absolute inset-0 hidden lg:block lg:left-1/2 lg:right-0">
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
        </div>

        <motion.div
          className="absolute -left-32 top-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-purple-600/20 blur-[140px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
              }}
              animate={{
                y: ['0vh', '100vh'],
                x: [`${Math.random() * 50 - 25}px`, `${Math.random() * 50 - 25}px`],
                rotate: particle.type === 'star' ? 360 : 0,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'linear',
              }}
            >
              {particle.type === 'star' ? (
                <Star className="h-full w-full text-cyan-400" />
              ) : (
                <Circle className="h-full w-full text-purple-400" fill="currentColor" />
              )}
            </motion.div>
          ))}

          {floatingIcons.map((icon, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{ left: icon.left, top: icon.top }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: icon.delay,
                ease: 'easeInOut',
              }}
            >
              <icon.Icon className="h-6 w-6 text-cyan-400/40" />
            </motion.div>
          ))}

          {Array.from({ length: 15 }).map((_, idx) => (
            <motion.div
              key={`sparkle-${idx}`}
              className="absolute"
              style={{
                left: `${Math.random() * 40}%`,
                bottom: `${Math.random() * 30}%`,
              }}
              animate={{ scale: [0, 1, 0], opacity: [0, 0.6, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="h-3 w-3 text-purple-400" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:py-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Available for Opportunities</span>
            </motion.div>

            <div className="mb-4">
              <TypeAnimation
                sequence={['Dilmi Ravihansa', 2000]}
                wrapper="h1"
                speed={45}
                repeat={Infinity}
                cursor
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl lg:text-7xl"
              />
            </div>

            <div className="mb-6 min-h-[70px]">
              <TypeAnimation
                sequence={[
                  'QA Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'Software Engineering Graduate',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-xl font-semibold text-white/90 md:text-3xl"
              />
            </div>

            <motion.p
              className="mb-10 max-w-xl text-lg leading-8 text-gray-200/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm Dilmi Ravihansa, a passionate Software Engineering graduate from NIBM,
              Sri Lanka. Currently working as a QA Engineer at Cosmorforge Pvt Ltd, I
              specialize in software testing, quality assurance, and ensuring reliable
              application performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
                React
              </span>
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm">
                Node.js
              </span>
              <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-sm">
                Flutter
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur-sm">
                MySQL
              </span>
              <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-200 backdrop-blur-sm">
                QA Testing
              </span>
            </motion.div>

            <motion.div
              className="mb-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Code2 className="h-5 w-5" />
                  View Projects
                </span>
              </button>

              <button
                onClick={() => window.open(resumeFile, '_blank', 'noopener,noreferrer')}
                className="rounded-full border border-purple-400/40 bg-white/5 px-7 py-4 font-semibold text-purple-300 backdrop-blur-sm transition hover:bg-purple-500/10"
              >
                <span className="flex items-center justify-center gap-2">
                  <Resume className="h-5 w-5" />
                  View Resume
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <Bug className="h-4 w-4 text-pink-300" />
              <span className="text-sm text-pink-200">
                Focused on reliable software & quality-driven development
              </span>
            </motion.div>

            <div className="mb-2 flex flex-wrap justify-center gap-5 lg:justify-start">
              {socials.map((s, i) => (
                <OrbitalIcon key={s.label} social={s} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px]">
              <video className="hero-video" autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('projects')}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-video {
          width: 100%;
          height: auto;
          max-height: 800px;
          min-height: 450px;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: contrast(1.05) saturate(1.02) brightness(1.02);
        }

        @keyframes hero-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1280px) {
          .hero-video {
            max-height: 550px;
            min-height: 420px;
          }
        }

        @media (max-width: 1024px) {
          .hero-video {
            max-height: 500px;
            min-height: 380px;
            width: 100%;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero-video {
            max-height: 450px;
            min-height: 350px;
          }
        }

        @media (max-width: 640px) {
          .hero-video {
            max-height: 400px;
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}