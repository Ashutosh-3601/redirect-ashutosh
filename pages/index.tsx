import { GetServerSideProps } from 'next';
import RedirectForm from '../components/Form'
import Header from '../components/Header'
import {IDBData} from '../types/IDbData';

export default function Home({ redirects, keys }: IDBData) {
  return (
    <>
      <main className="flex flex-col justify-between min-w-screen w-full h-full min-h-screen overflow-hidden bg-lightGray">
      <Header/>
      <RedirectForm redirects={redirects} keys={keys}/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/manage`, {method: 'GET'});
  const db: IDBData = await res.json();
  return {
      props: {
          redirects: db.redirects,
          keys: db.keys,
      }
  }
}
