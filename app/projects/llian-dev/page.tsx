import type { Metadata } from "next";
import { ProjectCaseStudy } from "../components/project-case-study";
import { llianDevCaseStudy } from "@/lib/project-case-studies";

export const metadata: Metadata = {
  title: "llian.dev case study",
  description: llianDevCaseStudy.summary,
};

export default function LlianDevProjectPage() {
  return <ProjectCaseStudy project={llianDevCaseStudy} />;
}
