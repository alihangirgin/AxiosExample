import axios from "axios";

const searchImages = async (value) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID vyU_hJTkT1ozRlJ2THobQ9rR9sPzzkZNFI_KgQtvjsA",
    },
    params: {
      query: value,
    },
  });
  console.log(response.data);
  return response.data.results;
};

export default searchImages;