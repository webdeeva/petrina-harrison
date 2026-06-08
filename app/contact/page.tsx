import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FloralSprig, CornerOrn } from "../components/Ornament";

export const metadata = {
  title: "Contact — Dr. Petrina N. Harrison",
  description:
    "Reach Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, for speaking engagements, advocacy partnerships, and inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative pt-36 md:pt-44 pb-12 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 70% 0%, rgba(116,40,46,0.18), transparent 65%), linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%)",
            }}
          />
          <CornerOrn className="absolute top-32 left-10 w-24 h-24 text-[color:var(--rouge)]/30 hidden md:block" />
          <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--rouge-deep)]">
              <span className="italic font-light">Let&rsquo;s</span>{" "}
              <span className="font-medium">be in conversation.</span>
            </h1>
            <p className="mt-6 font-serif text-[1.12rem] max-w-xl mx-auto text-[color:var(--ink-soft)] leading-relaxed">
              For speaking engagements, research collaborations, advocacy
              partnerships, or general inquiries &mdash; please share a note below.
            </p>
            <div className="mt-7 flex justify-center">
              <FloralSprig className="w-32 h-12 text-[color:var(--rouge)]/70" />
            </div>
          </div>
        </section>

        <section className="relative pb-24 md:pb-32">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12">
            <ContactForm />

            <aside className="card-paper rounded-[28px] p-8 md:p-10">
              <div className="eyebrow">Reach out</div>
              <h2 className="mt-3 font-display text-[2rem] leading-tight text-[color:var(--rouge-deep)]">
                Office of Dr. Harrison
              </h2>
              <div className="mt-2 text-[0.66rem] tracking-[0.26em] uppercase text-[color:var(--rouge)]">
                DNP · APRN · AGCNS-BC · CIC
              </div>

              <div className="mt-8 space-y-7 font-serif text-[1.05rem] text-[color:var(--ink)]">
                <div>
                  <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[color:var(--rouge)]">
                    Email
                  </div>
                  <a className="mt-2 link-rouge inline-block" href="mailto:agaylewfg@gmail.com">
                    agaylewfg@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[color:var(--rouge)]">
                    Mailing Address
                  </div>
                  <div className="mt-2 leading-relaxed">
                    23822 116th Rd
                    <br />
                    Elmont, NY 11003
                    <br />
                    United States
                  </div>
                </div>
                <div>
                  <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[color:var(--rouge)]">
                    Speaking &amp; Press
                  </div>
                  <div className="mt-2 leading-relaxed text-[color:var(--ink-soft)]">
                    Inquiries for keynotes, panels, and continuing-education
                    courses are welcomed. Kindly include event details and
                    audience scope.
                  </div>
                </div>
              </div>

              <FloralSprig className="mt-10 w-32 h-12 text-[color:var(--rouge)]/60" />
              <p className="mt-4 font-display italic text-[color:var(--rouge)]/80 text-[1rem]">
                No woman left behind.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
