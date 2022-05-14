export default function Organization() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.brandsreviews.com/",
    logo: "https://www.brandsreviews.com/images/brandslogo.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressCountry: "USA",
      postalCode: "10001",
      streetAddress: "30 Hudson Yards",
    },
    email: "hello@brandsreviews.com",
    sameAs: [
      "https://www.facebook.com/brandsreviewscom",
      "https://www.instagram.com/brands_reviews/",
      "https://twitter.com/brandsreviews_",
      "https://www.pinterest.com/brandsreviews/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
