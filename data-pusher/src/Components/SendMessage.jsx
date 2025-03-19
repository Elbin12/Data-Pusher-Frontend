import { CircleX } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../axios';

function SendMessage({ account, setPopup }) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    setError('');
    setResponseMessage(null);

    if (!message.trim()) {
      setError('Message cannot be empty');
      return;
    }

    setLoading(true);

    console.log(account?.app_secret_token, 'tokennnn')
    
    try {
      const response = await axiosInstance.post(
        'server/incoming_data/',
        { 'data':message },  
        {
          headers: {
            'Content-Type': 'application/json',
            'CL-X-TOKEN': account?.app_secret_token,
          },
        }
      );

      setResponseMessage('Message sent successfully!');
    } catch (error) {
      setError('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 flex flex-col space-y-9 items-center pt-20 absolute  p-5 rounded-lg">
      <div className="w-full flex justify-around p-3">
        <h1 className="text-2xl text-white">Send Message to all destinations</h1>
        <CircleX className="text-white cursor-pointer" onClick={() => setPopup('')} />
      </div>
      
      <div className="flex flex-col gap-2 w-full">
        <textarea
          className="w-full bg-transparent border border-gray-400 rounded-lg px-3 py-2 text-white"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {responseMessage && <p className="text-green-500 text-sm">{responseMessage}</p>}

        <button
          className="bg-violet-950 w-full py-2 rounded font-semibold text-white flex justify-center items-center"
          onClick={handleSendMessage}
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          ) : (
            'Send'
          )}
        </button>
      </div>
    </div>
  );
}

export default SendMessage;

