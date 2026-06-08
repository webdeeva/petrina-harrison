import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { FloralSprig, CornerOrn } from "../components/Ornament";

export const metadata = {
  title: "About — Dr. Petrina N. Harrison",
  description:
    "The biography, credentials, and areas of focus of Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero band */}
        <section className="relative pt-36 md:pt-44 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 30% 0%, rgba(116,40,46,0.18), transparent 65%), linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%)",
            }}
          />
          <CornerOrn className="absolute top-32 right-10 w-28 h-28 text-[color:var(--rouge)]/30 hidden md:block rotate-90" />

          <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
            <span className="eyebrow">About Me</span>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.04] tracking-[-0.02em] text-[color:var(--rouge-deep)]">
              <span className="italic font-light">A scholar.</span>{" "}
              <span className="font-medium">A clinician.</span>
              <br />
              <span className="italic font-light">A voice for</span>{" "}
              <span className="font-medium text-[color:var(--rouge)]">every woman.</span>
            </h1>
            <div className="mt-8 flex justify-center">
              <FloralSprig className="w-36 h-14 text-[color:var(--rouge)]/70" />
            </div>
            <p className="mt-6 font-serif italic text-[color:var(--ink-soft)] text-[1.05rem]">
              Published February 16, 2026
            </p>
          </div>
        </section>

        {/* Two-column biography */}
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
            <div className="relative">
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden ring-1 ring-[color:var(--rouge)]/15 shadow-[0_30px_70px_-40px_rgba(43,26,22,0.4)]">
                  <Image
                    src="/petrina-hero.png"
                    alt="Dr. Petrina N. Harrison"
                    fill
                    sizes="(max-width:1024px) 90vw, 480px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,240,228,0) 60%, rgba(247,240,228,0.45) 100%)",
                    }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display text-[1.4rem] text-[color:var(--rouge-deep)]">
                    Petrina N. Harrison
                  </div>
                  <div className="mt-1 text-[0.66rem] tracking-[0.24em] uppercase text-[color:var(--rouge)]">
                    DNP · APRN · AGCNS-BC · CIC
                  </div>
                </div>
              </div>
            </div>

            <article className="font-serif text-[1.18rem] md:text-[1.22rem] leading-[1.8] text-[color:var(--ink)]">
              <p>
                <span className="float-left mr-3 mt-1 font-display text-[5.5rem] leading-[0.85] text-[color:var(--rouge)]">
                  D
                </span>
                octor of Nursing Practice-prepared, board-certified
                Adult-Gerontology Clinical Nurse Specialist, and Certified
                Infection Preventionist with over two decades of expertise in
                adult health, gerontology, acute care, long-term care, and
                infection prevention.
              </p>
              <p className="mt-7">
                A national award-winning presenter and speaker, Dr. Harrison has
                been recognized for her work in ovarian-cancer research, with
                emphasis on{" "}
                <em>
                  early diagnosis, access to genetic testing, and reduction of
                  disparities
                </em>{" "}
                in underserved communities.
              </p>
              <p className="mt-7">
                A Sigma global advocate for health-literacy awareness aimed at
                reducing disparities across the health continuum, Dr. Harrison
                leads quality-improvement initiatives that strengthen patient
                safety, integrate evidence-based practice, and enhance
                interprofessional collaboration across complex healthcare
                systems.
              </p>
              <p className="mt-7">
                As a nursing professor, she mentors and educates the next
                generation of nurses, bridging scholarship, practice, and
                systems leadership. Passionate about research, advocacy, and
                systems-level change, Dr. Harrison continues to influence
                healthcare policy and promote excellence in nursing through{" "}
                <span className="font-display italic text-[color:var(--rouge)]">
                  innovation, education, and global engagement.
                </span>
              </p>

              {/* Credentials */}
              <div className="mt-14">
                <div className="divider-leaf eyebrow !text-[color:var(--rouge)]">
                  Key Credentials
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 list-none">
                  {[
                    "Doctor of Nursing Practice (DNP)",
                    "Advanced Practice Registered Nurse (APRN)",
                    "Board-Certified Adult-Gerontology Clinical Nurse Specialist (AGCNS-BC)",
                    "Certified in Infection Control (CIC)",
                    "Over two decades of practice",
                    "National award-winning presenter and speaker",
                    "Sigma global advocate",
                    "Nursing professor",
                    "Patent-pending inventor (USPTO 19/574,302)",
                  ].map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 font-sans text-[1rem] text-[color:var(--ink)]"
                    >
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--rouge)] shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas of Focus */}
              <div className="mt-14">
                <div className="divider-leaf eyebrow !text-[color:var(--rouge)]">
                  Areas of Focus
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[
                    "Ovarian Cancer Research",
                    "Early Diagnosis",
                    "Access to Genetic Testing",
                    "Reducing Disparities",
                    "Health Literacy",
                    "Patient Safety",
                    "Evidence-Based Practice",
                    "Healthcare Policy",
                    "Nursing Education",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full border border-[color:var(--rouge)]/30 text-[color:var(--rouge)] text-[0.82rem] tracking-[0.06em] font-sans hover:bg-[color:var(--rouge)] hover:text-[color:var(--bone)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-14 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-rouge">
                  Get In Touch <span className="arrow">→</span>
                </Link>
                <Link href="/#advocacy" className="btn-ghost">
                  Read the Research
                </Link>
              </div>
            </article>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
