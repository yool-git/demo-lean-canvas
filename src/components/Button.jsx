import { FaLessThanEqual } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa6';

function Button({ loding = false, onClick, className, children }) {
  const clazz = [
    className,
    'bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
  ].join(' ');

  const handleClick = () => {
    if (loding) return;

    onClick();
  };
  console.log('loading', loding);
  return (
    <button className={clazz} onClick={handleClick} disabled={loding}>
      <span className="flex items-center justify-center">
        {loding && <FaSpinner className="animate-spin" />}
        {children}
      </span>
    </button>
  );
}

export default Button;
