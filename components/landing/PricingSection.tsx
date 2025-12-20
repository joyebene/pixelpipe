import Link from 'next/link';
import { BsCheck } from 'react-icons/bs';
import Button from '../shared/Button';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  buttonText: string;
  features: string[];
  isPopular?: boolean;
}

const plans = [
  {
    name: 'Free',
    description: 'Perfect for individuals',
    price: 0,
    buttonText: 'Get Started',
    features: ['10 image uploads/month', '2 temporary inboxes', 'Basic webhook inspector', 'All dev utilities']
  },
  {
    name: 'Pro',
    description: 'For professional developers',
    price: 12,
    buttonText: 'Start Free Trial',
    features: ['Unlimited image uploads', '10 temporary inboxes', 'Advanced webhook features', 'Private resources', 'Custom expiration times'],
    isPopular: true
  },
  {
    name: 'Team',
    description: 'For collaborative teams',
    price: 29,
    buttonText: 'Contact Sales',
    features: ['Everything in Pro', 'Unlimited team members', 'Multiple workspaces', 'Role-based permissions', 'Priority support']
  }
];

const PricingSection = () => {
  const PricingCard = ({ name, description, price, buttonText, features, isPopular }: PricingCardProps) => (
    <div className={`${isPopular ? 'bg-linear-to-b from-blue-500/10 to-purple-500/10 border-2 border-green-500/50' : 'bg-slate-900 border border-slate-800'} rounded-2xl p-8 relative`}>
      {isPopular && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-slate-400 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-slate-400">/month</span>
      </div>
      {buttonText === 'Get Started' ? (
        <Button href="/signup" className={`w-full px-6 py-3 ${!isPopular && 'bg-slate-800 hover:bg-slate-700'} text-white rounded-lg font-medium transition mb-8 block text-center`}>
          {buttonText}
        </Button>
      ) : (
        <Button href="/signin" className={`w-full px-6 py-3 ${!isPopular && 'bg-slate-800 hover:bg-slate-700'} text-white rounded-lg font-medium transition mb-8 block text-center`}>
          {buttonText}
        </Button>
      )}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-green-400 mt-0.5"><BsCheck size={24} /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="sm:text-lg md:text-xl text-slate-400">
            Start free and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;