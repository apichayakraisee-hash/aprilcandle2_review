/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // ข้อมูลรูปภาพสำหรับหน้ารีวิว ThaiTicketMajor
  const ttmGridImgs = [
    "https://i.ibb.co/N0dv556/LINE-ALBUM-260410-1.jpg",
    "https://i.postimg.cc/Gpb3L8bN/LINE-ALBUM-kh-260403-9.jpg",
    "https://i.postimg.cc/k5wJBJ47/LINE-ALBUM-kh-260403-23.jpg",
    "https://i.postimg.cc/mrVLtLDZ/LINE-ALBUM-kh-260403-24.jpg",
    "https://i.ibb.co/5h7nB01m/S-67846164.jpg",
    "https://i.postimg.cc/SKVSJSs4/LINE-ALBUM-kh-260403-20.jpg",
    "https://i.postimg.cc/JhKrGrnm/LINE-ALBUM-kh-260403-21.jpg",
    "https://i.postimg.cc/ZqjbCbR4/LINE-ALBUM-kh-260403-22.jpg",
    "https://i.postimg.cc/QMjN89jv/LINE-ALBUM-kh-260403-10.jpg",
    "https://i.postimg.cc/25CjkbCP/LINE-ALBUM-kh-260403-11.jpg",
    "https://i.postimg.cc/VNzsfrYz/LINE-ALBUM-kh-260403-14.jpg",
    "https://i.postimg.cc/fRgpHTt1/image.png",
    "https://i.postimg.cc/YSt2rGpM/LINE-ALBUM-kh-260403-12.jpg",
    "https://i.postimg.cc/fb5zJzLN/LINE-ALBUM-kh-260403-16.jpg",
    "https://i.postimg.cc/ZqjbCbRR/LINE-ALBUM-kh-260403-29.jpg",
    "https://i.postimg.cc/TPQdpdwP/LINE-ALBUM-kh-260403-28.jpg",
    "https://i.postimg.cc/tCzHzjN2/image.png",
    "https://i.postimg.cc/zv00V0TT/image.png",
    "https://i.postimg.cc/yxPr0VCj/image.png",
    "https://i.postimg.cc/3w98d8Rx/LINE-ALBUM-kh-260403-27.jpg",
    "https://i.postimg.cc/wBFq7qvT/LINE-ALBUM-kh-260403-25.jpg",
    "https://i.postimg.cc/5tp4640W/LINE-ALBUM-kh-260403-19.jpg",
    "https://i.ibb.co/nMwqNhXR/JH.png",
    "https://i.postimg.cc/CK20fss0/image.png"
  ];

  // ข้อมูลรูปภาพสำหรับหน้ารีวิว AllTicket
  const allticketGrid1Imgs = [
    "https://i.postimg.cc/5tf94Yfp/LINE-ALBUM-kh-260403-4.jpg",
    "https://i.postimg.cc/yN761g7v/LINE-ALBUM-kh-260403-5.jpg",
    "https://i.postimg.cc/PqdfXpdS/LINE-ALBUM-kh-260403-7.jpg",
    "https://i.postimg.cc/7LXHfH68/LINE-ALBUM-kh-260403-18.jpg"
  ];
  const allticketFullImgs = [
    "https://i.postimg.cc/8CTkpJ1p/LINE-ALBUM-kh-260403-15.jpg",
    "https://i.postimg.cc/jjvxLx5L/LINE-ALBUM-kh-260403-31.jpg",
    "https://i.postimg.cc/9f1mrmM0/LINE-ALBUM-kh-260403-30.jpg",
    "https://i.postimg.cc/fb5zJzLz/LINE-ALBUM-kh-260403-26.jpg",
    "https://i.postimg.cc/YS8rhr9W/LINE-ALBUM-kh-260403-32.jpg"
  ];
  const allticketGrid2Imgs = [
    "https://i.postimg.cc/3NZNCXrD/reviewkdb-tr.png",
    "https://i.postimg.cc/25TkVk6v/S-67371013.jpg",
    "https://i.postimg.cc/GpzLHL2G/S-67371014.jpg",
    "https://i.postimg.cc/YS8rhr9w/LINE-ALBUM-kh-260403-17.jpg"
  ];

// เลื่อนกลับไปบนสุดเมื่อเปลี่ยนหน้า และตั้งค่าแท็บเบราว์เซอร์
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // 1. เปลี่ยนชื่อแท็บเว็บ
    document.title = "Review aprilcandle2"; 

    // 2. เปลี่ยนรูปไอคอนเว็บ (Favicon)
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // วางลิงก์รูปภาพของคุณตรงนี้ (แนะนำเป็นรูปสี่เหลี่ยมจัตุรัส)
    link.href = "https://res.cloudinary.com/dtz0urit6/image/upload/f_webp,q_auto/cloudinary-tools-uploads/jgfx2n2mpfb9nmvwlyto.webp"; 

  }, [currentView]);

  // --- หน้าหลัก (Home View) ---
  const renderHome = () => (
    <div className="min-h-screen bg-white flex flex-col items-center pb-12">
      {/* ส่วนหัวแบนเนอร์สีเหลือง (#e8c601) จัดขนาดให้เป๊ะตามแบบ 1.png */}
      <div className="w-full bg-[#e8c601] pt-16 pb-12 px-4 flex flex-col items-center justify-center border-b border-black/10">
        <h1 className="text-4xl md:text-7xl font-[900] text-black leading-[1.1] tracking-tight text-center">
          Reviewกดบัตร
        </h1>
        <h2 className="text-2xl md:text-5xl font-[900] text-black leading-[1.1] tracking-tight text-center mt-2">
          @aprilcandle2
        </h2>
      </div>

      {/* ส่วนปุ่มเลือกดูรีวิว */}
      <div className="w-full max-w-[34rem] px-6 mt-16 space-y-6">
        
        {/* ปุ่ม thaiticketmajor */}
        <button 
          onClick={() => setCurrentView('ttm')}
          className="w-full bg-[#fdfaf0] hover:bg-[#f5f1df] transition-transform hover:scale-[1.02] active:scale-95 rounded-[1.2rem] py-4 px-6 flex flex-row items-center justify-center gap-3 shadow-sm border border-gray-100 cursor-pointer"
        >
          <img 
            src="https://i.postimg.cc/Mpfxz0kd/image.png" 
            alt="TTM Logo" 
            className="h-10 md:h-14 object-contain drop-shadow-sm" 
            referrerPolicy="no-referrer"
          />
          <span className="text-xl md:text-4xl font-[800] text-black tracking-tight">thaiticketmajor</span>
        </button>

        {/* ปุ่ม allticket */}
        <button 
          onClick={() => setCurrentView('allticket')}
          className="w-full bg-[#fdfaf0] hover:bg-[#f5f1df] transition-transform hover:scale-[1.02] active:scale-95 rounded-[1.2rem] py-4 px-6 flex flex-row items-center justify-center gap-3 shadow-sm border border-gray-100 cursor-pointer"
        >
          <img 
            src="https://i.postimg.cc/KzDxdZXy/image.png" 
            alt="AllTicket Logo" 
            className="h-10 md:h-14 object-contain drop-shadow-sm" 
            referrerPolicy="no-referrer"
          />
          <span className="text-xl md:text-4xl font-[800] text-black tracking-tight">allticket</span>
        </button>

      </div>
    </div>
  );

  // --- หน้ารายละเอียดรีวิว (Review Detail View) ---
  const renderDetail = () => {
    const isTTM = currentView === 'ttm';
    const title = isTTM ? 'รีวิว ThaiTicketMajor' : 'รีวิว AllTicket';

    return (
      <div className="min-h-screen bg-gray-100 pb-12">
        
        {/* Navigation Bar (ติดหนึบด้านบน) เปลี่ยนเป็นสี #e8c601 */}
        <div className="sticky top-0 w-full bg-[#e8c601] p-4 flex items-center justify-between shadow-md z-50">
          <button 
            onClick={() => setCurrentView('home')} 
            className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors flex items-center justify-center"
            aria-label="Back"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>
          <h2 className="text-xl font-[700] text-black absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            {title}
          </h2>
          <div className="w-10"></div> {/* เว้นที่ว่างให้จัดกึ่งกลาง */}
        </div>

        {/* Content Area สำหรับแสดงภาพรีวิว */}
        <div className="max-w-2xl mx-auto bg-white shadow-xl min-h-screen flex flex-col">
          
          {/* --- โซนแสดงภาพแยกตามหมวดหมู่ --- */}
          {isTTM ? (
            <div className="w-full flex flex-col">
              {/* TTM Grid แบ่งครึ่งหน้าซ้ายขวา */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-white items-start">
                {ttmGridImgs.map((src, index) => (
                  <img key={index} src={src} alt={`TTM Review ${index+1}`} className="w-full h-auto block rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col">
              <div className="flex flex-col gap-1 p-1 bg-white">
                {/* AllTicket Grid 1 (แบ่งครึ่งซ้ายขวา 4 รูปแรก) */}
                <div className="grid grid-cols-2 gap-1 items-start">
                  {allticketGrid1Imgs.map((src, index) => (
                    <img key={index} src={src} alt={`AllTicket Grid 1-${index+1}`} className="w-full h-auto block rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                  ))}
                </div>

                {/* AllTicket เต็มหน้าปรับขนาด (5 รูปถัดมา) */}
                <div className="flex flex-col gap-1">
                  {allticketFullImgs.map((src, index) => (
                    <img key={index} src={src} alt={`AllTicket Full ${index+1}`} className="w-full h-auto block rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                  ))}
                </div>

                {/* AllTicket Grid 2 (แบ่งครึ่งซ้ายขวา 4 รูปสุดท้าย) */}
                <div className="grid grid-cols-2 gap-1 items-start">
                  {allticketGrid2Imgs.map((src, index) => (
                    <img key={index} src={src} alt={`AllTicket Grid 2-${index+1}`} className="w-full h-auto block rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* ปุ่มกลับหน้าหลัก (ส่วนท้าย) */}
          <div className="p-8 text-center bg-white mt-auto border-t border-gray-100">
            <button 
              onClick={() => setCurrentView('home')} 
              className="bg-black text-white px-10 py-3 rounded-full font-[600] text-lg hover:bg-gray-800 transition-colors shadow-md"
            >
              กลับหน้าหลัก
            </button>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      {currentView === 'home' ? renderHome() : renderDetail()}
    </div>
  );
}

