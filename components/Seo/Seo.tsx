import Head from "next/head";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  JsonLd,
  OgImage,
  organizationSchema,
  SITE_NAME,
  websiteSchema
} from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  /** Path on www.whatching.com, e.g. "/pricing". Used for the canonical and og:url. */
  path: string;
  type?: "website" | "article";
  image?: OgImage;
  publishedTime?: string;
  noindex?: boolean;
  /** Page-specific structured data. Organization and WebSite are always included. */
  jsonLd?: JsonLd[];
}

const Seo = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  publishedTime,
  noindex,
  jsonLd = []
}: SeoProps) => {
  const url = absoluteUrl(path);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, ...jsonLd]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={url} />
      {noindex && <meta key="robots" name="robots" content="noindex" />}

      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:locale" property="og:locale" content="en_IN" />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={image.url} />
      <meta key="og:image:width" property="og:image:width" content={String(image.width)} />
      <meta key="og:image:height" property="og:image:height" content={String(image.height)} />
      <meta key="og:image:alt" property="og:image:alt" content={image.alt} />
      {publishedTime && (
        <meta key="article:published_time" property="article:published_time" content={publishedTime} />
      )}

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={image.url} />
      <meta key="twitter:image:alt" name="twitter:image:alt" content={image.alt} />

      <script
        key="ld-json"
        type="application/ld+json"
        // "<" is escaped so page text can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
      />
    </Head>
  );
};

export default Seo;
