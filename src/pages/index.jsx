import Head from 'next/head'
import GridGastos from '../components/GastosGrid'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Custos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridGastos>
        
      </GridGastos>
    </div>
  )
}
