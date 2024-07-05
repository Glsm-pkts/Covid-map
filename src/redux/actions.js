import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const covidUrl= 'https://covid-19-statistics.p.rapidapi.com/reports';

const headers = {
    'x-rapidapi-key': '0d8e5a56admsh3ab38ef73bdc313p13f45ejsnbb73a6966989',
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
  };

export const getData = createAsyncThunk("covid/getData", async({code, query}) =>{
  console.log(query);
    //api'a gönderilecek parametreleri hazırla
    const params = {iso: code, q: query};

// isCode'a göre covid verileri al
const res = await axios.get(covidUrl, {params, headers});

console.log(res);
// isCode'a göre ülke verileri al
const res2= axios.get(
  code
  ? `https://restcountries.com/v3.1/alpha/${code}`
  : `https://restcountries.com/v3.1/name/${query}`
);

// todo api isteklerini daha iyi at her ik isteği paralel aynı anda atmak için promise kullanıyoruz
 const responses = await Promise.all([res, res2]);
// region nesnesindeki değerleri bir üst nesne ile aynı düzeye çıkardık
 const covid ={ 
   ...responses[0].data.data[0],
   ...responses[0].data.data[0].region,

}
//gereksiz değerleri kaldır
delete covid.cities;
delete covid.region;
console.log(covid);
//payloadı return et
    return {covid, country: responses[1].data[0]};
});



















