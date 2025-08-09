import LegalLayout from "../../../components/04-templates/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout currentPage="privacy-policy">
      <h1 className="text-4xl font-semibold mb-6 text-black dark:text-white">
        Privacy Policy
      </h1>
      <div className="prose prose-blue max-w-none dark:prose-invert text-xs md:text-md lg:text-lg text-gray-700 dark:text-gray-300">
        <p>Your privacy is critically important to us.</p>

        <p>
          This Privacy Policy describes how TRCK Entertainment & Technology Ltd
          collects, uses, and discloses your information when you use our
          platform, which includes the TRCK website, mobile application, and
          services.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          1. Information We Collect
        </h3>
        <ul className="space-y-2">
          <li>
            <strong>Personal Information:</strong> When you register or use our
            Services, we collect personal data such as your name, email address,
            phone number, age, gender, and location.
          </li>
          <li>
            <strong>Payment Information:</strong> If you make purchases, we may
            collect your billing address and limited payment card information
            (processed securely via third-party providers).
          </li>
          <li>
            <strong>Usage Data:</strong> This includes device type, operating
            system, IP address, browser type, referral URLs, access times, and
            pages viewed.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            and similar technologies to analyze usage and personalize your
            experience.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          2. How We Use Your Information
        </h3>
        <ul className="space-y-2">
          <li>To provide, maintain, and improve our Services</li>
          <li>
            To communicate with you (e.g., updates, marketing, and support)
          </li>
          <li>To personalize user experience and recommend relevant events</li>
          <li>For fraud prevention and legal compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          3. Sharing Your Information
        </h3>
        <p>We may share your information:</p>
        <ul className="space-y-2">
          <li>With event hosts and partners when you book or attend events</li>
          <li>
            With service providers (e.g., hosting, analytics, and payment
            processors)
          </li>
          <li>In compliance with legal obligations</li>
          <li>In connection with business transfers or mergers</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          4. Your Choices
        </h3>
        <ul className="space-y-2">
          <li>You may update your account information at any time.</li>
          <li>You may opt out of marketing communications.</li>
          <li>You may disable cookies in your browser settings.</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          5. Data Security
        </h3>
        <p>
          We implement appropriate technical and organizational security
          measures to protect your data.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          6. Children&apos;s Privacy
        </h3>
        <p>
          Our Services are not intended for children under 13 (or under the age
          of majority in your country).
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          7. International Data Transfers
        </h3>
        <p>
          Your data may be transferred and stored outside of your country of
          residence. We ensure safeguards are in place.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          8. Changes to This Policy
        </h3>
        <p>
          We may update this Privacy Policy. If changes are material, we&apos;ll
          notify you.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          9. Contact Us
        </h3>
        <p>
          If you have questions or concerns, contact us at:{" "}
          <strong className="text-[#ed5a2e]">privacy@getontrck.com</strong>
        </p>
      </div>
    </LegalLayout>
  );
}
