import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry, inquirySchema } from "@/lib/inquiry.functions";
import chisomoPhoto from "@/assets/chisomo-mbewe.jpeg.asset.json";
import ireenPhoto from "@/assets/ireen-kawangu.jpeg.asset.json";
import paulPhoto from "@/assets/paul-chishala.jpeg.asset.json";
import terrencePhoto from "@/assets/terrence-ngandu.jpeg.asset.json";
import pupePhoto from "@/assets/pupe-simangolwa.png.asset.json";
import brianPhoto from "@/assets/brian-ngandu.jpeg.asset.json";

const TITLE = "Tepu Solutions Limited — AI Data & BPO from Zambia";
const DESC =
  "Zambia-based AI data annotation, African language speech transcription, LLM evaluation, and managed workforce outsourcing for global AI projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const EMAIL = "tepusolutionsltd@gmail.com";
const NAV = [
  ["about", "About"],
  ["capabilities", "Capabilities"],
  ["workbench", "Workbench"],
  ["quality", "Quality & Process"],
  ["regional", "Regional Focus"],
  ["leadership", "Leadership"],
] as const;

const VALUES = [
  ["Accuracy", "We measure quality, share transparent metrics, and fix what falls short."],
  ["Integrity", "Honest communication regarding timelines, capacities, and project requirements."],
  ["Accountability", "We take full ownership of the outcomes, SLAs, and deliverables we commit to."],
  ["Collaboration", "We operate as an agile, dedicated extension of your in-house team."],
  ["Growth", "We invest in continuous training and skill development for our contributors."],
] as const;

const CAPS = [
  {
    t: "AI Data Annotation",
    s: "High-precision human labeling for machine learning datasets",
    d: "Rigorous human annotation for computer vision, NLP, and multimodal foundation models. Teams are vetted and trained against your domain-specific taxonomy.",
    items: ["Transcription", "Text classification", "Named Entity Recognition (NER)", "Intent classification", "Sentiment annotation", "Content categorization", "Image annotation (boxes, polygons, segmentation)", "Video annotation & tracking", "Audio annotation", "Entity & attribute labeling", "Search relevance evaluation", "Data quality review & auditing"],
  },
  {
    t: "Audio Transcription & Speech Data",
    s: "End-to-end speech datasets, diarization & acoustic review",
    d: "Verbatim and clean transcription, speaker diarization, and timestamping by native speakers who understand accents and code-switching.",
    items: ["Verbatim & clean-read transcription", "Speaker diarization", "Timestamp alignment", "Acoustic event tagging", "Speech corpus recording", "ASR output review", "Code-switching annotation", "Audio quality auditing"],
  },
  {
    t: "African Language Services",
    s: "Native-speaker linguistics for underrepresented models",
    d: "Authentic Chichewa, Bemba, Swahili, and English data from native contributors for models that need real regional language coverage.",
    items: ["Translation & back-translation", "Dialect localization", "Cultural safety review", "Lexicon & glossary building", "Text corpus creation", "Prompt & response writing"],
  },
  {
    t: "AI Evaluation & Human Feedback",
    s: "RLHF, preference ranking, safety testing & model alignment",
    d: "Structured human judgment for LLM development: pairwise ranking, rubric scoring, red-teaming, and factuality checks.",
    items: ["Preference ranking (RLHF)", "Rubric-based response scoring", "Red-teaming & safety testing", "Factuality verification", "Instruction-following evaluation", "Multilingual output review"],
  },
  {
    t: "Field & Digital Data Collection",
    s: "Custom corpora, speech, imagery & behavioral gathering",
    d: "Consent-based collection of speech, text, and imagery across Zambia and the region, with metadata captured to your spec.",
    items: ["Speech recording campaigns", "Image & video capture", "Survey & form data", "Text elicitation", "Metadata tagging", "Consent & compliance tracking"],
  },
];

const STAGES = [
  ["Recruitment", "Local sourcing based on native language fluency, domain knowledge, and device capabilities."],
  ["Screening", "Language qualification tests, reading comprehension, and rigorous integrity vetting."],
  ["Training", "Project-specific guideline deep dives, edge-case review, and rubric calibration."],
  ["Pilot", "Small-batch sample run with quality metrics delivered before volume expansion."],
  ["Production", "Structured cohort work execution under dedicated oversight and velocity tracking."],
  ["L1 Review", "Peer checks and first-level annotation validation against guideline benchmarks."],
  ["Independent QA", "Second-tier evaluation, gold-standard answer insertion, and blind spot audits."],
  ["Final QA", "Format verification, schema compliance, metadata validation, and consistency sign-off."],
  ["Client Delivery", "Batch delivery with comprehensive error categorization and accuracy reporting."],
] as const;

const CONTROLS = [
  ["Contributor Qualification Tests", "Mandatory language, comprehension, and domain testing prior to live work assignment."],
  ["Gold-Standard Calibration Tasks", "Hidden benchmark questions inserted randomly within live batches to measure annotator accuracy."],
  ["Dual-Pass & Independent Second Review", "Senior leads audit a defined percentage of every batch independently."],
  ["Standardized Error Categorization", "Mistakes are cataloged by severity (critical, major, minor) and reported back to clients."],
  ["Inter-Annotator Agreement", "Continuous Cohen's Kappa calculation across parallel contributors to identify rubric drift."],
  ["Targeted Retraining & Rapid Substitution", "Underperforming contributors are immediately quarantined, retrained, or replaced."],
] as const;

const PM = [
  ["Client AI/Data Lead", "Defines taxonomy, acceptance criteria, timeline, and validation rubrics."],
  ["Tepu Project Manager", "Single accountable partner coordinating timelines, SLA adherence, and daily reporting."],
  ["Team Leads", "Daily supervision of contributors, resolving edge cases and maintaining consistency."],
  ["Contributors & Annotators", "Specialized contributors and trained teams performing task executions."],
  ["Quality Assurance Unit", "Independent cross-sampling, gold-question tracking, and precision audits."],
  ["Final Client Delivery", "Validated deliverables packaging with zero-defect threshold verification."],
] as const;

const LANGS = [
  ["English", "Global & Regional Fluency", "Zambia, Regional & International commerce", "Fluent contributors for transcription, content moderation, dataset creation, and model evaluation."],
  ["Chichewa (Chewa)", "14M+ Speakers", "Zambia (Eastern, Lusaka), Malawi, Mozambique", "Our primary regional focus with deep contributor networks: speech transcription, dialect localization, and LLM cultural safety audits."],
  ["Bemba (Chibemba)", "6M+ Speakers", "Zambia (Northern, Luapula, Copperbelt, Lusaka), Southern DRC", "The most widely spoken indigenous language in urban Zambia. Audio transcription, intent classification, and dataset creation."],
  ["Swahili (Kiswahili)", "100M+ Speakers", "East & Central Africa, cross-border corridors", "Vital for pan-African speech technology. High-volume audio transcription and NLP benchmarks."],
] as const;

const WHY = [
  ["Local African Talent", "Direct access to educated, motivated talent pools in Zambia and the wider African market."],
  ["Native Language Capability", "Native speakers who understand colloquial usage, regional accents, and cultural nuance."],
  ["Scalable Contributor Network", "Scale from a 5-person pilot to dozens of managed contributors without quality loss."],
  ["Human-in-the-Loop AI Focus", "High-performing models need nuanced human judgment, not mechanical click-work."],
  ["Multi-Tier Quality Control", "Screening, gold questions, statistical sampling, error categorization, and retraining."],
  ["Flexible Engagement Models", "Pilots, fixed-scope datasets, burst campaigns, and ongoing managed operations."],
  ["Single Accountability Point", "One responsive project lead instead of hundreds of freelancers."],
] as const;

const CLIENTS = ["AI & Foundation Model Companies", "Machine Learning Research Labs", "Language Technology & ASR Providers", "Global Data-Labeling Platforms", "Translation & Localization Firms", "Academic & Non-profit Research Institutes", "Digital Transformation Consultancies", "Outsourcing & BPO Service Partners"];

const MODELS = [
  ["Pilot Project", "Quality & capability benchmark", "A small fixed-scope assignment (100–1,000 tasks) to validate accuracy, workflow, and turnaround before scaling.", "New clients, evaluation benchmarks, guideline calibration"],
  ["Project-Based", "Defined dataset completion", "A dedicated managed team delivers a defined corpus with milestone sign-offs and fixed SLAs.", "Targeted language collections, finite annotation pipelines"],
  ["Ongoing Production", "Continuous data pipeline", "A recurring contributor workforce for weekly or monthly data generation, transcription, and evaluation.", "Active LLM development, ongoing RLHF, content moderation"],
  ["Managed Workforce", "Dedicated remote team", "We recruit, train, manage, and audit contributors dedicated exclusively to your operations.", "Enterprises seeking a scalable BPO extension in Southern Africa"],
] as const;

const FOUNDERS = [
  ["Terrence Ng'andu", "Founder", "Co-founded Tepu to bridge global machine learning teams with high-capability Zambian and regional African data workforces."],
  ["Pupe Simangolwa", "Founder", "Directs enterprise partnerships, international outsourcing relationships, and strategic data operations."],
] as const;
const TEAM = [
  ["Ireen Kawangu", "Country Director", "Leads in-country infrastructure, contributor welfare, operations, and localized data collection."],
  ["Charles Banda", "Chief Operations Officer", "Oversees multi-stage QA, project delivery SLAs, and distributed team coordination."],
  ["Chisomo Mbewe", "Talent Acquisition Manager", "Coordinates contributor screening, onboarding, and qualification testing."],
  ["Brian Ng'andu", "Human Resource", "Manages contributor relations, welfare, compliance, and onboarding."],
  ["Paul Chishala", "Quality Assurance Manager", "Directs multi-tier quality audits, gold-standard insertion, and accuracy validation."],
  ["Nelson Muyangwa", "Data Lead", "Oversees dataset structuring, taxonomy adherence, and batch validation."],
  ["Gideon Musukuma", "Team Lead", "Supervises daily contributor cohorts and ensures delivery deadlines are met."],
] as const;

const SERVICES = ["AI Data Annotation", "Audio Transcription & Speech Data", "African Language Services", "AI Evaluation & Human Feedback", "Field & Digital Data Collection", "Other"];
const LANG_OPTS = ["English", "Chichewa (Chewa)", "Bemba (Chibemba)", "Swahili (Kiswahili)", "Multilingual", "Other"];
const MODEL_OPTS = ["Pilot Project", "Project-Based", "Ongoing Production", "Managed Workforce", "Vendor Onboarding"];

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);

function Section({ id, eyebrow, title, intro, children, alt }: { id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-border py-24 ${alt ? "bg-card/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Home() {
  const [cap, setCap] = useState(0);
  const [tab, setTab] = useState(0);
  const [stage, setStage] = useState(3);
  const [form, setForm] = useState({ service: SERVICES[0]!, language: LANG_OPTS[1]!, model: MODEL_OPTS[0]! });
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");
  const send = useServerFn(submitInquiry);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display font-bold text-primary-foreground">T</span>
            <span className="font-display font-bold">Tepu Solutions</span>
            <span className="hidden font-mono text-[10px] text-primary sm:inline">LIMITED</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground lg:flex">
            {NAV.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Start a Pilot</a>
            <button type="button" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)} className="rounded-md border border-border px-3 py-2 text-sm lg:hidden">{menu ? "✕" : "☰"}</button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-border px-6 py-3 lg:hidden">
            {NAV.map(([id, l]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">{l}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">AI Data & Business Process Outsourcing · BPO Operations</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
          Accurate data work from <span className="text-primary">trained teams</span> and outsourcing.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          Tepu Solutions connects international AI labs, research organizations, and technology companies with trained, managed teams for data annotation, audio transcription, dataset collection, and RLHF evaluation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">Start a Pilot Project →</a>
          <a href="#capabilities" className="rounded-md border border-border bg-card px-6 py-3 font-semibold hover:bg-secondary">Explore Capabilities</a>
        </div>
        <div className="mt-14 grid max-w-3xl gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {[["English +", "Chichewa, Bemba & Swahili"], ["9-Stage", "Integrated QA Pipeline"], ["Pilot → Scale", "Flexible Engagement Models"]].map(([a, b], i) => (
            <div key={a}>
              <div className={`font-mono text-3xl font-semibold ${i === 1 ? "text-primary" : ""}`}>{a}</div>
              <div className="mt-1 text-sm text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <Section id="about" eyebrow="Company Overview · Purpose & Direction" title="A Trusted Partner for Global Data Work">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg text-muted-foreground">Tepu Solutions Limited is a Zambia-based AI data and outsourcing company providing human-powered data services for artificial intelligence, machine learning, language technology, and digital transformation projects.</p>
            <p className="mt-4 text-muted-foreground">Our operating model combines local talent, structured project management, and multi-level quality control — scalable workforce capability with strict consistency and international delivery standards.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="panel border-l-4 border-l-primary p-6">
                <p className="eyebrow">Vision</p>
                <p className="mt-3 text-lg">To be a leading African partner for AI data and business process services.</p>
              </div>
              <div className="panel border-l-4 border-l-accent p-6">
                <p className="eyebrow text-accent">Mission</p>
                <p className="mt-3 text-lg">To deliver accurate, efficient work that helps our clients grow and creates skilled jobs.</p>
              </div>
            </div>
          </div>
          <div className="panel p-6">
            <p className="eyebrow">Guiding Principles</p>
            <h3 className="mt-2 text-xl font-semibold">Our Core Values</h3>
            <div className="mt-5 space-y-3">
              {VALUES.map(([t, d]) => (
                <div key={t} className="rounded-lg border border-border bg-background/50 p-4">
                  <p className="font-semibold"><span className="text-primary">✓</span> {t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section alt id="capabilities" eyebrow="Capabilities · Human-in-the-Loop Infrastructure" title="Our Core Data & BPO Capabilities" intro="From speech processing and diarization to high-precision entity labeling and model evaluation, we build and manage trained teams tailored to your requirements.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-2">
            {CAPS.map((c, i) => (
              <button key={c.t} onClick={() => setCap(i)} className={`w-full rounded-lg border p-4 text-left transition-colors ${cap === i ? "border-primary bg-primary/10" : "border-border bg-card hover:bg-secondary"}`}>
                <span className="font-mono text-xs text-primary">0{i + 1}.</span>
                <p className="font-semibold">{c.t}</p>
                <p className="text-sm text-muted-foreground">{c.s}</p>
              </button>
            ))}
          </div>
          <div className="panel p-8">
            <p className="eyebrow">Capability deep dive / {CAPS[cap]!.s}</p>
            <h3 className="mt-3 text-2xl font-bold">{CAPS[cap]!.t}</h3>
            <p className="mt-3 text-muted-foreground">{CAPS[cap]!.d}</p>
            <p className="eyebrow mt-6">Specific services & delivery tasks</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {CAPS[cap]!.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm"><span className="text-primary">▸</span>{it}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Request {CAPS[cap]!.t} Pilot</a>
          </div>
        </div>
      </Section>

      <Section id="workbench" eyebrow="Interactive Data Workbench / Production Work Samples" title="See How Tepu Contributors Work" intro="Explore annotation samples, native speech transcription, and human evaluation rubrics executed by our managed teams in Zambia.">
        <div className="flex flex-wrap gap-2">
          {["AI Data Annotation & NER", "LLM Evaluation & RLHF Ranking"].map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`rounded-md border px-4 py-2 font-mono text-xs ${tab === i ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`}>0{i + 1}. {t}</button>
          ))}
        </div>
        <div className="panel mt-4 p-8 font-mono text-sm">
          {tab === 0 && (
            <>
              <p className="text-muted-foreground">Task: NER & Sentiment · Dataset: Commercial Fintech Corpora · <span className="text-primary">Accuracy: 99.4%</span></p>
              <p className="mt-6 font-sans text-lg leading-loose">
                Yesterday, <Tag l="PERSON">Mutale Chanda</Tag> authorized a digital settlement of <Tag l="CURRENCY">ZMW 48,500.00</Tag> to <Tag l="ORG">Copperbelt Logistics Ltd</Tag> headquartered in <Tag l="GPE">Ndola, Zambia</Tag> scheduled for <Tag l="DATE">14 October 2026</Tag>.
              </p>
              <p className="mt-6 text-muted-foreground">Review: second-tier blind review · consensus 0.98 Kappa · Format: JSONL / CoNLL</p>
            </>
          )}
          {tab === 1 && (
            <div className="space-y-4">
              <p className="text-muted-foreground">Prompt: "Explain mobile money fees to a first-time user in Chichewa."</p>
              <div className="rounded-lg border border-primary p-4"><span className="text-primary">Response A — Preferred</span><p className="mt-1 font-sans">Natural phrasing, correct fee tiers, culturally appropriate tone. Helpfulness 5/5 · Accuracy 5/5</p></div>
              <div className="rounded-lg border border-border p-4"><span className="text-muted-foreground">Response B</span><p className="mt-1 font-sans">Literal translation, outdated fees, mixed registers. Helpfulness 3/5 · Accuracy 2/5</p></div>
            </div>
          )}
        </div>
      </Section>

      <Section alt id="quality" eyebrow="Quality Assurance & Governance · Zero-Defect Philosophy" title="Quality Built into the Process, Never an Afterthought" intro="Our 9-stage lifecycle combines strict pre-screening, gold-standard benchmarks, dual-tier independent review, and continuous monitoring.">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-9">
          {STAGES.map(([t], i) => (
            <button key={t} onClick={() => setStage(i)} className={`rounded-lg border p-3 text-left ${stage === i ? "border-primary bg-primary/15" : "border-border bg-card"}`}>
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <p className="mt-1 text-xs font-semibold">{t}</p>
            </button>
          ))}
        </div>
        <div className="panel mt-4 p-6">
          <h3 className="text-xl font-bold">Stage 0{stage + 1}: {STAGES[stage]![0]}</h3>
          <p className="mt-2 text-muted-foreground">{STAGES[stage]![1]}</p>
          <p className="mt-3 font-mono text-xs text-primary">Adapts to client precision thresholds (95% – 99.5% accuracy)</p>
        </div>
        <h3 className="mt-16 text-2xl font-bold">Quality Assurance Controls We Deploy</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CONTROLS.map(([t, d]) => (
            <div key={t} className="panel p-5"><p className="font-semibold">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <h3 className="mt-16 text-2xl font-bold">Dedicated Project Management Structure</h3>
        <p className="mt-2 max-w-3xl text-muted-foreground">Clients work with one centralized Tepu project manager rather than coordinating distributed contributors.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PM.map(([t, d], i) => (
            <div key={t} className="panel flex gap-4 p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-mono text-sm text-primary-foreground">{i + 1}</span>
              <div><p className="font-semibold">{t}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="regional" eyebrow="Regional Focus · Authentic African Datasets" title="Native Regional & Linguistic Capabilities" intro="We solve a critical bottleneck: the scarcity of authentic, high-quality data for African languages and dialects.">
        <div className="grid gap-4 md:grid-cols-2">
          {LANGS.map(([n, sp, r, d]) => (
            <div key={n} className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-xl font-bold">{n}</h3><p className="font-mono text-xs text-primary">{sp}</p></div>
                <span className="rounded-full border border-primary/40 px-2 py-1 font-mono text-[10px] text-primary">Active Full Pipeline</span>
              </div>
              <p className="mt-4 text-sm font-medium">{r}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt eyebrow="Value Proposition · Why Partner With Tepu?" title="Why Global AI Teams Choose Tepu Solutions">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([t, d], i) => (
            <div key={t} className="panel p-5"><span className="font-mono text-xs text-primary">0{i + 1}.</span><p className="mt-1 font-semibold">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <h3 className="mt-16 text-2xl font-bold">Target Clients & Industry Partnerships</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {CLIENTS.map((c) => <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{c}</span>)}
        </div>
      </Section>

      <Section eyebrow="Engagement Models · Flexible Collaboration" title="Tailored Engagement Models for Global Organizations" intro="We support vendor onboarding, supplier qualification, pilot benchmarks, and long-term outsourcing.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {MODELS.map(([t, s, d, b], i) => (
            <div key={t} className="panel flex flex-col p-6">
              <span className="font-mono text-xs text-primary">Model 0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{t}</h3>
              <p className="text-sm text-accent">{s}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{d}</p>
              <p className="mt-4 border-t border-border pt-3 text-xs"><span className="font-semibold">Best for:</span> <span className="text-muted-foreground">{b}</span></p>
            </div>
          ))}
        </div>
        <div className="panel mt-10 p-8">
          <p className="eyebrow">Pilot Scope Builder</p>
          <h3 className="mt-2 text-2xl font-bold">Configure Your Initial Dataset Requirements</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Picker label="1. Service pillar" opts={SERVICES} v={form.service} on={(service) => setForm({ ...form, service })} />
            <Picker label="2. Target language" opts={LANG_OPTS} v={form.language} on={(language) => setForm({ ...form, language })} />
            <Picker label="3. Engagement model" opts={MODEL_OPTS} v={form.model} on={(model) => setForm({ ...form, model })} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-background/60 p-4">
            <p className="font-mono text-sm"><span className="text-muted-foreground">Configured scope:</span> {form.service} / {form.language} / {form.model}</p>
            <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Apply to Inquiry Form</a>
          </div>
        </div>
      </Section>

      <Section alt id="leadership" eyebrow="Leadership & Accountability · Based in Zambia" title="The People Behind Tepu Solutions" intro="Our leadership recruits, trains, and manages every contributor cohort directly.">
        <div className="grid gap-4 md:grid-cols-2">
          {FOUNDERS.map(([n, r, d]) => (
            <div key={n} className="panel flex gap-5 p-6">
              {n === "Terrence Ng'andu" ? (
                <img src={terrencePhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : n === "Pupe Simangolwa" ? (
                <img src={pupePhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : (
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{initials(n)}</span>
              )}
              <div><p className="text-lg font-bold">{n}</p><p className="eyebrow">{r}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(([n, r, d]) => (
            <div key={n} className="panel p-5">
              {n === "Chisomo Mbewe" ? (
                <img src={chisomoPhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : n === "Ireen Kawangu" ? (
                <img src={ireenPhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : n === "Paul Chishala" ? (
                <img src={paulPhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : n === "Brian Ng'andu" ? (
                <img src={brianPhoto.url} alt={n} className="h-40 w-40 rounded-lg object-cover" />
              ) : (
                <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary font-mono text-sm text-primary">{initials(n)}</span>
              )}
              <p className="mt-3 font-semibold">{n}</p><p className="text-xs text-accent">{r}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Start an Engagement · Contact Leadership" title="Partner With Tepu Solutions" intro="Tell us about your project, target language, and expected volume. We'll respond with a pilot proposal, calibration plan, and SLA timeline.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[["Email", EMAIL, `mailto:${EMAIL}`], ["Phone", "+260 979 899 485", "tel:+260979899485"], ["Base", "Zambia | Serving Global AI & Data Projects", ""]].map(([l, v, h]) => (
              <div key={l} className="panel p-5"><p className="eyebrow">{l}</p>{h ? <a href={h} className="mt-1 block break-all font-semibold hover:text-primary">{v}</a> : <p className="mt-1 font-semibold">{v}</p>}</div>
            ))}
          </div>
          <form
            className="panel grid gap-4 p-8 sm:grid-cols-2"
            onSubmit={async (e) => {
              e.preventDefault();
              if (status === "sending") return;
              const el = e.currentTarget;
              const f = new FormData(el);
              const parsed = inquirySchema.safeParse({
                name: f.get("name") ?? "", company: f.get("company") ?? "", email: f.get("email") ?? "",
                message: f.get("message") ?? "", ...form,
              });
              if (!parsed.success) { setStatus("error"); setErr(parsed.error.issues[0]?.message ?? "Please check the form."); return; }
              setStatus("sending"); setErr("");
              try {
                const res = await send({ data: parsed.data });
                if (res.ok) { setStatus("sent"); el.reset(); }
                else { setStatus("error"); setErr(res.error); }
              } catch {
                setStatus("error"); setErr(`Something went wrong. Please try again or email ${EMAIL}.`);
              }
            }}
          >
            <Field label="Your name *" name="name" required maxLength={100} />
            <Field label="Organization / Company" name="company" maxLength={150} />
            <div className="sm:col-span-2"><Field label="Work email *" name="email" type="email" required maxLength={255} /></div>
            <Picker label="Service area" opts={SERVICES} v={form.service} on={(service) => setForm({ ...form, service })} select />
            <Picker label="Language focus" opts={LANG_OPTS} v={form.language} on={(language) => setForm({ ...form, language })} select />
            <div className="sm:col-span-2"><Picker label="Engagement model" opts={MODEL_OPTS} v={form.model} on={(model) => setForm({ ...form, model })} select /></div>
            <label className="sm:col-span-2">
              <span className="eyebrow">Project requirements / data scope *</span>
              <textarea name="message" required maxLength={5000} rows={4} className="mt-2 w-full rounded-md border border-input bg-background p-3 outline-none focus:border-primary" />
            </label>
            <button type="submit" disabled={status === "sending"} className="rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60 sm:col-span-2">{status === "sending" ? "Sending…" : "Submit Inquiry to Tepu Leadership"}</button>
            <div aria-live="polite" className="sm:col-span-2 text-sm">
              {status === "sent" && <p className="text-primary">Thank you — your inquiry was received. Our team will reply within 1–2 business days.</p>}
              {status === "error" && <p className="text-destructive">{err}</p>}
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 text-sm text-muted-foreground">
          <p><span className="font-display font-bold text-foreground">Tepu Solutions Limited</span> · Zambia</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Tag({ l, children }: { l: string; children: ReactNode }) {
  return (
    <span className="mx-0.5 rounded bg-primary/15 px-1.5 py-0.5 ring-1 ring-primary/40">
      {children}
      <sup className="ml-1 font-mono text-[10px] text-accent">{l}</sup>
    </span>
  );
}

function Field({ label, ...p }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input {...p} className="mt-2 w-full rounded-md border border-input bg-background p-3 outline-none focus:border-primary" />
    </label>
  );
}

function Picker({ label, opts, v, on, select }: { label: string; opts: string[]; v: string; on: (v: string) => void; select?: boolean }) {
  if (select)
    return (
      <label className="block">
        <span className="eyebrow">{label}</span>
        <select value={v} onChange={(e) => on(e.target.value)} className="mt-2 w-full rounded-md border border-input bg-background p-3 outline-none focus:border-primary">
          {opts.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
    );
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2 space-y-1.5">
        {opts.map((o) => (
          <button type="button" key={o} onClick={() => on(o)} className={`w-full rounded-md border px-3 py-2 text-left text-sm ${v === o ? "border-primary bg-primary/15" : "border-border bg-background/50 text-muted-foreground"}`}>{o}</button>
        ))}
      </div>
    </div>
  );
}
