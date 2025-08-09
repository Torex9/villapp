import LegalLayout from "../../../components/04-templates/LegalLayout";

export default function AcceptableUsePolicy() {
  return (
    <LegalLayout currentPage="acceptable-use-policy">
      <h1 className="text-4xl font-semibold mb-6 text-black dark:text-white">
        Acceptable Use Policy
      </h1>
      <div className="prose prose-blue max-w-none dark:prose-invert text-xs md:text-md lg:text-lg text-gray-700 dark:text-gray-300">
        <p>
          This Acceptable Use Policy governs your use of TRCK's services and
          platform.
        </p>

        <p>
          This policy is designed to ensure a safe, respectful, and enjoyable
          experience for all users of our platform.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          1. General Guidelines
        </h3>
        <p>When using our platform, you agree to:</p>
        <ul className="space-y-2">
          <li>Treat all users with respect and courtesy</li>
          <li>Provide accurate and truthful information</li>
          <li>Respect intellectual property rights</li>
          <li>Follow all applicable laws and regulations</li>
          <li>Report inappropriate behavior or content</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          2. Prohibited Content
        </h3>
        <p>You may not post, share, or transmit content that is:</p>
        <ul className="space-y-2">
          <li>Illegal, harmful, or offensive</li>
          <li>Harassing, abusive, or discriminatory</li>
          <li>Sexually explicit or inappropriate</li>
          <li>Violent or threatening</li>
          <li>False, misleading, or deceptive</li>
          <li>Spam or unsolicited promotional material</li>
          <li>Infringing on intellectual property rights</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          3. Prohibited Activities
        </h3>
        <p>You are prohibited from:</p>
        <ul className="space-y-2">
          <li>Attempting to gain unauthorized access to our systems</li>
          <li>Disrupting or interfering with our services</li>
          <li>
            Using automated tools to access our platform without permission
          </li>
          <li>Impersonating others or creating fake accounts</li>
          <li>Collecting user information without consent</li>
          <li>Engaging in any form of fraud or illegal activity</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          4. Event and Experience Guidelines
        </h3>
        <p>When participating in events through our platform:</p>
        <ul className="space-y-2">
          <li>Arrive on time and be prepared</li>
          <li>Follow the host's instructions and guidelines</li>
          <li>Respect other participants and venue property</li>
          <li>Do not engage in dangerous or reckless behavior</li>
          <li>Report any safety concerns immediately</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          5. Host Responsibilities
        </h3>
        <p>If you're hosting events on our platform, you must:</p>
        <ul className="space-y-2">
          <li>Provide accurate descriptions of your events</li>
          <li>Ensure the safety of all participants</li>
          <li>Have appropriate licenses and permits</li>
          <li>Maintain adequate insurance coverage</li>
          <li>Comply with all local laws and regulations</li>
        </ul>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          6. Reporting Violations
        </h3>
        <p>
          If you encounter content or behavior that violates this policy, please
          report it to us immediately. We take all reports seriously and will
          investigate promptly.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          7. Enforcement
        </h3>
        <p>
          Violations of this policy may result in warnings, content removal,
          account suspension, or permanent termination of your access to our
          services.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          8. Updates to This Policy
        </h3>
        <p>
          We may update this Acceptable Use Policy from time to time. Continued
          use of our services after changes indicates your acceptance of the
          updated policy.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
          9. Contact Us
        </h3>
        <p>
          If you have questions about this policy, contact us at:{" "}
          <strong className="text-[#ed5a2e]">support@getontrck.com</strong>
        </p>
      </div>
    </LegalLayout>
  );
}
