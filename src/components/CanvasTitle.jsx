import { useEffect, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

function CanvasTitle({ value, onChange }) {
  const [isShowTitleModify, setIsShowTitleModify] = useState(false);

  const handleModifyToggle = () => {
    setIsShowTitleModify(!isShowTitleModify);
  };

  const handleTitleSave = () => {
    // setTitle(editingTitle);
    onChange(title);
    setIsShowTitleModify(!isShowTitleModify);
  };

  const [title, setTitle] = useState(value);

  useEffect(() => {
    setTitle(value);
  }, [value]);
  return (
    <div className="flex items-center justify-center mb-10">
      {isShowTitleModify ? (
        <div className="flex items-center">
          <input
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={handleTitleSave}
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center ">{title}</h1>
          <button
            className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Edit title"
            onClick={handleModifyToggle}
          >
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
}

export default CanvasTitle;
