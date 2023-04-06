import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  keywords: string;
  children?: React.ReactNode;
};

export default function SEO({
  title,
  description,
  keywords,
  children = null,
}: SEOProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      {children}
    </Head>
  );
}
