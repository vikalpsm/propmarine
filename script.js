const header = document.querySelector(".site-header");

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      header.classList.toggle("is-scrolled", self.scroll() > 18);

      if (header.classList.contains("nav-open")) return;

      if (self.direction === 1 && self.scroll() > 120) {
        header.classList.add("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
    },
  });
} else {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

const closeNav = () => {
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.querySelector(".nav-close").addEventListener("click", closeNav);

const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

const closeDropdown = () => {
  navDropdown.classList.remove("is-open");
  navDropdownToggle.setAttribute("aria-expanded", "false");
};

navDropdownToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = navDropdown.classList.toggle("is-open");
  navDropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!navDropdown.contains(event.target)) {
    closeDropdown();
  }
});

const heroMedia = document.querySelector(".hero-media");
const heroHeading = document.querySelector(".hero-tagline");
const heroButtons = document.querySelectorAll(".hero-actions .button");

if (heroMedia && window.gsap) {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(
    heroMedia,
    { scale: 1.15 },
    { scale: 1, duration: 1.8, ease: "power2.out" },
    0
  );

  if (heroHeading && window.SplitText) {
    const split = new SplitText(heroHeading, { type: "lines", mask: "lines" });
    tl.from(
      split.lines,
      { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.15 },
      0.3
    );
  }

  if (heroButtons.length) {
    tl.from(
      heroButtons,
      { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 },
      0.9
    );
  }
}

const aboutSection = document.querySelector(".about-section");

if (aboutSection && window.gsap && window.ScrollTrigger) {
  const aboutImages = aboutSection.querySelectorAll(".about-media img");
  const aboutTextBlocks = aboutSection.querySelectorAll(
    ".section-label, .about-tagline, .section-copy > p"
  );
  const aboutListItems = aboutSection.querySelectorAll(".about-checklist li");
  const aboutCta = aboutSection.querySelector(".about-cta");

  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: "top 72%",
    },
    defaults: { ease: "power3.out" },
  });

  aboutTl
    .fromTo(
      aboutImages,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.inOut",
      },
      0
    )
    .fromTo(
      aboutTextBlocks,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
      0.15
    )
    .fromTo(
      aboutListItems,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
      0.45
    )
    .fromTo(
      aboutCta,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      0.75
    );
}

const brandCardItems = document.querySelectorAll(".brand-card-item");

if (brandCardItems.length && window.gsap && window.ScrollTrigger) {
  gsap.fromTo(
    brandCardItems,
    { y: 80, rotate: 3, opacity: 0 },
    {
      y: 0,
      rotate: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".brand-card-columns",
        start: "top 80%",
      },
    }
  );
}

const serviceCards = document.querySelectorAll(".service-card");

if (serviceCards.length && window.gsap && window.ScrollTrigger) {
  gsap.fromTo(
    serviceCards,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
    }
  );

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}

const whyChooseSection = document.querySelector(".why-choose-section");

if (whyChooseSection && window.gsap && window.ScrollTrigger) {
  const whyChooseBg = whyChooseSection.querySelector(".why-choose-media-bg");
  const whyChooseItems = whyChooseSection.querySelectorAll(".why-choose-item");

  if (whyChooseBg) {
    gsap.fromTo(
      whyChooseBg,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: whyChooseSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }

  if (whyChooseItems.length) {
    gsap.fromTo(
      whyChooseItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-choose-grid",
          start: "top 80%",
        },
      }
    );
  }
}

const contactItems = document.querySelectorAll(".contact-item");

if (contactItems.length && window.gsap && window.ScrollTrigger) {
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-grid",
      start: "top 80%",
    },
  });

  contactItems.forEach((item) => {
    contactTl.fromTo(
      item,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  });
}

const disclaimerBox = document.querySelector(".disclaimer-box");

if (disclaimerBox && window.gsap && window.ScrollTrigger) {
  gsap.fromTo(
    disclaimerBox,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: disclaimerBox,
        start: "top 85%",
      },
    }
  );
}

const mapSection = document.querySelector(".map-section");

if (mapSection && window.gsap && window.ScrollTrigger) {
  const mapHeading = mapSection.querySelector(".section-heading");
  const mapEmbed = mapSection.querySelector(".map-embed");

  const mapTl = gsap.timeline({
    scrollTrigger: {
      trigger: mapSection,
      start: "top 75%",
    },
    defaults: { ease: "power3.out" },
  });

  if (mapHeading) {
    mapTl.fromTo(
      mapHeading,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    );
  }

  if (mapEmbed) {
    mapTl.fromTo(
      mapEmbed,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 },
      "-=0.35"
    );
  }
}

const footerMain = document.querySelector(".footer-main");

if (footerMain && window.gsap && window.ScrollTrigger) {
  const footerBrand = footerMain.querySelector(".footer-brand").parentElement;
  const footerLinks = footerMain.querySelectorAll(".footer-services, address");
  const socialLinks = footerMain.querySelector(".social-links");

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: footerMain,
      start: "top 90%",
    },
    defaults: { ease: "power2.out" },
  });

  footerTl
    .fromTo(footerBrand, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo(
      footerLinks,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }
    )
    .fromTo(socialLinks, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
}
