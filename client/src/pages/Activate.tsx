/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Stage overview with clear visual hierarchy
 * - Expandable offering sections with gold accent bars
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Power, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Activate() {
  const chooserItems = [
    {
      situation: "You're about to launch and alignment feels fuzzy",
      destination: "Initiation Workshops",
      anchor: "#initiation",
    },
    {
      situation: "You're selecting or re-selecting a partner",
      destination: "SI Selection & Negotiation",
      anchor: "#selection",
    },
    {
      situation: "You have a partner but no strong operating model yet",
      destination: "Project Setup",
      anchor: "#setup",
    },
  ];

  const offerings = [
    {
      id: "initiation",
      title: "Initiation Workshops",
      shortDesc: "Fast alignment on outcomes, scope, and decision cadence.",
      fullDesc:
        "Time-boxed workshops to align sponsors, PMO, and key stakeholders on what success looks like, where scope begins and ends, how decisions get made, and what must be true before delivery accelerates. This is practical alignment that prevents \"we thought you meant...\" rework later.",
      startHere:
        "You're about to launch and alignment feels fuzzy. Leaders disagree on scope, timeline, or success measures. You need a clean decision path before kickoff.",
    },
    {
      id: "selection",
      title: "SI Selection & Negotiation",
      shortDesc: "Choose the right partner and set clear expectations.",
      fullDesc:
        "Support to evaluate SI/partner fit and negotiate a delivery model that holds up in real life. Focus on scope boundaries, assumptions, roles and responsibilities, change control, and commercial terms that align incentives. Partner-agnostic: the goal is a partnership that performs.",
      startHere:
        "You're selecting a partner, reselecting, or resetting expectations. You need an objective review of SOW scope/assumptions. You want fewer surprises once delivery begins.",
    },
    {
      id: "setup",
      title: "Project Setup",
      shortDesc: "Build the PMO engine and operating rhythm.",
      fullDesc:
        "Establish the governance forums, operating cadence, PMO artifacts, RAID discipline, tooling, and roles/resourcing needed for steady execution. This creates predictable delivery mechanics so customer and partner teams can focus on progress, not process confusion.",
      startHere:
        "You have a partner but no strong operating model yet. Status feels like theater; deliverables aren't crisp. You want a cadence your team can sustain.",
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
                  <Power className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold">
                    Activate
                  </h1>
                  <p className="text-xl text-accent mt-2">
                    Set the delivery engine before work accelerates.
                  </p>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-primary-foreground/90 mt-6">
                Activate is where you align outcomes, scope, governance, roles,
                and partner expectations so the customer-side team starts
                steady. The objective is to remove ambiguity early—so delivery
                ramps with clear decisions, a workable cadence, and ownership
                built into the plan from day one.
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
                {offerings.map((offering) => (
                  <div
                    key={offering.id}
                    id={offering.id}
                    className="scroll-mt-24"
                  >
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how we can help you activate your Workday program
                with clarity and confidence.
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
