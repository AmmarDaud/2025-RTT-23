import _ from 'lodash';

interface RawItem {
  id?: string;
  name?: string;
  price?: number;
  discountedPrice?: number;
}

interface ProcessedItem {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
}

export function processData(data: RawItem[]): ProcessedItem[] {
  const result: ProcessedItem[] = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (!item.id) {
      throw new Error('Data item is missing an id');
    }

    const processedItem: ProcessedItem = {
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price ?? 0,
      discountedPrice: item.discountedPrice ?? item.price ?? 0,
    };

    result.push(processedItem);
  }

  return _.orderBy(result, ['discountedPrice'], ['asc']);
}