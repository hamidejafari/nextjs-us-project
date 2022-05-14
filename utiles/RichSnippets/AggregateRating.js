export default function AggregateRating(props) {

    const schemaData =  {
        "@context" : "https://schema.org/",
        "@type": "EmployerAggregateRating",
        "itemReviewed": {
          "@type": "Organization",
          "name" : props.title,
          "sameAs" : props.url
        },
        "ratingValue": props.star,
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount" : props.reviewsCount
    };

    return props.reviewsCount > 0 ?  (    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    ) : <></>;
  }