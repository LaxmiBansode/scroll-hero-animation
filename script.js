(function() {
  const headlineSpans = document.querySelectorAll('#heroHeadline span');
  const statItems = document.querySelectorAll('.stat-item');
  const visualEl = document.querySelector('#scrollVisual .visual-scroll-element');

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } });

  tl.to(headlineSpans, {
    opacity: 1,
    y: 0,
    stagger: 0.025,
    duration: 1.2,
    ease: 'back.out(1.2)'
  }, 0.2);

  tl.to(statItems, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'sine.out'
  }, 0.9);

  gsap.set(visualEl, { scale: 1, rotation: 0.5 });

  if (visualEl) {
    gsap.to(visualEl, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true
      },
      y: 320,
      scale: 0.75,
      rotation: 4,
      ease: "power1.inOut",
    });

    gsap.to(visualEl, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: 40,
      rotation: -2,
      ease: "sine.inOut"
    });
  }

  gsap.to('#heroHeadline', {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
    },
    letterSpacing: "0.45em",
    opacity: 0.5,
    ease: "sine.inOut",
    y: -20
  });

  ScrollTrigger.addEventListener('refresh', () => {});
})();