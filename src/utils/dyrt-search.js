export const dyrtSearch = (nameString) => {
  const encodedQueryString = encodeURIComponent(nameString);
  const promise = fetch(
    `https://thedyrt.com/api/v4/autocomplete/campgrounds?q=${encodedQueryString}`
  );
  return promise;
};
