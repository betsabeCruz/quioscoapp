import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria}= useQuiosco()
    const {name,icon, id }= categoria;

  return (
    <div className={`${
        categoriaActual?.id === id ? 'bg-amber-400' : ''} 
        flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image width={70} height={70} 
        src={`/assets/img/icono_${icon}.svg`} 
        alt="imagen icono"
       
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
        >
            {name}
      </button>
    </div>
  )
}

export default Categoria
