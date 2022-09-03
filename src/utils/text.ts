const MAX_NAME_SIZE = 10;

export function formatMovieName(name: string) {
  if (name.length <= MAX_NAME_SIZE) return name;
  const ellipsis = '...';
  return `${name.substring(0, MAX_NAME_SIZE)}${ellipsis}`;
}
