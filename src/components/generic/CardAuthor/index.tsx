import { Link } from 'react-router-dom';
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
      <div className="w-full rounded-lg mb-8 bg-white shadow-xl p-4 md:p-6 box-border hover:scale-110 transition-transform cursor-pointer" onClick={handleModal} aria-hidden>
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl mb-3 md:mb-5">{author.name}</h3>
          <p className="text-sm md:text-base line-clamp-2 mb-6 md:mb-10">{author.bio}</p>
          <span className="text-xs italic text-end">{`Edited: ${author.dateModified}`}</span>
        </div>
      </div>
      <Modal title={author.name} isOpen={open} onCancel={handleClose}>
        <div className="">
          <p className="italic text-sm md:text-base mb-7 rounded-full bg-pink-200/80 py-1 px-3 md:py-2 box-border">{author.description}</p>
          <p className="tracking-wide line-clamp-4 mb-16 md:mb-20 break-words md:text-lg">{author.bio}</p>
          <div className="flex items-center justify-between">
            <a href={author.link} className="flex items-center rounded-full bg-slate-200/50">
              <span className="rounded-full p-1 md:p-2 inline-block mr-1">{Icons.Wiki()}</span>
              <span className="text-xs md:text-sm italic pr-2">{author.name}</span>
            </a>
            <Link to={`../author/${author.slug}`} className="flex items-center justify-end">
              <span className="text-sm md:text-base mr-1">Details</span>
              <span>{Icons.External('text-xl')}</span>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default CardAuthor;
