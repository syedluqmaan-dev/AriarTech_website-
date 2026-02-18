import { useEffect } from "react";

const SEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData
}) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMetaTag = (name, content, property = false) => {
      let element = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    if (description) setMetaTag("description", description);
    if (ogTitle) setMetaTag("og:title", ogTitle, true);
    if (ogDescription) setMetaTag("og:description", ogDescription, true);
    if (ogImage) setMetaTag("og:image", ogImage, true);

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    if (structuredData) {
      let script = document.querySelector("#structured-data");
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "structured-data";
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(structuredData);
    }
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    structuredData
  ]);

  return null;
};

export default SEO;
