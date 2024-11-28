// ذخیره کردن آیتم به صورت JSON در localStorage
const setItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // بازیابی آیتم از localStorage و تبدیل آن به شیء (در صورت وجود)
  const getItem = <T>(key: string): T | false => {
    const result = localStorage.getItem(key);
    if (result && result !== "undefined") {
      return JSON.parse(result) as T;
    }
    return false;
  };
  
  // بازیابی آیتم به صورت خام از localStorage
  const getItemGeneric = (key: string): string | false => {
    const result = localStorage.getItem(key);
    if (result) return result;
    return false;
  };
  
  // ذخیره کردن آیتم به صورت رشته در localStorage
  const setItemGeneric = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };
  
  // حذف آیتم از localStorage
  const removeItem = (key: string): boolean => {
    if (getItem(key) === false) return false;
    localStorage.removeItem(key);
    return true;
  };
  
  // پاک کردن تمام داده‌ها از localStorage
  const clearStorage = (): void => {
    localStorage.clear();
  };
  
  export {
    setItem,
    getItem,
    removeItem,
    clearStorage,
    setItemGeneric,
    getItemGeneric,
  };
  