import { GetStaticPaths, GetStaticProps } from "next";
import IndustryPageLayout from "@/components/marketing/IndustryPageLayout";
import { Industry, industries, industryBySlug } from "@/lib/data/industries";

export default function IndustryDetailPage({ industry }: { industry: Industry }) {
  return <IndustryPageLayout industry={industry} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: industries.map((i) => ({ params: { slug: i.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const industry = industryBySlug(params?.slug as string);
  if (!industry) return { notFound: true };
  return { props: { industry } };
};
