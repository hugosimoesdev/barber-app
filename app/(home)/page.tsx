import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Hugo!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-5">
        <Search />
      </div>
    </div>
  );
}
