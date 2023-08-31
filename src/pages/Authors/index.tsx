import { useEffect, useState } from 'react';
import Apis from '~/apis';
import BtnScrollTop from '~/components/generic/BtnScrollTop';
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
    <div className="">
      <div className="w-full flex flex-col items-center bg-[#fafafa]">
        <h1>List Authors</h1>
        <div className="flex justify-center w-full">
          {
            authors
              ? (
                <div className="px-10 box-border overflow-hidden">
                  {
                    authors.map((author) => <CardAuthor key={author['_id']} author={author} />)
                  }
                </div>
              )
              : (
                <div className="mt-10">
                  <Loader isOpen={isLoader} />
                </div>
              )
          }
        </div>
      </div>
      <BtnScrollTop />
    </div>
  );
}

export default Authors;
