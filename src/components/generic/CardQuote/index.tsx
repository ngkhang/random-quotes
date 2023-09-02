import { Link } from 'react-router-dom';
import Icons from '~/utils/helpers/icons';
import Quote from '~/types/Quote';

function CardQuote({ data }: {data:Quote}) {
  return (
    <div className="w-full drop-shadow-2xl rounded-xl hover:-rotate-2 transition-transform ease-in-out duration-200">
      <div className="bg-white relative p-8 rounded-t-xl ">
        <span>
          {Icons.QuotesL('absolute -left-6 -top-5 text-5xl md:text-7xl md:-left-9 md:-top-8 text-pink-400/70')}
        </span>
        <p className="indent-2 first-letter:text-pink-500 first-letter:text-5xl first-letter:font-bold text-lg md:text-xl whitespace-pre-line break-words leading-8 md:leading-8">
          {data.content}
        </p>
      </div>
      <div className="bg-blue-200/80 rounded-b-xl p-5 text-end text-base md:text-xl tracking-wide">
        <Link to={`/author/${data.authorSlug}`} className="">{data.author}</Link>
      </div>
    </div>
  );
}

export default CardQuote;
