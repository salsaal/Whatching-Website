export type TemplateCategory = "Marketing" | "Utility" | "Authentication";
export interface TemplateButton {
  type: "quick_reply" | "url" | "phone" | "copy_code";
  text: string;
}
export interface WaTemplate {
  slug: string; // kebab-case, unique
  name: string; // e.g. "Festive sale announcement"
  industry:
    | "ecommerce"
    | "education"
    | "real-estate"
    | "healthcare"
    | "travel"
    | "general";
  category: TemplateCategory;
  useWhen: string; // one sentence: when to send it
  header?: string; // optional short text header
  body: string; // the message, with numbered variables {{1}}, {{2}} in order
  variables: string[]; // what each {{n}} stands for, in order, e.g. ["Customer's first name", "Discount"]
  sample: string; // the body with sample values filled in, Indian context
  footer?: string; // optional, e.g. "Reply STOP to opt out" for marketing
  buttons?: WaTemplateButton[];
  tips: string; // one or two sentences of practical advice for approval or results
}
export type WaTemplateButton = TemplateButton;

/*
 * Example WhatsApp message templates a business can submit to Meta and send
 * itself, for example as a broadcast. Meta decides the final category on review.
 *
 * Authentication templates use Meta's fixed wording ("{{1}} is your
 * verification code.") with the optional security line and expiry footer.
 * Their button is Meta's copy-code button, which copies the code for the
 * customer.
 */
export const templates: WaTemplate[] = [
  // ---------------------------------------------------------------- E-commerce
  {
    slug: "order-confirmation",
    name: "Order confirmation",
    industry: "ecommerce",
    category: "Utility",
    useWhen:
      "Right after a customer places an order, so they know you have received it.",
    header: "Order received",
    body: "Hi {{1}}, thank you for shopping with {{2}}. We have received your order {{3}} for ₹{{4}}. We will message you again when it is shipped. If anything in the order needs changing, reply to this message.",
    variables: [
      "Customer's first name",
      "Store name",
      "Order number",
      "Order total"
    ],
    sample:
      "Hi Priya, thank you for shopping with Rang Ethnic Store. We have received your order RG-10432 for ₹1,849. We will message you again when it is shipped. If anything in the order needs changing, reply to this message.",
    tips: "Keep it to the order details only. A coupon or a 'you may also like' line can make Meta categorise it as marketing, which costs more per message."
  },
  {
    slug: "shipping-update",
    name: "Shipping update with tracking",
    industry: "ecommerce",
    category: "Utility",
    useWhen:
      "When an order leaves your warehouse and you have the courier's tracking number.",
    header: "Your order has shipped",
    body: "Hi {{1}}, your order {{2}} has been shipped with {{3}}. Your tracking number is {{4}}. Delivery times depend on the courier, so please use the link below to see the latest status.",
    variables: [
      "Customer's first name",
      "Order number",
      "Courier name",
      "Tracking number"
    ],
    sample:
      "Hi Rahul, your order RG-10458 has been shipped with Delhivery. Your tracking number is 1490221388. Delivery times depend on the courier, so please use the link below to see the latest status.",
    buttons: [{ type: "url", text: "Track shipment" }],
    tips: "Set the URL button with a variable at the end of the link so each customer opens their own tracking page. Don't promise a delivery date you can't control; let the courier's page show it."
  },
  {
    slug: "cod-order-confirmation",
    name: "Cash on delivery order check",
    industry: "ecommerce",
    category: "Utility",
    useWhen:
      "Before you pack a cash on delivery order, to check the customer really wants it.",
    header: "Please confirm your order",
    body: "Hi {{1}}, we received your cash on delivery order {{2}} for ₹{{3}}. Please confirm it so we can pack and ship it. If you did not place this order or no longer need it, tap Cancel order.",
    variables: [
      "Customer's first name",
      "Order number",
      "Amount to pay on delivery"
    ],
    sample:
      "Hi Sneha, we received your cash on delivery order RG-10461 for ₹2,299. Please confirm it so we can pack and ship it. If you did not place this order or no longer need it, tap Cancel order.",
    buttons: [
      { type: "quick_reply", text: "Confirm order" },
      { type: "quick_reply", text: "Cancel order" }
    ],
    tips: "Check the replies in your inbox before dispatch and hold orders that are cancelled or get no answer. Keep offers out of it so it stays a utility message."
  },
  {
    slug: "festive-sale-announcement",
    name: "Festive sale announcement",
    industry: "ecommerce",
    category: "Marketing",
    useWhen:
      "A few days before a festival sale starts, to tell opted-in customers about the offer.",
    header: "Our festive sale is live",
    body: "Hi {{1}}, our {{2}} sale is now on! Get {{3}} off on {{4}} until {{5}}. Tap below to see the collection, or reply here if you need help with sizes.",
    variables: [
      "Customer's first name",
      "Festival name",
      "Discount",
      "Products on sale",
      "Last day of the sale"
    ],
    sample:
      "Hi Ananya, our Diwali sale is now on! Get 20% off on all cotton kurtas and sarees until 3 Nov. Tap below to see the collection, or reply here if you need help with sizes.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "Shop the sale" }],
    tips: "State the end date and exactly what the discount covers so there are no disputes later. Send it only to customers who opted in to offers, a few days before the festival rather than on the day."
  },
  {
    slug: "back-in-stock",
    name: "Back in stock",
    industry: "ecommerce",
    category: "Marketing",
    useWhen:
      "When a product customers asked about is available again and you want to tell them.",
    body: "Hi {{1}}, the {{2}} you asked us about is back in stock at {{3}}. Sizes and colours may sell out again, so tap below if you would like to order it.",
    variables: ["Customer's first name", "Product name", "Store name"],
    sample:
      "Hi Kavya, the block-print cotton dupatta you asked us about is back in stock at Rang Ethnic Store. Sizes and colours may sell out again, so tap below if you would like to order it.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "Order now" }],
    tips: "Send it yourself as a broadcast to the customers who asked about this item, for example using a tag you added when they enquired. Meta treats it as marketing even though they asked, so they must have opted in."
  },
  {
    slug: "cart-reminder",
    name: "Cart reminder",
    industry: "ecommerce",
    category: "Marketing",
    useWhen:
      "A day after a customer leaves items in their cart without paying, if they have opted in to messages.",
    body: "Hi {{1}}, you left {{2}} in your cart at {{3}}. Items are not reserved until you pay, so complete your order if you still want them. Reply here if you have a question about size, delivery or payment.",
    variables: ["Customer's first name", "Items in the cart", "Store name"],
    sample:
      "Hi Arjun, you left 2 linen shirts in your cart at Rang Ethnic Store. Items are not reserved until you pay, so complete your order if you still want them. Reply here if you have a question about size, delivery or payment.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "Complete my order" }],
    tips: "Build the list from your store's abandoned-cart report and send it yourself as a broadcast; Meta treats cart reminders as marketing. One reminder per cart is plenty, as more can feel pushy."
  },

  // ----------------------------------------------------------------- Education
  {
    slug: "class-reminder",
    name: "Class reminder",
    industry: "education",
    category: "Utility",
    useWhen:
      "The day before a scheduled class or test, so students and parents don't miss it.",
    header: "Class reminder",
    body: "Hi {{1}}, this is a reminder that your {{2}} class is on {{3}} at {{4}}. Please reach a few minutes early. If you can't attend, let us know by replying to this message.",
    variables: ["Student's first name", "Subject or course", "Date", "Time"],
    sample:
      "Hi Aditya, this is a reminder that your Physics (JEE batch) class is on 12 Dec at 4:30 pm. Please reach a few minutes early. If you can't attend, let us know by replying to this message.",
    buttons: [
      { type: "quick_reply", text: "I will attend" },
      { type: "quick_reply", text: "Can't attend" }
    ],
    tips: "Send it only to the batch that has the class, not your whole contact list, so it stays tied to a schedule they signed up for. The quick replies show you at a glance who is coming."
  },
  {
    slug: "fee-due-reminder",
    name: "Fee due reminder",
    industry: "education",
    category: "Utility",
    useWhen: "A few days before a student's fee or fee instalment is due.",
    header: "Fee reminder",
    body: "Hello, this is a reminder from {{1}} that the fee of ₹{{2}} for {{3}} is due on {{4}}. Please ignore this message if you have already paid. For any question about the fee, reply here and our office will help.",
    variables: ["Institute name", "Amount due", "Student's name", "Due date"],
    sample:
      "Hello, this is a reminder from Saksham Classes that the fee of ₹6,500 for Riya Verma is due on 10 Jan. Please ignore this message if you have already paid. For any question about the fee, reply here and our office will help.",
    buttons: [{ type: "url", text: "Pay fee" }],
    tips: "Keep the tone polite and factual. Meta rejects templates that threaten penalties, legal action or public shaming, so leave out lines like 'the name will be struck off'."
  },
  {
    slug: "admission-application-received",
    name: "Admission application received",
    industry: "education",
    category: "Utility",
    useWhen: "As soon as a student or parent submits an admission form.",
    header: "Application received",
    body: "Hi {{1}}, we have received the admission application for {{2}} at {{3}}. Your application number is {{4}}. Our admissions team will contact you about the next steps, and you can reply here if you have questions in the meantime.",
    variables: [
      "Parent's or student's first name",
      "Course or class applied for",
      "Institute name",
      "Application number"
    ],
    sample:
      "Hi Sunita, we have received the admission application for the NEET two-year programme at Saksham Classes. Your application number is SC-2026-0418. Our admissions team will contact you about the next steps, and you can reply here if you have questions in the meantime.",
    tips: "Include the application number so parents can quote it when they call. Don't ask for full Aadhaar or bank details in a template; Meta rejects requests for sensitive ID numbers."
  },
  {
    slug: "new-batch-announcement",
    name: "New batch announcement",
    industry: "education",
    category: "Marketing",
    useWhen:
      "When admissions open for a new batch and you want past enquirers to know.",
    header: "Admissions open",
    body: "Hi {{1}}, admissions are open for our new {{2}} batch starting {{3}}. Classes run {{4}}. Each batch has limited seats, so tap below if you would like the fee details and timetable.",
    variables: [
      "Student's or parent's first name",
      "Course name",
      "Start date",
      "Class days and timings"
    ],
    sample:
      "Hi Rohit, admissions are open for our new CA Foundation batch starting 5 Jan. Classes run Monday to Friday, 7 am to 9 am. Each batch has limited seats, so tap below if you would like the fee details and timetable.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Send fee details" },
      { type: "quick_reply", text: "Not interested" }
    ],
    tips: "Send it to people who enquired or opted in, with the start date up front. The quick replies show who is interested, so your counsellors know whom to follow up with first."
  },
  {
    slug: "demo-class-invite",
    name: "Free demo class invite",
    industry: "education",
    category: "Marketing",
    useWhen:
      "To invite enquirers to a free trial class before they decide to join.",
    body: "Hi {{1}}, you are invited to a free demo class for {{2}} on {{3}}. It will be held at {{4}}. It is a good chance to meet the teacher and see how we teach before you decide. Tap below to reserve a seat.",
    variables: [
      "Student's or parent's first name",
      "Course or subject",
      "Date and time",
      "Venue, or 'online'"
    ],
    sample:
      "Hi Ishaan, you are invited to a free demo class for Class 9 Science on Sunday, 14 Dec at 11 am. It will be held at our Aliganj centre, Lucknow. It is a good chance to meet the teacher and see how we teach before you decide. Tap below to reserve a seat.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Reserve my seat" },
      { type: "quick_reply", text: "Maybe later" }
    ],
    tips: "Replies land in your inbox, so confirm each seat yourself after a student taps Reserve my seat. Say what the demo includes, such as one class and a doubt session, and nothing more."
  },
  {
    slug: "early-bird-fee-offer",
    name: "Early-bird fee offer",
    industry: "education",
    category: "Marketing",
    useWhen:
      "When you offer a lower fee to students who enrol before a set date.",
    body: "Hi {{1}}, enrol in our {{2}} course before {{3}} and pay ₹{{4}} instead of the regular fee of ₹{{5}}. Reply here if you have questions about the syllabus, timings or instalment options.",
    variables: [
      "Student's or parent's first name",
      "Course name",
      "Last date for the offer",
      "Early-bird fee",
      "Regular fee"
    ],
    sample:
      "Hi Neha, enrol in our Spoken English course before 20 Dec and pay ₹4,999 instead of the regular fee of ₹6,500. Reply here if you have questions about the syllabus, timings or instalment options.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "Enrol now" }],
    tips: "Show both fees and the exact last date so the offer is clear. Avoid promises like 'guaranteed selection'; results aren't in your control and such claims can mislead parents."
  },

  // --------------------------------------------------------------- Real estate
  {
    slug: "property-enquiry-received",
    name: "Property enquiry received",
    industry: "real-estate",
    category: "Utility",
    useWhen:
      "Right after someone enquires about a property on your website, a property portal or an ad.",
    header: "We got your enquiry",
    body: "Hi {{1}}, thank you for your enquiry about {{2}}. Our team member {{3}} will call you to understand what you are looking for. If you prefer a particular time for the call, reply here and let us know.",
    variables: [
      "Customer's first name",
      "Property or project name",
      "Sales executive's name"
    ],
    sample:
      "Hi Vikram, thank you for your enquiry about the 2 BHK flats at Nestwell Greens, Wakad. Our team member Ankit will call you to understand what you are looking for. If you prefer a particular time for the call, reply here and let us know.",
    tips: "Send it within minutes of the enquiry while the buyer still remembers you. Keep prices and offers out of it, otherwise Meta may categorise it as marketing."
  },
  {
    slug: "site-visit-confirmation",
    name: "Site visit confirmation",
    industry: "real-estate",
    category: "Utility",
    useWhen: "Once your team has fixed a site visit time with a buyer.",
    header: "Site visit confirmed",
    body: "Hi {{1}}, your site visit to {{2}} is confirmed for {{3}} at {{4}}. Our executive {{5}} will meet you at the site office. If you need to change the time, reply to this message.",
    variables: [
      "Customer's first name",
      "Project name and location",
      "Date",
      "Time",
      "Executive's name"
    ],
    sample:
      "Hi Meenakshi, your site visit to Nestwell Greens, Wakad is confirmed for Saturday, 13 Dec at 11 am. Our executive Ankit Kulkarni will meet you at the site office. If you need to change the time, reply to this message.",
    buttons: [
      { type: "url", text: "Get directions" },
      { type: "phone", text: "Call the executive" }
    ],
    tips: "Use a Google Maps link for the URL button so the buyer can find the site without calling. Send it only after your team has agreed the time with the buyer."
  },
  {
    slug: "instalment-due-reminder",
    name: "Payment instalment reminder",
    industry: "real-estate",
    category: "Utility",
    useWhen:
      "Before a scheduled or construction-linked payment falls due on a booked unit.",
    header: "Payment reminder",
    body: "Hello {{1}}, the next instalment of ₹{{2}} for your unit {{3}} is due on {{4}}. Please ignore this message if you have already paid. For receipts, statements or any questions, reply here and our team will help.",
    variables: [
      "Buyer's name",
      "Instalment amount",
      "Unit and project",
      "Due date"
    ],
    sample:
      "Hello Mr. Reddy, the next instalment of ₹4,75,000 for your unit B-704, Nestwell Heights is due on 15 Jan. Please ignore this message if you have already paid. For receipts, statements or any questions, reply here and our team will help.",
    tips: "Keep the amount and due date exact and the tone factual. Buyers are wary of payment fraud, so never use this message to ask them to pay into a new account."
  },
  {
    slug: "new-project-launch",
    name: "New project launch",
    industry: "real-estate",
    category: "Marketing",
    useWhen:
      "When you launch a new project and want to tell buyers who have enquired before.",
    header: "New project launch",
    body: "Hi {{1}}, we are launching {{2}} in {{3}}. It has {{4}} homes, with prices starting at ₹{{5}}. Tap below to see the floor plans, or reply here to book a site visit.",
    variables: [
      "Customer's first name",
      "Project name",
      "Location",
      "Home types",
      "Starting price"
    ],
    sample:
      "Hi Sameer, we are launching Nestwell Skyline in Kondapur, Hyderabad. It has 2 and 3 BHK homes, with prices starting at ₹89 lakh. Tap below to see the floor plans, or reply here to book a site visit.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "See floor plans" }],
    tips: "If the project is RERA-registered, check what your state's RERA rules say about showing the registration number in ads, and include it on the page you link to. Say whether the starting price includes GST and other charges."
  },
  {
    slug: "site-visit-weekend-invite",
    name: "Site visit weekend invite",
    industry: "real-estate",
    category: "Marketing",
    useWhen:
      "A few days before a weekend open house or site visit event at a project.",
    body: "Hi {{1}}, we are holding a site visit weekend at {{2}} on {{3}}. Our team will be at the site from {{4}} to show you the sample flat and answer your questions. Tap below to pick a time that suits you.",
    variables: [
      "Customer's first name",
      "Project name and location",
      "Dates",
      "Timings"
    ],
    sample:
      "Hi Pooja, we are holding a site visit weekend at Nestwell Greens, Wakad on 20 and 21 Dec. Our team will be at the site from 10 am to 6 pm to show you the sample flat and answer your questions. Tap below to pick a time that suits you.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Morning slot" },
      { type: "quick_reply", text: "Afternoon slot" },
      { type: "quick_reply", text: "Send location" }
    ],
    tips: "Morning and afternoon quick replies help you plan staff for the day. Reply to each buyer yourself to confirm their time."
  },
  {
    slug: "new-listing-match",
    name: "New listing for a buyer's requirement",
    industry: "real-estate",
    category: "Marketing",
    useWhen:
      "When a new rental or resale property matches what a past enquirer was looking for.",
    body: "Hi {{1}}, a {{2}} in {{3}} is now available at {{4}}. It is close to what you told us you were looking for. Reply here to get photos or to fix a visit.",
    variables: [
      "Customer's first name",
      "Property type",
      "Area",
      "Rent or price"
    ],
    sample:
      "Hi Harpreet, a 2 BHK semi-furnished flat in Baner is now available at ₹32,000 a month. It is close to what you told us you were looking for. Reply here to get photos or to fix a visit.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Send photos" },
      { type: "quick_reply", text: "Book a visit" },
      { type: "quick_reply", text: "Not looking now" }
    ],
    tips: "Send it only to people whose requirement really matches, using the notes or tags you keep on each contact. Meta treats it as marketing even when the buyer asked you to keep them posted."
  },

  // ---------------------------------------------------------------- Healthcare
  {
    slug: "appointment-reminder",
    name: "Appointment reminder",
    industry: "healthcare",
    category: "Utility",
    useWhen:
      "The day before a patient's appointment, to cut down on missed visits.",
    header: "Appointment reminder",
    body: "Hi {{1}}, this is a reminder of your appointment with {{2}} on {{3}} at {{4}}. Please bring your previous prescriptions and reports. Tap a button below to confirm, or reply if you need another time.",
    variables: ["Patient's first name", "Doctor's name", "Date", "Time"],
    sample:
      "Hi Lakshmi, this is a reminder of your appointment with Dr. Meera Iyer on Tuesday, 16 Dec at 6:30 pm. Please bring your previous prescriptions and reports. Tap a button below to confirm, or reply if you need another time.",
    buttons: [
      { type: "quick_reply", text: "I will come" },
      { type: "quick_reply", text: "Need another time" }
    ],
    tips: "Leave out the condition or reason for the visit, since others may see the patient's phone. Your front desk can call anyone who taps Need another time."
  },
  {
    slug: "lab-report-ready",
    name: "Lab report ready",
    industry: "healthcare",
    category: "Utility",
    useWhen: "When a patient's test report is ready to view or collect.",
    header: "Your report is ready",
    body: "Hi {{1}}, the report for your sample collected on {{2}} is ready. Your report ID is {{3}}. You can view it using the link below or collect a printed copy from {{4}} during working hours. Please discuss the results with your doctor.",
    variables: [
      "Patient's first name",
      "Sample collection date",
      "Report ID",
      "Centre name and area"
    ],
    sample:
      "Hi Imran, the report for your sample collected on 9 Dec is ready. Your report ID is AD-58213. You can view it using the link below or collect a printed copy from Arogya Diagnostics, Gomti Nagar during working hours. Please discuss the results with your doctor.",
    buttons: [{ type: "url", text: "View report" }],
    tips: "Never put results or the test name in the message text; share them through a secure link or in person. Ask patients at registration if they agree to get report updates on WhatsApp."
  },
  {
    slug: "follow-up-visit-reminder",
    name: "Follow-up visit reminder",
    industry: "healthcare",
    category: "Utility",
    useWhen:
      "When a doctor has asked a patient to come back after a set number of days.",
    body: "Hi {{1}}, at your last visit {{2}} asked you to come back for a follow-up around {{3}}. Please reply with a day and time that suits you, and our front desk will confirm your slot. You can also call us using the button below.",
    variables: ["Patient's first name", "Doctor's name", "Follow-up date"],
    sample:
      "Hi Deepak, at your last visit Dr. Sanjay Mehta asked you to come back for a follow-up around 22 Dec. Please reply with a day and time that suits you, and our front desk will confirm your slot. You can also call us using the button below.",
    buttons: [{ type: "phone", text: "Call the clinic" }],
    tips: "Send it only when the doctor actually advised a follow-up, so it stays about the patient's own care. Adding health packages or offers would make Meta categorise it as marketing."
  },
  {
    slug: "health-checkup-package",
    name: "Health check-up package offer",
    industry: "healthcare",
    category: "Marketing",
    useWhen:
      "To tell opted-in patients about a check-up package available for a limited period.",
    header: "Health check-up package",
    body: "Hi {{1}}, our {{2}} is available at ₹{{3}} until {{4}}. It includes {{5}}. Reply here or tap below to book a time for your sample collection.",
    variables: [
      "Patient's first name",
      "Package name",
      "Package price",
      "Last date of the offer",
      "Tests included"
    ],
    sample:
      "Hi Ritu, our Full Body Check-up is available at ₹1,999 until 31 Dec. It includes a CBC, lipid profile, thyroid profile, HbA1c, and liver and kidney function tests. Reply here or tap below to book a time for your sample collection.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Book a check-up" },
      { type: "quick_reply", text: "Send me details" }
    ],
    tips: "List the tests and price plainly, and avoid fear-based lines or claims about what the check-up will prevent. Say whether home sample collection costs extra."
  },
  {
    slug: "free-health-camp",
    name: "Free health camp invite",
    industry: "healthcare",
    category: "Marketing",
    useWhen:
      "A few days before a free check-up camp at your clinic or in a nearby area.",
    body: "Hi {{1}}, we are holding a free {{2}} camp at {{3}} on {{4}}. It runs from {{5}}, and no appointment is needed. Please bring any previous reports or prescriptions you have.",
    variables: [
      "Patient's first name",
      "Type of check-up",
      "Venue",
      "Date",
      "Timings"
    ],
    sample:
      "Hi Fatima, we are holding a free eye check-up camp at Shanti Family Clinic, Kothrud on Sunday, 21 Dec. It runs from 9 am to 1 pm, and no appointment is needed. Please bring any previous reports or prescriptions you have.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "I will come" },
      { type: "quick_reply", text: "Send location" }
    ],
    tips: "Say clearly what is free and what isn't, such as medicines or further tests. Meta treats invites like this as marketing even when nothing is sold."
  },
  {
    slug: "new-doctor-announcement",
    name: "New doctor or service announcement",
    industry: "healthcare",
    category: "Marketing",
    useWhen:
      "When a new specialist joins your clinic or you start a new service.",
    body: "Hi {{1}}, we are happy to share that {{2}} has joined our {{3}} clinic as a consultant in {{4}}. Consultations are available every {{5}}. Reply here or tap below to book an appointment.",
    variables: [
      "Patient's first name",
      "Doctor's name",
      "Clinic branch",
      "Speciality",
      "Consultation days and timings"
    ],
    sample:
      "Hi Karthik, we are happy to share that Dr. Divya Nair has joined our Anna Nagar clinic as a consultant in dermatology. Consultations are available every Tuesday and Friday, 5 pm to 8 pm. Reply here or tap below to book an appointment.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "quick_reply", text: "Book appointment" }],
    tips: "Avoid claims like 'guaranteed cure' or 'best doctor in the city'. Medical advertising in India is regulated, so stick to facts such as qualifications and timings."
  },

  // -------------------------------------------------------------------- Travel
  {
    slug: "trip-booking-confirmation",
    name: "Trip booking confirmation",
    industry: "travel",
    category: "Utility",
    useWhen:
      "After a customer has paid the booking amount and your team has confirmed the trip.",
    header: "Booking confirmed",
    body: "Hi {{1}}, your booking for the {{2}} trip is confirmed. Travel dates: {{3}}. Booking ID: {{4}}. We will share your vouchers and day-by-day plan on this chat before departure. Reply here if any traveller details need correcting.",
    variables: [
      "Customer's first name",
      "Destination or package",
      "Travel dates",
      "Booking ID"
    ],
    sample:
      "Hi Siddharth, your booking for the Kerala Backwaters trip is confirmed. Travel dates: 18 to 23 Dec. Booking ID: GH-2412. We will share your vouchers and day-by-day plan on this chat before departure. Reply here if any traveller details need correcting.",
    tips: "Ask customers to check traveller names against their ID proofs now, since name changes on tickets can be costly later. Keep add-on tours and upsells out of it so it stays utility."
  },
  {
    slug: "balance-payment-reminder",
    name: "Balance payment reminder",
    industry: "travel",
    category: "Utility",
    useWhen: "A few days before the balance amount for a booked trip is due.",
    header: "Balance payment due",
    body: "Hi {{1}}, the balance payment of ₹{{2}} for your {{3}} trip (booking ID {{4}}) is due on {{5}}. Please ignore this message if you have already paid. Reply here if you need the invoice or our payment details again.",
    variables: [
      "Customer's first name",
      "Balance amount",
      "Destination",
      "Booking ID",
      "Due date"
    ],
    sample:
      "Hi Aisha, the balance payment of ₹38,500 for your Manali trip (booking ID GH-2397) is due on 5 Dec. Please ignore this message if you have already paid. Reply here if you need the invoice or our payment details again.",
    buttons: [{ type: "url", text: "Pay balance" }],
    tips: "The booking ID tells the customer exactly which trip this is about. Keep the tone polite; Meta rejects templates that read as threats."
  },
  {
    slug: "pre-trip-reminder",
    name: "Pre-trip reminder with pickup details",
    industry: "travel",
    category: "Utility",
    useWhen: "One or two days before departure, once pickup details are final.",
    header: "Your trip starts soon",
    body: "Hi {{1}}, your trip to {{2}} starts on {{3}}. Your pickup is from {{4}} at {{5}}. Please keep a photo ID for every traveller handy, and reply here if your plans change.",
    variables: [
      "Customer's first name",
      "Destination",
      "Start date",
      "Pickup point",
      "Pickup time"
    ],
    sample:
      "Hi Manish, your trip to Udaipur starts on 26 Dec. Your pickup is from Ahmedabad Railway Station, Gate 1 at 6:30 am. Please keep a photo ID for every traveller handy, and reply here if your plans change.",
    buttons: [{ type: "phone", text: "Call trip manager" }],
    tips: "A call button with the trip manager's number lets travellers reach someone on the day. Send it only once pickup times are final, so you don't need a correction later."
  },
  {
    slug: "holiday-package-offer",
    name: "Holiday package offer",
    industry: "travel",
    category: "Marketing",
    useWhen:
      "When you open bookings for a package and want to tell past travellers and enquirers.",
    header: "New holiday package",
    body: "Hi {{1}}, our {{2}} package is open for {{3}} departures. It includes {{4}}. Prices start at ₹{{5}} per person on twin sharing. Tap below for the full itinerary, or reply here with your dates.",
    variables: [
      "Customer's first name",
      "Package name",
      "Month or season",
      "What's included",
      "Starting price"
    ],
    sample:
      "Hi Divya, our Goa Beach Escape package is open for January departures. It includes 4 nights in a 3-star hotel, breakfast, airport transfers and a North Goa tour. Prices start at ₹18,900 per person on twin sharing. Tap below for the full itinerary, or reply here with your dates.",
    footer: "Reply STOP to opt out",
    buttons: [{ type: "url", text: "See itinerary" }],
    tips: "Say what the price leaves out, such as flights or GST, so customers aren't surprised later. Send it only to travellers who opted in to offers."
  },
  {
    slug: "long-weekend-trips",
    name: "Long weekend trip ideas",
    industry: "travel",
    category: "Marketing",
    useWhen: "A few weeks before a long weekend or holiday season.",
    body: "Hi {{1}}, the {{2}} long weekend is on {{3}}. We have short trips from {{4}} with stays, transfers and sightseeing sorted. Hotels get busy around long weekends, so reply soon if you would like options.",
    variables: ["Customer's first name", "Occasion", "Dates", "Departure city"],
    sample:
      "Hi Rohan, the Christmas long weekend is on 25 to 27 Dec. We have short trips from Bengaluru with stays, transfers and sightseeing sorted. Hotels get busy around long weekends, so reply soon if you would like options.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Show me trips" },
      { type: "quick_reply", text: "Not this time" }
    ],
    tips: "Name the departure city so the message feels relevant, and split your list by city if you serve more than one. The quick replies show your team whom to call first."
  },
  {
    slug: "past-traveller-check-in",
    name: "Past traveller check-in",
    industry: "travel",
    category: "Marketing",
    useWhen:
      "Around a year after a customer travelled with you, to invite them to plan their next trip.",
    body: "Hi {{1}}, it has been a year since your trip to {{2}} with us. If you are planning your next holiday, we would be happy to suggest a few places for {{3}}. Reply with your dates and budget, and our team will share options.",
    variables: [
      "Customer's first name",
      "Destination of the past trip",
      "Month or season"
    ],
    sample:
      "Hi Neha, it has been a year since your trip to Sikkim with us. If you are planning your next holiday, we would be happy to suggest a few places for the summer break. Reply with your dates and budget, and our team will share options.",
    footer: "Reply STOP to opt out",
    buttons: [
      { type: "quick_reply", text: "Send me ideas" },
      { type: "quick_reply", text: "Not right now" }
    ],
    tips: "Mentioning their past trip keeps it from reading like a mass message. Meta treats re-engagement messages as marketing, so send them only to customers who opted in."
  },

  // ------------------------------------------------------------------- General
  {
    slug: "welcome-after-opt-in",
    name: "Welcome after opt-in",
    industry: "general",
    category: "Utility",
    useWhen:
      "Right after someone agrees to receive WhatsApp messages from your business.",
    body: "Hi {{1}}, thanks for choosing to get WhatsApp updates from {{2}}. We will message you here about {{3}}. You can reply to this chat any time with a question, and reply STOP if you no longer want these messages.",
    variables: ["Customer's first name", "Business name", "What you will send"],
    sample:
      "Hi Farhan, thanks for choosing to get WhatsApp updates from Sharma Sweets. We will message you here about your orders and our shop timings. You can reply to this chat any time with a question, and reply STOP if you no longer want these messages.",
    tips: "Send it straight after the opt-in so people know what to expect and how to stop. Meta may categorise it as marketing if you add a welcome discount or list offers in it."
  },
  {
    slug: "feedback-request",
    name: "Feedback after a visit or order",
    industry: "general",
    category: "Utility",
    useWhen:
      "A day after a customer's order, visit or service, to ask how it went.",
    body: "Hi {{1}}, thank you for choosing {{2}} on {{3}}. How was your experience with us? Tap an option below; it takes a few seconds and helps us improve.",
    variables: [
      "Customer's first name",
      "Business name",
      "Date of the visit or order"
    ],
    sample:
      "Hi Kavya, thank you for choosing Glow Salon, Indiranagar on 10 Dec. How was your experience with us? Tap an option below; it takes a few seconds and helps us improve.",
    buttons: [
      { type: "quick_reply", text: "Very good" },
      { type: "quick_reply", text: "It was okay" },
      { type: "quick_reply", text: "Not good" }
    ],
    tips: "Meta approves feedback requests as utility only when they refer to a specific order or visit; a general 'rate us' message is marketing. Don't offer a discount in return for feedback."
  },
  {
    slug: "payment-reminder",
    name: "Payment reminder",
    industry: "general",
    category: "Utility",
    useWhen: "A few days before, or on the day, an invoice is due.",
    header: "Payment reminder",
    body: "Hello {{1}}, this is a reminder that invoice {{2}} for ₹{{3}} is due on {{4}}. Please ignore this message if you have already paid. If you have any question about the bill, reply here and we will help.",
    variables: ["Customer's name", "Invoice number", "Amount due", "Due date"],
    sample:
      "Hello Mr. Gupta, this is a reminder that invoice INV-2026-118 for ₹12,400 is due on 15 Dec. Please ignore this message if you have already paid. If you have any question about the bill, reply here and we will help.",
    buttons: [{ type: "url", text: "Pay now" }],
    tips: "Keep it polite and factual; Meta rejects templates that threaten legal action or public shaming. A payment link from your payment provider in the URL button makes it quicker to pay."
  },
  {
    slug: "holiday-closure-notice",
    name: "Holiday closure and reopening notice",
    industry: "general",
    category: "Marketing",
    useWhen:
      "Before you close for a holiday, so customers know when you will be back.",
    header: "Holiday timings",
    body: "Hi {{1}}, a quick update from {{2}}: we are closed for {{3}} and will reopen on {{4}}. Our hours from then are {{5}}. Messages sent during the break will be answered once we are back.",
    variables: [
      "Customer's first name",
      "Business name",
      "Occasion",
      "Reopening date",
      "Regular hours"
    ],
    sample:
      "Hi Arjun, a quick update from Kapoor Hardware: we are closed for Diwali and will reopen on 4 Nov. Our hours from then are 9 am to 9 pm, Monday to Saturday. Messages sent during the break will be answered once we are back.",
    footer: "Reply STOP to opt out",
    tips: "Meta usually treats notices sent to your whole list as marketing, even with no offer in them. Update the hours on your WhatsApp business profile as well."
  },
  {
    slug: "login-code",
    name: "Login code",
    industry: "general",
    category: "Authentication",
    useWhen:
      "When a customer signs in to your app or website and you need to confirm it is really them.",
    body: "{{1}} is your verification code. For your security, do not share this code.",
    variables: ["One-time code (up to 15 characters)"],
    sample:
      "482913 is your verification code. For your security, do not share this code.",
    footer: "This code expires in 5 minutes.",
    buttons: [{ type: "copy_code", text: "Copy code" }],
    tips: "Meta writes the text of authentication templates, so you only choose the security line, an expiry time from 1 to 90 minutes and the button. URLs, media and emojis aren't allowed."
  },
  {
    slug: "verification-code",
    name: "Verification code",
    industry: "general",
    category: "Authentication",
    useWhen:
      "When a customer signs up, changes their phone number or confirms a sensitive action.",
    body: "{{1}} is your verification code. For your security, do not share this code.",
    variables: ["One-time code (up to 15 characters)"],
    sample:
      "730154 is your verification code. For your security, do not share this code.",
    footer: "This code expires in 10 minutes.",
    buttons: [{ type: "copy_code", text: "Copy code" }],
    tips: "Only authentication templates may carry one-time codes, and their text starts with the code by Meta's design. On Android you can swap the copy code button for one-tap autofill, but that needs your app's details and some developer work."
  }
];
