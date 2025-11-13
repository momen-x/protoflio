// context/LanguageContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "header.protoflio": "Protoflio",
    "header.frontend": "Front End Developer",
    "hero.who": "I'm",
    "hero.about": "I develop modern web applications using React and Next.js",
    "hero.name": "Mo'men",
    "hero.myWork": "View My Works",
    "hero.cv": "Download  CV",
    "about.intro": "INTRODUCTION",
    "about.overview": "Overview",
    "about.story":
      "I'm a passionate front-end developer dedicated to crafting exceptional web experiences. My journey began with Java at university but was interrupted by the war in Gaza. I returned with renewed focus, exploring various technologies—C, C++, PHP, Python—before finding my true passion in front-end development with HTML, CSS, and JavaScript. I've mastered modern tools including React, Next.js, Tailwind CSS, and Bootstrap, building real-world projects that solve practical problems. Today, I specialize in full-stack development, creating responsive, user-centric applications while continuously learning and adapting to emerging technologies.",
    "about.whatdo": "What I Do",
    "about.services": "Here are some of the services I specialize in",
    "about.serviceTitle1": "Front end Web developer",
    "about.serviceTitle2": "Basic for back end developer",
    "experience.title": "What I've done so far",
    "experience.workExperience": "Work Experience",
    "experience.frontTitle": "Front End Developer",
    "experience.frontDate": "May 2025",
    "experience.front1": "Built interactive UIs with React.js and TypeScript",
    "experience.front2":
      "Styled components with Tailwind CSS for modern designs",
    "experience.front3": "Implemented state management and API integrations",
    "experience.BackTitle": "Back End Developer",
    "experience.BackDate": "Jan 2025",
    "experience.back1": "Built RESTful APIs with Node.js and Express.js",
    "experience.back2": "Designed and implemented MongoDB database schemas",
    "experience.back3": "Created authentication and authorization systems",
    "experience.back4": "Optimized server performance and response times",
    "work.title": "My works",
    "work.description": "Projects",
    "work.content":
      "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",

    // Project translations
    "work.project1Name": "E-commerce",
    "work.project1Description":
      "A full-stack e-commerce platform featuring user authentication, product catalog, shopping cart, and secure checkout functionality with MongoDB integration.",

    "work.project2Name": "Pizza Shop",
    "work.project2Description":
      "An online pizza ordering system with customizable menu options, real-time order tracking, and seamless payment integration built with PostgreSQL database.",

    "work.project3Name": "Wiki App",
    "work.project3Description":
      "A collaborative knowledge-sharing platform where users can create articles, comment on posts, and contribute to a community-driven encyclopedia with PostgreSQL backend.",

    "work.project4Name": "Product Management",
    "work.project4Description":
      "A comprehensive inventory management system for tracking products, managing stock levels, and organizing product data with full CRUD operations and PostgreSQL storage.",

    "work.project5Name": "To Do List",
    "work.project5Description":
      "A task management application that helps users organize daily activities, set priorities, track progress, and manage tasks efficiently with local storage persistence.",

    "work.project6Name": "Movies List",
    "work.project6Description":
      "A movie discovery application featuring a browsable catalog of films, detailed movie information, ratings, and search functionality powered by an external API.",

    "work.project7Name": "Pray Time",
    "work.project7Description":
      "An Islamic prayer times application that displays accurate prayer schedules based on location, with notifications and daily reminders for Muslims worldwide.",
    "work.livedemo": "Live Demo",
    "work.src": "code src",
    "feedback.pepoleSay": "What People Say",
    "feedback.testimonials": "Testilmolions",

    "feedback.notes": "💡 Note: Using fake data for demonstration purposes",
    "feedback.peopleSay": "What People Say",
    "feedback.note": "💡 Note: Using sample data for demonstration purposes",

    // Testimonial content
    "feedback.testimonial1":
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    "feedback.testimonial2":
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    "feedback.testimonial3":
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",

    "feedback.name1": "Sara Lee",
    "feedback.designation1": "CFO",
    "feedback.company1": "Acme Co",

    "feedback.name2": "Chris Brown",
    "feedback.designation2": "COO",
    "feedback.company2": "DEF Corp",

    "feedback.name3": "Lisa Wang",
    "feedback.designation3": "CTO",
    "feedback.company3": "456 Enterprises",

    // Stats translations
    "feedback.projectsCompleted": "Projects Completed",
    "feedback.happyClients": "Happy Clients",
    "feedback.yearsExperience": "Years Experience",
    "feedback.clientSatisfaction": "Client Satisfaction",
    // Contact translations
    "contact.keepInTouch": "Get in touch",
    "contact.contact": "Contact",
    "contact.opinion":
      "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.",
    "contact.name": "Your Name",
    "contact.namePlaceholder": "What's your name?",
    "contact.yourEmail": "Your Email",
    "contact.emailPlaceholder": "What's your email address?",
    "contact.message": "Your Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.sendMessage": "Send Message",
    "contact.sending": "Sending...",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsappMessage": "Direct messaging",
    "contact.whatsappSendMessage": "Message",
    "contact.email": "Email",
    "contact.phone": "Phone",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.work": "أعمالي",
    "header.protoflio": "ملف اعمال",
    "header.frontend": "مطور واجهات أمامية",
    "nav.contact": "اتصل بي",
    "hero.who": "المطور",
    "hero.name": "مؤمن",
    "hero.about": "أقوم بتطوير تطبيقات الويب الحديثة باستخدام React و Next.js",
    "hero.myWork": "شاهد مشاريعي",
    "hero.cv": "قم بتنزيل ال CV",
    "about.intro": "مقدمة",
    "about.overview": "نظرة عامة",
    "about.story":
  "أنا مطور واجهات أمامية شغوف بإنشاء تجارب ويب استثنائية. بدأت رحلتي بتعلم Java في الجامعة، لكنها توقفت بسبب الحرب على غزة. عدت بتركيز متجدد، واستكشفت تقنيات متعددة—C, C++, PHP, Python—قبل أن أجد شغفي الحقيقي في تطوير الواجهات الأمامية باستخدام HTML, CSS, و JavaScript. أتقنت الأدوات الحديثة بما في ذلك React, Next.js, Tailwind CSS, و Bootstrap، وبنيت مشاريع واقعية تحل مشاكل عملية. اليوم، أتخصص في تطوير المواقع المتكاملة، وأنشئ تطبيقات متجاوبة تركز على تجربة المستخدم بينما أتعلم باستمرار وأتكيف مع التقنيات الناشئة.",
    "about.whatdo": "ماذا أستطيع أن أفعل",
    "about.services": "هنا بعض من الخدمات التي أستطيع تقديمها",
    "about.serviceTitle1": "مطور واجهات أمامية",
    "about.serviceTitle2": "أساسيات تطوير الواجهات الخلفية",
    "work.content":
      "تُظهر المشاريع التالية مهاراتي وخبرتي من خلال أمثلة واقعية من أعمالي. يُوصف كل مشروع بإيجاز مع روابط لمستودعات الأكواد والعروض التوضيحية المباشرة. يعكس هذا قدرتي على حل المشكلات المعقدة، والعمل مع تقنيات مختلفة، وإدارة المشاريع بفعالية.",
    "work.title": "أعمالي",
    "work.description": "المشاريع",
    "work.project1Name": "متجر إلكتروني",
    "work.project1Description":
      "منصة تجارة إلكترونية متكاملة تشمل نظام تسجيل المستخدمين، كتالوج المنتجات، سلة التسوق، ونظام دفع آمن مع تكامل قاعدة بيانات MongoDB.",

    "work.project2Name": "متجر بيتزا",
    "work.project2Description":
      "نظام طلب بيتزا عبر الإنترنت مع خيارات قائمة قابلة للتخصيص، تتبع الطلبات في الوقت الفعلي، وتكامل سلس للدفع مبني على قاعدة بيانات PostgreSQL.",

    "work.project3Name": "تطبيق ويكي",
    "work.project3Description":
      "منصة تعاونية لمشاركة المعرفة حيث يمكن للمستخدمين إنشاء مقالات، التعليق على المنشورات، والمساهمة في موسوعة مدفوعة بالمجتمع مع واجهة خلفية PostgreSQL.",

    "work.project4Name": "إدارة المنتجات",
    "work.project4Description":
      "نظام شامل لإدارة المخزون لتتبع المنتجات، إدارة مستويات المخزون، وتنظيم بيانات المنتج مع عمليات CRUD كاملة وتخزين PostgreSQL.",

    "work.project5Name": "قائمة المهام",
    "work.project5Description":
      "تطبيق إدارة المهام الذي يساعد المستخدمين على تنظيم الأنشطة اليومية، تحديد الأولويات، تتبع التقدم، وإدارة المهام بكفاءة مع تخزين محلي دائم.",

    "work.project6Name": "قائمة الأفلام",
    "work.project6Description":
      "تطبيق اكتشاف الأفلام الذي يعرض كتالوجاً للأفلام القابلة للتصفح، معلومات تفصيلية عن الأفلام، التقييمات، ووظيفة البحث مدعومة بواجهة برمجة تطبيقات خارجية.",

    "work.project7Name": "مواقيت الصلاة",
    "work.project7Description":
      "تطبيق مواقيت الصلاة الإسلامي الذي يعرض جداول الصلاة الدقيقة بناءً على الموقع، مع إشعارات وتذكيرات يومية للمسلمين حول العالم.",
    "work.livedemo": "عرض الموقع",
    "work.src": "الكود المصدري",
    "experience.title": "ما قمت به حتى الآن",
    "experience.workExperience": "الخبرة العملية",
    "experience.frontTitle": "مطور واجهات أمامية",
    "experience.frontDate": "مايو 2025",
    "experience.front1":
      "بناء واجهات مستخدم تفاعلية باستخدام React.js و TypeScript",
    "experience.front2": "تصميم المكونات باستخدام Tailwind CSS لتصاميم حديثة",
    "experience.front3": "تنفيذ إدارة الحالة وتكاملات واجهات برمجة التطبيقات",
    "experience.BackTitle": "مطور واجهات خلفية",
    "experience.BackDate": "يناير 2025",
    "experience.back1":
      "بناء واجهات برمجة تطبيقات RESTful باستخدام Node.js و Express.js",
    "experience.back2": "تصميم وتنفيذ مخططات قاعدة بيانات MongoDB",
    "experience.back3": "إنشاء أنظمة المصادقة والتفويض",
    "experience.back4": "تحسين أداء الخادم وأوقات الاستجابة",
    "feedback.notes": "💡 ملاحظة بيانات كاذبة بهدف العرض ",
    "feedback.pepoleSay": "رأي الناس",
    "feedback.peopleSay": "ما يقوله الناس",
    "feedback.testimonials": "التوصيات",
    "feedback.note": "💡 ملاحظة: استخدام بيانات نموذجية لأغراض التوضيح",

    // Testimonial content in Arabic
    "feedback.testimonial1":
      "اعتقدت أنه من المستحيل إنشاء موقع إلكتروني جميل مثل منتجنا، لكن ريك أثبت أنني مخطئ.",
    "feedback.testimonial2":
      "لم أقابل قط مطور ويب يهتم حقًا بنجاح عملائه مثل ريك.",
    "feedback.testimonial3":
      "بعد أن قام ريك بتحسين موقعنا، زادت حركة المرور لدينا بنسبة 50٪. لا يمكننا شكره بما يكفي!",

    "feedback.name1": "سارة لي",
    "feedback.designation1": "المدير المالي",
    "feedback.company1": "شركة أكمي",

    "feedback.name2": "كريس براون",
    "feedback.designation2": "مدير العمليات",
    "feedback.company2": "شركة ديف",

    "feedback.name3": "ليزا وانغ",
    "feedback.designation3": "مدير التقنية",
    "feedback.company3": "مشاريع 456",

    // Stats Arabic translations
    "feedback.projectsCompleted": "المشاريع المكتملة",
    "feedback.happyClients": "عملاء سعداء",
    "feedback.yearsExperience": "سنوات الخبرة",
    "feedback.clientSatisfaction": "رضا العملاء",
    // Contact Arabic translations
    "contact.keepInTouch": "ابق على تواصل",
    "contact.contact": "اتصل بي",
    "contact.opinion":
      "مستعد لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك ونخلق شيئًا مذهلاً معًا.",
    "contact.name": "اسمك",
    "contact.namePlaceholder": "ما هو اسمك؟",
    "contact.yourEmail": "بريدك الإلكتروني",
    "contact.emailPlaceholder": "ما هو بريدك الإلكتروني؟",
    "contact.message": "رسالتك",
    "contact.messagePlaceholder": "أخبرني عن مشروعك...",
    "contact.sendMessage": "أرسل الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.whatsapp": "واتساب",
    "contact.whatsappMessage": "مراسلة مباشرة",
    "contact.whatsappSendMessage": "رسالة",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)[Language]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
