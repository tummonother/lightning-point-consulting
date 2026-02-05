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
        "The foundation you set before implementation begins shapes everything that follows. Aligned executives, clear success criteria, and well-structured governance create the conditions for predictable delivery and strong partner collaboration. Activation & Setup gives you independent, experienced guidance to start your program on solid footing.",
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
        "Complex implementations benefit from independent perspective. When your team is stretched across business-as-usual and project work, experienced oversight helps ensure nothing falls through the cracks. Delivery Assurance provides your customer-side confidence layer—through ongoing advisory, recurring stage-gate reviews, or both. We review deliverables at key milestones, coach your team through decisions, and surface readiness gaps early enough to address them.",
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
        "When a program feels uncertain—unclear status, stalled decisions, or general loss of momentum—an independent assessment can help. Health Check & Course Correction provides objective clarity on where the program stands and what to prioritize next. This is a time-boxed diagnostic that gives sponsors evidence-based findings and a prioritized action plan.",
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
        "When you need specialist capacity to complement your SI and internal team—integrations, reporting, testing, change, or PMO support—Expert Bench provides vetted practitioners under Lightning Point's quality governance. We remain accountable for fit, onboarding, and deliverable quality. This is quality-governed specialist delivery, not staffing placement.",
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
                Workday implementations are complex, high-stakes programs. Success
                depends on clear governance, strong decision-making, and having
                the right expertise at the right moments. Lightning Point provides
                independent, partner-aligned advisory and delivery leadership for
                enterprise Workday programs. We work alongside your team and your
                implementation partner to strengthen governance, accelerate decisions,
                and build the internal capability your organization needs to own the
                platform long-term.
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
                  Book a Discovery Call
                </Button>
              </Link>
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
                    Independent & Partner-Aligned
                  </h3>
                  <p className="text-muted-foreground">
                    No SI partnerships, no vendor quotas. We bring independent
                    expertise that strengthens your partner relationship and
                    improves outcomes for everyone.
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
      </main>

      <Footer />
    </div>
  );
}
