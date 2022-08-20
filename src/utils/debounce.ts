export function debounce(fn: () => void, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function execute(this: any, ...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
