import { useEffect } from "react";

/**
 * Met a jour <title> et la meta description de la page courante.
 * Remplace react-helmet pour eviter une dependance supplementaire.
 */
export default function useDocumentHead(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    if (description) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) {
        meta.setAttribute("content", previousDescription ?? "");
      }
    };
  }, [title, description]);
}
