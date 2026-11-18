import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Inbox,
  Instagram,
  Megaphone,
  MessageCircleReply,
  MessagesSquare,
  Send,
  Workflow
} from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import { featureMenu } from "@/lib/data/nav";
import { featureBySlug } from "@/lib/data/features";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/seo";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/features/whatsapp-broadcast": Megaphone,
  "/features/whatsapp-flows": Workflow,
  "/features/ai-chatbot": Bot,
  "/features/whatsapp-marketing": MessagesSquare,
  "/features/instagram-automation": Instagram,
  "/features/instagram-comment-automation": MessageCircleReply,
  "/features/instagram-dm-automation": Send,
  "/features/shared-inbox": Inbox,
  "/features/analytics": BarChart3
};

const groupIntro: Record<string, string> = {
  WhatsApp:
    "Reach customers, answer them automatically and run campaigns on Meta's official platform.",
  Instagram:
    "Turn comments, DMs and story replies into conversations. Part of the Pro plan.",
  "Team and insights": "Reply as a team from one inbox, and see what's working."
};

// Column counts the groups fill exactly (4, 3 and 2 items).
const cols: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4"
};

export default function FeaturesIndex() {
  return (
    <>
      <Seo
        title="WhatsApp Broadcasts, Chatbots and Inbox Features | Whatching"
        description="WhatsApp broadcasts, a drag-and-drop chatbot builder, an AI agent, a shared team inbox, analytics and Instagram automation for small businesses in India."
        path="/features"
        jsonLd={[
          softwareApplicationSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-12 max-sm:pt-28">
          <div className="container-wide max-w-3xl text-center">
            <h1 className="heading-2 mb-4">
              WhatsApp and Instagram features for small businesses
            </h1>
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              Broadcasts, chatbots, an AI agent that answers from your own
              content, and one inbox for your whole team, all on Meta&apos;s
              official WhatsApp Business Platform.
            </p>
          </div>
        </section>

        {featureMenu.map((group) => (
          <section
            key={group.heading}
            className="pb-16"
            aria-labelledby={`g-${group.heading}`}
          >
            <div className="container-wide">
              <h2
                id={`g-${group.heading}`}
                className="text-[22px] font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {group.heading}
              </h2>
              <p
                className="mt-1 mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {groupIntro[group.heading]}
              </p>
              <ul
                className={`grid gap-4 ${cols[group.links.length] ?? "md:grid-cols-3"}`}
              >
                {group.links.map((link) => {
                  const Icon = icons[link.href] ?? MessagesSquare;
                  const feature = featureBySlug(
                    link.href.split("/").pop() ?? ""
                  );
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="product-card flex flex-col h-full !p-6"
                      >
                        <span className="flex items-start justify-between gap-3">
                          <span className="icon-badge">
                            <Icon className="w-5 h-5" />
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4"
                            style={{ color: "var(--text-muted)" }}
                            aria-hidden
                          />
                        </span>
                        <span
                          className="block text-[17px] font-semibold mt-5"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {feature?.name ?? link.label}
                        </span>
                        <span
                          className="block text-[15px] mt-1.5 leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {feature?.subheadline ?? link.desc}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}

        <FinalCta />
      </SiteShell>
    </>
  );
}
