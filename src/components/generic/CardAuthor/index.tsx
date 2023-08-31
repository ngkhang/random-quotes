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
      <div className="w-full rounded-lg mb-8 bg-white shadow-xl p-4 box-border hover:scale-110 transition-transform" onClick={handleModal} aria-hidden>
        <div className="flex flex-col">
          <h3 className="text-lg mb-3">{author.name}</h3>
          <p className="text-sm line-clamp-2 mb-6">{author.bio}</p>
          <span className="text-xs italic text-end">{`Edited: ${author.dateModified}`}</span>
        </div>
      </div>
      <Modal title={author.name} isOpen={open} onCancel={handleClose}>
        <div className="">
          <div className="italic text-sm mb-4">{author.description}</div>
          <p className="tracking-wide line-clamp-4 mb-12 break-words">{author.bio}</p>
          <div className="flex items-center justify-between">
            <a href={author.link} className="flex items-center bg-white rounded-full">
              <span className="bg-slate-200/50 rounded-full p-1 inline-block mr-1">{Icons.Wiki()}</span>
              <span className="text-xs italic pr-2">{author.name}</span>
            </a>
            <Link to={`../author/${author.slug}`} className="flex items-center justify-end">
              <span className="text-sm mr-1">Details</span>
              <span>{Icons.External('text-xl')}</span>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default CardAuthor;
