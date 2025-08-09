import LegalLayout from "../../../components/04-templates/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout currentPage="terms-of-service">
      <h1 className="text-4xl font-semibold mb-6 text-black dark:text-white">
        Terms of Service
      </h1>
      <div className="prose prose-blue max-w-none dark:prose-invert text-xs md:text-md lg:text-lg text-gray-700 dark:text-gray-300">
        <p>Welcome to TRCK Entertainment & Technology Ltd.</p>

        <p>
          These Terms of Service govern your use of our platform, which includes
          the TRCK website, mobile application, and services.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          1. Acceptance of Terms
        </h3>
        <p>
          By accessing or using our Services, you agree to be bound by these
          Terms and our Privacy Policy. If you do not agree to these Terms, you
          may not use our Services.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          2. Description of Service
        </h3>
        <p>
          TRCK is a leisure technology platform that connects users with local
          experiences and events. We provide a marketplace where users can
          discover, book, and attend various activities.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          3. User Accounts
        </h3>
        <ul className="space-y-2">
          <li>You must be at least 18 years old to create an account</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account
          </li>
          <li>You agree to provide accurate and complete information</li>
          <li>You are responsible for all activities under your account</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          4. Prohibited Uses
        </h3>
        <p>You may not use our Services to:</p>
        <ul className="space-y-2">
          <li>Violate any applicable laws or regulations</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Post false, misleading, or inappropriate content</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of our Services</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          5. Payment Terms
        </h3>
        <ul className="space-y-2">
          <li>
            All payments are processed through secure third-party providers
          </li>
          <li>Prices are subject to change without notice</li>
          <li>Refunds are subject to our Refund Policy</li>
          <li>You are responsible for any applicable taxes</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          6. Intellectual Property
        </h3>
        <p>
          All content on our platform, including text, graphics, logos, and
          software, is the property of TRCK Entertainment & Technology Ltd and
          is protected by copyright and other intellectual property laws.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          7. Limitation of Liability
        </h3>
        <p>
          To the maximum extent permitted by law, TRCK shall not be liable for
          any indirect, incidental, special, or consequential damages arising
          from your use of our Services.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          8. Termination
        </h3>
        <p>
          We reserve the right to terminate or suspend your account at any time,
          with or without notice, for any reason including violation of these
          Terms.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          9. Changes to Terms
        </h3>
        <p>
          We may update these Terms from time to time. We will notify you of any
          material changes by posting the updated Terms on our website.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          10. Contact Us
        </h3>
        <p>
          If you have questions about these Terms, contact us at:{" "}
          <strong className="text-[#ed5a2e]">legal@getontrck.com</strong>
        </p>
      </div>
    </LegalLayout>
  );
}
