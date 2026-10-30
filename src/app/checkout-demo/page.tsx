import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Checkout Preview | EKAA Rise",
  description: "A non-transactional checkout preview for EKAA Rise client review.",
  robots: { index: false, follow: false },
};

export default function CheckoutDemoPage() {
  return (
    <div className="min-h-screen bg-[#F6F2EA] pb-20 text-[#172A32]">
      <div className="border-b border-[#D7DCD6] bg-[#FFFCF7]">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-4">
          <Link href="/book-psychometric-test" className="inline-flex items-center gap-2 text-sm font-semibold text-[#40545B] transition-colors hover:text-[#176C70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176C70]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to booking
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B87955]/30 bg-[#F7EADF] px-3 py-1.5 text-xs font-bold text-[#70472F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B87955]" aria-hidden="true" />
            Client approval preview
          </span>
        </div>
      </div>

      <div className="shell pt-10 sm:pt-14">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#176C70]">
            <span className="h-px w-8 bg-[#B87955]" aria-hidden="true" />
            Checkout concept
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            One last step, <span className="font-serif font-medium italic text-[#176C70]">made clear.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#40545B]">
            Review the proposed AED 100 assessment checkout. This is a visual demo for approval: it does not collect payment details, charge a card, or create a booking.
          </p>
        </div>

        <ol className="mb-8 flex items-center gap-2 text-xs font-semibold sm:gap-4 sm:text-sm" aria-label="Booking progress">
          <li className="inline-flex items-center gap-2 text-[#176C70]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DCECE8]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span> Details</li>
          <li className="h-px w-8 bg-[#B8C9C3] sm:w-14" aria-hidden="true" />
          <li className="inline-flex items-center gap-2 text-[#172A32]" aria-current="step"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#172A32] text-xs text-white">2</span> Checkout</li>
          <li className="h-px w-8 bg-[#D7DCD6] sm:w-14" aria-hidden="true" />
          <li className="inline-flex items-center gap-2 text-[#73838A]"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C7D0CA] text-xs">3</span> Confirmation</li>
        </ol>

        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.8fr)] lg:gap-10">
          <section className="rounded-2xl border border-[#D7DCD6] bg-[#FFFCF7] p-5 shadow-[0_18px_50px_rgba(16,36,43,.06)] sm:p-8" aria-labelledby="payment-preview-title">
            <div className="flex items-start justify-between gap-4 border-b border-[#D7DCD6] pb-6">
              <div>
                <h2 id="payment-preview-title" className="font-display text-2xl font-bold tracking-tight">Payment experience</h2>
                <p className="mt-1 text-sm text-[#40545B]">The intended layout for a future secure gateway.</p>
              </div>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#DCECE8] text-[#176C70]">
                <CreditCard className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-7 rounded-xl border border-[#9EBDB5] bg-[#EDF5F1] p-4 text-sm leading-relaxed text-[#214B4A]">
              <strong className="block font-bold">Demo only — card entry is disabled</strong>
              This panel shows the proposed checkout design. A real payment form will be supplied by an approved payment provider after integration.
            </div>

            <div className="mt-7 space-y-5" aria-label="Disabled example card fields">
              <div>
                <span className="mb-2 block text-sm font-semibold">Card number</span>
                <div className="flex min-h-[52px] items-center justify-between rounded-xl border border-[#D7DCD6] bg-[#F3F3EF] px-4 text-sm tracking-[0.13em] text-[#77878B]" aria-disabled="true">
                  <span>•••• •••• •••• ••••</span><CreditCard className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="mb-2 block text-sm font-semibold">Expiry date</span>
                  <div className="flex min-h-[52px] items-center rounded-xl border border-[#D7DCD6] bg-[#F3F3EF] px-4 text-sm text-[#77878B]" aria-disabled="true">MM / YY</div>
                </div>
                <div>
                  <span className="mb-2 block text-sm font-semibold">Security code</span>
                  <div className="flex min-h-[52px] items-center rounded-xl border border-[#D7DCD6] bg-[#F3F3EF] px-4 text-sm text-[#77878B]" aria-disabled="true">CVV</div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#D7DCD6] pt-7">
              <Link href="/thank-you" className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#172A32] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#176C70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176C70]">
                Preview confirmation — no payment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-[#5B6D70]">
                <LockKeyhole className="h-3.5 w-3.5 flex-none" aria-hidden="true" />
                No card data can be entered or transmitted on this preview.
              </p>
            </div>
          </section>

          <aside className="rounded-2xl bg-[#10242B] p-6 text-[#F8F6F0] shadow-[0_18px_50px_rgba(16,36,43,.12)] sm:p-8" aria-labelledby="order-summary-title">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8D0C9]">Your assessment</span>
            <h2 id="order-summary-title" className="mt-3 font-display text-2xl font-semibold">Order summary</h2>
            <div className="mt-7 border-y border-white/20 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <strong className="block text-sm font-semibold">EKAA Rise Psychometric Assessment</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-[#C4D5D1]">A starting point for academic and career direction</span>
                </div>
                <strong className="whitespace-nowrap text-sm">AED 100</strong>
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold">Preview total</span>
              <strong className="font-display text-3xl font-bold">{siteConfig.primaryPrice.formatted}</strong>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#C4D5D1]">Final tax treatment and assessment inclusions are confirmed before any live payment is enabled.</p>

            <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="h-4 w-4 text-[#A8D0C9]" aria-hidden="true" /> What happens next</div>
              <p className="mt-2 text-xs leading-relaxed text-[#D3E0DC]">In a live flow, approved checkout and scheduling details would be confirmed after payment. This demo only shows the visual journey.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
