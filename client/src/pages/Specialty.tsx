/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Specialty Services stage with 3 offerings
 * - Premium positioning for complex situations
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Puzzle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Specialty() {
  const chooserItems = [
    {
      situation: "You're integrating or separating entities on a fixed timeline",
      destination: "M&A and Divestitures",
      anchor: "#ma",
    },
    {
      situation: "You want AI outcomes but need readiness clarity",
      destination: "AI Readiness & Governance",
      anchor: "#ai",
    },
    {
      situation: "You're running a complex ERP/enterprise program beyond Workday",
      destination: "ERP Program Management",
      anchor: "#erp",
    },
  ];

  const offerings = [
    {
      id: "ma",
      title: "M&A and Divestitures",
      shortDesc: "Customer-side delivery discipline for integrations and separations.",
      fullDesc:
        "Support for integration/separation planning, impact assessment, readiness coordination, cutover/stabilization, and partner alignment—where timelines are fixed and ownership must be clear.",
      startHere:
        "You're integrating or separating entities on a fixed timeline. Impacts span systems, process, and people. You need clear decisions and coordinated execution.",
    },
    {
      id: "ai",
      title: "AI Readiness & Governance",
      shortDesc: "Move from AI interest to AI-ready.",
      fullDesc:
        "Readiness assessment across data, processes, risk, and operating model. Use case discovery and prioritization, automation design, and governance/policy development that fits your organization's risk profile.",
      startHere:
        "You want AI outcomes but need readiness clarity. Use cases are vague or too many. Governance and risk questions are slowing progress.",
    },
    {
      id: "erp",
      title: "ERP Program Management",
      shortDesc: "Customer-side leadership and assurance for ERP programs beyond Workday.",
      fullDesc:
        "Program leadership, governance design, partner management, readiness discipline, and stage-gate assurance for ERP and enterprise initiatives—built to enable long-term ownership.",
      startHere:
        "You're running a complex ERP/enterprise program. You need stronger customer-side control and cadence. Stakeholders need clearer decisions and predictable execution.",
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
                  <Puzzle className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold">
                    Specialty Services
                  </h1>
                  <p className="text-xl text-accent mt-2">
                    Focused support for complex, cross-cutting situations.
                  </p>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-primary-foreground/90 mt-6">
                Specialty Services applies the same customer-side,
                partner-agnostic delivery discipline to high-stakes situations
                beyond the standard Workday lifecycle—M&A/divestitures, AI
                readiness and governance, and ERP program management.
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
                Facing a Complex Challenge?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how our specialty services can support your
                unique situation.
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
