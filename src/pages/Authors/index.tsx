import { useEffect, useState } from 'react';
import Apis from '~/apis';
import BtnScrollTop from '~/components/generic/BtnScrollTop';
import CardAuthor from '~/components/generic/CardAuthor';
import Loader from '~/components/generic/Loader';
import Author from '~/types/Author';

interface ListAuthors {
  'count': number,
  'totalCount': number
  'page': number,
  'totalPages': number,
  'lastItemIndex': number | null,
  'results': Author[] | []
}

function Authors() {
  const [authors, setAuthors] = useState<ListAuthors>();
  const [isLoader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number[]>();

  const hanlePageAuthor = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setLoader(true);
    fetch(`${Apis.LIST_AUTHORS}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
        const listPage = [];
        for (let i = 0; i < data.totalPages; i += 1) {
          listPage.push(i);
        }
        setPages(listPage);
        setLoader(false);
      });
  }, [page]);

  return (
    <div className="bg-[#fafafa] flex-grow">
      <div className="w-full flex flex-col items-center">
        <h1>List Authors</h1>
        <div className="w-full md:w-mainSize flex justify-center">
          {
            authors && authors.results && !isLoader
              ? (
                <div className="px-10 md:px-20 md:py-5 box-border overflow-hidden">
                  {
                    authors.results.map((author) => <CardAuthor key={author['_id']} author={author} />)
                  }
                </div>
              )
              : <Loader isOpen={isLoader} />
          }
        </div>
        {
          authors && pages && (
            <div className="flex items-center justify-center mb-10">
              <button disabled={page < 1} className="btnPagination" type="button" onClick={() => hanlePageAuthor(1)}>&laquo;</button>
              {
                pages.slice(pages[page - 1], pages[page + 3]).map((item) => {
                  return (
                    <button key={item + 1} className={`btnPagination ${page === item + 1 && 'border-pink-400'}`} type="button" onClick={() => hanlePageAuthor(item + 1)}>{item + 1}</button>
                  );
                })
              }
              <button disabled={page >= pages[pages.length - 1]} className="btnPagination" type="button" onClick={() => hanlePageAuthor(pages[pages.length - 1])}>&raquo;</button>
            </div>
          )
        }
      </div>
      <BtnScrollTop />
    </div>
  );
}

export default Authors;
