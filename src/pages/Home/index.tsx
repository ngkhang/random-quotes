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
        setLoader(false);
        const data = await response.json();
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
    <div className="flex-grow bg-white flex flex-col items-center pt-16">
      <h1 className="text-2xl mb-10">✨ Inspriational Quotes ✨</h1>
      <div className="flex-grow flex justify-center items-center">
        {
          quote && isLoader === false
            ? (
              <div className="flex flex-col items-center justify-between">
                <div className="flex-grow w-3/4 mb-20">
                  <CardQuote data={quote} />
                </div>
                <div className="mb-8">
                  <button onClick={handleRandomQuote} type="submit" className="px-20 py-3 text-base bg-pink-400/80 text-slate-50 rounded-lg">
                    New Quotes
                  </button>
                </div>
              </div>
            )
            : (
              <div className="">
                <Loader isOpen={isLoader} />
              </div>
            )
        }
      </div>
    </div>
  );
}

export default HomePage;
