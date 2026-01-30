/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Run & Evolve stage with 5 offerings
 * - Focus on sustainable post-go-live value
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RunEvolve() {
  const chooserItems = [
    {
      situation: "You have a large backlog and no clear priorities",
      destination: "Optimization",
      anchor: "#optimization",
    },
    {
      situation: "Releases feel risky or inconsistent",
      destination: "Release Management",
      anchor: "#release",
    },
    {
      situation: "You need a credible plan for the next 2-4 quarters",
      destination: "Roadmapping",
      anchor: "#roadmap",
    },
    {
      situation: "You're planning a major post-go-live wave",
      destination: "Phase X Delivery",
      anchor: "#phasex",
    },
    {
      situation: "Production noise is high and prioritization is unclear",
      destination: "Stabilization & Issue Triage",
      anchor: "#stabilization",
    },
  ];

  const offerings = [
    {
      id: "optimization",
      title: "Optimization",
      shortDesc: "Turn improvement ideas into a focused backlog and outcomes.",
      fullDesc:
        "Backlog shaping and execution support to improve process fit, adoption, and usability. We help prioritize what matters, plan manageable increments, and deliver improvements without creating enhancement sprawl.",
      startHere:
        "You have a large backlog and no clear priorities. Adoption pain points keep resurfacing. Teams want value but lack bandwidth.",
    },
    {
      id: "release",
      title: "Release Management",
      shortDesc: "A low-drama release cadence.",
      fullDesc:
        "A repeatable approach for intake, impact assessment, testing, deployment readiness, and communications. Keeps releases predictable and reduces last-minute scrambles.",
      startHere:
        "Releases feel risky or inconsistent. Testing and comms are ad hoc. You want a dependable rhythm.",
    },
    {
      id: "roadmap",
      title: "Roadmapping",
      shortDesc: "Make \"what's next\" executable.",
      fullDesc:
        "Quarterly planning that connects business priorities to a realistic Workday plan. We help decide what to do, what not to do, and how to sequence work within capacity constraints.",
      startHere:
        "You need a credible plan for the next 2-4 quarters. Stakeholders want everything at once. You need prioritization discipline.",
    },
    {
      id: "phasex",
      title: "Phase X Delivery",
      shortDesc: "Lead the next wave of Workday value.",
      fullDesc:
        "Delivery leadership for expansions, major enhancements, new scope, or new modules—keeping governance, readiness, and delivery discipline consistent. Designed to make Phase X feel controlled, not like a second implementation.",
      startHere:
        "You're planning a major post-go-live wave. You need leadership capacity and delivery discipline. You want to protect the platform and the team.",
    },
    {
      id: "stabilization",
      title: "Stabilization & Issue Triage",
      shortDesc: "Reduce noise and improve operational response.",
      fullDesc:
        "Establish a clear triage model for issues/incidents, prioritization, ownership, and root-cause patterns. Reduces repeat problems and improves response while strengthening internal capability.",
      startHere:
        "Production noise is high. Prioritization is unclear and stakeholders are frustrated. The same issues keep recurring.",
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
                  <RefreshCw className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold">
                    Run & Evolve
                  </h1>
                  <p className="text-xl text-accent mt-2">
                    Sustained post-go-live value at a manageable pace.
                  </p>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-primary-foreground/90 mt-6">
                Run & Evolve helps you stabilize, improve, and keep Workday
                delivering value without burning out your team. We build a
                repeatable cadence for optimization, releases, roadmapping,
                Phase X delivery, and stabilization/triage—so you get less
                stress, more value, and enable long-term ownership.
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
                Ready to Optimize Your Workday Platform?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how we can help you sustain value and keep your
                team energized.
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
