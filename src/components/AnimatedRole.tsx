"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "DevOps Engineer.",
  "Site Reliability Engineer.",
  "Platform Engineer.",
  "Solutions Architect.",
  "Backend Engineer.",
];

export default function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className="inline-block animate-role-cycle">
      {ROLES[index]}
    </span>
  );
}
