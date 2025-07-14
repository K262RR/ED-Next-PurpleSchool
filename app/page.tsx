import { Metadata } from "next";
import { Htag, Button, Ptag } from "@/components";

export const metadata: Metadata = {
  title: "Мой учебный проект",
  description: "Описание учебного проекта",
};

export default function Home() {
  return (
    <>
      <Htag tag="h3">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Ptag size="s">Текст для маленького размера шрифта</Ptag>
      <Ptag size="m">Текст для среднего размера шрифта</Ptag>
      <Ptag>Текс у которого не задан размер шрифта</Ptag>
      <Ptag size="l">Текст для большого размера шрифта</Ptag>
    </>
  );
}
