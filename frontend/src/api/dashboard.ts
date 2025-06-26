import axios from "axios";

const APP_URL = "http://localhost:5000";

const getDashboardStatistics = async (token: string) => {
  try {
    const res = await axios.get(`${APP_URL}/api/journals/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

export { getDashboardStatistics };
