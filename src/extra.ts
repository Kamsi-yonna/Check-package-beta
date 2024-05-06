/**
 * Shares content on mobile devices using the Web Share API, if available.
 *
 * @param {object} data - The data object containing sharing information.
 * @param {string} [data.title] - The title of the content to be shared.
 * @param {string} [data.text] - The text/content to be shared.
 * @param {string} [data.url] - The URL associated with the content to be shared.
 *
 * @example
 * // Example usage:
 * mobileShare({
 *   title: 'Amazing Article',
 *   text: 'Check out this interesting article!',
 *   url: 'https://example.com/article'
 * });
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share|Web Share API}
 */

export const mobileShare = (data: ShareData) => {
  if (navigator.share) {
    navigator.share({
      title: data.title,
      text: data.text,
      url: data.url,
    });
  }
};

//
export const scrollToSection = (el: HTMLElement) => {
  el.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = (type: "modal" | "body" = "body") => {
  if (type === "modal") {
    const modalElement = document.querySelector(".c-asset_popup");
    if (modalElement) {
      modalElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  } else if (type === "body") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export const disableBodyScroll = () => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflowY = "hidden";
    body.style.height = "100vh";
  }
};

export const enableBodyScroll = () => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflowY = "visible";
    body.style.height = "auto";
  }
};

export const observer = (
  callback: Function,
  options: IntersectionObserverInit = {}
) => {
  const optionsMod = {
    root: null,
    rootMargin: "150px",
    threshold: 0.5,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) callback();
  }, optionsMod);
};
