import React from "react";
import LegalLayout from "@/components/marketing/LegalLayout";

// The policy text, one paragraph per line.
const content = `This policy is designed to be fair and reasonable, ensuring that customers feel secure in their transactions with Whatching, while also protecting the company from potential abuse of the refund process.

1. Trial Period
Whatching offers a 7-day free trial for new users, during which they can explore the platform and evaluate whether it fits their business needs. Since no credit card is required to start the trial and users are not charged, no refund applies during the free trial period.

2. Subscription Services
Following the free trial, if a user subscribes to any of Whatching's paid services, they are ineligible to receive a refund. The free trial is provided to ensure that users can try the services and decide whether to continue with the Whatching platform. If a user feels unsatisfied, they can cancel their free trial anytime and they will not be charged. If the user has subscribed to any Whatching plan, they are not eligible for a refund. They can cancel their subscription to ensure they are not charged the next month.

3. Non-Refundable Services
All Whatching charges, such as a Whatching plan, AI token top-ups, add-ons, or any third-party integrations, are non-refundable due to the nature of the service and the costs incurred by Whatching to provide these services.

4. Technical Issues
If a user experiences continuous technical issues that prevent them from using the service effectively, and if these issues are verified by Whatching's support team, a partial or full refund may be granted at Whatching's discretion.

5. Unauthorized Charges
In the case of unauthorized or fraudulent charges, users should contact Whatching support immediately. If such claims are verified, Whatching will issue a full refund.

6. Cancellation Policy
A user may cancel their subscription at any time. However, the cancellation will be effective at the end of the current billing cycle, and users will not receive a refund for the remaining period of the subscription, except under special circumstances that will be reviewed on a case-by-case basis.

7. Contact and Support
For any refund-related queries, users are encouraged to contact Whatching's customer support team, which is committed to providing efficient and personalized assistance.

8. Refund Process
To request a refund, users should write to us at hello@whatching.com. The request must include the transaction details and a clear explanation of the reason for the refund request.

9. Policy Amendments
Whatching reserves the right to modify this refund policy at any time, and the changes will be effective immediately upon posting the updated policy on the Whatching website.

10. Legal Compliance
This refund policy complies with the local laws and regulations where Whatching operates. Users are also encouraged to review the Terms of Service and Privacy Policy for a comprehensive understanding of their rights and obligations.`;

export default function Page() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="How free trials, cancellations and refunds work for Whatching subscriptions."
      path="/refund-policy"
      text={content}
      updated="18 November 2026"
    />
  );
}
