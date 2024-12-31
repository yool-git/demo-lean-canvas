import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
function CanvasItem({ id, title, modify, subTitle, handleDelete }) {
  return (
    <Link
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      to={`/canvases/${id}`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">최근 수정일: {modify}</p>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {subTitle}
        </span>
      </div>
      <button
        className="absolute top-2 right-2 p-2 text-red-500 rounded-full"
        aria-label="Delete"
        onClick={handleDelete}
      >
        <FaTrash />
      </button>
    </Link>
  );
}

export default CanvasItem;
