import React from 'react'

export default function Card() {
  return (
    <div className="h-80 rounded-lg bg-emerald-900 bg-opacity-90 p-4 flex gap-5">
        <div className="rounded-lg w-1/3 bg-cover bg-[url('https://img.wongnai.com/p/1600x0/2019/10/10/3092e773cda34ca2a77373b82f7639b7.jpg')]">
        </div>
        <div className="w-2/3 rounded-lg text-white font-serif text-lg flex flex-col justify-around">
            <h1 className="text-2xl font-semibold">ทริปที่เที่ยวและร้านกาแฟเชียงใหม่ ที่สวยได้แบบไม่ต้องไปไกลถึงเกาหลี</h1>
            <p className="px-5">แวะคาเฟ่เชียงใหม่! เที่ยวสไตล์เกาหลีแบบไม่ต้องไปไกล หมุนตัวสูดรับอากาศบริสุทธิ์ท่ามกลางดอกหญ้าแห้ง อยู่ร้านกาแฟเชียงใหม่ให้เหมือนอยู่ในโซล</p>
            <div className="flex w-full gap-2 px-5 items-center"> 
                Categrories :
                <div className="flex gap-1 items-center">
                    <span className="p-1 rounded bg-black">ทริปกิน</span>
                    <span className="p-1 rounded bg-black">ทริปต่างระเทศ</span>
                    และ
                    <span className="p-1 rounded bg-black">ทริปทริปเอเชีย</span>
                </div>
            </div>
        </div>
    </div>
  )
}
