import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          HTML, CSS ve JavaScript gibi ön uç
          teknolojilerini kullanarak etkileyici ve kullanıcı dostu web arayüzleri oluşturabilirim.Ben
          bir Full Stack Web Developer'ım ve hem ön uç (frontend) hem de arka uç (backend)
          teknolojilerinde uzmanlaşmış durumdayım.Aynı zamanda React ve Three&nbsp; gibi modern
          JavaScript çerçevelerini kullanarak dinamik ve etkileşimli web uygulamaları
          geliştirebilirim.
        </p>

        <br />

        <p className="text-xl">
          Backend tarafında ise Django ve Sqlite3
          gibi teknolojileri kullanarak veritabanı yönetimi, API oluşturma ve sunucu tarafı
          geliştirmeleri yapabilirim.Veritabanı sistemleri konusunda deneyimliyim ve MsSql ve MySql
          tabanlı veritabanlarıyla etkili bir şekilde çalışabilirim.
        </p>
      </div>
    </div>
  );
};

export default About;
