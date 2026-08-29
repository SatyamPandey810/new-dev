import {
  ArrowRight,
  Check,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles size={19} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nexora
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 hover:text-white">
              Features
            </a>
            <a href="#solutions" className="text-sm text-slate-300 hover:text-white">
              Solutions
            </a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white">
              Sign in
            </button>

            <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#features">Features</a>
              <a href="#solutions">Solutions</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>

              <button className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-8 lg:pt-48">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              The smarter way to build your business
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build faster.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Scale smarter.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Nexora gives modern teams everything they need to manage,
              automate, and scale their workflow — all from one powerful
              platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200">
                Start for free
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10">
                Book a demo
              </button>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              No credit card required · 14-day free trial
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-violet-900/20">
              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
                {/* Fake browser bar */}
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-slate-400">Total Revenue</p>
                    <p className="mt-3 text-3xl font-bold">$84,240</p>
                    <p className="mt-2 text-sm text-emerald-400">
                      +24.8% this month
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-slate-400">Active Users</p>
                    <p className="mt-3 text-3xl font-bold">18,492</p>
                    <p className="mt-2 text-sm text-emerald-400">
                      +18.2% this month
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-slate-400">Conversion</p>
                    <p className="mt-3 text-3xl font-bold">12.8%</p>
                    <p className="mt-2 text-sm text-emerald-400">
                      +6.4% this month
                    </p>
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Performance Overview</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Revenue growth over time
                      </p>
                    </div>
                    <BarChart3 className="text-violet-400" />
                  </div>

                  <div className="mt-8 flex h-48 items-end gap-3">
                    {[35, 48, 42, 65, 58, 72, 68, 85, 78, 95, 88, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/30 to-violet-400"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-white/10 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                Powerful features
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Everything you need to move faster
              </h2>

              <p className="mt-4 text-slate-400">
                Simple tools. Powerful automation. Better results.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<Zap />}
                title="Lightning Fast"
                description="Built for speed and reliability so your team can focus on what actually matters."
              />

              <FeatureCard
                icon={<ShieldCheck />}
                title="Enterprise Security"
                description="Keep your data protected with modern security, encryption and access controls."
              />

              <FeatureCard
                icon={<BarChart3 />}
                title="Smart Analytics"
                description="Turn your data into actionable insights with powerful real-time analytics."
              />
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section
          id="solutions"
          className="bg-white/[0.02] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                Built for teams
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Stop switching between dozens of tools.
              </h2>

              <p className="mt-6 leading-7 text-slate-400">
                Bring your entire workflow together in one beautifully
                designed platform. Collaborate, automate and track everything
                without the complexity.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "One unified workspace",
                  "Automate repetitive tasks",
                  "Real-time collaboration",
                  "Advanced reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                      <Check size={15} />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-9 flex items-center gap-2 font-semibold text-violet-400 hover:text-violet-300">
                Explore platform
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-violet-500/10 blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="font-semibold">Team Activity</p>
                    <p className="text-sm text-slate-500">
                      Latest updates
                    </p>
                  </div>

                  <div className="rounded-lg bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                    Live
                  </div>
                </div>

                {[
                  ["Project created", "2 min ago"],
                  ["Deployment successful", "18 min ago"],
                  ["New team member", "42 min ago"],
                  ["Report generated", "1 hr ago"],
                ].map(([title, time]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between border-b border-white/5 py-5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
                      <span className="text-sm text-slate-300">{title}</span>
                    </div>

                    <span className="text-xs text-slate-500">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Simple pricing
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Start free. Scale when you're ready.
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <PricingCard
                title="Starter"
                price="$0"
                description="For individuals getting started."
                features={[
                  "3 projects",
                  "Basic analytics",
                  "Community support",
                ]}
              />

              <PricingCard
                title="Pro"
                price="$29"
                description="For growing teams."
                features={[
                  "Unlimited projects",
                  "Advanced analytics",
                  "Priority support",
                  "Automation",
                ]}
                popular
              />

              <PricingCard
                title="Business"
                price="$99"
                description="For scaling companies."
                features={[
                  "Everything in Pro",
                  "Advanced security",
                  "Dedicated support",
                  "Custom integrations",
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-6 py-24 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-indigo-600/10 p-10 text-center sm:p-16">
            <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to build something amazing?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Join thousands of teams using Nexora to simplify their workflow
              and grow faster.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200">
              Get started for free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <Sparkles size={16} />
            </div>
            <span className="font-semibold">Nexora</span>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Nexora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.05]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
}) {
  return (
    <div
      className={`relative rounded-2xl border p-7 text-left ${
        popular
          ? "border-violet-400/50 bg-violet-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {popular && (
        <div className="absolute right-5 top-5 rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold">
          Popular
        </div>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-slate-400">{description}</p>

      <div className="mt-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "$0" && (
          <span className="text-slate-500"> / month</span>
        )}
      </div>

      <button
        className={`mt-7 w-full rounded-xl py-3 font-semibold ${
          popular
            ? "bg-white text-slate-950"
            : "border border-white/10 bg-white/5"
        }`}
      >
        Get started
      </button>

      <div className="mt-7 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm">
            <Check size={17} className="text-violet-400" />
            <span className="text-slate-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}