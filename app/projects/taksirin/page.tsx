import type { Metadata } from "next";
import { ProjectCaseStudy } from "../components/project-case-study";
import { taksirinCaseStudy } from "@/lib/project-case-studies";

export const metadata: Metadata = {
  title: "taksirin case study",
  description: taksirinCaseStudy.summary,
};

export default function TaksirinProjectPage() {
  return <ProjectCaseStudy project={taksirinCaseStudy} />;
}
