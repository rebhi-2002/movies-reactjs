import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
import classes from "./About.module.css";

import AboutMe from "./AboutMe/AboutMe";
import Counts from "./Counts/Counts";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interests";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Groups from "./Groups/Groups";
import Freelancer from "./Freelancer/Freelancer";

export const servicesData = [
  {
    title: "Full-Stack Web Development & SEO",
    subTitle: "Modern & Efficient",
    description:
      "We provide professional web development with SEO optimization to build responsive and search engine-friendly websites.",
    detailedDescription:
      "Our Full-Stack Web Development & SEO services include end-to-end website solutions from initial design to deployment and SEO optimization. We ensure your website is responsive, fast-loading, and SEO-friendly to attract and retain visitors.",
    icon: "fa fa-code",
    features: ["Responsive Design", "SEO Friendly", "Fast Loading"],
    extraFeatures: ["24/7 Support", "Custom Integrations", "E-commerce Ready"],
    testimonial: "This service helped us achieve remarkable results!",
    clientName: "Web & SEO Client",
    // clientImage: "https://via.placeholder.com/100", // صورة العميل
    clientImage: "https://placehold.co/75x75/000/FFF/png", // صورة العميل
    externalLink: "https://example.com",
    pricing: "$1000 - $5000",
    estimatedCompletionTime: "4 - 8 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500", // رابط الصورة
    faqs: [
      {
        question: "What is included in the web development service?",
        answer: "We provide design, development, and SEO optimization.",
      },
      {
        question: "How long will the project take?",
        answer: "Typically, it takes 4 to 8 weeks depending on complexity.",
      },
    ],
    targetAudience:
      "Small to medium-sized businesses looking for online presence.",
    caseStudies: [
      {
        title: "E-commerce Website",
        description:
          "Developed an e-commerce platform that increased sales by 30%.",
      },
      {
        title: "Portfolio Site",
        description:
          "Created a portfolio site that showcased the client's work effectively.",
      },
    ],
    actionButton: { text: "Get a Quote", link: "https://example.com/contact" }, // زر الإجراء
    rating: 4.8, // تقييم الخدمة
    categories: ["Web Development", "SEO"], // التصنيفات
    updatedDate: "2024-10-01", // تاريخ آخر تحديث
    contactEmail: "info@example.com", // بريد التواصل
    phoneNumber: "+1234567890", // رقم الهاتف
  },
  {
    title: "Digital Marketing & Content Creation",
    subTitle: "Reach & Engage",
    description:
      "Promote your brand with our strategic digital marketing and high-quality content creation services.",
    detailedDescription:
      "Our digital marketing services cover everything from social media campaigns to SEO articles and email marketing. We focus on engagement and reach to bring your brand closer to your audience.",
    icon: "fa fa-bullhorn",
    features: [
      "Social Media Marketing",
      "SEO Articles",
      "Email Campaigns",
      "Pay-Per-Click",
    ],
    extraFeatures: [
      "Monthly Analytics",
      "Campaign Optimization",
      "Dedicated Account Manager",
    ],
    testimonial: "They helped us achieve a fantastic online presence!",
    clientName: "Marketing Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png", // صورة العميل    externalLink: "https://example.com",
    pricing: "$500 - $3000",
    estimatedCompletionTime: "2 - 4 weeks",
    available: false,
    imageUrl: "https://via.placeholder.com/500", // رابط الصورة
    faqs: [
      {
        question: "What platforms do you use for digital marketing?",
        answer:
          "We utilize platforms like Facebook, Instagram, and Google Ads.",
      },
      {
        question: "Can I track the progress of my campaigns?",
        answer: "Yes, we provide monthly analytics reports.",
      },
    ],
    targetAudience:
      "Businesses seeking to enhance their online visibility and engagement.",
    caseStudies: [
      {
        title: "Social Media Campaign",
        description:
          "Executed a campaign that doubled engagement within a month.",
      },
      {
        title: "Content Marketing",
        description: "Developed a content strategy that improved SEO rankings.",
      },
    ],
    actionButton: {
      text: "Start a Campaign",
      link: "https://example.com/campaign",
    },
    rating: 4.5,
    categories: ["Digital Marketing", "Content Creation"],
    updatedDate: "2024-10-01",
    contactEmail: "marketing@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "UI/UX & Graphic Design",
    subTitle: "Creative & User-Focused",
    description:
      "High-quality UI/UX and graphic design services to create visually appealing and user-friendly interfaces.",
    detailedDescription:
      "From wireframing to final designs, we provide custom UI/UX solutions that are visually appealing and focused on user experience. Our designs are crafted to align with your brand and engage users effectively.",
    icon: "fa fa-paint-brush",
    features: [
      "Custom Illustrations",
      "User Research",
      "Wireframing & Prototyping",
    ],
    extraFeatures: [
      "High-Resolution Graphics",
      "User Testing",
      "Multiple Revisions",
    ],
    testimonial:
      "Their designs improved our brand visibility and user satisfaction!",
    clientName: "Design Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png", // صورة العميل    externalLink: "https://example.com/design",
    pricing: "$800 - $2500",
    estimatedCompletionTime: "3 - 6 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500", // رابط الصورة
    faqs: [
      {
        question: "What design tools do you use?",
        answer: "We use tools like Figma, Adobe XD, and Sketch.",
      },
      {
        question: "Can you create brand guidelines?",
        answer: "Yes, we can develop comprehensive brand guidelines.",
      },
    ],
    targetAudience: "Businesses and startups needing user-centric design.",
    caseStudies: [
      {
        title: "Mobile App Design",
        description:
          "Designed a mobile app that increased user retention by 25%.",
      },
      {
        title: "Website Redesign",
        description:
          "Redesigned a website that improved usability and engagement.",
      },
    ],
    actionButton: {
      text: "View Portfolio",
      link: "https://example.com/portfolio",
    },
    rating: 4.7,
    categories: ["UI/UX Design", "Graphic Design"],
    updatedDate: "2024-10-01",
    contactEmail: "design@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "Consultation Services",
    subTitle: "Expert Advice",
    description:
      "Get guidance from experienced professionals to help grow your business.",
    detailedDescription:
      "Our consultation services provide expert advice in areas like market analysis, business growth strategies, and opportunity assessment. We work closely with you to identify areas for improvement and potential growth opportunities.",
    icon: "fa fa-comments",
    features: ["Business Strategy", "Market Analysis", "Growth Opportunities"],
    extraFeatures: [
      "One-on-One Consultations",
      "Detailed Reports",
      "Long-Term Planning",
    ],
    testimonial:
      "Their insights were instrumental to our business development!",
    clientName: "Consulting Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png", // صورة العميل    externalLink: "https://example.com/consultation",
    pricing: "$300 per hour",
    estimatedCompletionTime: "1 - 3 months",
    available: true,
    imageUrl: "https://via.placeholder.com/500", // رابط الصورة
    faqs: [
      {
        question: "What topics can be covered during a consultation?",
        answer: "We can cover business strategy, marketing, and growth.",
      },
      {
        question: "Do you provide written reports?",
        answer: "Yes, detailed reports are included in our services.",
      },
    ],
    targetAudience:
      "Entrepreneurs and businesses looking for growth strategies.",
    caseStudies: [
      {
        title: "Market Analysis",
        description:
          "Conducted analysis that revealed new market opportunities.",
      },
      {
        title: "Growth Strategy",
        description:
          "Developed a strategy that resulted in a 40% increase in revenue.",
      },
    ],
    actionButton: {
      text: "Book a Consultation",
      link: "https://example.com/book",
    },
    rating: 4.9,
    categories: ["Consultation", "Business Strategy"],
    updatedDate: "2024-10-01",
    contactEmail: "consulting@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "Cloud Solutions & IT Infrastructure",
    subTitle: "Scalable & Secure",
    description:
      "Comprehensive cloud solutions and IT infrastructure services to enhance your business's efficiency and security.",
    detailedDescription:
      "We offer a full range of cloud computing services, including setup, migration, and maintenance of cloud infrastructure. Our focus is on providing secure, scalable, and efficient IT solutions that meet your business needs.",
    icon: "fa fa-cloud",
    features: ["Cloud Setup", "Data Migration", "Maintenance & Support"],
    extraFeatures: [
      "Disaster Recovery",
      "24/7 Monitoring",
      "Cost Optimization",
    ],
    testimonial: "Their cloud services transformed our business operations!",
    clientName: "IT & Cloud Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png", // صورة العميل
    externalLink: "https://example.com/cloud",
    pricing: "$2000 - $10000",
    estimatedCompletionTime: "4 - 12 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500", // رابط الصورة
    faqs: [
      {
        question: "What cloud platforms do you support?",
        answer: "We support AWS, Google Cloud, and Microsoft Azure.",
      },
      {
        question: "Can you help with data migration?",
        answer: "Yes, we offer comprehensive data migration services.",
      },
    ],
    targetAudience:
      "Businesses seeking reliable cloud infrastructure and IT support.",
    caseStudies: [
      {
        title: "Cloud Migration",
        description:
          "Migrated client's data and applications to the cloud, reducing operational costs by 25%.",
      },
      {
        title: "Disaster Recovery Implementation",
        description:
          "Implemented a disaster recovery plan that ensured business continuity during outages.",
      },
    ],
    actionButton: {
      text: "Learn More",
      link: "https://example.com/cloud-solutions",
    },
    rating: 4.6,
    categories: ["Cloud Solutions", "IT Infrastructure"],
    updatedDate: "2024-10-01",
    contactEmail: "cloud@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "Cybersecurity & Compliance Services",
    subTitle: "Protect & Comply",
    description:
      "Advanced cybersecurity solutions to protect your digital assets and ensure regulatory compliance.",
    detailedDescription:
      "Our cybersecurity services include risk assessment, penetration testing, and compliance support for regulations such as GDPR and HIPAA. We focus on protecting your data and systems from unauthorized access, cyber threats, and regulatory penalties.",
    icon: "fa fa-shield-alt",
    features: ["Risk Assessment", "Penetration Testing", "Compliance Support"],
    extraFeatures: [
      "24/7 Threat Monitoring",
      "Incident Response",
      "Employee Training",
    ],
    testimonial:
      "Their security measures gave us peace of mind and compliance.",
    clientName: "Security Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png",
    externalLink: "https://example.com/security",
    pricing: "$1500 - $7500",
    estimatedCompletionTime: "6 - 12 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500",
    faqs: [
      {
        question: "What compliance standards do you support?",
        answer: "We support GDPR, HIPAA, and other major security standards.",
      },
      {
        question: "Do you offer employee training?",
        answer: "Yes, we provide comprehensive cybersecurity training.",
      },
    ],
    targetAudience:
      "Businesses aiming for strong security measures and regulatory compliance.",
    caseStudies: [
      {
        title: "GDPR Compliance Implementation",
        description:
          "Assisted client in achieving GDPR compliance, avoiding potential fines.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Conducted risk assessment that reduced data breach incidents by 40%.",
      },
    ],
    actionButton: {
      text: "Secure Your Business",
      link: "https://example.com/security",
    },
    rating: 4.9,
    categories: ["Cybersecurity", "Compliance"],
    updatedDate: "2024-10-01",
    contactEmail: "security@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "AI & Machine Learning Solutions",
    subTitle: "Innovate with AI",
    description:
      "Leverage artificial intelligence and machine learning to drive data-driven decision making and automation.",
    detailedDescription:
      "Our AI and ML services include custom model development, data analytics, and automation solutions tailored to your business needs. We focus on building intelligent systems that increase efficiency, improve insights, and reduce operational costs.",
    icon: "fa fa-robot",
    features: [
      "Custom AI Models",
      "Predictive Analytics",
      "Process Automation",
    ],
    extraFeatures: [
      "Data Integration",
      "Real-Time Analytics",
      "Cross-Platform Deployment",
    ],
    testimonial:
      "Their AI solutions transformed our data handling and decision-making processes!",
    clientName: "AI Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png",
    externalLink: "https://example.com/ai",
    pricing: "$5000 - $20000",
    estimatedCompletionTime: "8 - 20 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500",
    faqs: [
      {
        question: "What industries can benefit from AI solutions?",
        answer:
          "We work across industries including healthcare, finance, and retail.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer support and maintenance for all AI solutions.",
      },
    ],
    targetAudience:
      "Businesses looking to integrate data-driven AI solutions for innovation and efficiency.",
    caseStudies: [
      {
        title: "Predictive Maintenance",
        description:
          "Developed an AI model that predicts equipment failures, reducing downtime by 30%.",
      },
      {
        title: "Customer Insights",
        description:
          "Created a machine learning model that improved customer targeting and sales conversion.",
      },
    ],
    actionButton: {
      text: "Start Your AI Journey",
      link: "https://example.com/ai",
    },
    rating: 4.8,
    categories: ["Artificial Intelligence", "Machine Learning"],
    updatedDate: "2024-10-01",
    contactEmail: "ai@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "Virtual & Augmented Reality (VR/AR) for Training and Marketing",
    subTitle: "Immersive Experiences for Training & Marketing",
    description:
      "Utilize VR/AR to create captivating training and marketing experiences, boosting engagement and skill acquisition.",
    detailedDescription:
      "Our VR/AR services deliver custom solutions for training environments and interactive marketing campaigns. These simulations provide users with realistic, immersive interactions, ideal for skill-building or captivating customer engagement.",
    icon: "fa fa-vr-cardboard",
    features: [
      "Virtual Training Simulations",
      "Interactive Marketing Campaigns",
      "Customizable Environments",
    ],
    extraFeatures: [
      "In-depth Interaction Analytics",
      "Full Experience Customization",
      "Cross-Platform Support",
    ],
    testimonial:
      "The VR training helped our team improve skills quickly and safely, cutting costs by 40%.",
    clientName: "VR Training Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png",
    externalLink: "https://example.com/vr-ar",
    pricing: "$3000 - $15000",
    estimatedCompletionTime: "6 - 12 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500",
    faqs: [
      {
        question: "Which industries benefit most from VR/AR?",
        answer:
          "Industries like education, healthcare, retail, and industrial training find significant value in VR/AR solutions.",
      },
      {
        question: "Can we customize the VR/AR experience?",
        answer:
          "Yes, our VR/AR solutions are fully customizable to fit your specific needs.",
      },
    ],
    targetAudience:
      "Training companies, major brands, and sectors requiring safe, immersive training solutions.",
    caseStudies: [
      {
        title: "Enhanced Training Environment",
        description:
          "Implemented a VR training program that improved skill acquisition by 30% and reduced training time.",
      },
      {
        title: "Interactive Product Demos",
        description:
          "Created an AR marketing campaign that increased customer engagement by 50%.",
      },
    ],
    actionButton: {
      text: "Explore VR/AR Solutions",
      link: "https://example.com/vr-ar",
    },
    rating: 4.7,
    categories: ["Virtual Reality", "Augmented Reality", "Marketing"],
    updatedDate: "2024-10-26",
    contactEmail: "vr@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "Advanced Data Analytics and Big Data",
    subTitle: "Gain Insights & Drive Decisions",
    description:
      "Harness the power of data analytics and big data to gain actionable insights, optimize operations, and make informed decisions.",
    detailedDescription:
      "Our data analytics services cover custom data mining, predictive analytics, and business intelligence solutions. We help companies make data-driven decisions and discover insights to enhance strategies and operations.",
    icon: "fa fa-chart-line",
    features: ["Data Mining", "Predictive Analytics", "Business Intelligence"],
    extraFeatures: [
      "Interactive Dashboards",
      "In-depth Reports",
      "Real-Time Analytics",
    ],
    testimonial:
      "Their predictive analytics helped us improve our sales by 25%, providing reliable, actionable insights.",
    clientName: "Analytics Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png",
    externalLink: "https://example.com/data-analytics",
    pricing: "$5000 - $20000",
    estimatedCompletionTime: "8 - 16 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500",
    faqs: [
      {
        question: "Which sectors benefit from data analytics?",
        answer:
          "Sectors such as finance, retail, healthcare, and education can greatly benefit from data-driven insights.",
      },
      {
        question: "Do you provide ongoing analytics support?",
        answer:
          "Yes, we offer support and updates for our analytics solutions.",
      },
    ],
    targetAudience:
      "Enterprises in need of data-driven insights to optimize strategies and improve efficiency.",
    caseStudies: [
      {
        title: "Customer Segmentation",
        description:
          "Developed data models that enhanced customer targeting, increasing conversion by 30%.",
      },
      {
        title: "Sales Forecasting",
        description:
          "Created predictive models for accurate sales forecasting, improving budgeting accuracy.",
      },
    ],
    actionButton: {
      text: "Leverage Data Analytics",
      link: "https://example.com/data-analytics",
    },
    rating: 4.9,
    categories: ["Data Analytics", "Big Data", "Business Intelligence"],
    updatedDate: "2024-10-26",
    contactEmail: "data@example.com",
    phoneNumber: "+1234567890",
  },
  {
    title: "E-learning & Digital Content Development",
    subTitle: "Innovative E-learning Experiences",
    description:
      "Develop immersive e-learning content and platforms for efficient and engaging knowledge transfer.",
    detailedDescription:
      "Our e-learning services cover content development, online course creation, and platform setup, providing engaging digital learning experiences that promote knowledge retention and skill development.",
    icon: "fa fa-chalkboard-teacher",
    features: [
      "Interactive E-learning Courses",
      "Collaborative Learning Platforms",
      "Custom Content Development",
    ],
    extraFeatures: [
      "Progress Tracking Analytics",
      "Cross-Device Compatibility",
      "Responsive Design",
    ],
    testimonial:
      "Our employee training improved significantly with their custom e-learning solutions.",
    clientName: "E-learning Client",
    clientImage: "https://placehold.co/75x75/000/FFF/png",
    externalLink: "https://example.com/e-learning",
    pricing: "$2000 - $10000",
    estimatedCompletionTime: "6 - 10 weeks",
    available: true,
    imageUrl: "https://via.placeholder.com/500",
    faqs: [
      {
        question: "Who benefits from e-learning solutions?",
        answer:
          "Educational institutions and companies in need of training solutions benefit greatly from e-learning platforms.",
      },
      {
        question: "Can we track learners’ progress?",
        answer:
          "Yes, we provide detailed analytics to monitor learner progress and engagement.",
      },
    ],
    targetAudience:
      "Educational institutions and businesses needing effective training solutions.",
    caseStudies: [
      {
        title: "Employee Training Program",
        description:
          "Built a platform that improved training efficiency by 40% and completion rates by 25%.",
      },
      {
        title: "Interactive Courses for Schools",
        description:
          "Developed courses that increased student engagement and retention rates.",
      },
    ],
    actionButton: {
      text: "Start E-learning",
      link: "https://example.com/e-learning",
    },
    rating: 4.6,
    categories: ["E-learning", "Digital Content", "Training"],
    updatedDate: "2024-10-26",
    contactEmail: "elearning@example.com",
    phoneNumber: "+1234567890",
  },
];

const AboutComponent = () => {
  //* [Start Bubbles]:
  const numberOfBubbles = 20; // عدد الفقاعات
  const bubblesArray = Array.from({ length: numberOfBubbles });

  //** ScrollToTopButton
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // const { ref, inView } = useInView({
  //   triggerOnce: true, // التفعيل مرة واحدة فقط عندما يظهر العنصر
  //   threshold: 0.1, // النسبة المئوية لظهور العنصر قبل التفعيل (10%)
  // });
  // console.log("Is inView:", inView); // عرض الحالة في console للتحقق

  return (
    <section id="about" className="about">
      <AboutMe />
      <Counts />
      <Skills />
      <Interests />
      <Services />
      <Testimonials />
      {/* <Portfolio /> */}
      <Resume />
      <Freelancer />
      <Contact />
      <Groups />
      {/* ScrollToTopButton */}
      <Link
        to="#"
        className={`${
          classes["back-to-top"]
        } d-flex align-items-center justify-content-center ${
          isVisible ? classes.active : ""
        }`}
        onClick={() => {
          window.scrollTo({ left: 0, top: 130, behavior: "smooth" });
        }}
      >
        <i className={`bi bi-arrow-up-short ${classes["arrow-up"]}`} />
      </Link>
      {/* BubblesAnimations */}
      {/*
        <div className={classes["bubbles-container"]}>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        <div className={classes.bubble}></div>
        </div>
      */}
      {/*
        <div className={classes["bubbles-container"]}>{bubblesArray.map((_,index) => (
          <div key={index} className={classes.bubble}></div>
          ))}
        </div>
      */}
      <div className={classes["bubbles-container"]}>
        {bubblesArray.map((_, index) => (
          <div
            key={index}
            className={classes.bubble}
            style={{
              animationDuration: `${10 + index * 2}s`,
              // مدة الحركة تختلف لكل فقاعة
              left: `${index * 10}%`,
              // المواقع تختلف لكل فقاعة
            }}
          />
        ))}
      </div>
      {/* BubblesAnimations */}
    </section>
  );
};
export default AboutComponent;
