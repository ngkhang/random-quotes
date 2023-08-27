import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apis from '~/apis';
import Author from '~/types/Author';
import Quote from '~/types/Quote';
import Icons from '~/utils/helpers/icons';

function AuthorPage() {
  const { slugAuthor } = useParams();

  const [author, setAuthor] = useState<Author>();
  const [quotes, setQuotes] = useState<Quote[]>();

  const getAuthorbySlug = () => {
    fetch(Apis.GET_AUTHOR + slugAuthor)
      .then((res) => res.json())
      .then((data) => setAuthor(data.results[0]));
  };
  const getAllQuotesByAuthor = () => {
    fetch(Apis.ALL_QUOTES_BY_AUTHOR + slugAuthor)
      .then((res) => res.json())
      .then((data) => setQuotes(data.results));
  };

  useEffect(() => {
    getAuthorbySlug();
    getAllQuotesByAuthor();
  }, [slugAuthor]);

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 py-5">
      <div className="w-full px-5 box-border">
        {
          author && (
            <>
              <div className="mb-10 flex flex-col items-center">
                <h1 className="text-2xl pt-8 pb-5">{author.name}</h1>
                <div className="w-full">
                  <div className="flex items-center flex-wrap">
                    <a href={author.link} className="mr-4 p-1 rounded-full flex items-center bg-white">
                      <span className="p-2 rounded-full bg-slate-300 mr-2">{Icons.Wiki('text-base')}</span>
                      <span className="text-xs italic pr-2">{author.slug}</span>
                    </a>
                  </div>
                  <div className="">
                    <p className="">{author.description}</p>
                    <p className="">{author.bio}</p>
                    <span className="mt-5 italic text-sm text-end block">{`Lasted edite: ${author.dateModified}`}</span>
                  </div>
                </div>

              </div>
              <div className="">
                <div className="">
                  {
                    quotes && quotes.map((quote) => {
                      return (
                        <div key={quote['_id']} className="">
                          <div className="">
                            <p>{quote.content}</p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default AuthorPage;
