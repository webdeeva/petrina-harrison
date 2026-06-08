import Link from "next/link";
import { FloralSprig } from "./Ornament";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-[color:var(--rouge)]/15">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="font-display text-[1.6rem] text-[color:var(--rouge-deep)] leading-tight">
            <span className="italic font-light">Dr.</span>{" "}
            <span className="font-medium">Petrina N. Harrison</span>
          </div>
          <div className="mt-1 text-[0.66rem] tracking-[0.26em] uppercase text-[color:var(--rouge)]">
            DNP · APRN · AGCNS-BC · CIC
          </div>
          <p className="mt-5 font-serif text-[1.05rem] text-[color:var(--ink-soft)] max-w-sm leading-relaxed">
            Nursing leadership in service of every woman &mdash; advocacy,
            research, and education with intention.
          </p>
          <FloralSprig className="mt-6 w-28 h-10 text-[color:var(--rouge)]/60" />
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 font-serif text-[1.02rem]">
            <li><Link href="/" className="link-rouge">Home</Link></li>
            <li><Link href="/about" className="link-rouge">About</Link></li>
            <li><Link href="/#advocacy" className="link-rouge">Advocacy</Link></li>
            <li><Link href="/#innovation" className="link-rouge">Innovation</Link></li>
            <li><Link href="/contact" className="link-rouge">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Reach Out</div>
          <ul className="mt-4 space-y-2 font-serif text-[1.02rem] text-[color:var(--ink-soft)]">
            <li>
              <a className="link-rouge" href="mailto:agaylewfg@gmail.com">agaylewfg@gmail.com</a>
            </li>
            <li>23822 116th Rd</li>
            <li>Elmont, NY 11003</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.78rem] text-[color:var(--ink-soft)]">
        <div className="tracking-[0.12em]">© 2026 Dr. Petrina N. Harrison · No Woman Left Behind</div>
        <div className="italic font-serif text-[color:var(--rouge)]/80">In service. In scholarship. In sisterhood.</div>
      </div>
    </footer>
  );
}
