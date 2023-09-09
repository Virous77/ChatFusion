export const apiPostParams = (data: any) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
