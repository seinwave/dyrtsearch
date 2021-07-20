export const dyrtSearch = (nameString) => {
  console.log("dyrtsearch firing", nameString);
  const encodedQueryString = encodeURIComponent(nameString);
  const promise = fetch(
    `https://tedyrt.com/api/v4/autocomplete/campgrounds?q=${encodedQueryString}`
  );
  return promise;
};
