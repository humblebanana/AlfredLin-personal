import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/project-detail-page";
import { getProjectBySlug, getProjectStaticParams } from "@/lib/projects";
import { DATA_EN } from "@/data/resume";

export async function generateStaticParams() {
  return getProjectStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = getProjectBySlug("en", slug);

  if (!project) {
    return undefined;
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
      languages: {
        "zh-CN": `/zh/projects/${slug}`,
        "en-US": `/projects/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${DATA_EN.url}/projects/${slug}`,
      ...(project.image && {
        images: [{ url: `${DATA_EN.url}${project.image}` }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      ...(project.image && {
        images: [`${DATA_EN.url}${project.image}`],
      }),
    },
  };
}

export default async function EnglishProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug("en", slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} locale="en" />;
}
