import { canvases } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

//목록
export async function getCanvaes(params) {
  // return canvases.get('/', { params });
  const payload = Object.assign(
    {
      _sort: 'modify',
      _order: 'desc',
    },
    params,
  );

  const { data } = await canvases.get('/', { params: payload });
  return data;
}

//등록 post
export function createCanvases() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    modify: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    subTitle: '신규',
  };
  return canvases.post('/', newCanvas);
}

//삭제
export async function deleteCanvaes(id) {
  await canvases.delete(`/${id}`);
}

//가져오기 by 특정 아이디
export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

//patch - 데이터 일부만 수정
export async function updateTitle(id, title) {
  await canvases.patch(`/${id}`, { title });
}

//put - 데이터 전체 수정
export async function updateCanvas(id, canvas) {
  await canvases.put(`/${id}`, canvas);
}
