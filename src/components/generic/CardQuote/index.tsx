import { Link } from 'react-router-dom';
import Icons from '~/utils/helpers/icons';
import Quote from '~/types/Quote';

// const fakeQuote = {
//   '_id': 'e1la14gLuob',
//   'content': 'Trouble is only opportunity in work clothes.',
//   'author': 'Henry J. Kaiser',
//   'tags': ['Famous Quotes'],
//   'authorSlug': 'henry-j-kaiser',
//   'length': 44,
//   'dateAdded': '2019-02-17',
//   'dateModified': '2023-04-14',
// };

function CardQuote({ data }: {data:Quote}) {
  return (
    <div className="w-full shadow-xl rounded-xl hover:-rotate-2 transition-transform ease-in-out duration-200">
      <div className="bg-white relative p-8 rounded-t-xl ">
        <span>
          {Icons.QuotesL('absolute -left-9 -top-8 text-7xl text-pink-400/70')}
        </span>
        <p className="indent-2 first-letter:text-pink-500 first-letter:text-5xl first-letter:font-bold text-lg whitespace-pre-line break-words leading-8">
          {data.content}
        </p>
      </div>
      <div className="bg-blue-200/80 rounded-b-xl p-5 text-end text-base tracking-wide">
        <Link to={`/author/${data.authorSlug}`} className="">{data.author}</Link>
      </div>
    </div>
  );
}

export default CardQuote;
