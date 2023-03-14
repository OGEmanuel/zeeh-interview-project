import { useRef } from 'react';
import useRevealSection from './hooks/use-reveal-section';

const How = () => {
  const ref = useRef();
  const { display } = useRevealSection(ref);

  return (
    <section
      ref={ref}
      className={`mb-40 animate-in ${display ? '' : 'section-hidden'}`}
    >
      <h4 className="h4">HOW IT WORKS</h4>
      <div className="px-20 font-mont font-bold text-center grid-custom">
        <div className="bg-how-bg-1 how-container">
          <p className="how-main-p text-benefits-main-2">Create an app</p>
          <p className="how-sub-p text-how-sub-1">
            Create an app on the dashboard. During creation, select the product
            type; KYC in this case
          </p>
        </div>
        <div className="bg-benefits-main-3 how-container">
          <p className="how-main-p text-white">integrate app link</p>
          <p className="how-sub-p text-card-p">
            Copy unique app link and send to customers or integrate on the
            platform for customers to click
          </p>
        </div>
        <div className="bg-how-bg-3 how-container">
          <p className="how-main-p text-benefits-main-3">
            Get authentication from customers
          </p>
          <p className="how-sub-p text-header-body">
            Customers keys in correct bank details (for any bank at all in
            Nigeria)
          </p>
        </div>
        <div className="how-container shadow-2xl">
          <p className="how-main-p text-benefits-main-3">confirm query</p>
          <p className="how-sub-p text-header-body">
            If successful, you will be notified by email about newly added
            customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
