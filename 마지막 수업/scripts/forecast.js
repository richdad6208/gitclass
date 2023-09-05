const key = "cPytFM6zId3CS1tz0aAYkdCqHFJk7XAG";

//도시정보 가져오기

const getCity = async (city) => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(
    "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=cPytFM6zId3CS1tz0aAYkdCqHFJk7XAG&q=busan"
  );
  const data = await response.json();
  return data[0];
};

const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data[0]);
  return data;
};

//   https://trends.google.co.kr/trends/explore?q=명언&date=now%201-d&geo=JP&hl=ko
