document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  //preloader
  const preloadertl = gsap.timeline({ paused: true });

  preloadertl.from(".preloader", {
    x: "-10%",
    duration: 20,
  });
  // gsap code here!
  preloadertl.play();

  const heroTimeLine = gsap.timeline({ paused: true });
  heroTimeLine.from("[hd='section-hero'] .image-cover", {
    scale: 1.3,
    duration: 1,
  });
  heroTimeLine.from(
    ".hero_offer-logo",
    {
      opacity: 0,
      x: "-20%",
      duration: 0.5,
      delay: 0.4,
    },
    0,
  );
  heroTimeLine.from(
    "[hd='section-hero'] [hd='text-to-left']",
    {
      opacity: 0,
      x: "-15%",
      duration: 0.5,
      delay: 0.5,
      stagger: 0.2,
      ease: "power1.out",
    },
    0,
  );
  heroTimeLine.play();

  // section_citation

  const citationTl = gsap.timeline({
    scrollTrigger: {
      trigger: "[hd='section_about']",
      start: "top center",
      end: "bottom bottom",
    },
  });
  citationTl.from("[hd='section_about'] [hd='text-to-rigth']", {
    opacity: 0,
    x: "20%",
    duration: 0.6,
  });
  citationTl.from(
    '[hd="section_about"] [hd="text-to-left"]',
    {
      opacity: 0,
      x: "-15%",
      duration: 0.6,
      stagger: 0.1,
    },
    0,
  );

  // author textToLeftAnimate

  const authorTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_author",
      start: "top, 40%",
      end: "bottom center",
    },
  });
  authorTl.from(".section_author [hd='text-to-top']", {
    opacity: 0,
    y: "10%",
    duration: 0.8,
  });
  authorTl.from(
    ".section_author [hd='image-cover']",
    {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
    },
    0,
  );
  authorTl.from(
    ".section_author [hd='image-cover']",
    {
      scale: 1.1,
      duration: 0.9,
      delay: 0.2,
    },
    0,
  );
  authorTl.from(
    ".section_author .author_content-top-info",
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
      delay: 0.3,
    },
    0,
  );

  // author bottom

  const authorBottomTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".author_content-bottom",
      start: "top 50%",
      end: "bottom center",
    },
  });
  authorBottomTl.from(".author_content-bottom [hd='text-to-left']", {
    opacity: 0,
    x: "-15%",
    duration: 0.6,
  });
  authorBottomTl.from(
    ".author_content-bottom [hd='text-to-rigth']",
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
    },
    0,
  );

  // sport animate

  const sportTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_sport",
      start: "top 50%",
      end: "bottom center",
    },
  });

  sportTl.from('.section_sport [hd="image-cover"]', {
    opacity: 0,
    duration: 0.4,
  });
  sportTl.from(
    '.section_sport [hd="image-cover"]',
    {
      scale: 1.1,
      duration: 0.7,
      delay: 0.2,
    },
    0,
  );
  sportTl.from(
    ".section_sport .sport_offer",
    {
      backgroundColor: "#fff",
      duration: 0.5,
      delay: 0.2,
    },
    0,
  );
  sportTl.from(
    '.section_sport [hd="text-to-rigth"]',
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
      delay: 0.4,
      stagger: 0.1,
    },
    0,
  );
  sportTl.from(
    '.section_sport [hd="btn-rigth"]',
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
      delay: 0.4,
    },
    0,
  );

  // animate HONORS

  const honorsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_honors",
      start: "top 50%",
      end: "bottom center",
    },
  });

  honorsTl.from('.section_honors [hd="text-to-left"]', {
    opacity: 0,
    x: "-15%",
    duration: 0.6,
    stagger: 0.1,
  });
  honorsTl.from(
    '.section_honors [hd="text-to-rigth"]',
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
    },
    0,
  );
  honorsTl.from(
    '.section_honors [hd="image-cover"]',
    {
      scale: 1.3,
      duration: 0.7,
      delay: 0.4,
    },
    0,
  );
  honorsTl.from(
    '.section_honors [hd="bg-image"]',
    {
      oapcity: 0,
      duration: 0.5,
      delay: 0.6,
    },
    0,
  );

  // services animate

  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_services",
      start: "top 50%",
      end: "bottom center",
    },
  });
  servicesTl.from(".section_services", {
    backgroundColor: "#fff",
    duration: 0.4,
  });
  servicesTl.from(
    '.section_services [hd="text-to-left"]',
    {
      opacity: 0,
      x: "-15%",
      duration: 0.6,
      delay: 0.4,
    },
    0,
  );
  servicesTl.from(
    '.section_services [hd="btn"]',
    {
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
    },
    0,
  );
  servicesTl.from(
    '.section_services [hd="card-to-top"]',
    {
      opacity: 0,
      y: "20%",
      duration: 0.6,
      delay: 0.6,
      stagger: 0.1,
    },
    0,
  );
  servicesTl.from(
    '.section_services [hd="image-cover"]',
    {
      scale: 1.3,
      duration: 0.7,
      delay: 0.8,
      stagger: 0.1,
    },
    0,
  );

  // partners animation

  const partnersTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_partners",
      start: "top 60%",
      end: "bottom center",
    },
  });
  partnersTl.from(".section_partners", {
    backgroundColor: "#040d2e",
    duration: 0.6,
  });
  partnersTl.from(
    '.section_partners [hd="text-to-top"]',
    {
      opacity: 0,
      y: "10%",
      duration: 0.6,
      delay: 0.6,
    },
    0,
  );
  partnersTl.from(
    '.section_partners [hd="image-vis"]',
    {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.6,
    },
    0,
  );

  // CTA animate

  const ctaTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_cta",
      start: "top 50%",
      end: "bottom center",
    },
  });

  ctaTl.from('.section_cta [hd="text-to-left"]', {
    opacity: 0,
    x: "-15%",
    duration: 0.6,
  });
  ctaTl.from(
    '.section_cta [hd="text-to-rigth"]',
    {
      opacity: 0,
      x: "20%",
      duration: 0.6,
      stagger: 0.1,
    },
    0,
  );
});
