import CardAuthor from '~/components/generic/CardAuthor';
import Author from '~/types/Author';

const listAuthor: Author[] = [
  {
    '_id': '76ISAUD3P5',
    'name': '14th Dalai Lama',
    'bio': 'The 14th Dalai Lama (né Lhamo Thondup), known as Gyalwa Rinpoche to the Tibetan people, is the current Dalai Lama, the highest spiritual leader and former head of state of Tibet. Born on 6 July 1935, or in the Tibetan calendar, in the Wood-Pig Year, 5th month, 5th day. He is considered a living Bodhisattva; specifically, an emanation of Avalokiteśvara in Sanskrit and Chenrezig in Tibetan.',
    'description': 'Current foremost spiritual leader of Tibet',
    'link': 'https://en.wikipedia.org/wiki/14th_Dalai_Lama',
    'quoteCount': 0,
    'slug': '14th-dalai-lama',
    'dateModified': '2022-07-06',
  },
  {
    '_id': '76ISAUD887',
    'name': '14th Dalai Lama',
    'bio': 'The 14th Dalai Lama (né Lhamo Thondup), known as Gyalwa Rinpoche to the Tibetan people, is the current Dalai Lama, the highest spiritual leader and former head of state of Tibet. Born on 6 July 1935, or in the Tibetan calendar, in the Wood-Pig Year, 5th month, 5th day. He is considered a living Bodhisattva; specifically, an emanation of Avalokiteśvara in Sanskrit and Chenrezig in Tibetan.',
    'description': 'Current foremost spiritual leader of Tibet',
    'link': 'https://en.wikipedia.org/wiki/14th_Dalai_Lama',
    'quoteCount': 0,
    'slug': '14th-dalai-lama',
    'dateModified': '2022-07-06',
  },
];

function Authors() {
  return (
    <div className="min-h-screen py-5">
      <div className="w-full">
        <h1 className="text-2xl py-8 text-center">🔖List Authors🔖</h1>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 px-2 box-border">
            {
              listAuthor.map((author) => {
                return <CardAuthor key={author['_id']} author={author} />;
              })
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default Authors;
