/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Deliver stage with 7 offerings in 6 sub-groups
 * - Clear visual organization with gold accent bars
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Deliver() {
  const chooserItems = [
    {
      situation: "Governance is unclear or decisions are slow",
      destination: "Delivery Strategy & Advisory",
      anchor: "#advisory",
    },
    {
      situation: "A stage gate is approaching",
      destination: "Delivery Assurance",
      anchor: "#assurance",
    },
    {
      situation: "Something feels off but the cause isn't clear",
      destination: "Project Health Check & Risk Assessment",
      anchor: "#diagnose",
    },
    {
      situation: "You've completed a Health Check and need a reset plan",
      destination: "Course Correction & Recovery Planning",
      anchor: "#reset",
    },
    {
      situation: "Leadership capacity is missing or overloaded",
      destination: "Program Leadership",
      anchor: "#lead",
    },
    {
      situation: "Adoption risk is rising or readiness is unclear",
      destination: "Change & Organizational Readiness",
      anchor: "#change",
    },
    {
      situation: "You need capacity fast for surge phases or backfills",
      destination: "Extended Team Support",
      anchor: "#scale",
    },
  ];

  const offeringGroups = [
    {
      id: "advisory",
      group: "ADVISE",
      title: "Delivery Strategy & Advisory",
      shortDesc: "Ongoing advisory to improve governance and decisions.",
      fullDesc:
        "Customer-side advisory for executives and PMOs who need clearer decisions and a steadier operating rhythm. We help design and run governance, decision cadence, partner management, risk management, roadmap planning, and operational readiness—tied to execution, not theory.",
      startHere:
        "Governance is unclear or decisions are slow. Risks are rising and priorities are competing. Sponsors want a credible outside delivery lens.",
    },
    {
      id: "assurance",
      group: "ASSURE",
      title: "Delivery Assurance",
      shortDesc: "Stage-gate confidence grounded in deliverables.",
      fullDesc:
        "Ongoing milestone and stage-gate reviews based on evidence: PMO artifacts, design/configuration outputs, testing readiness, and cutover readiness. You get objective findings, prioritized actions, and decision calls required to keep momentum. Repeatable assurance at the moments that matter.",
      startHere:
        "A stage gate is approaching. Steering wants more than status updates. Readiness feels uncertain or 'noisy.'",
    },
    {
      id: "diagnose",
      group: "DIAGNOSE",
      title: "Project Health Check & Risk Assessment",
      shortDesc: "One-time diagnostic: what's true, why, and what to do next.",
      fullDesc:
        "A point-in-time diagnostic of project health. We review key artifacts, interview customer and partner stakeholders, identify root causes, and deliver a prioritized corrective action plan. This can be done as a standalone engagement—or used as the starting point for Course Correction & Recovery Planning.",
      startHere:
        "Something feels off but the cause isn't clear. Leadership has changed or confidence has dropped. You need an objective reset before a major decision.",
      nextStep: "Course Correction & Recovery Planning",
    },
    {
      id: "reset",
      group: "RESET",
      title: "Course Correction & Recovery Planning",
      shortDesc: "Turn findings into a rebaseline and a workable plan.",
      fullDesc:
        "A time-boxed reset that typically follows a Health Check. We rebaseline scope, timeline, governance, and ownership, then establish an execution rhythm that restores predictability. Less debate, more forward motion—built around realistic capacity and clear decision paths.",
      startHere:
        "You've completed (or are completing) a Health Check. Scope/timeline no longer feels credible. You need to reset the operating model and regain momentum.",
      follows: "Project Health Check & Risk Assessment",
    },
    {
      id: "lead",
      group: "LEAD",
      title: "Program Leadership",
      shortDesc: "Embedded customer-side leadership to run cadence and readiness.",
      fullDesc:
        "Fractional or full-time customer-side leadership (e.g., Engagement Manager / Program Lead) to run the operating cadence, manage dependencies, drive readiness, and keep decisions moving across workstreams. Delivered alongside your SI/partner with an emphasis on building internal capability and long-term ownership.",
      startHere:
        "Leadership capacity is missing or overloaded. High-pressure phases are approaching. You need stronger customer-side control day-to-day.",
    },
    {
      id: "change",
      group: "LEAD",
      title: "Change & Organizational Readiness",
      shortDesc: "People-first readiness and adoption that makes ownership stick.",
      fullDesc:
        "Customer-side change leadership focused on readiness, adoption, and sustainable ownership—without overwhelming SMEs. We align stakeholders, manage readiness activities, coordinate enablement, and reduce friction so Workday serves the people using it and adoption holds after go-live.",
      startHere:
        "Adoption risk is rising or readiness is unclear. Training/enablement feels scattered. Leaders are concerned about capacity and burnout.",
    },
    {
      id: "scale",
      group: "SCALE",
      title: "Extended Team Support",
      shortDesc: "Expert staff augmentation for capacity gaps.",
      fullDesc:
        "Experienced practitioners across functional, technical, PMO, testing, and cutover roles—ready to plug into your tools, cadence, and governance. Partner-agnostic, delivery-ready, and oriented to weekly outcomes and clean handover.",
      startHere:
        "You need capacity fast for surge phases or backfills. You have specialized gaps (testing, cutover, PMO, integrations/reporting). Internal SMEs are stretched thin.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Stage Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <Navigation className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold">
                    Deliver
                  </h1>
                  <p className="text-xl text-accent mt-2">
                    Customer-side execution strength during implementation.
                  </p>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-primary-foreground/90 mt-6">
                Deliver is where Workday programs feel real: decisions,
                dependencies, readiness, and capacity pressure. We strengthen
                the customer-side delivery engine with partner-agnostic
                advisory, delivery assurance, embedded leadership, and expert
                capacity. The goal is clear decisions, calm milestones, and a
                team that can enable long-term ownership after go-live.
              </p>
            </div>
          </div>
        </section>

        {/* Start Here Chooser */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Start Here
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <Accordion type="single" collapsible className="w-full">
                  {chooserItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-accent">
                        {item.situation}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4">
                          <a href={item.anchor}>
                            <Button
                              variant="outline"
                              className="w-full justify-between"
                            >
                              <span>Go to: {item.destination}</span>
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12">Our Offerings</h2>
              <div className="space-y-8">
                {offeringGroups.map((offering) => (
                  <div
                    key={offering.id}
                    id={offering.id}
                    className="scroll-mt-24"
                  >
                    <div className="mb-3">
                      <span className="text-xs font-bold text-accent tracking-wider">
                        {offering.group}
                      </span>
                    </div>
                    <div className="accent-bar bg-card border border-border rounded-xl p-8">
                      <h3 className="text-2xl font-semibold mb-3">
                        {offering.title}
                      </h3>
                      <p className="text-accent font-medium mb-4">
                        {offering.shortDesc}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {offering.fullDesc}
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4 mt-6">
                        <p className="text-sm font-medium mb-2">
                          Start here if:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {offering.startHere}
                        </p>
                      </div>
                      {offering.nextStep && (
                        <div className="mt-4 text-sm text-muted-foreground">
                          <span className="font-medium">Typical next step:</span>{" "}
                          {offering.nextStep}
                        </div>
                      )}
                      {offering.follows && (
                        <div className="mt-4 text-sm text-muted-foreground">
                          <span className="font-medium">Usually follows:</span>{" "}
                          {offering.follows}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">
                Need Delivery Support?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how we can strengthen your customer-side delivery
                engine.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
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
