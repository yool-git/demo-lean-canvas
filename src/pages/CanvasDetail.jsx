import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { getCanvasById, updateCanvas, updateTitle } from '../api/canvas';
function CanvasDetail() {
  const { id } = useParams(); //param
  // const [searchParams] = useSearchParams.get('keyword'); //querystring
  // const location = useLocation(); //#
  const [canvas, setCanvas] = useState();

  const handleUpdateTitle = async title => {
    try {
      await updateTitle(id, title);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleCanvasChange = async updatedCanvas => {
    try {
      await updateCanvas(id, updatedCanvas);
      setCanvas(updatedCanvas);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <CanvasTitle value={canvas?.title} onChange={handleUpdateTitle} />
      <LeanCanvas canvas={canvas} onCanvasChange={handleCanvasChange} />
    </div>
  );
}

export default CanvasDetail;
