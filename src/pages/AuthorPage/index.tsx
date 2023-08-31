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
      <div className="flex justify-center flex-grow bg-slate-100 pt-5">
        <div className="w-full box-border flex flex-col">
          {
            author && (
              <>
                <div className="bg-white px-5 box-border mb-5 flex flex-col items-center">
                  <h1 className="pb-8 mt-12">{author.name}</h1>
                  <div className="w-full mb-8">
                    <div className="flex items-center flex-wrap mb-3">
                      <a href={author.link} className="mr-2 p-1 rounded-full flex items-center bg-slate-200">
                        <span className="p-1 rounded-full mr-2">{Icons.Wiki('text-base')}</span>
                        <span className="text-xs italic pr-2">{author.name}</span>
                      </a>
                    </div>
                    <div className="">
                      <p className="text-end text-base italic mb-5">{author.description}</p>
                      <p className="text-lg leading-8 break-words mb-10 first-letter:text-2xl indent-5">{author.bio}</p>
                      <p className="italic text-sm text-end">{`Lasted edite: ${author.dateModified}`}</p>
                    </div>
                  </div>
                </div>
                <div className={`${isShow && 'flex-grow'} flex flex-col`}>
                  <div className="flex items-center justify-between py-2 mx-5 mb-4">
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
                        <div className="overflow-hidden box-border px-6">
                          {
                            quotes.map((quote) => {
                              return (
                                <div key={quote['_id']} className="p-3 my-5 bg-white rounded-lg shadow-lg hover:scale-105">
                                  <p className="text-base first-letter:text-2xl mb-3 tracking-wide indent-4">{quote.content}</p>
                                  <p className="text-end text-xs italic mr-2">
                                    {`#${quote.tags.join('  #').replace(' ', '')}`}
                                  </p>
                                </div>
                              );
                            })
                          }
                        </div>
                      )
                      : (
                        <div className="my-10 flex-grow flex items-center justify-center">
                          <Loader isOpen={isShow} />
                        </div>
                      )
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
