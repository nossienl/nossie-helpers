export const setItemLocalStorage = (key: string, value: string) => {
  if (typeof Storage === 'undefined') {
    alert("Your browser doesn't support HTML5 LocalStorage");
    return false;
  }

  value = JSON.stringify(value);

  try {
    window.localStorage.setItem(key, value);
  } catch (exception) {
    alert('Local storage Quota exceeded! .Clearing localStorage');
    localStorage.clear();
    window.localStorage.setItem(key, value);
  }
  return true;
};

export const getItemLocalStorage = (key: string) => {
  if (typeof Storage === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(key) || '';
  return JSON.parse(value);
};
