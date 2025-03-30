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
    <div id={id} className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-medium border border-bg-secondary">
      <div className="p-6">
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full transition-all duration-300">
          <img 
            src={icon} 
            alt={title} 
            width={24} 
            height={24}
            className="text-primary"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-primary text-center mb-3">{title}</h3>
        
        <p className="text-secondary mb-6 text-center text-sm">{description}</p>
        
        <div className="text-center">
          <Link 
            href={`/services#${id}`} 
            className="inline-block px-5 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
