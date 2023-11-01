import Axios from "axios";

// URA carpark details API
export async function getURAToken() {
  try {
    const tokenUrl =
      "https://www.ura.gov.sg/uraDataService/insertNewToken.action";
    const uraAccessKey = "2e927645-0436-427e-8431-d253c6e25ee4";

    const axiosConfig = {
      headers: {
        AccessKey: uraAccessKey,
      },
    };

    const response = await Axios.get(tokenUrl, axiosConfig);
    const responseData = response.data;
    const token = responseData.Result;

    console.log("URA Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
  }
}

export async function getURAToken2() {
  const tokenUrl =
    "https://www.ura.gov.sg/uraDataService/insertNewToken.action";
  const uraAccessKey = "2e927645-0436-427e-8431-d253c6e25ee4";

  Axios.get(tokenUrl, {
    params: {
      AccessKey: uraAccessKey,
    },
  })
    .then((response) => {
      // Handle the response data here
      console.log("Response data:", response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    });
}

export async function getCarparkDetails(token) {
  try {
    const getCarparkDetailsUrl =
      "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Details";
    const uraAccessKey = "2e927645-0436-427e-8431-d253c6e25ee4";
    const uraToken = token;

    const axiosConfig = {
      headers: {
        AccessKey: uraAccessKey,
        Token: uraToken,
      },
    };

    const response = await Axios.get(getCarparkDetailsUrl, axiosConfig);

    const responseData = response.data;
    // const jsonString = JSON.stringify(responseData, null, 2);

    // Write the JSON data to a file
    // fs.writeFile("car_park_details.json", jsonString, (err) => {
    //   if (err) {
    //     console.error("Error writing to file:", err);
    //   } else {
    //     console.log("JSON data has been saved to car_park_details.json");
    //   }
    // });
    console.log("Response Status:", responseData.Status);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// DataMall get availability API
export async function getAvailabilityDetails(token) {
  try {
    const getAvailabilityUrl =
      "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Availability";
    const uraAccessKey = "2e927645-0436-427e-8431-d253c6e25ee4";

    const axiosConfig = {
      headers: {
        AccessKey: uraAccessKey,
        Token: token,
      },
    };

    const response = await Axios.get(getAvailabilityUrl, axiosConfig);

    const responseData = response.data;
    // const jsonString = JSON.stringify(responseData, null, 2);
    // fs.writeFile("car_park_availability.json", jsonString, (err) => {
    //   if (err) {
    //     console.error("Error writing to file:", err);
    //   } else {
    //     console.log("JSON data has been saved to car_park_availability.json");
    //   }
    // });
    console.log("Response Status:", responseData.Status);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// var token = await getURAToken();
// getCarparkDetails(token);
// getAvailabilityDetails(token);
