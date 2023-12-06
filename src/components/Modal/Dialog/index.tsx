import { useEffect, useRef } from 'react';
import s from './Dialog.module.scss';

export function Dialog({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && dialogRef.current) {
        onClose();
        document.body.style.overflow = '';
      }
    }

    function handleMousePressed(e: MouseEvent) {
      if (e.target === dialogRef.current && dialogRef.current) {
        dialogRef.current.close();
        onClose();
        document.body.style.overflow = '';
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMousePressed);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMousePressed);
    };
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className={s.dialog}>
      <div className={s.wrapper}>{children}</div>
    </dialog>
  );
}
