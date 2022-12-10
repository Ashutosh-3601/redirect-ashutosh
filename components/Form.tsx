import { FormEvent } from "react";
import { toast } from "react-toastify";
import {IDBData} from '../types/IDbData';

const RedirectForm = ({ redirects, keys }: IDBData) => {
    const createRedirect = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(redirects)
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name');
        const url = formData.get('url');
        const key = formData.get('key');
        if(key !== process.env.NEXT_PUBLIC_KEY) {
            console.log(process.env.NEXT_PUBLIC_KEY)
            toast.error('Invalid Key')
            return;
        }
        if(keys.find((k: string) => k === name)) {
            toast.error('Name already exists!')
            return;
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/manage`, {method: 'POST', body: JSON.stringify({name: name, url: url})});
        if(res.status == 201) {
            toast.success('Redirect Created!')
            form.reset();
        }
    }

    return (
        <div className="m-auto w-80 md:w-1/2 lg:w-1/3">
            <form className="bg-littleBlue shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={e =>createRedirect(e)} autoComplete="off" autoSave="off">
                <label className="font-hack block text-slate-100 text-md font-bold mb-2" htmlFor="name">Name</label>
                    <input className="font-mono shadow peer appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:italic"
                        id="name" name="name" type={`text`}
                        placeholder={`Unique Name`}
                        autoFocus/>
                <label className="font-hack block text-slate-100 text-md font-bold mb-2" htmlFor="url">URL</label>
                    <input className="font-mono shadow peer appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:italic"
                        id="url" name="url" type={`url`}
                        placeholder={`OG URL`}/>
                <p className="font-hack text-pink-500 invisible peer-invalid:visible text-xs italic">
                            Invalid URL
                </p>
                <label className="font-hack block text-slate-100 text-md font-bold mb-2">Key</label>
                    <input className="font-mono shadow peer appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:italic"
                        id="key" name="key" type={`password`}
                        placeholder=":)"/>

                <div className="flex items-center justify-center md:justify-end">
                    <button
                        className="font-hack bg-moreBlue hover:bg-darkBlue text-slate-100 hover:text-slate-50 font-bold py-2 px-4 border border-moreBlue rounded-full focus:outline-none focus:shadow-outline"
                        type="submit"><span className="mx-2">{"🔀 Let's Go"}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RedirectForm;