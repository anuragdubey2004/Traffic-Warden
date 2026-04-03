import React, { useState } from 'react';
import { LOGO_URL } from '../utils/Util';
import { useNavigate } from 'react-router-dom';
import Message from './Message';
import axios from 'axios';

const Home: React.FC = () => {

    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null); // // TS State: <string | null> means it can be text or empty

    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const handleContactClick = async () => {
        try {
            // simple get request
            const response = await axios.get(`${API_BASE_URL}/contact`);

            // Axios knows it's a success if status is 200-299
            console.log(response.data);
            navigate('/contact');
        } 
        catch (err: any) {
            //Axios catches 429 errors here automatically
            if(err.response && err.response.status === 429){
                setError(err.response.data.message); // "too many request"
            }
            else{
                setError("Something Went Wrong with the Server");
            }
        }
    };

  return (
    <div className="min-h-screen bg-[#0B1D3A] flex flex-col items-center justify-center px-6 py-16">

        { error && <Message text={error} onClose={() => setError(null)} />}

      {/* Top logos — left and right */}
      <div className="w-full max-w-5xl flex justify-between items-start mb-30">
        <img src={LOGO_URL} className="w-20 h-20 rounded-full shadow-lg" />
        <img src={LOGO_URL} className="w-20 h-20 rounded-full shadow-lg" />
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center text-center gap-7 max-w-2xl w-full">

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl font-black text-[#F5F0E8] leading-tight tracking-tight">
          Traffic <span className="text-[#C9A84C]">Warden</span>
        </h1>

        {/* Decorative divider */}
        <div className="w-14 h-1 bg-[#C9A84C] rounded-full" />

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-[#8A9BB5] max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt eius quibusdam magni excepturi earum ex nobis facere fuga
          eligendi eveniet.
        </p>

        {/* Button */}
        <button className="mt-2 px-14 py-4 bg-[#C9A84C] text-[#0B1D3A] text-xl font-bold uppercase tracking-widest rounded hover:scale-105 hover:shadow-xl transition-all duration-200"
            onClick={handleContactClick}>
          Contact With Us
        </button>

      </div>
    </div>
  )
}

export default Home;