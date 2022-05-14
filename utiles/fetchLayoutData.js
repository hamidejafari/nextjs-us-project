import axios from "axios";

const fetchLayoutData = async () => {
  const response = await axios.get(
    process.env.BACKEND_SERVER_URL + "/api/site/layout-data"
  );
  return response?.data;
};

export default fetchLayoutData;
