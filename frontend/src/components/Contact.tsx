import { useNavigate } from 'react-router-dom';

const Contact = () => {
const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1D3A] flex flex-col items-center justify-center px-6 py-16 text-white text-center">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Contact <span className="text-[#C9A84C]">Details</span>
      </h1>
      
      {/* Divider */}
      <div className="w-14 h-1 bg-[#C9A84C] mb-8 rounded-full"></div>

      {/* Information Section */}
      <div className="space-y-4 mb-12">
        <p className="text-xl font-semibold">TrafficWarden Ltd.</p>
        <p className="text-[#8A9BB5]">123 Tech Park, Ayodhya, Uttar Pradesh</p>
        <p className="text-[#8A9BB5]">Email: hello@trafficwarden.com</p>
        <p className="text-[#8A9BB5]">Phone: +91 123456789</p>
      </div>

      {/* Single Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="border border-[#C9A84C] text-[#C9A84C] px-10 py-2 rounded-full font-bold hover:bg-[#C9A84C] hover:text-black transition duration-300"
      >
        BACK
      </button>

    </div>
  );
};

export default Contact;