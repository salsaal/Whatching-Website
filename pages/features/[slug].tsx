import { GetStaticPaths, GetStaticProps } from "next";
import FeaturePageLayout from "@/components/marketing/FeaturePageLayout";
import { Feature, featureBySlug, features } from "@/lib/data/features";

export default function FeatureDetailPage({ feature }: { feature: Feature }) {
  return <FeaturePageLayout feature={feature} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: features.map((f) => ({ params: { slug: f.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const feature = featureBySlug(params?.slug as string);
  if (!feature) return { notFound: true };
  return { props: { feature } };
};
