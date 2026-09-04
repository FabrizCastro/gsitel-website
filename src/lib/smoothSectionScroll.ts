let activeScrollFrame: number | null = null;

export function scrollToSection(sectionId: string, offset = 88) {
  const target = document.getElementById(sectionId);
  if (!target) return false;

  const destination = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - offset,
  );
  const start = window.scrollY;
  const distance = destination - start;

  if (activeScrollFrame !== null) {
    window.cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    Math.abs(distance) < 4
  ) {
    window.scrollTo({ top: destination });
    return true;
  }

  const duration = Math.min(1150, Math.max(650, Math.abs(distance) * 0.42));
  let startTime: number | null = null;

  const animate = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo({ top: start + distance * eased });

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(animate);
    } else {
      activeScrollFrame = null;
    }
  };

  activeScrollFrame = window.requestAnimationFrame(animate);
  return true;
}
