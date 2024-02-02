import { useEffect } from "react";

const HighlightRedirect = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScuZM7H0AbcYEx2f4Nbyol46tobRUrzx5PXgQcy720ynd_RYw/viewform";
  }, []);

  return null;
};

export default HighlightRedirect;
