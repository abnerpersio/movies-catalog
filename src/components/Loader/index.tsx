import { createPortal } from 'react-dom';

import { Overlay } from './styles';

type Props = {
  isLoading: boolean;
};

export function Loader({ isLoading }: Props) {
  if (!isLoading) return null;

  return createPortal(
    <Overlay>
      <div className="load">
        <div />
        <div />
      </div>
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
