import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Cpu,
  CreditCard,
  Database,
  FileText,
  Github,
  GraduationCap,
  Landmark,
  LineChart,
  Linkedin,
  Mail,
  MoveRight,
  WalletCards,
} from "lucide-react";
import { useEffect, useState } from "react";

import dashCredit from "@/assets/dash-credit.jpg";
import dashFraud from "@/assets/dash-fraud.jpg";
import dashRevenue from "@/assets/dash-revenue.jpg";
import { Button } from "@/components/ui/button";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yashaswi Tirole | Fintech Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Yashaswi Tirole, a data analyst turning financial data into clear, actionable decisions.",
      },
      { property: "og:title", content: "Yashaswi Tirole | Fintech Data Analyst" },
      {
        property: "og:description",
        content: "Financial analytics, dashboards, and data-led business insights by Yashaswi Tirole.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    number: "01",
    role: "Data Analyst",
    company: "Vindiata Consulting Pvt. Ltd.",
    period: "JUL 2025 — MAR 2026",
    points: [
      "Built and maintained 12+ Power BI dashboards to track key business KPIs, pipeline performance and product metrics — improving visibility for weekly reviews and reducing manual reporting dependency.",
      "Extracted, cleaned and transformed large datasets using SQL and Excel to prepare data for reporting and analysis.",
      "Wrote 30+ optimized, reusable SQL queries (Snowflake) for data extraction, trend analysis and reporting.",
      "Performed data validation and reconciliation checks to ensure accuracy and consistency across reports.",
      "Collaborated with cross-functional teams to understand requirements, define KPIs and deliver actionable reports.",
      "Automated 5+ recurring reports using Excel (pivot tables, macros, formulas) and Power BI, reducing manual effort by 50% and improving reporting efficiency.",
      "Conducted trend and anomaly analysis to support decision-making for product and operations teams.",
    ],
  },
  {
    number: "02",
    role: "Associate Consultant",
    company: "Avaali Solutions Pvt. Ltd.",
    period: "JAN 2024 — JAN 2025",
    points: [
      "Managed end-to-end SAP VIM invoice workflows, resolving 100+ queries per week, reducing backlog and ensuring consistent turnaround within SLA timelines.",
      "Tracked and analyzed 3+ KPIs (volume, processing time, error rates), performing root cause analysis to identify bottlenecks and improve issue resolution efficiency.",
      "Conducted data validation and reconciliation across financial records, ensuring 98% data accuracy and minimizing discrepancies across systems.",
      "Collaborated with 3–5 cross-functional teams to investigate data issues and identify trends, enabling faster resolution and smoother operational flow.",
      "Maintained zero escalations across reporting cycles, ensuring process reliability and strong stakeholder confidence.",
      "Developed 10+ SoPs and tracking sheets, improving workflow standardization, process visibility and overall team efficiency.",
    ],
  },
];

const education = [
  {
    qualification: "MBA (Fintech)",
    institute: "ITM Skills University",
    board: "University",
    score: "Awaited",
    year: "2028",
  },
  {
    qualification: "B.Tech (Information Technology)",
    institute: "Medi-Caps University",
    board: "University",
    score: "93%",
    year: "2024",
  },
  {
    qualification: "Class XII",
    institute: "Mahatma School of Academics and Sports",
    board: "Maharashtra State Board",
    score: "71.23%",
    year: "2020",
  },
  {
    qualification: "Class X",
    institute: "Carmel Convent School",
    board: "Maharashtra State Board",
    score: "82.20%",
    year: "2018",
  },
];

const projects = [
  {
    number: "01",
    category: "FINANCIAL INTELLIGENCE",
    title: "Revenue Pulse",
    description:
      "An executive revenue dashboard consolidating billing, product and channel data into one view of growth, margin and churn — with a rolling forecast leadership can act on each week.",
    scope: ["Stakeholder discovery", "KPI framework", "Forecast model", "Exec reporting"],
    metric: "+18.4%",
    metricLabel: "forecast accuracy",
    image: dashRevenue,
    alt: "Revenue overview dashboard with KPI cards, revenue trend line and channel breakdown",
  },
  {
    number: "02",
    category: "RISK ANALYTICS",
    title: "Credit Lens",
    description:
      "A credit scoring and borrower segmentation view that surfaces risk earlier, explains every decision to the credit committee, and cuts manual review time across loan segments.",
    scope: ["Risk scorecard", "Segment analysis", "Policy simulation", "Governance pack"],
    metric: "32%",
    metricLabel: "faster risk review",
    image: dashCredit,
    alt: "Credit risk scoring dashboard with score distribution gauge and loan segment table",
  },
  {
    number: "03",
    category: "PAYMENTS & FRAUD",
    title: "Guardrail Payments",
    description:
      "Real-time payment funnel and fraud monitoring built with risk and operations teams — anomaly alerts, geography heatmaps and decline diagnostics in a single control room.",
    scope: ["Funnel instrumentation", "Anomaly rules", "Ops playbook", "Alerting"],
    metric: "-18.3%",
    metricLabel: "fraud exposure",
    image: dashFraud,
    alt: "Payments and fraud analytics dashboard with transaction flow, anomaly alerts and geography map",
  },
];


const allProjects = [
  {
    number: "01",
    category: "PRODUCTIVITY ANALYTICS",
    title: "ZenBoard",
    description:
      "Interactive Tableau dashboard analyzing 500+ calendar events to detect employee fatigue patterns, surface burnout peaks, and identify optimal focus hours for smarter scheduling.",
    tools: ["Tableau", "Excel"],
    link: "https://github.com/Yashaswitir28/ZenBoard-Meeting-Fatigue-Productivity-Optimizer",
  },
  {
    number: "02",
    category: "OPERATIONS ANALYTICS",
    title: "Delhi Metro 360",
    description:
      "End-to-end operations model covering passenger flow prediction, train frequency optimization, smart fare pricing, and predictive maintenance for the Delhi Metro system.",
    tools: ["Python", "Pandas", "Sklearn", "Power BI"],
    link: "https://github.com/Yashaswitir28/Delhi-Metro---Prediction-Data-Analysis/tree/main",
  },
  {
    number: "03",
    category: "RETAIL ANALYTICS",
    title: "Zepto Data Analytics",
    description:
      "Retail sales dashboard analyzing total sales, item types, outlet performance, and customer preferences using interactive visualizations.",
    tools: ["SQL"],
    link: "https://github.com/Yashaswitir28/Zepto-Data-Analysis",
  },
  {
    number: "04",
    category: "SALES STRATEGY",
    title: "Sales Data Analytics",
    description:
      "Three-part business intelligence study analyzing product performance, sales trends, and customer behavior to support revenue and growth decisions.",
    tools: ["SQL", "Power BI"],
    link: "https://github.com/Yashaswitir28/Sales-Data-Analysis",
  },
];

function Index() {
  const [introOpen, setIntroOpen] = useState(true);
  const [swiping, setSwiping] = useState(false);

  useEffect(() => {
    if (!introOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introOpen]);

  const enterPortfolio = () => {
    if (swiping) return;
    setSwiping(true);
    window.setTimeout(() => setIntroOpen(false), 760);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {introOpen && (
        <section
          className={`fixed inset-0 z-50 flex flex-col bg-ink transition-all duration-700 ${swiping ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
          aria-label="Portfolio introduction"
        >
          <div className="flex items-center justify-between px-6 py-6 md:px-12">
            <span className="font-display text-lg font-semibold text-ink-foreground">YT.</span>
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">SECURE ACCESS · PORTFOLIO 2026</span>
          </div>
          <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-20">
            <div className="intro-grid absolute inset-0 opacity-40" />
            <div className="relative flex w-full max-w-md flex-col items-center">
              <p className="mb-10 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-widest text-signal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                READY TO CONNECT
              </p>
              <button
                type="button"
                onClick={enterPortfolio}
                className={`bank-card group relative aspect-[1.58/1] w-full cursor-grab overflow-hidden rounded-2xl border border-ink-border bg-ink-card p-7 text-left shadow-card transition-transform duration-700 active:cursor-grabbing ${swiping ? "translate-x-[130vw] rotate-12" : "hover:-translate-y-1 hover:rotate-1"}`}
                aria-label="Swipe card to enter Yashaswi Tirole's portfolio"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-signal" />
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-12 items-center justify-center rounded-md border border-ink-border bg-ink-soft">
                    <span className="h-5 w-7 rounded-sm border border-signal/70" />
                  </div>
                  <CreditCard className="h-7 w-7 text-ink-muted" strokeWidth={1.4} />
                </div>
                <div className="absolute inset-x-7 bottom-7">
                  <p className="font-mono text-xs tracking-[0.24em] text-ink-muted">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2026</p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[9px] tracking-widest text-ink-muted">CARDHOLDER</p>
                      <p className="mt-1 font-display text-base font-semibold text-ink-foreground">YASHASWI TIROLE</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-signal">
                      <span className="font-mono text-[10px] font-bold tracking-widest">SWIPE</span>
                      <MoveRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={enterPortfolio}
                className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-widest text-ink-muted transition-colors hover:text-ink-foreground"
              >
                SWIPE CARD TO OPEN PORTFOLIO <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      <header className="absolute inset-x-0 top-0 z-20 border-b border-border/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10" aria-label="Main navigation">
          <a href="#top" className="font-display text-xl font-bold">YT<span className="text-signal">.</span></a>
          <div className="hidden items-center gap-6 font-mono text-[10px] font-semibold tracking-widest md:flex lg:gap-8">
            <a href="#experience" className="transition-colors hover:text-signal">EXPERIENCE</a>
            <a href="#work" className="transition-colors hover:text-signal">CASE STUDIES</a>
            <a href="#projects" className="transition-colors hover:text-signal">PROJECTS</a>
            <a href="#expertise" className="transition-colors hover:text-signal">EXPERTISE</a>
            <a href="#skills" className="transition-colors hover:text-signal">SKILLS</a>
            <a href="#contact" className="transition-colors hover:text-signal">CONTACT</a>
          </div>
          <a href="#contact" className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-signal">
            AVAILABLE FOR WORK <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          </a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92vh] items-center border-b border-border px-6 pb-12 pt-28 md:px-10">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-signal" /> MBA FINTECH · DATA ANALYST
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-normal">
              Yashaswi<br />Tirole<span className="text-signal">.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Bridging data, technology, and business strategy to turn complex financial information into meaningful products and measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-12 rounded-none px-6 font-mono text-xs tracking-widest">
                <a href="#projects">EXPLORE PROJECTS <ArrowDown /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6 font-mono text-xs tracking-widest">
                <a href="#contact">LET'S CONNECT <ArrowUpRight /></a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <section id="experience" className="border-b border-border px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-signal">CAREER TIMELINE</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Work experience.</h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground md:block">2024 — 2026</span>
          </div>

          <ol className="relative border-l border-border pl-8 md:pl-12">
            {experience.map((role) => (
              <li key={role.company} className="relative pb-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border border-signal bg-signal md:-left-12"
                />
                <div className="group border border-border bg-background p-6 transition-colors hover:border-signal hover:bg-secondary md:p-9">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">/{role.number}</span>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-signal">{role.period}</p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{role.role}</h3>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <BriefcaseBusiness className="h-4 w-4 text-signal" strokeWidth={1.5} />
                    <p className="font-mono text-[11px] uppercase tracking-widest">{role.company}</p>
                  </div>
                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7 text-muted-foreground">
                        <span aria-hidden="true" className="mt-3 h-1 w-3 shrink-0 bg-signal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mb-14 mt-24 flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-signal">ACADEMIC TIMELINE</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Education.</h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground md:block">2018 — 2028</span>
          </div>

          <ol className="relative border-l border-border pl-8 md:pl-12">
            {education.map((item) => (
              <li key={item.qualification} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border border-signal bg-background md:-left-12"
                />
                <div className="flex flex-col gap-4 border border-border bg-background p-6 transition-colors hover:border-signal hover:bg-secondary md:flex-row md:items-center md:justify-between md:p-8">
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-signal">{item.year}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{item.qualification}</h3>
                    <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4 text-signal" strokeWidth={1.5} />
                      <p className="leading-7">{item.institute}</p>
                    </div>
                    <span className="mt-4 inline-block border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.board}
                    </span>
                  </div>
                  <div className="flex items-end gap-3 border-t border-border pt-4 md:shrink-0 md:flex-col md:items-end md:border-l md:border-t-0 md:pl-8 md:pt-0">
                    <p className="font-display text-3xl font-semibold text-signal">{item.score}</p>
                    <p className="pb-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground md:pb-0">
                      score
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="border-b border-border px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-signal">CASE STUDIES</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Data that moves money.</h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground md:block">2024 — 2026</span>
          </div>

          <div className="space-y-px bg-border">
            {projects.map((project) => (
              <article key={project.number} className="group grid gap-8 bg-background p-6 transition-colors hover:bg-secondary md:grid-cols-2 md:items-center md:p-10">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">/{project.number}</span>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-signal">{project.category}</p>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-lg leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.scope.map((item) => (
                      <span key={item} className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-end gap-3 border-t border-border pt-5">
                    <p className="font-display text-3xl font-semibold text-signal">{project.metric}</p>
                    <p className="pb-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{project.metricLabel}</p>
                  </div>
                </div>
                <div className="overflow-hidden border border-border bg-secondary">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </article>
            ))}
          </div>
          <a
            href="#projects"
            className="group mt-8 flex min-h-20 w-full items-center justify-between border border-border bg-background px-6 font-mono text-xs font-bold tracking-widest transition-colors hover:border-signal hover:bg-secondary md:px-10"
          >
            VIEW MORE CASE STUDIES
            <ArrowDown className="h-5 w-5 text-signal transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      <section id="projects" className="border-b border-border px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-signal">PROJECT ARCHIVE</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">End-to-end work.</h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground md:block">4 FEATURED PROJECTS</span>
          </div>
          <p className="mb-14 max-w-2xl leading-7 text-muted-foreground">
            A selection of projects that show ownership from problem definition through delivery — useful for project management and strategy roles where clear thinking, stakeholder-ready outputs, and execution matter.
          </p>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {allProjects.map((project) => (
              <article key={project.number} className="group flex flex-col bg-background p-7 transition-colors hover:bg-secondary md:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">/{project.number}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-signal"
                  >
                    <Github className="h-5 w-5" strokeWidth={1.5} />
                  </a>
                </div>
                <p className="mt-5 font-mono text-[10px] font-bold tracking-widest text-signal">{project.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-border bg-background px-2.5 py-1 font-mono text-[9px] tracking-widest text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            href="https://github.com/Yashaswitir28?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex min-h-20 w-full items-center justify-between border border-border bg-background px-6 font-mono text-xs font-bold tracking-widest transition-colors hover:border-signal hover:bg-secondary md:px-10"
          >
            VIEW ALL PROJECTS
            <Github className="h-5 w-5 text-signal transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <section id="expertise" className="bg-ink px-6 py-24 text-ink-foreground md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest text-signal">CAPABILITIES</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">From raw numbers<br />to real outcomes.</h2>
          </div>
          <div className="grid gap-px bg-ink-border sm:grid-cols-2">
            {[
              [Database, 'Data Analysis', 'SQL, Python, Excel and rigorous data cleaning.'],
              [BarChart3, 'BI & Reporting', 'Clear dashboards built for quick, confident decisions.'],
              [LineChart, 'Financial Modeling', 'Forecasts, unit economics and performance analysis.'],
              [BriefcaseBusiness, 'Business Strategy', 'Insight translated into practical recommendations.'],
            ].map(([Icon, title, text]) => {
              const SkillIcon = Icon as typeof Database;
              return (
                <div key={title as string} className="bg-ink p-7 md:p-9">
                  <SkillIcon className="h-6 w-6 text-signal" strokeWidth={1.5} />
                  <h3 className="mt-8 font-display text-2xl font-semibold">{title as string}</h3>
                  <p className="mt-3 leading-7 text-ink-muted">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="relative overflow-hidden border-y border-ink-border bg-ink px-6 py-24 text-ink-foreground md:px-10 md:py-32">
        <div className="intro-grid absolute inset-0 opacity-30" />
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-6 flex items-end justify-between border-b border-ink-border pb-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-signal">SKILL INVENTORY</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Financial fluency, technical depth.</h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-widest text-ink-muted md:block">TWO PILLARS</span>
          </div>
          <p className="relative mb-14 max-w-2xl leading-7 text-ink-muted">
            A combined view of finance fundamentals and the data stack used to turn them into analysis, dashboards, and decisions.
          </p>

          <div className="relative grid gap-px bg-ink-border lg:grid-cols-2">
            <div className="bg-ink-card p-7 transition-colors hover:bg-ink-soft md:p-10">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-signal" strokeWidth={1.5} />
                <p className="font-mono text-[10px] font-bold tracking-widest text-signal">01 — FINANCIAL</p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Understanding how money and financial institutions work</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'NSE Cogencis',
                  'Digital Payments & UPI',
                  'Card & Payment Networks',
                  'Financial Markets',
                  'Lending & Credit',
                  'Risk Management',
                  'FinTech Business Models',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-ink-border bg-ink px-3 py-1.5 font-mono text-[10px] tracking-widest text-ink-muted transition-colors hover:border-signal hover:text-ink-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-ink-card p-7 transition-colors hover:bg-ink-soft md:p-10">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-signal" strokeWidth={1.5} />
                <p className="font-mono text-[10px] font-bold tracking-widest text-signal">02 — TECHNOLOGY & DATA</p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Understanding how financial systems are built and powered</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'SQL',
                  'Python',
                  'Power BI',
                  'Advanced Excel',
                  'Snowflake',
                  'Data Analytics & Visualization',
                  'ETL / ELT',
                  'Cloud Computing & AWS',
                  'APIs & System Integration',
                  'AI / ML Fundamentals',
                  'Automation',
                  'Git & GitHub',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-ink-border bg-ink px-3 py-1.5 font-mono text-[10px] tracking-widest text-ink-muted transition-colors hover:border-signal hover:text-ink-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 border-t border-border pt-12 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest text-signal">LET'S BUILD SOMETHING USEFUL</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-none md:text-7xl">Have data. Need direction?</h2>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <Button asChild size="lg" className="h-14 shrink-0 rounded-none px-7 font-mono text-xs tracking-widest">
              <a href="mailto:yashaswitirole@gamil.com?subject=Portfolio%20enquiry%20for%20Yashaswi%20Tirole"><Mail /> START A CONVERSATION</a>
            </Button>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yashaswi-tirole"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-signal hover:text-signal"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/Yashaswitir28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-signal hover:text-signal"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/Yashaswitir28/Resume/blob/main/Resume-Yashaswi%20.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="flex h-12 w-12 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-signal hover:text-signal"
              >
                <FileText className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-[9px] tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 YASHASWI TIROLE</span>
          <span className="flex items-center gap-2"><WalletCards className="h-3.5 w-3.5" /> DATA · FINANCE · IMPACT</span>
        </div>
      </footer>
    </main>
  );
}
