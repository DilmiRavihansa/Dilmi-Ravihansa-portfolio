import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  CalendarDays,
  School,
  Award,
  Sparkles,
  BookOpen,
  BadgeCheck,
  User,
  Briefcase,
} from "lucide-react";

// Asset paths
const bgImage = new URL("../../assets/images/IMG1.png", import.meta.url).href;
const sideVideo = new URL("../../assets/videos/video11.mp4", import.meta.url).href;

type EducationItem = {
  id: number;
  title: string;
  institute: string;
  year: string;
  type: string;
  description: string;
  color: string;
};

const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Higher National Diploma in Software Engineering",
    institute: "National Institute of Business Management (NIBM), Galle",
    year: "2025",
    type: "Higher Education",
    description:
      "Currently pursuing higher studies in software engineering with a focus on programming, software development, and problem-solving skills for real-world industry applications.",
    color: "#22d3ee",
  },
  {
    id: 2,
    title: "Diploma in Software Engineering",
    institute: "National Institute of Business Management (NIBM), Galle",
    year: "2023 – 2024",
    type: "Diploma",
    description:
      "Completed diploma-level studies in software engineering, building a solid foundation in software development, databases, and application design.",
    color: "#818cf8",
  },
  {
    id: 3,
    title: "Certification (Short Course in Listening and Speech)",
    institute: "The Open University of Sri Lanka, Galle",
    year: "2022",
    type: "Certification",
    description:
      "Completed a short certification course to improve listening, speech, and communication abilities for academic and professional development.",
    color: "#34d399",
  },
  {
    id: 4,
    title: "G.C.E A/L",
    institute: "Sanghamittha Girls' College, Galle",
    year: "2021",
    type: "Advanced Level",
    description:
      "Completed advanced level education while developing a strong interest in technology, computing, and future software-related studies.",
    color: "#fbbf24",
  },
  {
    id: 5,
    title: "G.C.E O/L",
    institute: "Sanghamittha Girls' College, Galle",
    year: "2017",
    type: "Ordinary Level",
    description:
      "Completed ordinary level education and built the academic base for future technical and higher education studies.",
    color: "#f472b6",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: "#020817" }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-5%",
            right: "-5%",
            bottom: "-15%",
            y: bgY,
          }}
        >
          <img
            src={bgImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.22,
              display: "block",
            }}
          />
        </motion.div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(2,8,23,0.82) 0%, rgba(15,23,42,0.75) 50%, rgba(2,8,23,0.82) 100%)",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "5%",
            left: "-8%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ duration: 25, repeat: Infinity, delay: 4 }}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "0",
            left: "33%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(129,140,248,0.14) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.025,
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 lg:px-16"
        style={{ zIndex: 10 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-xl sm:text-sm">
            <Sparkles size={15} className="flex-shrink-0" />
            Academic Journey
          </div>

          <h1
            className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            Education
          </h1>

          <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-7 text-slate-400 md:text-base">
            I am Dilmi Ravihansa, a dedicated and passionate software engineering
            undergraduate at NIBM, Sri Lanka, focused on building strong skills
            in programming, software development, and problem-solving while
            preparing to contribute to innovative projects.
          </p>
        </motion.div>

        {/* Main Grid: LEFT PANEL | RIGHT TIMELINE */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex flex-col gap-5 lg:sticky lg:top-8 lg:self-start"
          >
            {/* Video Card - moved to LEFT side */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="flex items-center gap-2 border-b px-5 py-3.5"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <GraduationCap size={18} className="flex-shrink-0 text-cyan-300" />
                <span className="text-sm font-semibold text-white sm:text-base">
                  Education Showcase
                </span>

                <div className="ml-auto flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Live
                  </span>
                </div>
              </div>

              <div className="relative w-full overflow-hidden aspect-[16/10] lg:aspect-[4/5]">
                <video
                  src={sideVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left center",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(2,8,23,0.72) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* About Card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white sm:text-base">
                <User size={18} className="flex-shrink-0 text-cyan-300" />
                About Me
              </h3>

              <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                A passionate full-stack developer and software engineering student
                with interests in programming, modern application development,
                problem-solving, and creating innovative software solutions.
              </p>
            </div>

            {/* Overview Card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white sm:text-base">
                <BookOpen size={18} className="flex-shrink-0 text-cyan-300" />
                Overview
              </h3>

              <div className="space-y-3">
                {[
                  "Strong background in software engineering and application development.",
                  "Knowledge in Java, Node.js, React, Flutter, PHP, Python, SQL, and MySQL.",
                  "Interested in working on innovative projects and growing in the tech industry.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.45 }}
                    className="flex items-start gap-2.5"
                  >
                    <BadgeCheck size={16} className="mt-0.5 flex-shrink-0 text-cyan-300" />
                    <p className="text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "5+", label: "Qualifications", color: "#22d3ee" },
                { value: "2025", label: "Latest Year", color: "#818cf8" },
                { value: "Full-Stack", label: "Developer", color: "#34d399" },
                { value: "NIBM", label: "Student", color: "#f472b6" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.4 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-2xl p-4 text-center transition-all duration-300 sm:p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <h4
                    className="text-xl font-black sm:text-2xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </h4>
                  <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            <div
              className="absolute hidden lg:block"
              style={{
                left: "16px",
                top: "36px",
                bottom: "36px",
                width: "3px",
                borderRadius: "9999px",
                background: "linear-gradient(to bottom, #22d3ee, #818cf8, #f472b6)",
                opacity: 0.7,
              }}
            />

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 32, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: index * 0.09 }}
                  className="relative lg:pl-14"
                >
                  <div
                    className="absolute left-0 top-7 hidden h-9 w-9 items-center justify-center rounded-full lg:flex"
                    style={{
                      background: "rgba(2,8,23,0.9)",
                      border: `1px solid ${item.color}55`,
                      boxShadow: `0 0 18px ${item.color}44`,
                    }}
                  >
                    <Award size={15} style={{ color: item.color }} />
                  </div>

                  <motion.div
                    whileHover={{ y: -4, scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="group relative overflow-hidden rounded-2xl p-5 sm:p-6"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        borderRadius: "2px 0 0 2px",
                        background: `linear-gradient(to bottom, ${item.color}, transparent)`,
                        opacity: 0.8,
                      }}
                    />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base font-bold leading-snug text-white sm:text-lg md:text-xl">
                          {item.title}
                        </h2>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                            <School
                              size={13}
                              style={{ color: item.color }}
                              className="flex-shrink-0"
                            />
                            {item.institute}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                            <CalendarDays
                              size={13}
                              className="flex-shrink-0 text-blue-300"
                            />
                            {item.year}
                          </span>
                        </div>
                      </div>

                      <span
                        className="inline-flex w-fit flex-shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                        style={{
                          background: `${item.color}18`,
                          border: `1px solid ${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>

                    <div
                      className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                      style={{ background: item.color }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Extra professional card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white sm:text-base">
                <Briefcase size={18} className="flex-shrink-0 text-cyan-300" />
                Career Focus
              </h3>
              <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                Focused on becoming a skilled full-stack developer by applying
                knowledge in frontend and backend development, RESTful APIs,
                database systems, and modern software engineering practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        #education { scroll-margin-top: 80px; }
        @media (max-width: 640px) {
          button, a { -webkit-tap-highlight-color: transparent; }
        }
      `}</style>
    </section>
  );
}