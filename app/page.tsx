
import Link from "next/link";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Git & GitHub",
];

const projects = [
  {
    title: "BizPulse",
    subtitle: "Full-Stack SaaS Analytics Dashboard",
    description:
      "A business analytics dashboard for monitoring revenue, sales, customer growth, and product performance. Includes authentication, database integration, analytics charts, and reporting features.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
    ],
    github:
      "https://github.com/sahayajefrinmaglin/Bizpulse-dashboard",
      liveDemo: "https://bizpulse-dashboard-two.vercel.app/",
    type: "Full-Stack Application",
    number: "01",
  },
  {
    title: "The Bake & Cake",
    subtitle: "Bakery Website — Frontend Application",
    description:
      "A responsive bakery website featuring a welcoming homepage, navigation bar, cake menu, product cards, About section, and Contact section. Designed to provide visitors with an attractive and user-friendly browsing experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    github: "https://github.com/sahayajefrinmaglin/The-Bake-and-Cake",
    liveDemo:"https://the-bake-and-cake.vercel.app/",
    type: "Frontend Application",
    number: "02",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          {/* LOGO */}
          <Link
            href="#home"
            className="text-2xl font-bold tracking-tight text-indigo-700"
          >
            Sahaya Jefrin Maglin<span className="text-violet-500"></span>
          </Link>

          {/* ROUNDED NAVIGATION LINKS */}
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="#about"
              className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-50 to-violet-50 px-6 py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* LEFT SIDE: INTRODUCTION */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              Full-Stack Developer
            </span>

            <p className="mt-6 text-lg text-slate-600">
              Hello, I&apos;m
            </p>

            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sahaya Jefrin
             
                Maglin J
              
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl">
               Full-Stack Developer
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 md:mx-0">
            Full-Stack Developer specializing in end-to-end web application development. From designing responsive, intuitive frontend layouts to implementing backend services and database architectures, I focus on delivering reliable and efficient digital solutions. Passionate about modern tech stacks, continuous learning, and clean software architecture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="#projects"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                View My Projects
              </Link>

              <Link
                href="#contact"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-7 flex justify-center gap-6 text-sm font-semibold text-slate-600 md:justify-start">
              <a
                href="https://github.com/sahayajefrinmaglin"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-indigo-600"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sahaya-jefrin-maglin07/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-indigo-600"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: DEVELOPER IMAGE */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="w-full max-w-xs rounded-3xl border border-indigo-100 bg-white p-4 shadow-xl shadow-indigo-100/60 sm:max-w-sm">
              <div className="flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 via-slate-100 to-violet-100 sm:h-[450px] md:h-[500px]">
                <img
                  src="/my profile.png"
                  alt="Developer illustration"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-4 text-center">
                <p className="font-semibold text-slate-900">
                  Building Ideas into Reality
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Frontend · Backend · Full-Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Get to Know Me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              About Me
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm sm:p-10">
            <p className="text-base leading-8 text-slate-600">
            I’m  a Full-Stack Developer with a strong foundation in Mathematics and Computer Applications.

With hands-on frontend internship experience and a solid background in modern web technologies.
</p>

<p className="text-base mt-4 leading-8 text-slate-600">
I specialize in crafting responsive, fast, and user-friendly web applications. My expertise spans building scalable user interfaces using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS, alongside back-end and database tools like PostgreSQL and REST API integration.
            </p>

 
            <p className="text-base mt-4 leading-8 text-slate-600">
              From building business intelligence dashboards like BizPulse to interactive web applications, I bring analytical problem-solving and clean code standards to every project. I’m always excited to continuous learning, tackling full-stack engineering challenges, and collaborating on impactful digital products.
            </p>

            

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-indigo-100 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Education
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  Master of Computer Applications
                </p>
                <p className="text-md font-bold  text-indigo-700 ">
                  2024 - 2026
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  B.Sc. in Mathematics
                </p>
                <p className="text-md font-bold  text-indigo-700 ">
                  2021 - 2024
                </p>
              </div>
              

              <div className="rounded-2xl border border-violet-100 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Practical Experience
                </p>
                <p className="mt-1 font-semibold text-indigo-800">
                  I-Tech Software Academy | Jan 2026 - Jun 2026
                </p>
                <p className="mt-1 font-semibold text-slate-900 ">
                 Python Full-Stack Developer Intern 
                </p>
                
                <p className="mt-2  text-slate-900">
                  Developed practical software projects integrating server-side logic, database architecture, and responsive user interfaces.
 </p>
 
               
                
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Technologies I Use
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Skills &amp; Technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Tools and technologies I have used while learning and
              building web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-indigo-100 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-indigo-600">
              My Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A selection of applications I have built to practise
              and demonstrate my development skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-indigo-100 via-slate-100 to-violet-100 p-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                       {project.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-slate-800">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {project.type}
                  </span>

                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    {project.subtitle}
                  </h4>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                    {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800"
    >
      Live Demo <span aria-hidden="true">↗</span>
    </a>
  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
     
<section id="contact" className="bg-slate-50 px-6 py-20">
  <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 px-6 py-12 text-center sm:px-12 sm:py-16">
    <p className="font-semibold uppercase tracking-[0.2em] text-indigo-600">
      Let&apos;s Connect
    </p>

    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
      Have an Opportunity in Mind?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
      I am interested in Full-Stack Developer opportunities.
      Feel free to contact me to discuss a role or collaboration.
    </p>

    {/* EMAIL AND CALL BUTTONS */}
    <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
      <a
        href="mailto:sahayajefrin123@gmail.com"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
      >
        Email Me
      </a>

      <a
        href="tel:+971541552796"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
      >
        Call Me
      </a>
    </div>

    <p className="mt-5 text-sm text-slate-500">
      Dubai, United Arab Emirates
    </p>
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            © 2026 Sahaya Jefrin Maglin J. All rights reserved.
          </p>

          
        </div>
      </footer>
    </main>
  );
}
