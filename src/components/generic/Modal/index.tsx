import React from 'react';
import Icons from '~/utils/helpers/icons';

interface typeModal{
  title: string,
  children: React.ReactElement,
  isOpen: boolean,
  onCancel: () => void,
}

function Modal({
  title, children, isOpen, onCancel,
} : typeModal) {
  const handleClose = (e:React.MouseEvent) => {
    e.stopPropagation();
    onCancel();
  };
  const handleClose2 = (e:React.MouseEvent) => {
    e.stopPropagation();
    onCancel();
  };

  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 flex justify-center items-center`}>
      <div className="fixed inset-0 z-50 box-border bg-black/30 backdrop-blur-sm" onClick={handleClose} aria-hidden />
      <div className="relative z-50 bg-[#fafafa] w-[85%] p-5 rounded-xl shadow-md shadow-blue-400">
        <div className="flex justify-between items-center pb-3 mb-3 border-b-2 border-blue-400 border-dashed">
          <h3 className="uppercase text-lg flex-grow mr-2">{title}</h3>
          <button type="button" onClick={handleClose2}>{Icons.Close('text-4xl text-pink-600')}</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
