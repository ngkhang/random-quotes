/* eslint-disable no-console */
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
    console.log('Parent');
    onCancel();
  };
  const handleClose2 = (e:React.MouseEvent) => {
    e.stopPropagation();
    console.log('Child');
    onCancel();
  };

  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 flex justify-center items-center`}>
      <div className="fixed inset-0 z-50 box-border bg-black/50" onClick={handleClose} aria-hidden />
      <div className="relative z-50 bg-blue-100 w-[85%] p-5 rounded-xl">
        <div className="flex justify-between items-center pb-3 mb-3 border-b-2 border-blue-400 border-dashed">
          <h3 className="uppercase text-lg flex-grow mr-2">{title}</h3>
          <button type="button" onClick={handleClose2}>{Icons.Close('text-3xl text-pink-500')}</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
