import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageTitle from '@/components/layout/PageTitle';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="Privacy Policy" />
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-5">
          { privacyData.map((item, index) => (
            <div key={ index } className="flex flex-col items-start justify-start gap-5 text-justify">
              <h1 className="text-h4 font-custom">{ item.title }</h1>
              { item.text.map((text, index) => (
                <p key={ index } className="text-base text-secondary">{ text }</p>
              )) }
            </div>
          )) }
          <div className="w-full flex justify-center items-center">
            <h3 className="mt-20 mb-10 text-lg font-medium w-full max-w-[1000px] text-center">If you have any questions or concerns, do not hesitate
              to
              contact our
              customer service.
              Thank you!</h3>
          </div>
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const privacyData = [
  {
    title: 'Collection of Personal Information',
    text: ['Utilizing the services of Complice may require you to provide certain personal data or allow Complice to obtain such data under the agreement. Personal data encompasses any information pertaining to an identified or identifiable individual.']
  },
  {
    title: 'Situations for Data Collection by Complice',
    text: [
      'Upon visiting a Complice website.',
      'Upon contacting Complice via phone or email.',
      'When providing or submitting your details.',
      'While applying for a position at Complice.',
      'Offering services to Complice.',
      'Entering the premises where Complice operates.'
    ]
  },
  {
    title: 'Types of Personal Data',
    text: ['Complice may handle data from varied relationships. The specific data collected hinges on the nature of your relationship with Complice. Always ensure the information you provide is accurate and up-to-date. Should any significant changes arise, please notify Complice to update your personal data accordingly.']
  },
  {
    title: 'Data Categories for Various Users',
    text: [
      'Website Visitors: Visiting Complice website(s) may result in data collection through cookies upon consent. Your IP address will also be logged on the Complice server for security reasons. Different cookies may collect different types of data.',
      'Contacting Complice: When you reach out to Complice, only essential data will be processed for handling your query.',
      'Newsletter Subscribers: To keep abreast with Complice updates, one can subscribe to the newsletter. Data processed for this purpose includes name and contact details.'
    ]
  },
  {
    title: 'Data for Job Applicants',
    text: [
      'Should you be invited for an interview at Complice, we may process:',
      'Contact and residential details.',
      'Employment-related details as mentioned in your CV.',
      'A copy of an identity document.',
      'Any other personal data you provide.'
    ]
  },
  {
    title: 'Data for Business Relations',
    text: ['When engaging in business activities, Complice may process data of individuals associated with partner companies or entities. This data processing is exclusive to the business interaction with Complice or for the purpose the data was shared in that business context.']
  },
  {
    title: 'Purpose of Data Processing',
    text: [
      'Complice processes personal data for reasons including:',
      'Communication related to acquired services.',
      'Provision of services.',
      'Enhancing services.',
      'Handling payments.',
      'Adherence to legal mandates.',
      'Undertaking marketing and communication activities.',
      'Optimizing the website via visitor behavior analysis.',
      'Dispatching newsletters.',
      'Sharing data with third parties for service execution.'
    ]
  },
  {
    title: 'Basis for Data Processing',
    text: [
      'The grounds on which Complice processes data include:',
      'Contractual obligations.',
      'Legal compliance.',
      'Legitimate interests of Complice.',
      'Consent given by the user.'
    ]
  },
  {
    title: 'Requirement for Data Processing',
    text: ['Your personal data is pivotal for Complice to deliver its services. In the absence of this data, services might be hampered. For certain data processing objectives, your explicit consent might be sought, which can be provided distinctly.']
  },
  {
    title: 'Automated Decision-making',
    text: ['If decisions are automated, they are made by computer systems without human input. The responsibility of ensuring accuracy and completeness of data for such decision-making lies with the user. Incorrect or incomplete data can result in consequences including but not limited to contractual missteps.']
  },
  {
    title: 'Data Retention Policy',
    text: ['Complice retains user data in adherence to pertinent legal standards. If legal stipulations necessitate extended retention, data is preserved accordingly. All acquired data is not kept beyond its absolute necessity.']
  },
  {
    title: 'Third-Party Data Processing',
    text: [
      'Personal data sharing with third parties by Complice is strictly confined to contractual and legal requirements. Selling personal data to third parties is prohibited. When legally bound to share data with third parties, processing agreements are in place. Third-party entities accessing data can include:',
      'Accounting professionals for contract fulfillment.',
      'Software providers for contract fulfillment.',
      'Website administrators for contract execution.',
      'Clients or customers for service provision.',
      'Potential candidates during business engagements.'
    ]
  },
  {
    title: 'Safeguarding Personal Data',
    text: [
      'Ensuring the integrity of your personal data is paramount to Complice. Adequate technical and organizational safeguards are in place, factoring in the nature and scope of processing as well as potential risks.',
      'Users below 16 years: If you are below 16, processing of your data necessitates the approval of a parent or legal guardian. They should be apprised of this document and can exercise your data rights on your behalf.'
    ]
  },
  {
    title: 'Usage Agreement',
    text: ['Accessing the website signifies agreement to this policy. Complice can modify its website content and/or this policy without prior notice. While we strive for precision, the website might contain inadvertencies. Complice is not liable for any detriment stemming from website usage. All content is protected under copyright, owned by Complice unless mentioned otherwise.']
  },
  {
    title: 'Cookie Policy',
    text: [
      'For optimization, Complice uses technical and functional cookies. Cookies are small data files transferred to a visitor’s device for enhanced efficiency. Law mandates that Complice can only store necessary cookies. For all other cookies, user consent is imperative.',
      'Complice uses functional cookies that do not compromise privacy. Some cookies prevent other cookies from being stored. Cookies from Google Analytics are also integrated into Complice website for analytical purposes. For inquiries, reach out to info@complice.com.'
    ]
  },
  {
    title: 'Integration with Social Media',
    text: ['Complice uses cookies from third-party services for website optimization. These third parties include Google Analytics and various social media platforms. Each entity’s respective privacy and cookie policy governs their cookie use. Interaction with social media buttons on the website can initiate a cookie from the social media entity, allowing it to recognize your IP when sharing content.']
  },
  {
    title: 'Adjusting Browser Settings',
    text: [
      'To prevent websites from saving cookies on your device, you can modify browser settings. Prior to cookie storage, you will receive a notification seeking your permission. Declining can impact website functionality. You can tailor your browser settings to decline or delete cookies. This privacy policy does not extend to third-party websites linked from this site.'
    ]
  },
  {
    title: 'Your Data Rights',
    text: [
      'Access Right: You have the right to access, review, and obtain a copy of your personal data retained by Complice.',
      'Rectification: If your data appears inaccurate or incomplete, you can request rectifications or amendments.',
      'Right to Erasure: Under certain conditions, you can request the deletion of your data from Complice’s records. This is often referred to as the “right to be forgotten”.',
      'Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and transfer this data to another organization, if technically feasible.',
      'Restriction on Processing: You can request that the processing of your data be restricted, especially if you contest the data’s accuracy, or if the processing is deemed unlawful.',
      'Object: Under certain circumstances, you can object to the processing of your personal data. This especially applies if the data processing is for direct marketing purposes.',
      'Automated Decision-making & Profiling: If Complice employs automated decision-making processes, including profiling, which affects you significantly, you have the right to contest these decisions and request human intervention.',
      'Withdraw Consent: Where data processing is based on your consent, you can withdraw this consent at any time. This does not affect the lawfulness of processing based on consent before its withdrawal.'
    ]
  },
  {
    title: 'Enacting Your Rights',
    text: [
      'To enact any of the aforementioned rights, kindly reach out to Complice via the contact details provided. Please include a clear description of your request, and for identity verification, attach a copy of a valid identification document. Your request will be processed within a month of its receipt. However, due to complexities or the number of requests, this period might extend by two more months.'
    ]
  },
  {
    title: 'Lodging Complaints',
    text: [
      'If you believe that Complice has not addressed your data concerns adequately, you retain the right to lodge a complaint with the appropriate data protection authority in your country or region.'
    ]
  }
];

