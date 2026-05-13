import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { DownloadCvButton } from "@/components/site/download-cv-button";
import { MobileNav } from "@/components/site/mobile-nav";
import { Reveal } from "@/components/site/reveal";
import { StackOrbit } from "@/components/site/stack-orbit";
import { SystemsConstellation } from "@/components/site/systems-constellation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  achievements,
  certifications,
  fellowshipExperience,
  navItems,
  profile,
  projects,
  stackGroups,
  workExperience,
} from "@/data/profile";
import { cn } from "@/lib/utils";

const hackathonProjects = projects.filter((project) => project.category === "Hackathon");
const capstoneProjects = projects.filter((project) => project.category === "Capstone");

const projectOutcomes: Record<string, string> = {
  "Parrot AI": "2nd Runner-Up",
  Nayon: "Champion + Best Presentation",
  EcoMend: "Capstone Lead",
  WasteLess: "AI/ML Mobile Build",
  "PUP Hackathon: UtHack ang Puhunan": "Top 10",
};

const projectAccents = [
  "from-lime-300/35 via-emerald-200/20 to-white",
  "from-sky-200/55 via-lime-100/35 to-white",
  "from-emerald-200/45 via-zinc-100 to-white",
  "from-amber-200/45 via-lime-100/35 to-white",
  "from-violet-200/35 via-zinc-100 to-white",
];

const proofStats = [
  { value: "2nd Runner-Up", label: "Voice AI Hackathon Manila 2026" },
  { value: "Champion", label: "P2OJECT: YSES Ideathon 2025" },
  { value: "Magna Cum Laude", label: "Academic distinction" },
];

const proofAchievements = achievements.filter(
  (item) => item.title !== "AI & Society Fellowship" && item.title !== "Security + AI Certifications",
);

function SectionHeading({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 md:px-8">
      <p className={dark ? "text-xs font-semibold uppercase tracking-[0.28em] text-lime-300" : "text-xs font-semibold uppercase tracking-[0.28em] text-lime-700"}>
        {eyebrow}
      </p>
      <div className={cn("grid gap-5 md:items-end", copy && "md:grid-cols-[0.86fr_1fr]")}>
        <h2 className={dark ? "text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl" : "text-3xl font-semibold leading-tight tracking-normal text-zinc-950 md:text-5xl"}>
          {title}
        </h2>
        {copy ? (
          <p className={dark ? "max-w-2xl text-base leading-7 text-white/62 md:justify-self-end" : "max-w-2xl text-base leading-7 text-zinc-600 md:justify-self-end"}>
            {copy}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {workExperience.map((work, index) => (
        <Reveal key={work.company} delay={index * 0.04}>
          <article className="grid gap-7 py-9 md:grid-cols-[0.34fr_1fr] md:py-11">
            <div>
              <Badge variant="outline" className="border-white/15 bg-white/5 text-white/72">
                {work.category}
              </Badge>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white">{work.company}</h3>
              <p className="mt-2 text-lg font-medium text-lime-200">{work.role}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-white/42">{work.period}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/46">
                <MapPin className="size-3.5" />
                {work.location}
              </p>
            </div>
            <div className="space-y-5">
              <p className="max-w-3xl text-xl font-medium leading-8 tracking-normal text-white/86">{work.summary}</p>
              <ul className="grid gap-3 text-sm leading-6 text-white/60 md:grid-cols-3">
                {work.bullets.map((bullet) => (
                  <li key={bullet} className="border-l border-white/15 pl-4">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {work.stack.map((item) => (
                  <span key={`${work.company}-${item}`} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function ProjectList({ items }: { items: typeof projects }) {
  return (
    <div className={cn("grid gap-5", items.length > 1 && "md:grid-cols-2")}>
      {items.map((project, index) => {
        const isFeatured = project.name === "Parrot AI";
        const outcome = projectOutcomes[project.name] ?? project.category;
        const accent = projectAccents[index % projectAccents.length];

        return (
          <Reveal key={project.name} delay={index * 0.05} className="h-full">
            <article
              className={cn(
                "group flex h-full min-h-[520px] flex-col overflow-hidden border transition duration-300 hover:-translate-y-1",
                isFeatured
                  ? "border-zinc-900 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/15"
                  : "border-zinc-200 bg-white text-zinc-950 shadow-sm shadow-zinc-950/[0.03] hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-950/[0.07]",
              )}
            >
              <div
                className={cn(
                  "relative min-h-36 overflow-hidden border-b p-5",
                  isFeatured
                    ? "border-white/10 bg-zinc-950"
                    : "border-zinc-200 bg-gradient-to-br",
                  !isFeatured && accent,
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.045)_1px,transparent_1px)] bg-[size:32px_32px]",
                    isFeatured ? "opacity-20 invert" : "opacity-35",
                  )}
                />
                {isFeatured ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(190,242,100,0.34),transparent_32%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.14),transparent_26%)]" />
                ) : null}
                <div className="relative flex items-start justify-between gap-4">
                  <Badge
                    variant="outline"
                    className={cn(
                      isFeatured
                        ? "border-white/15 bg-white/5 text-white/78"
                        : "border-zinc-300 bg-white/75 text-zinc-700 backdrop-blur",
                    )}
                  >
                    {project.category}
                  </Badge>
                  <span className={cn("text-sm font-semibold", isFeatured ? "text-white/28" : "text-zinc-300")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative mt-12 flex items-end justify-between gap-5">
                  <div>
                    <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", isFeatured ? "text-lime-200" : "text-lime-800")}>
                      Result
                    </p>
                    <p className="mt-2 text-2xl font-semibold leading-tight tracking-normal md:text-3xl">{outcome}</p>
                  </div>
                  <div
                    aria-hidden="true"
                    className={cn(
                      "hidden h-14 w-28 shrink-0 rounded-full border sm:block",
                      isFeatured
                        ? "border-lime-200/25 bg-lime-200/10 shadow-[0_0_55px_rgba(190,242,100,0.18)]"
                        : "border-zinc-900/10 bg-white/45 shadow-inner",
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className={cn("max-w-xl text-sm leading-6", isFeatured ? "text-white/56" : "text-zinc-500")}>
                  {project.visual}
                </p>
                <h3 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-normal md:text-[2.65rem]">
                  {project.name}
                </h3>
                <p className={cn("mt-3 flex items-center gap-2 text-sm", isFeatured ? "text-white/48" : "text-zinc-500")}>
                  <MapPin className="size-3.5 shrink-0" />
                  {project.location}
                </p>
                <p className={cn("mt-5 max-w-2xl text-base font-medium leading-7", isFeatured ? "text-white/84" : "text-zinc-800")}>
                  {project.headline}
                </p>

                <div className={cn("mt-6 border-y py-5", isFeatured ? "border-white/10" : "border-zinc-200")}>
                  <div className="grid gap-4 sm:grid-cols-[0.34fr_1fr]">
                    <div>
                      <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", isFeatured ? "text-white/38" : "text-zinc-400")}>
                        Role
                      </p>
                      <p className={cn("mt-2 text-sm font-semibold leading-6", isFeatured ? "text-white/78" : "text-zinc-800")}>
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", isFeatured ? "text-white/38" : "text-zinc-400")}>
                        What I did
                      </p>
                      <ul className="mt-2 grid gap-2.5 text-sm leading-6">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className={cn("flex gap-2.5", isFeatured ? "text-white/62" : "text-zinc-600")}>
                            <CheckCircle2 className={cn("mt-1 size-3.5 shrink-0", isFeatured ? "text-lime-200" : "text-lime-700")} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.name}-${item}`}
                      className={cn(
                        "rounded-md px-2.5 py-1 text-xs font-medium",
                        isFeatured
                          ? "border border-white/10 bg-white/5 text-white/68"
                          : "bg-zinc-100 text-zinc-700 group-hover:bg-lime-100 group-hover:text-zinc-950",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/72 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md border border-white/15 bg-white text-sm font-black text-black">
              JL
            </span>
            <span className="hidden text-sm font-semibold tracking-normal sm:inline">{profile.shortName}</span>
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href} className="text-white/70 hover:bg-white/10 hover:text-white focus:bg-white/10">
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-2 md:flex">
            <DownloadCvButton
              label="CV"
              variant="ghost"
              className="text-white/75 hover:bg-white/10 hover:text-white"
            />
            <Button
              render={<a href={profile.linkedIn} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              variant="ghost"
              className="text-white/75 hover:bg-white/10 hover:text-white"
            >
              <ExternalLink data-icon="inline-start" className="size-4" />
              LinkedIn
            </Button>
            <Button render={<a href={`mailto:${profile.email}`} />} nativeButton={false} className="!bg-white !text-black hover:!bg-white/85 hover:!text-black focus-visible:!text-black">
              <Send data-icon="inline-start" className="size-4" />
              Contact
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <SystemsConstellation framed={false} className="h-full min-h-[720px] opacity-75 md:opacity-95" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.9)_0%,rgba(5,5,5,0.88)_48%,rgba(5,5,5,0.82)_100%)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_34%,rgba(5,5,5,0.66)_62%,rgba(5,5,5,0.34)_100%)] md:block" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 pt-24 md:px-8">
          <Reveal className="max-w-5xl pt-[12svh] pb-8 md:pt-[15svh] md:pb-10">
            <Badge variant="outline" className="mb-5 w-fit border-lime-300/30 bg-lime-300/10 text-lime-100 backdrop-blur">
              {profile.role}
            </Badge>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl md:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 tracking-normal text-white/88 md:text-4xl md:leading-[1.15]">
              {profile.hero}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="#work" />} nativeButton={false} className="h-11 !bg-lime-300 px-4 !text-black hover:!bg-lime-200 hover:!text-black focus-visible:!text-black">
                See work
                <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                render={<a href={profile.linkedIn} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                variant="outline"
                className="h-11 border-white/15 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white focus-visible:text-white"
              >
                <ExternalLink data-icon="inline-start" className="size-4" />
                LinkedIn profile
              </Button>
              <DownloadCvButton
                className="h-11 border-white/15 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white focus-visible:text-white"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-auto pb-5">
            <div className="hidden border-y border-white/10 sm:grid sm:grid-cols-4">
              {profile.quickStats.map((stat) => (
                <div key={stat} className="border-white/10 py-4 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0">
                  <p className="text-sm font-medium text-white/76">{stat}</p>
                </div>
              ))}
            </div>
            <a href="#signal" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/42 transition hover:text-lime-200">
              View proof <ArrowDown className="size-3.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="signal" className="relative scroll-mt-16 overflow-hidden bg-[#f6f7f2] py-18 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-700">Hiring signal</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-zinc-950 md:text-6xl">
              What I bring into an AI product team.
            </h2>
          </div>

          <div className="mt-12 grid overflow-hidden border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/[0.06] md:grid-cols-[0.95fr_1.4fr]">
            <Reveal className="relative min-h-[360px] overflow-hidden bg-zinc-950 p-7 text-white md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(190,242,100,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
              <div className="relative flex h-full flex-col">
                <Badge variant="outline" className="w-fit border-white/15 bg-white/5 text-white/72">
                  Hiring profile
                </Badge>
                <div className="mt-auto">
                  <p className="text-3xl font-semibold leading-tight tracking-normal md:text-4xl">
                    AI systems that need to ship, operate, and improve.
                  </p>
                  <p className="mt-5 max-w-md text-sm leading-6 text-white/62">
                    Strongest fit for teams building agents, workflow automation, AI-backed operations, and product experiences around real user needs.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {profile.quickStats.map((stat) => (
                      <span key={stat} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/72">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-px bg-zinc-200 md:grid-cols-2">
              {profile.proofPoints.map((point, index) => (
                <Reveal key={point.label} delay={index * 0.05} className="group min-h-[230px] bg-white p-6 transition hover:bg-lime-50/70 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-md bg-lime-100 text-lime-800 transition group-hover:bg-lime-300 group-hover:text-black">
                      <point.icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold text-zinc-300">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{point.label}</h3>
                  <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-normal text-zinc-950">{point.value}</p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">{point.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-16 bg-black py-18 text-white md:py-24">
        <SectionHeading
          eyebrow="Work"
          title="Roles, companies, and what I did."
          dark
        />
        <div className="mx-auto mt-12 w-full max-w-6xl px-5 md:px-8">
          <WorkSection />
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 bg-zinc-50 py-18 md:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Hackathons and capstone builds."
        />
        <div className="mx-auto mt-10 w-full max-w-6xl px-5 md:px-8">
          <Tabs defaultValue="hackathons" className="gap-8">
            <TabsList variant="line" className="w-fit max-w-full justify-start gap-8 overflow-x-auto">
              <TabsTrigger value="hackathons" className="flex-none px-0">Hackathons</TabsTrigger>
              <TabsTrigger value="capstone" className="flex-none px-0">Capstone</TabsTrigger>
              <TabsTrigger value="all" className="flex-none px-0">All projects</TabsTrigger>
            </TabsList>
            <TabsContent value="hackathons">
              <ProjectList items={hackathonProjects} />
            </TabsContent>
            <TabsContent value="capstone">
              <ProjectList items={capstoneProjects} />
            </TabsContent>
            <TabsContent value="all">
              <ProjectList items={projects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="stack" className="scroll-mt-16 bg-white py-18 md:py-24">
        <SectionHeading
          eyebrow="Technical stack"
          title="Capability groups, not a keyword wall."
        />
        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="relative min-h-[430px] overflow-hidden border border-zinc-900 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(154,251,126,0.18),transparent_32%),radial-gradient(circle_at_75%_65%,rgba(45,140,168,0.12),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
            <StackOrbit className="absolute inset-0" />
            <div className="relative z-10 flex min-h-[430px] flex-col p-6 md:p-7">
              <Badge variant="outline" className="w-fit border-lime-200/20 bg-lime-200/10 text-lime-100">
                Stack map
              </Badge>
              <div className="mt-auto">
                <p className="max-w-sm text-3xl font-semibold leading-tight tracking-normal md:text-4xl">
                  AI, APIs, interfaces, and delivery moving as one system.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
                  {stackGroups.map((group) => (
                    <div key={`map-${group.title}`} className="bg-zinc-950/70 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/48">{group.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {stackGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className="group border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5"
              >
                <div className="flex items-start gap-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-zinc-950 text-lime-200 transition group-hover:bg-lime-300 group-hover:text-black">
                    <group.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-normal">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tooltip key={`${group.title}-${item}`}>
                          <TooltipTrigger>
                            <span className="inline-flex rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:bg-lime-100 hover:text-zinc-950">
                              {item}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>{group.title}</TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="relative scroll-mt-16 overflow-hidden bg-[#f6f7f2] py-18 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45" />
        <SectionHeading
          eyebrow="Proof"
          title="Awards, fellowship, certifications, and public AI activity."
        />
        <div className="relative mx-auto mt-12 grid w-full max-w-6xl gap-5 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="relative overflow-hidden border border-zinc-900 bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-950/15 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(190,242,100,0.25),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
            <div className="relative flex min-h-[520px] flex-col">
              <Badge variant="outline" className="w-fit border-lime-200/20 bg-lime-200/10 text-lime-100">
                Evidence board
              </Badge>

              <div className="mt-16">
                <p className="text-3xl font-semibold leading-tight tracking-normal md:text-4xl">
                  Recognized in AI builds, product competitions, and responsible AI work.
                </p>
                <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                  {proofStats.map((stat) => (
                    <div key={stat.label} className="bg-zinc-950/70 p-4">
                      <p className="text-2xl font-semibold tracking-normal text-white">{stat.value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/42">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-10">
                {fellowshipExperience.map((item) => (
                  <div key={item.company} className="border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-normal text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-white/60">{item.company}</p>
                    <p className="mt-4 text-sm leading-6 text-white/56">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              {proofAchievements.slice(0, 2).map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.04}
                  className="group relative min-h-[270px] overflow-hidden border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/[0.03] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-950/[0.07]"
                >
                  <div className="absolute inset-x-0 top-0 h-24 border-b border-zinc-200 bg-gradient-to-br from-lime-200/45 via-white to-sky-100/50" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(rgba(10,10,10,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.035)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-md bg-zinc-950 text-lime-200 transition group-hover:bg-lime-300 group-hover:text-black">
                        <item.icon className="size-5" />
                      </span>
                      <span className="text-sm font-semibold text-zinc-300">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-16 text-2xl font-semibold leading-tight tracking-normal text-zinc-950">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="overflow-hidden border border-zinc-200 bg-white shadow-sm shadow-zinc-950/[0.03]">
              <div className="flex items-center justify-between border-b border-zinc-200 p-5">
                <h3 className="text-xl font-semibold tracking-normal text-zinc-950">Additional proof</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-700">
                  Awards + academics
                </span>
              </div>
              <div className="divide-y divide-zinc-200">
                {proofAchievements.slice(2).map((item, index) => (
                  <div key={item.title} className="group grid gap-4 p-5 transition hover:bg-lime-50/70 sm:grid-cols-[auto_1fr]">
                    <span className="grid size-10 place-items-center rounded-md bg-zinc-100 text-zinc-700 transition group-hover:bg-lime-300 group-hover:text-black">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-lg font-semibold tracking-normal text-zinc-950">{item.title}</h4>
                        <span className="text-xs font-semibold text-zinc-300">{String(index + 3).padStart(2, "0")}</span>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid overflow-hidden border border-zinc-200 bg-white shadow-sm shadow-zinc-950/[0.03] md:grid-cols-[0.35fr_1fr]">
              <div className="border-b border-zinc-200 bg-zinc-950 p-5 text-white md:border-r md:border-b-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">Verified learning</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal">Certifications</h3>
              </div>
              <ul className="grid gap-px bg-zinc-200 sm:grid-cols-2">
                {certifications.map((certification) => (
                  <li key={certification} className="flex gap-3 bg-white p-4 text-sm leading-6 text-zinc-600">
                    <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-lime-700" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden bg-black py-18 text-white md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(154,251,126,0.14),transparent_42%),linear-gradient(90deg,#050505,#0e0e0e)]" />
        <Reveal className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 border-y border-white/10 py-10 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">Contact</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
                Bring me into the room when the AI system needs to actually ship.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">{profile.availability}</p>
            </div>
            <div className="grid gap-3 md:justify-self-end">
              <Button render={<a href={`mailto:${profile.email}`} />} nativeButton={false} className="h-11 !bg-lime-300 px-4 !text-black hover:!bg-lime-200 hover:!text-black focus-visible:!text-black">
                <Mail data-icon="inline-start" className="size-4" />
                {profile.email}
              </Button>
              <DownloadCvButton
                className="h-11 border-white/15 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white focus-visible:text-white"
              />
              <Button
                render={<a href={profile.linkedIn} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                variant="outline"
                className="h-11 border-white/15 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white focus-visible:text-white"
              >
                <ExternalLink data-icon="inline-start" className="size-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
