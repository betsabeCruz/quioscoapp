import AdminLayout from "../layout/AdminLayout"
import useSWR from "swr"
import axios from "axios"
import OrdenesCompletadas from "../components/OrdenesCompletadas"
export default function OrdenesCompletadas(){

    const fetcher= () => axios('api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 1000})

    console.log(data)


    return(
        <AdminLayout pagina={'Admin'}>
            <h2 className="text-4xl font-black">Panel de Administracion</h2>
            <p className="text-2xl my-10">Administra las ordenes</p>
           

{data && data.length ? data.map(order => 
                <OrdenesCompletadas
                    key={order.id}
                    orden={order}
                />

              ):<p>No hay ordenes pendientes</p>}

        </AdminLayout>
    )
}