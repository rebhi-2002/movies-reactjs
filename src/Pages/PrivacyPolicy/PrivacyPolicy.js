import React from "react";
import styles from "./PrivacyPolicy.module.css"; // استخدم ملف CSS مشترك

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.privacyContainer} w-75`}>
        <h2 className={styles.heading}>Privacy Policy</h2>
        <p className={styles.content}>
          Effective Date: Thu, October 10 (Rabi al-Thani 7), 2024
        </p>
        <p className={styles.content}>
          At <strong>MoviesApp</strong> (referred to as "we", "us", or "our"),
          we value your privacy. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard your information when you visit our
          website{" "}
          <a
            href="https://www.moviesapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.moviesapp.com
          </a>{" "}
          (referred to as the "Site"). By using our Site, you agree to comply
          with and be bound by these Terms of Service. If you do not agree with
          these terms, please do not use our Site.
        </p>

        <h3 className={styles.subheading}>1. Information We Collect</h3>
        <p className={styles.content}>
          We may collect personal information from you, such as: Name, Email
          address, Phone number, Other relevant details.
        </p>

        <h3 className={styles.subheading}>2. How We Use Your Information</h3>
        <p className={styles.content}>
          We may use the information we collect from you for: Improving the user
          experience, Personalizing content and recommendations, Responding to
          inquiries, Sending you newsletters or updates.
        </p>

        <h3 className={styles.subheading}>3. Use of the Site</h3>
        <p className={styles.content}>
          You may use the Site for lawful purposes only. You agree not to use
          the Site:
        </p>
        <ul className={styles.content}>
          <li>
            In any way that violates any applicable federal, state, local, or
            international law or regulation.
          </li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material.
          </li>
        </ul>

        <h3 className={styles.subheading}>4. Intellectual Property Rights</h3>
        <p className={styles.content}>
          The content on the Site, including but not limited to text, graphics,
          logos, and software, is the property of <strong>MoviesApp</strong> and
          is protected by copyright, trademark, and other intellectual property
          laws.
        </p>

        <h3 className={styles.subheading}>5. User Content</h3>
        <p className={styles.content}>
          You are responsible for any content you submit to the Site. By
          submitting content, you grant us a worldwide, non-exclusive,
          royalty-free license to use, reproduce, modify, and publish that
          content.
        </p>

        <h3 className={styles.subheading}>6. Cookies</h3>
        <p className={styles.content}>
          We may use cookies and similar tracking technologies to track website
          traffic and performance, remember your preferences, and enhance user
          experience.
        </p>

        <h3 className={styles.subheading}>7. Sharing Your Information</h3>
        <p className={styles.content}>
          We do not sell or rent your personal information to third parties.
        </p>

        <h3 className={styles.subheading}>8. Data Security</h3>
        <p className={styles.content}>
          We employ industry-standard security measures to protect your
          information.
        </p>

        <h3 className={styles.subheading}>9. Third-Party Links</h3>
        <p className={styles.content}>
          Our Site may contain links to third-party websites. We do not control
          and are not responsible for the content of those sites. We encourage
          you to review the terms and conditions and privacy policies of any
          third-party websites you visit.
        </p>

        <h3 className={styles.subheading}>10. Children's Privacy</h3>
        <p className={styles.content}>
          Our Site is not intended for use by children under the age of 13.
        </p>

        <h3 className={styles.subheading}>
          11. Changes to This Privacy Policy
        </h3>
        <p className={styles.content}>
          We may update these Terms of Service from time to time. We will notify
          you of any changes by posting the new Terms on this page.
        </p>

        <h3 className={styles.subheading}>12. Disclaimers</h3>
        <p className={styles.content}>
          The information provided on our Site is for general informational
          purposes only. We make no representations or warranties of any kind
          regarding the completeness, accuracy, reliability, or availability of
          the Site or any information on it.
        </p>

        <h3 className={styles.subheading}>13. Limitation of Liability</h3>
        <p className={styles.content}>
          To the fullest extent permitted by applicable law, we shall not be
          liable for any direct, indirect, incidental, special, consequential,
          or punitive damages arising out of or in connection with your use of
          the Site.
        </p>

        <h3 className={styles.subheading}>14. Contact Us</h3>
        <p className={styles.content}>
          If you have any questions or concerns about this Privacy Policy,
          please visit our{" "}
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
