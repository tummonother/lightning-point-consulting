/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Clear value proposition for independent consultants
 * - Professional yet collaborative tone
 * - Gold accents and structured layout
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  FileText,
  MessageSquare,
  DollarSign,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contractors() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Better Economics",
      description:
        "We share in the work, not just the margin. Our model is designed so you keep more of what you earn.",
    },
    {
      icon: FileText,
      title: "Real Support",
      description:
        "Access to delivery frameworks, templates, and tooling you'd only get at a large SI—without the overhead or politics.",
    },
    {
      icon: Users,
      title: "A Network of Peers",
      description:
        "Collaborate with other experienced consultants. Get a second opinion. Share what's working. Stop solving every problem alone.",
    },
    {
      icon: Award,
      title: "Quality Engagements",
      description:
        "We're selective about the customers we work with and the projects we take. No body-shop placements. No chaotic rescue missions without support.",
    },
    {
      icon: Shield,
      title: "Someone in Your Corner",
      description:
        "When scope creeps, expectations drift, or client dynamics get complicated—you have backup.",
    },
  ];

  const whatYouGet = [
    {
      title: "Access to Opportunities",
      items: [
        "Direct engagement with enterprise customers across North America",
        "Functional, technical, and PMO roles across the full Workday lifecycle",
        "First look at engagements that match your skills and availability",
        "No competition with internal staff—we're a network, not a bench",
      ],
    },
    {
      title: "Professional Resources",
      items: [
        "Delivery frameworks, templates, and accelerators built from real deployments",
        "Project governance tooling—status templates, RAID logs, decision frameworks",
        "Testing and cutover playbooks",
        "Health check and assessment frameworks",
        "Proposal and SOW templates",
      ],
    },
    {
      title: "Collaboration & Community",
      items: [
        "Regular partner calls to share learnings, discuss challenges, and stay connected",
        "Peer collaboration on tough problems—get a second opinion from someone who's been there",
        "Access to specialist expertise when your engagement needs skills outside your wheelhouse",
        "A sounding board for career decisions, rate negotiations, and engagement strategy",
      ],
    },
    {
      title: "Fair Economics",
      items: [
        "Transparent margin structure—you know exactly what the customer pays and what you earn",
        "Margins that reflect actual value delivered, not just a finder's fee",
        "Opportunity to grow your rate as you build a track record with us",
        "No lock-in—you're still independent, still running your own business",
      ],
    },
  ];

  const roles = [
    {
      category: "Functional",
      positions: [
        "HCM / Core HR",
        "Payroll (US & Canada)",
        "Financials",
        "Compensation",
        "Benefits",
        "Recruiting",
        "Talent / Learning",
      ],
    },
    {
      category: "Technical",
      positions: [
        "Integrations",
        "Data Conversion",
        "Reporting & Analytics",
        "Security",
        "Extend",
        "Adaptive Planning",
      ],
    },
    {
      category: "PMO / Delivery",
      positions: [
        "Project / Engagement Manager",
        "Project Coordinator",
        "Test Lead",
        "Cutover Lead",
        "Change Management",
        "Data Lead",
      ],
    },
  ];

  const expectations = [
    "Deliver quality work. Your work reflects on the entire network. We hold ourselves to a high standard.",
    "Communicate proactively. If something's going sideways, tell us early. No surprises.",
    "Honor your commitments. When you commit to an engagement, follow through. Our customers depend on it.",
    "Contribute to the community. Share what you're learning. Help other partners when you can. We grow together.",
    "Represent the brand well. When you're on a Lightning Point engagement, you're an ambassador. Act like it.",
  ];

  const faqs = [
    {
      question: "Is this an employment relationship?",
      answer:
        "No. You remain an independent contractor running your own business. We're a partnership network, not an employer. You maintain your independence, set your own schedule, and choose which engagements to pursue.",
    },
    {
      question: "What's the financial arrangement?",
      answer:
        "We're transparent about economics. You'll know the customer bill rate and your rate before accepting any engagement. Our margin covers business development, customer management, delivery support, and the resources/tools we provide. It's significantly more favorable than typical staffing agency arrangements.",
    },
    {
      question: "Can I still take direct clients?",
      answer:
        "Yes. You're still running your own business. We ask only that you honor your commitments to Lightning Point engagements and don't directly solicit our existing customers.",
    },
    {
      question: "What if I'm currently on another engagement?",
      answer:
        "No problem. Join the network now, and we'll reach out when opportunities match your availability. Many of our partners juggle multiple relationships—we're flexible.",
    },
    {
      question: "How selective are you?",
      answer:
        "Very. We're building a curated network of experienced consultants, not a staffing database. We look for track record, quality of work, professionalism, and cultural fit. If you've done great work in the Workday ecosystem and want to be part of something collaborative, we want to talk.",
    },
    {
      question: "What geographies do you cover?",
      answer:
        "We're focused on North America—Canada and the United States. Most engagements are remote or hybrid, though some may require periodic travel.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                For Independent Workday Consultants
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Partner With Us
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-8 text-primary-foreground/90">
                Stay independent. Stop working alone.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                You're working independently for a reason. The flexibility. The
                autonomy. The ability to choose your work and run your own
                business. But independence has trade-offs: no bench to lean on,
                no one to collaborate with, and staffing agencies that take 20%
                for doing little more than matching resumes.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mt-6">
                Lightning Point is building something different: a curated
                network of experienced Workday consultants who want the benefits
                of independence <em>and</em> the benefits of being part of
                something bigger.
              </p>
              <p className="text-xl font-semibold mt-8 text-accent">
                Not a staffing agency. Not a body shop. A real partnership.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4 text-center">
                Why Partner With Lightning Point?
              </h2>
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-muted/50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-3">
                    The Problem With Staffing Agencies
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional staffing firms take 15-25% of your bill rate for
                    placing you on a project. In return, you get... placed.
                    That's it. They don't understand Workday. They don't
                    understand the work. They don't add value beyond the
                    introduction. And when something goes wrong on the
                    engagement? You're on your own.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    What We Do Differently
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lightning Point is led by someone who's done this work. 13+
                    years leading Workday deployments. Former Head of
                    Professional Services (Canada) at Workday. We know what good
                    delivery looks like because we've lived it—from the SI side,
                    the customer side, and as project sponsors.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-8 text-center">
                When you partner with us, you get:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                What You Get as a Partner
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {whatYouGet.map((section, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Who We're Looking For
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                We're building a curated network—not a massive database. Quality
                over quantity. That means we're selective, and we expect the
                same from you.
              </p>

              <div className="bg-card border border-border rounded-xl p-8 mb-12">
                <h3 className="text-xl font-semibold mb-4">
                  You might be a fit if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You have deep Workday experience—not just certifications,
                      but real delivery track record
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You've worked at Workday, a major SI, or led
                      implementations from the customer side
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You value quality over volume—you'd rather do great work
                      than maximize utilization
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You're collaborative—willing to share knowledge and help
                      other partners succeed
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You want to be part of something, not just plugged into a
                      contract
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      You're reliable—you deliver what you commit to,
                      communicate proactively, and own your work
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-center">
                Roles we're actively building our network around:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {roles.map((roleGroup, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                      {roleGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {roleGroup.positions.map((position, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm"
                        >
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                How It Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Apply to join the network",
                    description:
                      "Tell us about your background, your Workday expertise, and what you're looking for. We'll schedule a conversation to see if there's a fit.",
                  },
                  {
                    step: 2,
                    title: "Get vetted",
                    description:
                      "We'll validate your experience, check references, and make sure you're someone we'd want representing Lightning Point to our customers.",
                  },
                  {
                    step: 3,
                    title: "Join the network",
                    description:
                      "Once approved, you're in. You'll get access to our partner resources, community channels, and opportunity pipeline.",
                  },
                  {
                    step: 4,
                    title: "Match to engagements",
                    description:
                      "When opportunities come in that match your skills and availability, we'll reach out. You decide which ones you want to pursue.",
                  },
                  {
                    step: 5,
                    title: "Deliver together",
                    description:
                      "On engagements, you're part of the Lightning Point team. You have our support, our resources, and our reputation behind you.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expectations */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                What We Expect From Partners
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                This is a two-way relationship. We invest in our partners, and
                we expect the same commitment in return.
              </p>
              <div className="bg-card border border-border rounded-xl p-8">
                <ul className="space-y-4">
                  {expectations.map((expectation, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-accent mt-1 text-xl">•</span>
                      <span className="leading-relaxed">{expectation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Ready to Join?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                If this resonates, we'd like to hear from you. Tell us about
                your Workday experience, the types of engagements you're looking
                for, and why you're interested in partnering with Lightning
                Point. We review every application and respond to everyone who
                looks like a potential fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Apply to Join the Network
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-6">
                Questions? Reach out directly:{" "}
                <a
                  href="mailto:partners@lightningpoint.consulting"
                  className="text-accent hover:underline"
                >
                  partners@lightningpoint.consulting
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
