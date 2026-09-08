import type { Metadata } from "next";
import { ProjectCaseStudy } from "../components/project-case-study";
import { llnxCaseStudy } from "@/lib/project-case-studies";

export const metadata: Metadata = {
  title: "llnx — Project case study",
  description: llnxCaseStudy.summary,
};

export default function LlnxProjectPage() {
  return <ProjectCaseStudy project={llnxCaseStudy} />;
}
