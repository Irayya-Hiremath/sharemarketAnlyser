
import axios from "axios";
export async function addInventoryWhileUpdate() {
    const url =
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary";

    const headerObject = {
      headers: {
        "X-RapidAPI-Key": "b487e1fd5fmshde7e9a1f98eca0ep11f8f7jsnbdb5ba26c90b",
        "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    };

    return axios
      .get(
        url,
        {
          symbol: "AMRN",
          region: "US",
        },
        headerObject
      )
      .then((response) => response.data.data)
      .catch((error) => {
        if (error.response) {
          console.info("Request made and server responded");
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.info("The request was made but no response was received");
          console.error(error.request);
        } else {
          console.info(
            "Something happened in setting up the request that triggered an Error"
          );
          console.error("Error", error.message);
        }
        // throw new Error(error);
      });
  }