import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
}

const ServiceCard = ({ title, description, icon, id }: ServiceCardProps) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-navy-blue rounded-full">
          <img 
            src={icon} 
            alt={title} 
            width={32} 
            height={32}
            className="text-white"
          />
        </div>
        <h3 className="text-xl font-bold text-navy-blue text-center mb-3">{title}</h3>
        <p className="text-navy-text mb-4">{description}</p>
        <div className="text-center">
          <Link 
            href={`/services#${id}`} 
            className="inline-block px-6 py-2 bg-light-blue text-white rounded-md hover:bg-navy-blue transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
