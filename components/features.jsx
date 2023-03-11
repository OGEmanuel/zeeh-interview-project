import wallet from '../public/icons/wallet.svg';
import transaction from '../public/icons/transaction.svg';
import dollarCard from '../public/icons/dollar-card.svg';
import dollarCircle from '../public/icons/dorllar-circle.svg';
import Image from 'next/image';
import CardBlack from './UI/card-black';
import CardBlue from './UI/card-blue';

const Features = () => {
  return (
    <section className="px-10 mb-40">
      <h4 className="text-gray-secondary text-center font-public mb-16">
        THE THINGS YOU GET WITH OUR CONNECT INFRASTRUCTURE
      </h4>
      <div className="font-mont grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-x-5 gap-y-10">
        <CardBlack>
          <p className="feature-p-main">Account Information</p>
          <Image src={wallet} alt="wallet" className="feature-img" />
          <p className="feature-p-sub">
            Zeeh gives businesses direct interaction with their client&rsquo;s
            banks, making the process of saving and investment anywhere seamless
            for their customers.
          </p>
        </CardBlack>
        <CardBlue>
          <p className="feature-p-main">Transaction History</p>
          <Image src={transaction} alt="transaction" className="feature-img" />
          <p className="feature-p-sub">
            Copy unique app link and send to customers or integrate on the
            platform for customers to click
          </p>
        </CardBlue>
        <CardBlue>
          <p className="feature-p-main">1 year Statement Pages</p>
          <Image src={dollarCard} alt="dollar card" className="feature-img" />
          <p className="feature-p-sub">
            Make customers aware that failed transactions and ineligibility
            reports are due to low balances and income
          </p>
        </CardBlue>
        <CardBlack>
          <p className="feature-p-main">Income Values</p>
          <Image
            src={dollarCircle}
            alt="dollar circle"
            className="feature-img"
          />
          <p className="feature-p-sub">
            Based on financial details that have been acquired, you can generate
            the most suitable offer (loans) to customers
          </p>
        </CardBlack>
      </div>
    </section>
  );
};

export default Features;
