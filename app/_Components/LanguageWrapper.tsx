// app/_Components/LanguageWrapper.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";

export default function LanguageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Update body class for font switching
    if (language === "ar") {
      document.body.classList.add("font-arabic");
      document.body.classList.remove("font-sans");
    } else {
      document.body.classList.remove("font-arabic");
      document.body.classList.add("font-sans");
    }
  }, [language]);

  return <>{children}</>;
}
