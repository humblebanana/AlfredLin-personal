/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Markdown from "react-markdown";
import { isExternalHref } from "@/lib/locale";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-44 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-44 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const router = useRouter();
  const destination = href || "#";

  const navigateCard = () => {
    if (!href || href === "#") return;

    if (isExternalHref(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(href);
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={navigateCard}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigateCard();
        }
      }}
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden cursor-pointer bg-card hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-44 object-cover"
          />
        ) : image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="w-full h-44 bg-muted" />
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <time className="text-sm text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={destination}
            target={isExternalHref(destination) ? "_blank" : undefined}
            rel={isExternalHref(destination) ? "noopener noreferrer" : undefined}
            onClick={(event) => event.stopPropagation()}
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {links.map((linkItem, idx) => (
              <Link
                href={linkItem.href}
                key={`${linkItem.type}-${idx}-${linkItem.href}`}
                target={isExternalHref(linkItem.href) ? "_blank" : undefined}
                rel={isExternalHref(linkItem.href) ? "noopener noreferrer" : undefined}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-black bg-black text-white px-3 py-1.5 text-xs hover:bg-black/90 transition-colors"
              >
                {linkItem.icon}
                {linkItem.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
