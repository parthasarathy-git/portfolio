import { useState, type ReactNode } from "react";
import { profile, experience, projects, skills, education } from "./data";

const nav = ["experience", "projects", "skills", "contact"];

function Win({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-panel">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 truncate text-xs text-dim">{title}</span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function Section({ id, cmd, children }: { id: string; cmd: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-lg font-bold">
        <span className="text-amber">$ </span>
        {cmd}
      </h2>
      {children}
    </section>
  );
}

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-sky underline decoration-line underline-offset-4 hover:decoration-sky">
    {children}
  </a>
);

export default function App() {
  const [sel, setSel] = useState(projects[0].id);
  const p = projects.find((x) => x.id === sel) ?? projects[0];

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 text-sm sm:px-6">
          <a href="#top" className="font-bold">
            <span className="text-sky">parthasarathy</span>
            <span className="text-dim">:~$</span>
          </a>
          <nav aria-label="Sections" className="flex gap-4 text-dim">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className="hover:text-amber">
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="mx-auto w-full max-w-4xl px-4 pb-4 pt-12 sm:px-6 sm:pt-20">
          <Win title="~ zsh">
            <p className="text-dim">
              <span className="text-amber">$ </span>whoami
            </p>
            <h1 className="mb-1 mt-1 text-3xl font-bold sm:text-5xl">{profile.name}</h1>
            <p className="mb-6 text-amber">
              {profile.role}, {profile.focus}
            </p>
            <p className="text-dim">
              <span className="text-amber">$ </span>cat summary.txt
            </p>
            <p className="mb-6 mt-1 max-w-[68ch] leading-relaxed">{profile.summary}</p>
            <p className="text-dim">
              <span className="text-amber">$ </span>ls links/
            </p>
            <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
              <A href={profile.github}>github</A>
              <A href={profile.linkedin}>linkedin</A>
              <A href={`mailto:${profile.email}`}>email</A>
            </p>
            <p className="mt-6">
              <span className="text-amber">$ </span>
              <span className="cursor" aria-hidden="true" />
            </p>
          </Win>
        </div>

        <Section id="experience" cmd="git log --author=me">
          <div className="mb-3 flex flex-wrap items-baseline gap-x-3">
            <h3 className="font-bold">
              {experience.title} at {experience.company}
            </h3>
            <span className="text-sm text-dim">
              {experience.period}, {experience.place}
            </span>
          </div>
          <ul className="space-y-3 border-l border-line pl-5">
            {experience.bullets.map((b) => (
              <li key={b} className="max-w-[72ch] leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" cmd="ls projects/">
          <div className="grid gap-4 md:grid-cols-[14rem_1fr]">
            <div role="tablist" aria-label="Projects" className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
              {projects.map((x) => (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={x.id === sel}
                  onClick={() => setSel(x.id)}
                  className={`shrink-0 rounded border px-3 py-2 text-left text-sm ${
                    x.id === sel ? "border-amber bg-panel text-amber" : "border-line text-dim hover:text-text"
                  }`}
                >
                  {x.id === sel ? "> " : "  "}
                  {x.name}/
                </button>
              ))}
            </div>

            <Win title={`projects/${p.name}/README.md`}>
              <dl className="mb-5 grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1 text-sm">
                <dt className="text-dim">status</dt>
                <dd>{p.status}</dd>
                <dt className="text-dim">role</dt>
                <dd>{p.role}</dd>
                {p.stack && (
                  <>
                    <dt className="text-dim">stack</dt>
                    <dd>{p.stack.join(", ")}</dd>
                  </>
                )}
                {p.links?.map((l) => (
                  <div key={l.url} className="contents">
                    <dt className="text-dim">link</dt>
                    <dd className="break-all">
                      <A href={l.url}>{l.label}</A>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mb-5 max-w-[68ch] leading-relaxed">{p.summary}</p>
              <h3 className="mb-2 font-bold text-amber">What I worked on</h3>
              <ul className="space-y-2">
                {p.built.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="text-dim">-</span>
                    <span className="max-w-[66ch]">{b}</span>
                  </li>
                ))}
              </ul>
            </Win>
          </div>
        </Section>

        <Section id="skills" cmd="cat skills.env">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-[11rem_1fr]">
            {skills.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-sky">{k}</dt>
                <dd className="mb-2 sm:mb-0">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-dim">
            <span className="text-amber">$ </span>cat education.txt
          </p>
          <p className="mt-1 text-sm">
            {education.degree}, {education.school}, {education.period}
          </p>
        </Section>

        <Section id="contact" cmd="echo $CONTACT">
          <p className="mb-4 max-w-[60ch] leading-relaxed">
            The best way to reach me is email. I also read messages on LinkedIn.
          </p>
          <ul className="space-y-1">
            <li>
              <span className="text-dim">email&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <A href={`mailto:${profile.email}`}>{profile.email}</A>
            </li>
            <li>
              <span className="text-dim">github&nbsp;&nbsp;&nbsp;</span>
              <A href={profile.github}>github.com/parthasarathy-git</A>
            </li>
            <li>
              <span className="text-dim">linkedin </span>
              <A href={profile.linkedin}>linkedin.com/in/parthasarathyyy-m</A>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="mx-auto max-w-4xl border-t border-line px-4 py-6 text-xs text-dim sm:px-6">
        {profile.name}, {profile.location}
      </footer>
    </>
  );
}
