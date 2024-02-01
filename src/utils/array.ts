type Objeto = {
  [key: string]: unknown;
};

export function sortByProperty<T extends Objeto>(array: T[], property: keyof T): T[] {
  return array.slice().sort((a, b) => {
    const valueA = a[property] as string | number | boolean;
    const valueB = b[property] as string | number | boolean;

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });
}

export function reorder<T extends any>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};