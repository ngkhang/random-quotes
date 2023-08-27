import { useEffect, useState } from 'react';
import Apis from '~/apis';
import CardQuote from '~/components/generic/CardQuote';

import Quote from '~/types/Quote';

function HomePage() {
  const [quote, setQuote] = useState<Quote>();

  const handleRandomQuote = () => {
    fetch(Apis.GET_QUOTES)
      .then((res) => res.json())
      .then((data) => setQuote(data[0]));
  };

  useEffect(() => {
    handleRandomQuote();
  }, []);

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 py-5">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl py-8">
          ✨ Inspriational Quotes ✨
        </h1>
        <div className="w-3/4 mb-16">
          {quote && <CardQuote data={quote} />}
        </div>
        <div className="">
          <button onClick={handleRandomQuote} type="submit" className="px-16 py-3 text-base bg-white rounded-lg">
            New Quotes
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
