import InfoPill from "@/src/components/InfoPill";
import { recipes } from "@/src/lib/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
    params: Promise<{
        id: string;
    }>
}

export default async function ReceitaPage({ params }: RecipePageProps) {
    const { id } = await params;
    const recipe = recipes.find((recipe) => recipe.id === id)

    if (!recipe) {
        return notFound()
    }

    return (
        <main className="grow py-8">
            <div className="container mx-auto">
                <Link className="flex text-orange-500 hover:text-orange-700 mb-6" href='receitas'>
                    <ChevronLeft />
                    Voltar para receitas
                </Link>

                <section className="rounded-lg overflow-hidden shadow-md">
                    { /* imagem de capa da receita */}
                    <div className="relative h-96 w-full">
                        <Image 
                            src={recipe.image}
                            fill
                            alt={recipe.title}
                            className="object-cover"
                        />
                    </div>

                    {/* Descrição da receita */}
                    <div className="flex flex-col gap-6 p-6">
                        {/* titulo e descrição */}
                        <div>
                            <h1 className="text-3xl font-bold">{recipe.title}</h1>
                            <p>{recipe.description}</p>
                        </div>

                        {/* Infos de preparo */}
                        <div className="flex gap-4">
                            <InfoPill title="Preparo" info={recipe.prepTime}/>
                            <InfoPill title="Cozimento" info={recipe.cookTime}/>
                            <InfoPill title="Porções" info={recipe.servings}/>
                            <InfoPill title="Categoria" info={recipe.category}/>
                        </div>

                        {/* colunas */}
                        <div className="grid grid-cols-2">
                            {/* coluna dos ingredientes */}
                            <div>
                                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li className="marker:text-orange-500" key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>


                            {/* coluna do modo de preparo */}
                            <div>
                                <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
                                {/* TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}