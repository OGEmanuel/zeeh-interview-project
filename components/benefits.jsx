import Image from 'next/image';
import onboard from '../public/icons/onboarding.svg';
import notallowed from '../public/icons/not-allowed.svg';
import document from '../public/icons/documentation.svg';
import verify from '../public/icons/verification.svg';

const Benefits = () => {
  return (
    <section className="mb-40">
      <h4 className="h4">THE BENEFITS OF OUR CONNECT INFRASTRUCTURE</h4>
      <div className="px-40 grid-custom">
        <div className="benefit-container bg-benefit-1 px-10">
          <p className="benefit-p-main text-benefits-main-1">
            Generate best loan offers
          </p>
          <p className="benefit-p-sub">
            Based on financial details that have been acquired, you can generate
            the most suitable offers (loans) for customers
          </p>
          <Image src={onboard} alt="onboard" className="div-center" />
        </div>
        <div className="benefit-container bg-benefit-2">
          <p className="benefit-p-main text-benefits-main-2">
            Financial History Check
          </p>
          <p className="benefit-p-sub">
            Our kYC process helps verifies that customers are who they claim
            they are. This way, we can help you detect fraud and cybercrimes
          </p>
          <Image src={notallowed} alt="not-allowed" className="div-center" />
        </div>
        <div className="benefit-container bg-benefit-3">
          <p className="benefit-p-main text-benefits-main-3">
            Better User Experience
          </p>
          <p className="benefit-p-sub">
            Make customers aware that failed transactions and ineligibility
            reports are due to low balances and income
          </p>
          <Image src={document} alt="documentation" className="div-center" />
        </div>
        <div className="benefit-container bg-benefit-4">
          <p className="benefit-p-main text-white">Protect Your Business</p>
          <p className="benefit-sub-last text-benefit-sub-lite">
            Increase your financial security measures and protect your business
            from possible bad actors
          </p>
          <Image src={verify} alt="verification" className="div-center" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
