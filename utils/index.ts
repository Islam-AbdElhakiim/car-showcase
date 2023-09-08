import { API_KEY } from "@/secrets";
import { ImagesAPI_KEY } from "@/secrets";
import { CarCardProps, FilterProps } from "@/types";

export const fetchCars = async ({fuel = '', year = new Date().getFullYear(), manufacturer = '', model = '', limit = 10}:FilterProps) => {
  try {
    if (!API_KEY) {
      throw new Error("You've forgot to add your API Key!");
    }
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.log(error)
    throw new Error(`Error in fetching the API`);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarCardProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  // console.log(make, model.split(' ')[0])
  url.searchParams.append('customer', ImagesAPI_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  // url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;

} 


export const updateSearchParam = (key:string, value:string) => {
  const params = new URLSearchParams(window.location.search);

  params.set(key, value);

  return `${window.location.pathname}?${params.toString()}`;

}

export const updateSearchParams = (keys:string[], values:string[]) => {

  const params = new URLSearchParams(window.location.search);

  for(let i = 0; i < keys.length; i++) {
    params.set(keys[i], values[i]);
  }

  return `${window.location.pathname}?${params.toString()}`;

}

 