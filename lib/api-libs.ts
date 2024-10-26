export const getAnimeResponse = async (resource: string, query?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnime = async (
  resource: string,
  objectProperty: string
) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item: any) => item[objectProperty]);
};

// export const reproduce = (data, gap) => {
//   const first = ~~(Math.random() * (data.length - gap) + 1);
//   const last = first + gap;

//   const response = {
//     data: data.slice(first, last),
//   };

//   return response;
// };

export const reproduce = (data: any, gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
