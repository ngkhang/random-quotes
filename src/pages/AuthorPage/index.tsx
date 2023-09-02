import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apis from '~/apis';
import BtnScrollTop from '~/components/generic/BtnScrollTop';
import Loader from '~/components/generic/Loader';
import Author from '~/types/Author';
import Quote from '~/types/Quote';
import Icons from '~/utils/helpers/icons';

function AuthorPage() {
  const { slugAuthor } = useParams();
  const [author, setAuthor] = useState<Author>();
  const [quotes, setQuotes] = useState<Quote[]>();
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    fetch(Apis.GET_AUTHOR + slugAuthor)
      .then((res) => res.json())
      .then((data) => setAuthor(data.results[0]));
  }, [slugAuthor]);

  useEffect(() => {
    if (isShow) {
      fetch(Apis.ALL_QUOTES_BY_AUTHOR + slugAuthor)
        .then((res) => res.json())
        .then((data) => setQuotes(data.results));
    } else setQuotes([]);
  }, [isShow, slugAuthor]);

  return (
    <>
      <div className="flex justify-center flex-grow pt-5">
        <div className="w-full box-border flex flex-col items-center">
          {
            author && (
              <>
                <div className="bg-white px-6 md:px-0 box-border mb-5 flex flex-col items-center">
                  <h1 className="w-full md:w-mainSize mt-12">{author.name}</h1>
                  <div className="w-full md:w-mainSize mb-8">
                    <div className="flex items-center flex-wrap mb-3">
                      <a href={author.link} className="mr-2 p-1 rounded-full flex items-center bg-slate-200/70">
                        <span className="p-1 rounded-full mr-2">{Icons.Wiki('text-base md:text-lg')}</span>
                        <span className="text-xs md:text-base italic pr-2">{author.name}</span>
                      </a>
                    </div>
                    <div className="">
                      <p className="text-end text-base italic mb-5">{author.description}</p>
                      <p className="text-lg leading-8 break-words mb-10 box-border first-letter:text-pink-500 first-letter:text-4xl md:first-letter:text-5xl indent-5 rounded-lg bg-slate-100 p-4 md:p-5 drop-shadow-lg md:mx-10">{author.bio}</p>
                      <p className="italic text-sm md:text-base text-end">{`Lasted edite: ${author.dateModified}`}</p>
                    </div>
                  </div>
                </div>
                <div className={`${isShow && 'flex-grow'} flex flex-col items-center bg-slate-100 w-full`}>
                  <div className="w-full md:w-mainSize flex items-center justify-between mt-8 mb-4 md:mt-10 md:mb-8 px-5">
                    <span className="flex-grow text-xl">{`List Quotes: ${author.quoteCount}`}</span>
                    {
                      author.quoteCount > 0 && (
                        <button className="text-2xl" type="button" onClick={() => setShow((isShow) => !isShow)}>
                          {isShow ? Icons.ArrowUp() : Icons.ArrowDown() }
                        </button>
                      )
                    }
                  </div>
                  {
                    isShow && quotes && quotes.length > 0
                      ? (
                        <div className="w-full md:w-mainSize overflow-hidden box-border px-6 md:px-12">
                          {
                            quotes.map((quote) => {
                              return (
                                <div key={quote['_id']} className="p-3 md:p-5 box-border my-5 bg-white rounded-lg shadow-lg hover:scale-105">
                                  <p className="text-base md:text-lg first-letter:text-2xl md:first-letter:text-4xl mb-3 md:mb-8 tracking-wide">{quote.content}</p>
                                  <p className="text-end text-xs md:text-base italic mr-2">
                                    {`#${quote.tags.join('  #').replace(' ', '')}`}
                                  </p>
                                </div>
                              );
                            })
                          }
                        </div>
                      )
                      : <Loader isOpen={isShow} />
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
      <BtnScrollTop />
    </>
  );
}

export default AuthorPage;
