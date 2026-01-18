import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    const addHover = () => ring.classList.add("cursor-hover");
    const removeHover = () => ring.classList.remove("cursor-hover");

    const clickEffect = () => {
      ring.classList.add("cursor-click");
      setTimeout(() => ring.classList.remove("cursor-click"), 150);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", clickEffect);

    const hoverTargets = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", clickEffect);

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" className="cursor-dot"></div>
      <div id="cursor-ring" className="cursor-ring"></div>
    </>
  );
}
