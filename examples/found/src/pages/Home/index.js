import style from './index.scss';

import Worker from './my.worker';
import animated from './animated-overlay.gif';
import angleDown from './angle-down-solid.svg';

const worker = new Worker();

export default () => {
  worker.postMessage({ message: 'rendered' });
  return (
    <div className={style.main}>
      <p>
        Hello2 <img src={angleDown} style={{ width: '1em' }} />
        World <a href="https://true.io">True IO</a>
      </p>
      <p>
        Ok again <img src={animated} />
      </p>
    </div>
  );
};