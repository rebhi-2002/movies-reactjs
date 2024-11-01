import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../About";
import classes from "../About.module.css";

const Services = () => {
  // const servicesData = [
  //   {
  //     icon: "bx bxl-dribbble",
  //     title: "Lorem Ipsum",
  //     description:
  //       "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  //   },
  //   {
  //     icon: "bx bx-file",
  //     title: "Sed ut perspiciatis",
  //     description:
  //       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  //   },
  //   {
  //     icon: "bx bx-tachometer",
  //     title: "Magni Dolores",
  //     description:
  //       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  //   },
  //   {
  //     icon: "bx bx-world",
  //     title: "Nemo Enim",
  //     description:
  //       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
  //   },
  //   {
  //     icon: "bx bx-slideshow",
  //     title: "Dele cardo",
  //     description:
  //       "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur.",
  //   },
  //   {
  //     icon: "bx bx-arch",
  //     title: "Divera don",
  //     description:
  //       "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur.",
  //   },
  // ];

  // const servicesData = [
  //   {
  //     title: "UI/UX Design",
  //     subTitle: "User-Centric & Intuitive",
  //     description:
  //       "Crafting beautiful and intuitive interfaces that provide an engaging user experience.",
  //     icon: "bx bxl-dribbble",
  //     features: ["User Research", "Wireframing", "Prototyping"],
  //     testimonial:
  //       "Their designs have significantly improved our user retention!",
  //     clientName: "UI/UX Client",
  //     externalLink: "https://example.com/uiux",
  //     available: true,
  //   },
  //   {
  //     title: "Document Management",
  //     subTitle: "Secure & Efficient",
  //     description:
  //       "Streamline your document management with our secure and easy-to-use system.",
  //     icon: "bx bx-file",
  //     features: ["Secure Storage", "Easy Sharing", "Advanced Search"],
  //     testimonial: "A complete game changer for our document organization.",
  //     clientName: "DocClient",
  //     externalLink: "https://example.com/docmanagement",
  //     available: true,
  //   },
  //   {
  //     title: "Performance Optimization",
  //     subTitle: "Fast & Reliable",
  //     description:
  //       "Enhance the speed and performance of your website for a smoother user experience.",
  //     icon: "bx bx-tachometer",
  //     features: ["Load Time Optimization", "Caching", "Code Minification"],
  //     testimonial:
  //       "Our site speed improved by 40%, leading to better conversions!",
  //     clientName: "OptimizationClient",
  //     externalLink: "https://example.com/optimization",
  //     available: true,
  //   },
  //   {
  //     title: "Global Outreach Strategy",
  //     subTitle: "Expand Your Reach",
  //     description:
  //       "Developing strategies to increase your brand's visibility in international markets.",
  //     icon: "bx bx-world",
  //     features: ["Market Research", "Localization", "Targeted Campaigns"],
  //     testimonial: "Helped us gain traction in new markets across the globe.",
  //     clientName: "Global Client",
  //     externalLink: "https://example.com/globalstrategy",
  //     available: false,
  //   },
  //   {
  //     title: "Presentation Design",
  //     subTitle: "Engaging & Informative",
  //     description:
  //       "Creating impactful presentations that captivate and convey your message effectively.",
  //     icon: "bx bx-slideshow",
  //     features: ["Custom Slides", "Animations", "Data Visualization"],
  //     testimonial: "Their presentation design made our pitch stand out!",
  //     clientName: "PresentationClient",
  //     externalLink: "https://example.com/presentationdesign",
  //     available: true,
  //   },
  //   {
  //     title: "Architectural Planning",
  //     subTitle: "Detailed & Creative",
  //     description:
  //       "Offering top-notch architectural planning services for both commercial and residential projects.",
  //     icon: "bx bx-arch",
  //     features: ["Site Analysis", "Concept Development", "3D Modeling"],
  //     testimonial: "The attention to detail and creativity is unmatched!",
  //     clientName: "ArchitectureClient",
  //     externalLink: "https://example.com/architecture",
  //     available: true,
  //   },
  //   {
  //     title: "Web Development",
  //     subTitle: "Modern & Efficient",
  //     description:
  //       "We provide professional web development services using the latest technologies to build responsive and user-friendly websites.",
  //     icon: "fa fa-code",
  //     features: ["Responsive Design", "SEO Friendly", "Fast Loading"],
  //     testimonial: "This service helped us achieve remarkable results!",
  //     clientName: "Client Name",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  //   {
  //     title: "Graphic Design",
  //     subTitle: "Creative & Unique",
  //     description:
  //       "High-quality graphic design services to create compelling and visually appealing designs.",
  //     icon: "fa fa-paint-brush",
  //     features: [
  //       "Custom Illustrations",
  //       "Brand Identity",
  //       "Marketing Materials",
  //     ],
  //     testimonial: "Outstanding work that matched our brand perfectly!",
  //     clientName: "Another Client",
  //     externalLink: "https://example.com",
  //     available: false,
  //   },
  //   {
  //     title: "Content Creation",
  //     subTitle: "Engaging & Informative",
  //     description:
  //       "Professional content creation services to help convey your brand's story effectively.",
  //     icon: "fa fa-pen",
  //     features: ["Blogs", "Social Media Content", "SEO Articles"],
  //     testimonial:
  //       "The content created has been a great asset to our marketing!",
  //     clientName: "Content Client",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  //   {
  //     title: "SEO Optimization",
  //     subTitle: "Boost Visibility",
  //     description:
  //       "Increase your website's ranking and visibility with our specialized SEO services.",
  //     icon: "fa fa-search",
  //     features: ["Keyword Research", "On-Page SEO", "Backlink Building"],
  //     testimonial:
  //       "Our traffic increased significantly thanks to their SEO expertise!",
  //     clientName: "SEO Client",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  //   {
  //     title: "Digital Marketing",
  //     subTitle: "Reach a Wider Audience",
  //     description:
  //       "Comprehensive digital marketing strategies to promote your business effectively.",
  //     icon: "fa fa-bullhorn",
  //     features: ["Social Media Marketing", "Email Campaigns", "Pay-Per-Click"],
  //     testimonial: "They helped us achieve a fantastic online presence!",
  //     clientName: "Marketing Client",
  //     externalLink: "https://example.com",
  //     available: false,
  //   },
  //   {
  //     title: "Consultation Services",
  //     subTitle: "Expert Advice",
  //     description:
  //       "Get guidance from experienced professionals to help grow your business.",
  //     icon: "fa fa-comments",
  //     features: [
  //       "Business Strategy",
  //       "Market Analysis",
  //       "Growth Opportunities",
  //     ],
  //     testimonial:
  //       "Their insights were instrumental to our business development!",
  //     clientName: "Consulting Client",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  // ];

  //* [Start Counts]:
  // استخدام useInView لاكتشاف متى يدخل العنصر إلى الشاشة

  // const servicesData = [
  //   {
  //     title: "Full-Stack Web Development & SEO",
  //     subTitle: "Modern & Efficient",
  //     description:
  //       "We provide professional web development with SEO optimization to build responsive and search engine-friendly websites.",
  //     icon: "fa fa-code",
  //     features: ["Responsive Design", "SEO Friendly", "Fast Loading"],
  //     testimonial: "This service helped us achieve remarkable results!",
  //     clientName: "Web & SEO Client",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  //   {
  //     title: "Digital Marketing & Content Creation",
  //     subTitle: "Reach & Engage",
  //     description:
  //       "Promote your brand with our strategic digital marketing and high-quality content creation services.",
  //     icon: "fa fa-bullhorn",
  //     features: [
  //       "Social Media Marketing",
  //       "SEO Articles",
  //       "Email Campaigns",
  //       "Pay-Per-Click",
  //     ],
  //     testimonial: "They helped us achieve a fantastic online presence!",
  //     clientName: "Marketing Client",
  //     externalLink: "https://example.com",
  //     available: false,
  //   },
  //   {
  //     title: "UI/UX & Graphic Design",
  //     subTitle: "Creative & User-Focused",
  //     description:
  //       "High-quality UI/UX and graphic design services to create visually appealing and user-friendly interfaces.",
  //     icon: "fa fa-paint-brush",
  //     features: [
  //       "Custom Illustrations",
  //       "User Research",
  //       "Wireframing & Prototyping",
  //     ],
  //     testimonial:
  //       "Their designs improved our brand visibility and user satisfaction!",
  //     clientName: "Design Client",
  //     externalLink: "https://example.com/design",
  //     available: true,
  //   },
  //   {
  //     title: "Consultation Services",
  //     subTitle: "Expert Advice",
  //     description:
  //       "Get guidance from experienced professionals to help grow your business.",
  //     icon: "fa fa-comments",
  //     features: [
  //       "Business Strategy",
  //       "Market Analysis",
  //       "Growth Opportunities",
  //     ],
  //     testimonial:
  //       "Their insights were instrumental to our business development!",
  //     clientName: "Consulting Client",
  //     externalLink: "https://example.com",
  //     available: true,
  //   },
  // ];

  return (
    <section id="services" className={classes.services}>
      {/* Services Section */}
      <div className="container">
        <div
          className={`${classes.sectionTitle} ${classes["section-title"]} text-center`}
        >
          <h2>Professional Services</h2>
          <p>
            I offer a range of professional services including web development,
            software engineering, and mobile app development. My expertise
            ensures high-quality solutions tailored to your business needs.
          </p>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4"
            >
              <div className={`${classes.serviceBox}`}>
                <div className={classes.icon}>
                  <i className={service.icon} />
                </div>
                {/* Title and Subtitle */}
                <h4>
                  <Link to="">{service.title}</Link>
                </h4>
                <h5 className={classes.subTitle}>{service.subTitle}</h5>
                <p>{service.description}</p>
                {/* Features List */}
                <ul className={classes.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {/* Read More Button */}
                <Link
                  to="/service-details"
                  className={`${classes.readMoreBtn}`}
                >
                  Read More
                </Link>
                {/* Testimonial */}
                <blockquote className={classes.testimonialServices}>
                  <p>"{service.testimonial}"</p>
                  <footer>- {service.clientName}</footer>
                </blockquote>
                {/* External Link for more information */}
                <div className={classes.externalLinks}>
                  <Link
                    to={`/services/${encodeURIComponent(service.title)}`}
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <i className="fas fa-external-link-alt ms-1"></i>
                  </Link>
                </div>
                {/* Service Availability Status */}
                <span
                  className={`${classes.status} ${
                    service.available ? classes.available : classes.unavailable
                  }`}
                >
                  {service.available ? "Available" : "On Demand"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Services Section */}
    </section>
  );
};
export default Services;
