export const useBankStore = defineStore("bankStore", () => {
  const depositRates = ref([
    {
      date: "202306",
      bankName: "우리은행",
      productName: "WON플러스예금",
      rate6: "3.67",
      rate12: "3.73",
      rate24: "3.36",
      rate36: "3.33",
    },
    {
      date: "202306",
      bankName: "한국스탠다드차타드은행",
      productName: "e-그린세이브예금",
      rate6: "3.9",
      rate12: "4.1",
      rate24: "-",
      rate36: "-",
    },
    {
      date: "202306",
      bankName: "대구은행",
      productName: "DGB주거래우대예금(첫만남고객형)",
      rate6: "3.11",
      rate12: "3.85",
      rate24: "3.87",
      rate36: "3.89",
    },
    {
      date: "202306",
      bankName: "대구은행",
      productName: "DGB행복파트너예금(일반형)",
      rate6: "2.87",
      rate12: "3.61",
      rate24: "3.63",
      rate36: "3.65",
    },
    {
      date: "202306",
      bankName: "대구은행",
      productName: "DGB함께예금",
      rate6: "-",
      rate12: "3.75",
      rate24: "-",
      rate36: "-",
    },
    {
      date: "202306",
      bankName: "대구은행",
      productName: "IM스마트예금",
      rate6: "3.05",
      rate12: "3.75",
      rate24: "3.45",
      rate36: "3.45",
    },
    {
      date: "202306",
      bankName: "대구은행",
      productName: "안녕,독도야예금",
      rate6: "-",
      rate12: "3.61",
      rate24: "-",
      rate36: "-",
    },
    {
      date: "202306",
      bankName: "부산은행",
      productName: "LIVE정기예금",
      rate6: "3.5",
      rate12: "3.65",
      rate24: "2.8",
      rate36: "2.85",
    },
    {
      date: "202306",
      bankName: "부산은행",
      productName: "더(The) 특판 정기예금",
      rate6: "3.85",
      rate12: "4",
      rate24: "3.65",
      rate36: "3.35",
    },
    {
      date: "202306",
      bankName: "광주은행",
      productName: "미즈월복리정기예금",
      rate6: "-",
      rate12: "3.71",
      rate24: "3.87",
      rate36: "3.97",
    },
    {
      date: "202306",
      bankName: "광주은행",
      productName: "스마트모아드림정기예금",
      rate6: "3.46",
      rate12: "3.61",
      rate24: "3.77",
      rate36: "3.87",
    },
    {
      date: "202306",
      bankName: "광주은행",
      productName: "행운박스예금",
      rate6: "3.2",
      rate12: "3.3",
      rate24: "3.1",
      rate36: "3.3",
    },
    {
      date: "202306",
      bankName: "광주은행",
      productName: "굿스타트예금",
      rate6: "-",
      rate12: "3.81",
      rate24: "-",
      rate36: "-",
    },
  ]);
  return { depositRates };
});