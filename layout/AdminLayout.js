import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import OrdenesCompletadas from "../components/OrdenesCompletadas";
import axios from "axios";
import useSWR from "swr";

export default function AdminLayout({ children, pagina }) {

  const fetcher= () => axios('api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 1000})

    console.log(data)
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content=" Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />

              </aside>


            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}