export default function Breadcrumb(props) {
  
    const items = ()=>{
        const itemsFaq = [];
        props.items.forEach((faq) => {
            itemsFaq.push(
                {
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }
            );
        });
        return itemsFaq;
    };
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items() ? items() : []
    };

    return items()?.length > 0 ?  (    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    ) : <></>;
}