export default function Breadcrumb(props) {
  
  const schemaDataWithDate = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": props.items,
    "datePublished": props?.datePublished ? props?.datePublished : ' ',
    "dateModified": props?.dateModified ? props?.dateModified : ' '
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": props.items
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataWithDate) }}
    />
  );
}