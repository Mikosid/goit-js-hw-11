export function request(inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '44836601-5a8b44801a2932315159889f0';
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
