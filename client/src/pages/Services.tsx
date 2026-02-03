/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Clean service cards with clear value propositions
 * - Editorial hierarchy for easy scanning
 * - Gold accents for visual interest
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Shield,
  Activity,
  Users,
  Briefcase,
  TrendingUp,
  Puzzle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const services = [
    {
      id: "activation-&-setup",
      icon: Settings,
      title: "Activation & Setup",
      promise: "Start your program with clear scope, governance, and partner alignment.",
      description:
        "Most Workday projects don't struggle at go-live—they struggle at kickoff. Misaligned executives, unclear success criteria, and SI contracts weighted toward the vendor set the stage for budget pressure and scope creep months later. Activation & Setup gives you independent, experienced guidance before implementation begins.",
      results: [
        "Documented success criteria and decision paths aligned across executives before kickoff",
        "SI contract with appropriate protections, clear deliverables, and fair risk allocation",
        "Faster startup with fewer false starts—a delivery rhythm your team can sustain",
      ],
    },
    {
      id: "delivery-assurance",
      icon: Shield,
      title: "Delivery Assurance",
      promise: "Keep delivery predictable with milestone reviews and sponsor-ready guidance.",
      description:
        "Your SI has incentives to keep the project moving. Your team is stretched thin. Delivery Assurance provides your customer-side confidence layer during implementation—through ongoing advisory, recurring stage-gate reviews, or both. We review SI deliverables at key milestones, coach your team through decisions and escalations, and surface readiness gaps early enough to address them.",
      modes: [
        "Advisory (ongoing): Sponsor/PMO coaching, governance support, partner alignment, risk management",
        "Stage-Gate Reviews (recurring): Milestone-based reviews at plan, design, testing, and go-live readiness with findings and prioritized actions",
      ],
      results: [
        "Earlier visibility to readiness gaps—weeks before they become crises",
        "Faster, cleaner executive decisions with independent validation",
        "Better alignment across customer and partner teams",
      ],
    },
    {
      id: "health-check-&-course-correction",
      icon: Activity,
      title: "Health Check & Course Correction",
      promise: "Get a clear diagnosis and a credible reset plan—fast.",
      description:
        "When confidence drops or momentum stalls, you need to know what's true and what to do next. Health Check & Course Correction is your objective assessment when the project feels off—whether that's midstream uncertainty, partner friction, or a program that's clearly stuck. Unlike milestone-based Delivery Assurance, this is an ad-hoc diagnostic triggered by need, not schedule.",
      includes: [
        "Health Check (diagnose): Comprehensive project assessment—scope, timeline, governance, risks, partner dynamics, team capacity",
        "Course Correction (reset): Rebaseline plan with prioritized actions, clear owners, and a restored decision rhythm",
      ],
      results: [
        "Root causes identified and documented—not just red/amber/green status",
        "A prioritized action plan leadership can back",
        "A rebaselined path forward with restored predictability",
      ],
    },
    {
      id: "embedded-leadership",
      icon: Users,
      title: "Embedded Leadership",
      promise: "Customer-side leadership that runs cadence and drives readiness.",
      description:
        "Sometimes you don't need another advisor. You need someone who can actually run the program. Embedded Leadership puts experienced Workday delivery leaders directly into your team—full-time or fractional—to manage day-to-day execution, coordinate partners, and drive accountability. We've led programs from the SI side, the customer side, and as Workday project sponsors.",
      includes: [
        "Program Director / Project Manager role (full-time or fractional)",
        "Change Management and organizational readiness leadership",
        "Testing and cutover management",
        "SI coordination and partner management",
      ],
      results: [
        "Single point of accountability on the customer side—no more gaps between teams",
        "Steadier operating rhythm with fewer escalations",
        "Readiness and adoption built into delivery, not bolted on at the end",
      ],
    },
    {
      id: "expert-bench",
      icon: Briefcase,
      title: "Expert Bench",
      promise: "Premium Workday capacity—vetted, matched, and ready.",
      description:
        "Finding good Workday talent is hard. Finding talent that actually knows what they're doing—and fits your project—is harder. Expert Bench gives you access to our curated network of experienced Workday consultants who we've vetted, worked with, and trust. This isn't staffing agency placement. We maintain semi-formal partnerships with the best independent consultants in the ecosystem.",
      includes: [
        "Functional consultants: HCM, Payroll, Financials, Compensation, Benefits, Recruiting",
        "Technical consultants: Integrations, Data Conversion, Reporting, Security",
        "PMO capacity: Project Coordinator, Test Lead, Cutover Lead",
      ],
      why: [
        "Deep vetting—we validate Workday expertise, not just resumes",
        "Relationship-based—consultants we've worked with and would work with again",
        "Quality oversight—Lightning Point stays accountable for delivery quality",
        "Ecosystem knowledge—consultants who understand Workday, not just 'ERP'",
      ],
      results: [
        "Faster ramp-up than self-sourced contractors—days, not weeks",
        "Quality assurance through our vetting and oversight",
        "Flexibility to scale capacity up or down as your project evolves",
      ],
    },
    {
      id: "optimize-&-operate",
      icon: TrendingUp,
      title: "Optimize & Operate",
      promise: "Stabilize, optimize, and keep Workday value flowing after go-live.",
      description:
        "Go-live is a milestone, not the finish line. Many organizations cross that line exhausted, under-trained, and running a system configured to meet a deadline—not to serve the business. Optimize & Operate helps you stabilize operations, prioritize your backlog, and evolve your Workday environment at a sustainable pace.",
      includes: [
        "Configuration optimization and cleanup",
        "Release management and feature adoption",
        "Roadmap development for Phase X",
        "Training and enablement for internal teams",
        "Managed services option for ongoing operational support",
      ],
      results: [
        "More predictable releases and fewer operational surprises",
        "A clearer roadmap tied to business priorities",
        "Sustainable improvement without burning out your team",
      ],
    },
  ];

  const specialtyService = {
    id: "ma-advisory",
    icon: Puzzle,
    title: "M&A Advisory",
    label: "Specialty Add-On",
    promise: "Workday + M&A = complexity. We simplify it.",
    description:
      "Mergers, acquisitions, and divestitures create unique Workday challenges: tenant integration, data migration, workforce harmonization, and timeline pressure that doesn't wait for your IT team to catch up. Whether you're acquiring a company on Workday, divesting a business unit, or merging two tenants, we provide the strategy, planning, and execution support to minimize disruption.",
    results: [
      "Clear integration or separation roadmap before the deal closes",
      "Reduced M&A timeline through experienced planning",
      "Minimized business disruption for your workforce",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(/images/services-abstract.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Services Built for the Full Workday Lifecycle
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Workday implementations are high-stakes. Most organizations do
                this once a decade—and the margin for error is thin. Lightning
                Point Consulting provides independent Workday advisory and
                execution support for enterprise HR, Finance, and IT leaders. We
                sit on the customer side of the table—not the SI's, not the
                vendor's—to help you go live on time, on budget, and with a
                team ready to own the platform long-term.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="our-services" className="py-16 bg-background scroll-mt-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                Our Services
              </h2>
              <div className="space-y-12">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      id={service.id}
                      className="accent-bar bg-card border border-border rounded-xl p-8 scroll-mt-24"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-lg font-medium text-accent mb-4">
                            {service.promise}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {service.modes && (
                        <div className="mb-6">
                          <p className="font-semibold mb-3">
                            Two engagement modes (pick one or combine):
                          </p>
                          <ul className="space-y-2">
                            {service.modes.map((mode, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{mode}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.includes && (
                        <div className="mb-6">
                          <p className="font-semibold mb-3">What's included:</p>
                          <ul className="space-y-2">
                            {service.includes.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.why && (
                        <div className="mb-6">
                          <p className="font-semibold mb-3">
                            Why Expert Bench is different:
                          </p>
                          <ul className="space-y-2">
                            {service.why.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-muted/50 rounded-lg p-6 mt-6">
                        <p className="font-semibold mb-3">
                          Results you can expect:
                        </p>
                        <ul className="space-y-2">
                          {service.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <span className="text-accent mt-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                What Sets Us Apart
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Deep Workday Delivery Leadership Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Many roles across the ecosystem—partner, customer, and
                    Workday. Former Head of Workday Professional Services
                    (Canada).
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Independent Perspective
                  </h3>
                  <p className="text-muted-foreground">
                    No SI partnerships, no vendor quotas. We work for you, not
                    your implementation partner.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Flexible Engagement Models
                  </h3>
                  <p className="text-muted-foreground">
                    Fractional, project-based, or embedded. We adapt to your
                    needs and timeline.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Customer-Side Focus
                  </h3>
                  <p className="text-muted-foreground">
                    We strengthen your delivery engine, not replace it. Our goal
                    is a team ready to own the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Service */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {specialtyService.label}
                </span>
                <h2 className="text-3xl font-semibold">
                  {specialtyService.title}
                </h2>
              </div>

              <div className="accent-bar bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Puzzle className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-accent mb-4">
                      {specialtyService.promise}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {specialtyService.description}
                </p>

                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="font-semibold mb-3">Results you can expect:</p>
                  <ul className="space-y-2">
                    {specialtyService.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-accent mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Ready to Talk About Your Project?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let's have a conversation about where you are and what might
                move the needle.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
