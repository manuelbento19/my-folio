import { SOCIAIS } from '@/helpers/constants';
import { Portfolio, Social   } from '@/helpers/types';
import React from 'react';
import { FaBusinessTime, FaCheckCircle, FaGithub, FaLink,FaMoon } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';

const links = [
    {
        label: "Habilidades",
        path: "#skills"
    },
    {
        label: "Projectos",
        path: "#projects"
    },
    {
        label: "Experiências",
        path: "#experiences"
    },
    {
        label: "Certificações",
        path: "#certifications"
    },
    {
        label: "Idiomas",
        path: "#languages"
    }
]

type Props = {
    portfolio: Portfolio;
}

export const Template = ({portfolio}:Props) => {
  return (
    <section className="h-full max-w-4xl mx-auto w-full px-2 md:px-4 relative">
        <header className="bg-white w-full flex h-20 items-center justify-between sticky top-0 px-3">
            <a className="text-2xl font-semibold" href="#">🚀MyFolio</a>
            <nav className="flex items-center gap-8">
                <ul className="hidden md:flex items-center gap-6 text-sm">
                    {links.map(item=>(
                        <li key={item.path}>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href={item.path}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <button className="p-1">
                    <FaMoon className="fill-slate-700 size-5"/>
                </button>
            </nav>
        </header>
        <section id='' className="mb-8 pt-6 pb-5">
            {portfolio?.personal?.name && <h1 className="text-3xl font-bold mb-2">{portfolio?.personal?.name}</h1>}
            {portfolio?.personal?.title && (
            <div className="w-max">
                <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap border-r-2 border-r-gray-700 pr-5 overflow-hidden animate-typing">
                    {portfolio?.personal?.title}
                </h2>
            </div>
            )}
            {portfolio?.personal?.about && <p className="text-gray-600 mt-4">{portfolio?.personal?.about}</p>}
            <div className="mt-4 flex flex-col gap-3">
                {portfolio?.personal?.address && <p className="text-gray-600">📍 {portfolio?.personal.address}</p>}
                {portfolio?.personal?.email && <p className="text-gray-600">✉️ <a href={`mailto:${portfolio?.personal?.email}`} className="text-blue-600 underline">{portfolio?.personal?.email}</a></p>}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                    {portfolio?.contacts?.map((item,index)=>{
                        const exists = SOCIAIS.find(item_=>Social[item_.type]==item.type);
                        return (
                            <a key={index} href={item.link} target='_blank' className="p-1 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                                {exists ? <exists.icon  className='size-4'/> : <FaLink className='size-4'/>}
                            </a>
                    )})}
                </div>
            </div>
        </section>
        {portfolio?.skills?.length > 0  && (
            <section id='skills' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
                <ul className="ml-5 space-y-1 text-gray-800 list-inside">
                    {portfolio?.skills?.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <FaCheckCircle className="size-3.5 mr-2 text-green-500 flex-shrink-0"/>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </section>
        )}
        {portfolio?.projects?.length > 0  && (
            <section id='projects' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-4'>
                    {portfolio?.projects?.map((item, index) => (
                        <article key={index} className="relative w-full flex flex-col items-start px-4 pt-8 pb-4 border shadow-sm rounded-lg transition duration-300 hover:shadow-lg">
                            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-gray-900 text-gray-300">
                                #{index+1}
                            </span>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-lg text-slate-900 font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                                <div className="w-full flex items-center flex-wrap gap-2">
                                    <span className="text-gray-800 font-medium">Tecnologias:</span>
                                    {item?.techs.split(",").map((item)=>(
                                        <span key={item} className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg text-sm">{item}</span>
                                    ))}
                                </div>
                                <a href={item.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Visitar</a>
                            </div>

                        </article>
                    ))}
                </div>
            </section>
        )}
        {portfolio?.experiences?.length > 0  && (
            <section id='experiences' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Experiências de trabalho</h2>
                {portfolio?.experiences?.map((item, index) => (
                <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-2 flex items-center gap-2"><IoBusiness/> {item.company} - {item.location}</p>
                    <p className="text-gray-600 mb-2 flex items-center gap-2"><FaBusinessTime/>{(new Date(item.start_date).getFullYear())} - {item.end_date ? (new Date(item.end_date).getFullYear()) : "Actual"}</p>
                    <ul className="ml-5 space-y-1 text-gray-800 list-inside">
                        {item?.responsibilities.split(",")?.map((item) => (
                            <li key={item} className="flex items-center">
                                <FaCheckCircle className="size-3.5 mr-2 text-green-500 flex-shrink-0"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
            </section>
        )}
        {portfolio?.certifications?.length > 0  && (
            <section id='certifications'>
                <h2 className="text-2xl font-semibold mb-4">Certificações</h2>
                {portfolio?.certifications?.map((item, index) => (
                <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.provider} - {(new Date(item.date).getFullYear())}</p>
                </div>
                ))}
            </section>
        )}
        {portfolio?.languages?.length > 0  && (
            <section id='languages' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Idiomas</h2>
                <ul className="ml-5 space-y-1 text-gray-800 list-inside">
                    {portfolio?.languages?.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <FaCheckCircle className="size-3.5 mr-2 text-green-500 flex-shrink-0"/>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </section>
        )}
        <footer className="w-full text-sm leading-6 mt-8 py-4 border-t border-slate-200 sm:flex justify-between text-slate-500">
            <p>Copyright © 2024 MyFolio.</p>
            <a href="https://github.com/manuelbento19" className="hover:text-slate-500">
                <FaGithub className='size-5'/>
            </a>
        </footer>
    </section>
  );
};
