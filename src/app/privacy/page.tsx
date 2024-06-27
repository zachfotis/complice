import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="Privacy Policy" />
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-5">
          {privacyData.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-start gap-3 text-justify">
              <h1 className="text-h4 font-custom">{item.title}</h1>
              {item.text.map((text, index) => (
                <p key={index} className="text-base text-secondary">
                  {text}
                </p>
              ))}
            </div>
          ))}
          <div className="w-full flex justify-center items-center">
            <h3 className="mt-20 mb-10 text-lg font-medium w-full max-w-[1000px] text-center">
              If you have any questions or concerns, do not hesitate to contact our customer service. Thank you!
            </h3>
          </div>
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const privacyData = [
  {
    title: 'Privacy Policy',
    text: [
      'Obtaining Personal Data',
      'If you use the services of Complice, you provide certain personal data to Complice yourself, or personal data is obtained from you in the context of the agreement. Personal data refers to all information related to an identified or identifiable natural person.',
      'Complice is capable of collecting personal data in the following situations:',
      'When you visit a website of Complice.',
      'When you contact Complice by phone or email.',
      'When you fill in or leave your details.',
      'When you apply for a position offered by Complice.',
      'When you offer your services to Complice.',
      'When you enter the premises where Complice offices are located.',
    ],
  },
  {
    title: 'Categories of Personal Data',
    text: [
      'Complice may process personal data from various types of relationships it maintains. The specific personal data collected depends on the type of relationship you have with Complice. Complice requests that you provide accurate and relevant information. If any relevant changes occur regarding the purpose for which you provided personal data to Complice, you should inform them accordingly to ensure they have correct and up-to-date personal data.',
      'Consumers:',
      "Website visitors: If you visit Complice website(s), they may collect personal data through cookies with your consent. Additionally, your IP address will be recorded on Complice's server for security reasons, and different types of personal data can be collected based on different cookies.",
      'Individuals contacting them: If you contact Complice via their website, email, or phone, they will only process personal data necessary for the purpose of your inquiry.',
      'Newsletter subscribers: If you want to stay informed about the latest developments regarding Complice functions, you can subscribe to their newsletter. The following categories of personal data are processed for this purpose: name and contact details.',
    ],
  },
  {
    title: 'Purpose of Data Processing',
    text: [
      'The personal data processed by Complice serves the following purposes:',
      "Contacting you to inform you about the services you've acquired and their execution.",
      'Providing their services.',
      'Improving their services.',
      'Processing payments.',
      'Complying with legal obligations.',
      'Conducting marketing and communication activities.',
      'Improving the website through the analysis of visitor behavior.',
      'Sending newsletters.',
      'Exchanging data with third parties for the execution of their services.',
    ],
  },
  {
    title: 'Legal Basis for Data Processing',
    text: [
      'Personal data is processed based on the following legal bases:',
      'Legal obligation.',
      'Execution of a contract.',
      'Obtained explicit consent from the data subject.',
      'Legitimate interest.',
    ],
  },
  {
    title: 'Necessity of Data Processing',
    text: [
      "The processing of your personal data is necessary to perform the services provided by Complice. Without processing this data, Complice's services cannot be fully executed. For specific purposes related to personal data, explicit consent may be required, which you can provide separately.",
    ],
  },
  {
    title: 'Automated Decision-Making',
    text: [
      'If any automated decision-making is involved, it will be carried out by computer systems and/or computer programs without human intervention. The data subject is responsible for providing accurate and complete data used during automated decision-making. If the data proves to be inaccurate or incomplete, the data subject bears the responsibility for any resulting damages, including non-performance, delayed performance, or incorrect execution of the contract.',
    ],
  },
  {
    title: 'Data Retention',
    text: [
      'Complice retains the processed personal data in accordance with relevant laws and regulations. If a longer retention period is required due to legal requirements, the personal data will be kept for the necessary duration. All obtained personal data is not stored longer than strictly necessary.',
    ],
  },
  {
    title: 'Data Processing by Third Parties',
    text: [
      'Complice shares personal data with third parties only when strictly necessary for executing a contract and complying with relevant laws and regulations. Personal data is not sold to third parties. If there is a legal obligation to share personal data with third parties, processing agreements are concluded. The third parties with which personal data is shared are:',
      'Accountants: For the execution of a contract (contact and address details, financial data).',
      'Software suppliers: For the execution of the contract (location data, email address, contact and address details).',
      'Website administrators: For the execution of the contract (location data, email address, contact and address details).',
      'Clients or customers: For the execution of the contract (location data, email address, contact and address details, employment data, CV).',
      'Candidates: For the execution of the contract (location data, email address, contact and address details, company data).',
    ],
  },
  {
    title: 'Security of Personal Data',
    text: [
      'Complice takes the protection of your personal data seriously and implements appropriate technical and organizational measures to ensure a level of security aligned with the risk of processing, taking into account the state of the art, implementation costs, the nature, scope, context, and purposes of processing, as well as the likelihood and severity of risks to the rights and freedoms of individuals.',
    ],
  },
  {
    title: 'Younger than 16 Years Old?',
    text: [
      'If you are under the age of 16, you can only give consent for the processing of your personal data with the permission of one of your parents or legal guardians. It is important that your parent(s) or guardian reads this statement. They can also exercise the rights you have regarding the personal data you leave with us, such as the right to object to the (further) processing of your personal data or the right to access and correct your data.',
    ],
  },
  {
    title: 'Disclaimer',
    text: [
      "By using the website, you agree to the disclaimer. Complice reserves the right to change the content of its website and/or this disclaimer at any time without informing its customers and/or website users of these changes. The content of the website is compiled with the utmost care but may contain inaccuracies or be incomplete. Complice accepts no liability for any damage resulting from or arising from the use of the website. Using this website is entirely at the user's own risk. No rights can be derived from the content of the website. All texts on the website are copyright protected and owned by Complice unless otherwise stated.",
    ],
  },
  {
    title: 'Cookie Statement',
    text: [
      "Complice uses technical and functional cookies to optimize the website. Cookies are small text files sent to the visitor's device to make user experiences more efficient. According to the law, Complice may store cookies on your device if these cookies are strictly necessary for the use of the website. For other types of cookies, your consent is required. We recommend accepting cookies for the user-friendliness of the website. Visitors of the website have the option to check this.",
      "The cookies used by Complice are functional cookies, which do not affect the privacy, and, therefore, do not require separate consent. These cookies store your browser settings so that our website can be viewed best, or that the website remains accessible, but also cookies that ensure that no other cookies are allowed to be placed (no-follow). With your permission, we place ''tracking cookies'' on your computer. We use these cookies to keep track of which pages you visit, in order to build a profile of your online behavior. This profile is not linked to your name, address, e-mail address, and the like, but only to match advertisements to your profile so that they are as relevant to you as possible. Cookies from Google are also placed on the Complice website for the purpose of Google Analytics. This means that Complice cannot link information to a natural person. We do not keep any information about what you do on the internet. Google Analytics may be required by applicable laws and regulations to provide access to this data. If you have any questions about this, please contact us at info@complice.com.",
    ],
  },
  {
    title: 'Use of Social Media',
    text: [
      'Complice uses third-party cookies to optimize the website. Some cookies are placed by third-party services that appear on the website. Third parties include Google Analytics and social media (LinkedIn, Instagram, Facebook, Twitter). The privacy and cookie policy of the relevant company applies to the use of cookies from other companies (third parties). When you click on the social media button on the website, a social media cookie is placed. This allows the social media party to recognize your IP address as soon as you share an article from the website. For the cookies of social media parties and the data and/or personal data they collect with this, Complice refers you to the privacy and cookie statements of these parties.',
    ],
  },
  {
    title: 'Browser Settings',
    text: [
      'If you do not want websites to place cookies on your device with which you view the website, you can adjust your browser settings. Before a cookie is placed, you will receive a warning and you must give permission for the cookie. Failure to do so may, for example, result in the website not working as well. You can adjust the settings of your browser so that your browser refuses all cookies and also third-party cookies. You can also delete placed cookies. For this, you must adjust the settings of your browser via preferences and then you can adjust the privacy settings. This privacy statement does not apply to third-party websites that are linked to this website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend that you read the privacy statement of these websites before using these websites.',
    ],
  },
  {
    title: 'Rights of Data Subjects',
    text: [
      'Right of access: As a data subject, you have the right to obtain confirmation as to whether or not your personal data are being processed and, if that is the case, to obtain insight into the processing thereof.',
      'Right to rectification: You have the right to obtain rectification and completion of incorrect data.',
      'Right to erasure.',
    ],
  },
];
