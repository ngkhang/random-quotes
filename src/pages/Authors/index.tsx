import { useEffect, useState } from 'react';
import Apis from '~/apis';
import CardAuthor from '~/components/generic/CardAuthor';
import Loader from '~/components/generic/Loader';
import Author from '~/types/Author';

function Authors() {
  const [authors, setAuthors] = useState<Author[]>();
  const [isLoader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    fetch(Apis.LIST_AUTHORS)
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data.results);
        setLoader(false);
      });
  }, []);

  return (
    <div className="py-5">
      <div className="w-full">
        <h1 className="text-2xl py-8 text-center">🔖List Authors🔖</h1>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 px-2 box-border">
            {
              authors
                ? authors.map((author) => <CardAuthor key={author['_id']} author={author} />)
                : <Loader isOpen={isLoader} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;
