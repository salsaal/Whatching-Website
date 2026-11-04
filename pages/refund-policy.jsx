import React from "react";
import SiteShell from "@/components/marketing/SiteShell";

function RefundPolicy() {
  return (
    <SiteShell>

      <section className="section-padding !pt-32">
        <div className="container max-w-3xl">
          <h1 className="heading-2 mb-8 text-center">
            Whatching Refund Policy
          </h1>

          <div className="space-y-8 body-medium text-[var(--text-secondary)]">
            <p>
              This policy is designed to be fair and reasonable, ensuring that
              customers feel secure in their transactions with Whatching, while
              also protecting the company from potential abuse of the refund
              process.
            </p>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                1. Trial Period
              </h3>
              <p>
                Whatching offers a 7-day free trial for new users, during which
                they can explore the platform and evaluate whether it fits their
                business needs. Since no credit card is required to start the
                trial and users are not charged, no refund applies during the
                free trial period.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                2. Subscription Services
              </h3>
              <p>
                Following the free trial, if a user subscribes to any of
                Whatching's paid services, they are ineligible to receive a
                refund. The free trial is provided to ensure that users can try
                the services and decide whether to continue with the Whatching
                platform. If a user feels unsatisfied, they can cancel their
                free trial anytime and they will not be charged. If the user has
                subscribed to any Whatching plan, they are not eligible for a
                refund. They can cancel their subscription to ensure they are
                not charged the next month.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                3. Non-Refundable Services
              </h3>
              <p>
                All Whatching services, such as charges for a Whatching plan,
                WhatsApp conversation credits, add-ons, or any third-party
                integrations, are non-refundable due to the nature of the
                service and the costs incurred by Whatching to provide these
                services. This includes one-time chatbot development and other
                one-time setup payments.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                4. Technical Issues
              </h3>
              <p>
                If a user experiences continuous technical issues that prevent
                them from using the service effectively, and if these issues are
                verified by Whatching's support team, a partial or full refund
                may be granted at Whatching's discretion.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                5. Unauthorized Charges
              </h3>
              <p>
                In the case of unauthorized or fraudulent charges, users should
                contact Whatching support immediately. If such claims are
                verified, Whatching will issue a full refund.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                6. Cancellation Policy
              </h3>
              <p>
                A user may cancel their subscription at any time. However, the
                cancellation will be effective at the end of the current billing
                cycle, and users will not receive a refund for the remaining
                period of the subscription, except under special circumstances
                that will be reviewed on a case-by-case basis.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                7. Contact and Support
              </h3>
              <p>
                For any refund-related queries, users are encouraged to contact
                Whatching's customer support team, which is committed to
                providing efficient and personalized assistance.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                8. Refund Process
              </h3>
              <p>
                To request a refund, users should write to us at{" "}
                <strong>
                  <a href="mailto:hello@whatching.com">
                    hello@whatching.com
                  </a>
                </strong>
                . The request must include the transaction details and a clear
                explanation of the reason for the refund request.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                9. Policy Amendments
              </h3>
              <p>
                Whatching reserves the right to modify this refund policy at
                any time, and the changes will be effective immediately upon
                posting the updated policy on the Whatching website.
              </p>
            </div>

            <div>
              <h3 className="heading-3 mb-2 text-[var(--text-primary)]">
                10. Legal Compliance
              </h3>
              <p>
                This refund policy complies with the local laws and regulations
                where Whatching operates. Users are also encouraged to review
                the Terms of Service and Privacy Policy for a comprehensive
                understanding of their rights and obligations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export default RefundPolicy;
