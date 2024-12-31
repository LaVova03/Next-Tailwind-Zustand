"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useStore from "@/store/store";
import { Styles } from "@/theme/themeProvider";
import { Data } from "@/store/types";

import Input from "@/components/Input";
import Footer from "@/components/Footer";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

import Photo from "@/assets/icons/photo.svg";
import Hotel_None from "@/assets/icons/hotel_none.svg";
import Check from "@/assets/icons/check.svg";
import Plus from "@/assets/icons/plus.svg";
import World from "@/assets/icons/world.svg";
import Map from "@/assets/icons/map.svg";
import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";

function EditPage() {
  const cardCompanyRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const { data, updateData } = useStore();
  const router = useRouter();

  const [isCheck, setCheck] = useState(false);
  const [isEditing, setIsEditing] = useState({
    location: false,
    siteUrl: false,
    email: false,
    phone: false,
  });

  const [isData, setData] = useState<Data>({
    cardCompany: "",
    description: "",
    avatar: "",
    background: "",
    achievements: "",
    cashback: "",
    promocode: "",
    location: "",
    siteUrl: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (data) {
      const check = Object.values(data).some((el) => !el);
      if (check) {
        setData(data);
      }
    }
  }, [data]);

  const handleEdit = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRedirect = () => {
    router.push("/");
  };

  const handleButtonClick = (ref: React.RefObject<HTMLInputElement | null>) => {
    ref.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Data
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setData((prevState) => ({
          ...prevState,
          [field]: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const Cancel = () => {
    setData({
      cardCompany: "",
      description: "",
      avatar: "",
      background: "",
      achievements: "",
      cashback: "",
      promocode: "",
      location: "",
      siteUrl: "",
      email: "",
      phone: "",
    });
  };

  const Submit = () => {
    updateData(isData);
    alert("Data saved!");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-6 pr-20 pl-20 relative">
      <div className="absolute left-[75px] h-[100%] w-[1px] bg-icons_error z-10"></div>
      <div className="absolute right-[75px] h-[100%] w-[1px] bg-icons_error z-10"></div>
      <header className="relative mt-[129px] -mx-[80px] w-[calc(100%+160px)] h-[360px] gap-[1px] bg-secondary_black pr-20 pl-20 pt-12 pb-12">
        <div className="flex flex-col">
          <div className="flex flex-row text-text_gray">
            <button className={Styles.Button} onClick={handleRedirect}>
              Сторінка
            </button>
            &nbsp;/&nbsp;
            <button className={Styles.Button}>Редагувати</button>
          </div>
          <Paragraph variant="P1">Карточка Компанії</Paragraph>
        </div>
        <div
          className="relative w-[96px] h-[96px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={Photo} alt="logo" fill />
        </div>
      </header>
      <main className="flex flex-col w-full h-[1923px] gap-16 pt-16 pb16 mb-16">
        <section className="w-full h-[152px] flex items-center justify-between">
          <div className="w-[420px] h-[152px] flex justify-between items-center">
            <div className="relative w-[152px] h-[152px]">
              <Image
                src={isData.avatar || Hotel_None}
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
        </section>
        <section className="w-full flex flex-col h-[1385px] gap-12">
          <Paragraph variant="P4-Bold">Налаштування Сторінки Бізнесу</Paragraph>
          <div className="flex flex-row items-center w-[251px] gap-2">
            <button
              className="w-5 h-5 bg-secondary_main rounded-[4px] gap-[10px] border-none"
              onClick={() => setCheck((prev) => !prev)}
            >
              {isCheck ? (
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Check} alt="logo" fill />
                </div>
              ) : null}
            </button>
            <Paragraph variant="P4-Regular">
              Ввімкнути функцію каталогу
            </Paragraph>
          </div>
          <div className="h-[128px] flex flex-col gap-[15px]">
            <Heading variant="H5">Опис Компанії</Heading>
            <Input
              variant="Second"
              value={isData.description}
              onChange={(e) => handleChange(e, "description")}
            />
          </div>
          <div className="h-auto flex flex-col gap-[15px]">
            <div className="flex flex-row items-end w-[173px] gap-2">
              <Heading variant="H5">Аватар</Heading>
              <Paragraph variant="P4-Regular" color="text-text_gray">
                1:1 розмір
              </Paragraph>
            </div>
            <button
              className="border-none w-[152px] h-[152px] gap-3 bg-secondary_main rounded-[40px] flex items-center justify-center"
              onClick={() => handleButtonClick(avatarRef)}
            >
              {isData.avatar ? (
                <div className="relative w-[152px] h-[152px]">
                  <Image
                    src={isData.avatar}
                    alt="Avatar"
                    fill
                    className="rounded-[40px] object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-[32px] h-[32px]">
                  <Image src={Plus} alt="logo" fill />
                </div>
              )}
            </button>
            <input
              type="file"
              accept="image/*"
              ref={avatarRef}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "avatar")}
            />
          </div>
          <div className="h-auto flex flex-col gap-[15px]">
            <div className="flex flex-row items-end w-[312px] gap-2">
              <Heading variant="H5">Зображення Фону</Heading>
              <Paragraph variant="P4-Regular" color="text-text_gray">
                1:2 розмір
              </Paragraph>
            </div>
            <button
              className="border-none w-[152px] h-[152px] gap-3 bg-secondary_main rounded-[40px] flex items-center justify-center"
              onClick={() => handleButtonClick(cardCompanyRef)}
            >
              {isData.cardCompany ? (
                <div className="relative w-[152px] h-[152px]">
                  <Image
                    src={isData.cardCompany}
                    alt="Company"
                    fill
                    className="rounded-[40px] object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-[32px] h-[32px]">
                  <Image src={Plus} alt="logo" />
                </div>
              )}
            </button>
            <input
              type="file"
              accept="image/*"
              ref={cardCompanyRef}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "cardCompany")}
            />
          </div>
          <div className="h-[128px] flex flex-col gap-[15px]">
            <Heading variant="H5">Ваші Переваги</Heading>
            <Input
              variant="First"
              value={isData.achievements}
              onChange={(e) => handleChange(e, "achievements")}
            />
          </div>
          <div className="h-[128px] flex flex-col gap-[15px]">
            <Heading variant="H5">Кешбек Для Клієнтів</Heading>
            <Input
              variant="Third"
              value={isData.cashback}
              onChange={(e) => handleChange(e, "cashback")}
            />
          </div>
          <div className="h-[128px] flex flex-col gap-[15px]">
            <Heading variant="H5">Створіть Промокод</Heading>
            <Input
              variant="Fourth"
              value={isData.promocode}
              onChange={(e) => handleChange(e, "promocode")}
            />
          </div>
          <div className="h-[234px] gap-8 flex flex-col justify-between">
            <Heading variant="H5">Контакти Для Клієнтів</Heading>
            <ul className="w-auto list-none gap-[18px] h-[172px] flex flex-col justify-between pl-4">
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Map} alt="logo" fill />
                </div>
                {isEditing.location ? (
                  <input
                    className={Styles.Input}
                    type="text"
                    value={isData.location}
                    onChange={(e) => handleChange(e, "location")}
                    onBlur={() => handleBlur("location")}
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => handleEdit("location")}
                    className="cursor-pointer"
                  >
                    <Paragraph variant="P4-Regular" color="text-text_lightGray">
                      {isData.location || "Локація"}
                    </Paragraph>
                  </div>
                )}
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={World} alt="logo" fill />
                </div>
                {isEditing.siteUrl ? (
                  <input
                    className={Styles.Input}
                    type="text"
                    value={isData.siteUrl}
                    onChange={(e) => handleChange(e, "siteUrl")}
                    onBlur={() => handleBlur("siteUrl")}
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => handleEdit("siteUrl")}
                    className="cursor-pointer"
                  >
                    <Paragraph variant="P4-Regular" color="text-text_lightGray">
                      {isData.siteUrl || "Адреса Сайту"}
                    </Paragraph>
                  </div>
                )}
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Mail} alt="logo" fill />
                </div>
                {isEditing.email ? (
                  <input
                    className={Styles.Input}
                    type="text"
                    value={isData.email}
                    onChange={(e) => handleChange(e, "email")}
                    onBlur={() => handleBlur("email")}
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => handleEdit("email")}
                    className="cursor-pointer"
                  >
                    <Paragraph variant="P4-Regular" color="text-text_lightGray">
                      {isData.email || "Електронна Пошта"}
                    </Paragraph>
                  </div>
                )}
              </li>
              <li className={Styles.AdvantagesLi}>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={Phone} alt="logo" fill />
                </div>
                {isEditing.phone ? (
                  <input
                    className={Styles.Input}
                    type="text"
                    value={isData.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    onBlur={() => handleBlur("phone")}
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => handleEdit("phone")}
                    className="cursor-pointer"
                  >
                    <Paragraph variant="P4-Regular" color="text-text_lightGray">
                      {isData.phone || "Номер Телефону"}
                    </Paragraph>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center justify-center gap-12">
            <div className="hover:shadow-shadow_success transition-all duration-200 ease-in-out">
              <Button
                variant="CancelLarge"
                typography="Button2-Bold"
                onClick={Cancel}
              >
                Відмінити
              </Button>
            </div>
            <div className="hover:shadow-shadow_green transition-all duration-200 ease-in-out">
              <Button
                variant="ApplyLarge"
                typography="Button2-Bold"
                onClick={Submit}
              >
                Застосувати
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative -mx-[80px] w-[calc(100%+160px)]">
        <Footer />
      </footer>
    </div>
  );
}

export default EditPage;
