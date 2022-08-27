import { BASE_IMAGE_PATH } from '../constants/app';

export function formatImageUrl(path: string, size = 500) {
  return `${BASE_IMAGE_PATH}/w${size}/${path}`;
}
