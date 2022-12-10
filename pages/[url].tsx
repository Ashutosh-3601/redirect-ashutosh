import { GetServerSideProps } from "next";

const URL = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-lightGray">
            <h1 className="font-hack text-4xl text-moreBlue">Maybe 404 ;_;</h1>
            <h1 className="font-hack text-4xl text-moreBlue">Maybe 404 ;(</h1>
            <h1 className="font-hack text-4xl text-moreBlue">Maybe 404 :(</h1>
            <h1 className="font-hack text-4xl text-moreBlue">Maybe 404 ;-;</h1>
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const { url } = context.query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/manage`, {method: 'GET'});
    const db = await res.json();
    const redirect = db.redirects.find((r: {name: string, url: string}) => r.name === url);
    if(redirect) {
        return {
            redirect: {
                destination: redirect.url,
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

export default URL;