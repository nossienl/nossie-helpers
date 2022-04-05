export const getElement = (element: string) => {
    return document.body.querySelector(element) as HTMLElement;
}; 

export const getElements = (element: string) => {
    return Array.from(document.body.querySelectorAll(element));
}; 