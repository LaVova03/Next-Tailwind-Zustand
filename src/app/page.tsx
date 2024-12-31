"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import useStore from "@/store/store";
import { Styles } from "@/theme/themeProvider";

import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

import Flat from "@/assets/icons/flat.svg";
import Hotel from "@/assets/icons/hotelLogo.svg";
import Block from "@/assets/icons/block.svg";
import Edit from "@/assets/icons/edit1.svg";
import Clock from "@/assets/icons/clock.svg";
import Location from "@/assets/icons/location.svg";
import Glass from "@/assets/icons/glass.svg";
import Sit from "@/assets/icons/sit.svg";
import Parking from "@/assets/icons/parking.svg";
import World from "@/assets/icons/world.svg";
import Map from "@/assets/icons/map.svg";
import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";

export default function Home() {
  const { data } = useStore();

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/edit");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-6 pr-20 pl-20 relative">
      <div className="absolute left-[75px] h-[100%] w-[1px] bg-icons_error z-10"></div>
      <div className="absolute right-[75px] h-[100%] w-[1px] bg-icons_error z-10"></div>
      <header className="relative h-[360px] -mx-[80px] w-[calc(100%+160px)]">
        <Image
          src={data.cardCompany ? data.cardCompany : Flat.src}
          alt="logo"
          fill
          style={{ objectFit: "cover", objectPosition: "left" }}
          className="h-[360px] w-full object-cover"
        />
      </header>
      <main className="flex flex-col w-full h-[1080px] gap-16 pt-16 pb16 ">
        <section className="w-full h-[152px] flex items-center justify-between">
          <div className="w-[420px] h-[152px] flex justify-between items-center">
            <div className="relative w-[152px] h-[152px]">
              <Image
                src={data.avatar ? data.avatar : Hotel}
                alt="logo"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="w-[244px] h-auto flex flex-row relative">
              <div className="flex justify-between flex-col gap-1 h-auto w-max">
                <Paragraph variant="P4-Regular" color="text-text_gray">
                  Готелі
                </Paragraph>
                <Heading variant="H5" color="text_white">
                  Hyatt Regency
                </Heading>
              </div>
              <div className="w-[50px] h-[25px] flex items-center justify-center text-text_white bg-accent_primary rounded-md absolute bottom-0 right-0">
                10%
              </div>
            </div>
          </div>
          <div className="w-[136px] h-14 gap-6 flex flex-row">
            <div className="relative w-[56px] h-[56px] hover:shadow-shadow_success transition-all duration-200 ease-in-out hover:scale-105">
              <Image className="cursor-pointer" src={Block} alt="logo" fill />
            </div>
            <div className="relative w-[56px] h-[56px] hover:shadow-shadow_success transition-all duration-200 ease-in-out hover:scale-105">
              <Image
                className="cursor-pointer"
                src={Edit}
                alt="logo"
                fill
                onClick={handleRedirect}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-row items-center justify-between w-full h-12">
          <div className="flex flex-row items-center w-[299px] h-12 justify-between">
            <div className={Styles.Underline}>
              <Paragraph variant="P1">Про Компанію</Paragraph>
            </div>
            <div className={Styles.Underline}>
              <Paragraph variant="P1">Каталог</Paragraph>
            </div>
          </div>
          <div className="w-[189px] h-12 gap-1 flex items-center justify-center bg-secondary_main rounded-[4px] cursor-pointer hover:shadow-shadow_success transition-all duration-200 ease-in-out">
            <Paragraph variant="P3">Мій Промокод</Paragraph>
          </div>
        </section>
        <section>
          <Paragraph variant="P4-Regular">
            Hyatt Regency - У 1967 році готель Hyatt Regency Atlanta відкрив
            свої двері для лідерів руху за громадянські права в Америці, яким
            було відмовлено в інших місцях проживання. Вони називали його
            «Готелем надії». Наша місія об&apos;єднувати людей і зміцнювати
            зв&apos;язки продовжується і сьогодні в більш ніж 175 готелях і
            курортах Hyatt Regency по всьому світу.
          </Paragraph>
        </section>
        <section className="w-full flex flex-col">
          <div className="h-[234px] gap-8 flex flex-col justify-between">
            <Heading variant="H5">Переваги</Heading>
            <ul className="w-auto list-none gap-[18px] h-[172px] flex flex-col justify-between pl-4">
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Clock} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">Послуги 24 / 7</Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Location} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">Знаходиться в центрі</Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Glass} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">
                  Вишуканий ресторан та бар
                </Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Sit} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">Spa & Оздоровлення</Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Parking} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">Безпечне паркування</Paragraph>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full flex flex-col">
          <div className="h-[234px] gap-8 flex flex-col justify-between">
            <Heading variant="H5">Контакти</Heading>
            <ul className="w-auto list-none gap-[18px] h-[172px] flex flex-col justify-between pl-4">
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={World} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">
                  {data.siteUrl || "Послуги 24 / 7"}
                </Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Map} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">
                  {data.location || "Знаходиться в центрі"}
                </Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Mail} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">
                  {data.email || "Вишуканий ресторан та бар"}
                </Paragraph>
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Phone} alt="logo" fill />
                </div>
                <Paragraph variant="P4-Regular">
                  {data.phone || "Spa & Оздоровлення"}
                </Paragraph>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="relative -mx-[80px] w-[calc(100%+160px)]">
        <Footer />
      </footer>
    </div>
  );
}
