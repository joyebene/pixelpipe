import { Code, ImageDown, Mail, Webhook } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: ImageDown,
    iconColor: 'blue' as const,
    title: 'Instant Image Sharing',
    description: 'Upload screenshots and get shareable links instantly. Control visibility, set expiration times, and collaborate with your team effortlessly.',
    features: [
      'Drag-and-drop upload with instant links',
      'Public or private sharing options',
      'Automatic expiration and cleanup'
    ]
  },
  {
    icon: Mail,
    iconColor: 'purple' as const,
    title: 'Temporary Email Testing',
    description: 'Generate disposable email addresses for testing authentication flows, notifications, and email integrations without cluttering your inbox.',
    features: [
      'Instant inbox creation with unique addresses',
      'Real-time email reception and viewing',
      'Team-wide inbox sharing'
    ]
  },
  {
    icon: Webhook,
    iconColor: 'green' as const,
    title: 'Webhook Inspector',
    description: 'Debug webhooks in real-time with detailed request inspection. Capture headers, payloads, and query parameters instantly.',
    features: [
      'Real-time request capture and inspection',
      'Detailed payload and header analysis',
      'Shareable endpoints for team debugging'
    ]
  },
  {
    icon: Code,
    iconColor: 'orange' as const,
    title: 'Developer Utilities',
    description: 'Access essential development tools for formatting, encoding, and transforming data. Everything you need without leaving your workflow.',
    features: [
      'JSON formatter and validator',
      'JWT decoder and Base64 encoding',
      'Hash generators and more'
    ]
  }
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to build and ship
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400">
            Professional tools that integrate seamlessly into your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;