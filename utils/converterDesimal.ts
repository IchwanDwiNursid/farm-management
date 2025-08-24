export function convertDecimalToPlainObject(obj: any): any {
    if (obj === null || obj === undefined) return obj;
  
    // Deteksi Decimal secara fleksibel (duck typing)
    if (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.toNumber === 'function'
    ) {
      return obj.toNumber();
    }
  
    if (Array.isArray(obj)) {
      return obj.map(convertDecimalToPlainObject);
    }
  
    if (typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, convertDecimalToPlainObject(value)])
      );
    }
  
    return obj;
  }
  
