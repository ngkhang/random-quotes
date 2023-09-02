import { useEffect, useState } from 'react';
import Apis from '~/apis';
import CardQuote from '~/components/generic/CardQuote';
import Loader from '~/components/generic/Loader';
import Quote from '~/types/Quote';

function HomePage() {
  const [quote, setQuote] = useState<Quote>();
  const [isLoader, setLoader] = useState(true);

  const handleRandomQuote = async () => {
    setLoader(true);
    try {
      const response = await fetch(Apis.GET_QUOTES);
      if (response.status) {
        const data = await response.json();
        setLoader(false);
        setQuote(data[0]);
      } else console.log(`HTTP Response Code: ${response.status}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRandomQuote();
  }, []);

  return (
    <div className="flex-grow bg-white flex flex-col items-center">
      <h1 className="md:mb16">✨ Quotes Inspirational ✨</h1>
      <div className="w-full md:w-mainSize flex justify-center items-center">
        {
          quote && isLoader === false
            ? (
              <div className="flex flex-col items-center justify-between">
                <div className="flex-grow px-12 md:px-10 box-border mb-14 md:mb-20">
                  <CardQuote data={quote} />
                </div>
                <div className="mb-6">
                  <button onClick={handleRandomQuote} type="submit" className="px-20 md:px-24 py-3 text-base md:font-medium md:text-lg bg-pink-500 text-slate-50 drop-shadow-md hover:drop-shadow-xl transition-shadow rounded-lg">
                    New Quotes
                  </button>
                </div>
              </div>
            )
            : <Loader isOpen={isLoader} />
        }
      </div>
    </div>
  );
}

export default HomePage;
