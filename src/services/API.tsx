export const GetRequest = async (url: string) => {
  const body = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fetchCall(url, body);
};

export const PostRequest = async (url: string, payload: object) => {
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  return await fetchCall(url, body);
};

const fetchCall = async (url: string, body = {}) => {
  const response = await fetch(url, body);

  return await response;
};
