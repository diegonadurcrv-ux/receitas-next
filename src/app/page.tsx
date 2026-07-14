import Link from "next/link";

export default function Home() {
  return (
   <main className="grow">
    <div className="container mx-auto">
      {/* seção Hero*/}

      <section>
        <h1>Receitas deliciosas</h1>
        <p>Descubra receitas simples e sabororsas para todas as ocasiões</p>

        <Link href="/receitas" >
          Ver todas as receitas
        </Link>
      </section>
    </div>
   </main> 
  );
}
