import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
      </div>
      <div className="privacy-content">
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Living Doll PH values your privacy. This Privacy Policy outlines how we collect, use,
            and protect your personal information when you interact with our website or services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email address, phone number,
            shipping address, and any other information you provide when making inquiries,
            purchasing, or signing up for updates.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            Your information is used to fulfill orders, respond to inquiries, improve customer
            service, and keep you updated about Living Doll PH’s offerings and promotions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share information with trusted partners and
            service providers who assist us in operating our business — always under strict privacy
            obligations.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We take reasonable security measures to protect your personal information. However, no
            method of online transmission or storage is 100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You may also
            opt out of receiving marketing emails at any time by clicking the unsubscribe link or
            contacting us directly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience. You can disable cookies
            through your browser settings, though this may affect site functionality.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to review this
            page periodically for any changes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Contact Us</h2>
          <p>
            Questions about our Privacy Policy? Contact us at{' '}
            <a href="mailto:hello@livingdollph.com">hello@livingdollph.com</a> — we’re happy to
            help!
          </p>
        </section>
      </div>
    </div>
  );
}
