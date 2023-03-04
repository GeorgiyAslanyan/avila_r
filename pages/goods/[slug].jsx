import React from "react";

const GoodsDetails = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="my-0 mx-auto px-5 pt-5 relative">
        <img
          src="https://lh3.googleusercontent.com/pw/AL9nZEUW2ORBDn3y2aaNrjuh02_2Jmdjw_VtZZe_QjLv6dghZs7bp_lBp_QGPRMIS0VdsGSyR38b8zaBh90znuvZmiHbR8QjPJOUxOxVuR4580QBOhQTqPTcXSskO7ItlPPLVhgWsrw6WftUxKKY2xjI3Y08=s933-no?authuser=0"
          alt=""
          className="h-[395px] object-cover w-[500px]"
        />
        <div className="grid grid-cols-4 w-[500px]">
          <img
            src="https://lh3.googleusercontent.com/pw/AL9nZEUW2ORBDn3y2aaNrjuh02_2Jmdjw_VtZZe_QjLv6dghZs7bp_lBp_QGPRMIS0VdsGSyR38b8zaBh90znuvZmiHbR8QjPJOUxOxVuR4580QBOhQTqPTcXSskO7ItlPPLVhgWsrw6WftUxKKY2xjI3Y08=s933-no?authuser=0"
            alt=""
            className="cursor-pointer grayscale hover:grayscale-0 h-[84px] mt-2.5 mb-5 object-cover w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AL9nZEUW2ORBDn3y2aaNrjuh02_2Jmdjw_VtZZe_QjLv6dghZs7bp_lBp_QGPRMIS0VdsGSyR38b8zaBh90znuvZmiHbR8QjPJOUxOxVuR4580QBOhQTqPTcXSskO7ItlPPLVhgWsrw6WftUxKKY2xjI3Y08=s933-no?authuser=0"
            alt=""
            className="cursor-pointer grayscale hover:grayscale-0 h-[84px] mt-2.5 mb-5 object-cover w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AL9nZEUW2ORBDn3y2aaNrjuh02_2Jmdjw_VtZZe_QjLv6dghZs7bp_lBp_QGPRMIS0VdsGSyR38b8zaBh90znuvZmiHbR8QjPJOUxOxVuR4580QBOhQTqPTcXSskO7ItlPPLVhgWsrw6WftUxKKY2xjI3Y08=s933-no?authuser=0"
            alt=""
            className="cursor-pointer grayscale hover:grayscale-0 h-[84px] mt-2.5 mb-5 object-cover w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AL9nZEUW2ORBDn3y2aaNrjuh02_2Jmdjw_VtZZe_QjLv6dghZs7bp_lBp_QGPRMIS0VdsGSyR38b8zaBh90znuvZmiHbR8QjPJOUxOxVuR4580QBOhQTqPTcXSskO7ItlPPLVhgWsrw6WftUxKKY2xjI3Y08=s933-no?authuser=0"
            alt=""
            className="cursor-pointer grayscale hover:grayscale-0 h-[84px] mt-2.5 mb-5 object-cover w-full"
          />
        </div>
      </div>
      <div className="text-left w-3/4 pt-5">
        <h1 className="font-bold text-4xl">Monster Attack Cotton</h1>
        <p className="my-4">
          Название бренда Tiny Spark Подходит для следующих случаев: Кэжуал
          Длина рукава Полный Сезон Сезон весна-осень Стиль HIP HOP
        </p>
        <div className="grid grid-cols-4 mr-5">
            {['xs', 's', 'm', 'l', 'xl', 'XXl', 'XXXl', '4xl'].map((el) => (
                <button key={el} className="border-none cursor-pointer font-semibold mr-2.5 mt-2.5 outline-none p-2.5 uppercase bg-gray-300">
                    {el}
                </button>
            ))}
        </div>
        <h2 className="my-5 font-bold text-2xl">2072 руб.</h2>
      </div>
    </div>
  );
};

export default GoodsDetails;
