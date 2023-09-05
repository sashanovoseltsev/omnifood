const btnMenu = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

console.log(btnMenu);

btnMenu.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  // headerEl.classList.add("sticky");
});

// Copyright header
const copyrightYearEl = document.querySelector(".copyright-year");
copyrightYearEl.textContent = new Date().getFullYear();

// scroll
document.addEventListener("click", (e) => {
  e.preventDefault();

  const link = e.target.closest("a");
  if (link) {
    const hrefTarget = link.getAttribute("href");

    if (hrefTarget && hrefTarget.startsWith("#")) {
      let yScrollPos = 0;

      if (hrefTarget.length > 1) {
        yScrollPos +=
          document.querySelector(hrefTarget).getBoundingClientRect().top +
          window.pageYOffset;
      }

      window.scrollTo({
        top: yScrollPos,
        behavior: "smooth",
      });
    }
  }
});

// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      headerEl.classList.add("sticky");
      sectionHeroEl.classList.add("margin-top-sticky");
    } else {
      headerEl.classList.remove("sticky");
      sectionHeroEl.classList.remove("margin-top-sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

const mobileNav = document.querySelector(".main-nav");
const menuObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      headerEl.classList.remove("nav-open");
    }
  },
  {
    root: null,
    threshold: 0.99,
    rootMargin: "0px",
  }
);
menuObserver.observe(mobileNav);
