import { useState } from 'react';
import Author from '~/types/Author';
import Icons from '~/utils/helpers/icons';
import Modal from '~/components/generic/Modal';

function CardAuthor({ author }: { author: Author }) {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full rounded-lg mb-5 bg-pink-300/60 p-3 box-border hover:scale-110 transition-transform flex flex-col">
        <div className="p-2 mb-4 bg-white rounded-md">
          <div className="flex justify-between items-center mb-2">
            <button onClick={handleModal} type="button" className="text-lg font-semibold">{author.name}</button>
            <a href={author.link} target="_blank" rel="noreferrer" className="mr-2">{Icons.Wiki('text-2xl')}</a>
          </div>
          <p className="text-xs line-clamp-1">{author.description}</p>
        </div>
        <div className="">
          <p className="text-sm line-clamp-2 leading-6 tracking-wider mb-6">{author.bio}</p>
          <span className="inline-block w-full text-end text-sm italic rounded-b-md">{`Modefied: ${author.dateModified}`}</span>
        </div>
      </div>
      <Modal title={author.name} isOpen={open} onCancel={handleClose}>
        <div className="">
          <div className="mb-1">{author.description}</div>
          <div className="flex items-center flex-wrap mb-4">
            <a href={author.link} className="flex items-center p-1 bg-white rounded-full">
              <span className="p-1 inline-block rounded-full bg-pink-400/50 mr-1">{Icons.Wiki()}</span>
              <span className="text-xs italic pr-1">{author.slug}</span>
            </a>
          </div>
          <div className="">
            <p className="tracking-wide">{author.bio}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default CardAuthor;
