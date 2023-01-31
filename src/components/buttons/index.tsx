import * as React from 'react';
import { CompressButton } from './CompressButton';

function Popup(): JSX.Element{

  return <div className="inline-flex justify-between w-48 h-12 peer">
    <CompressButton />
  </div>
}

export default Popup;