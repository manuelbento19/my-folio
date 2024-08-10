import { Portfolio   } from '@/helpers/types';
import React from 'react';

const portfolio:Portfolio = {
    personal: {
        name: "Manuel Bento",
        title: "Software Developer",
        about: "I don't know what write here",
        address: "Luanda, Angola"
    },
    contact: {
        email: "manuelbentomb.223@gmail.com",
        //phone: "943454709",
        github: "https://github.com/manuelbento19",
    },
    skills: [
        "Javascript",
        "React",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Node.js"
    ],
    projects: Array.from({length: 3}).map((_,index)=>(
        {
            title: `Aplicativo Nº ${index+1}`,
            description: "Aplição de gestão e facturação",
            techs: ["React", "Node.js", "Express"],
            link: `https://example.com/app-${index+1}`
        }
    )),
    experiences: Array.from({length: 3}).map((_,index)=>(
        {
            title: `Desenvolvedor Front-End na ${index+1}`,
            company: `Empresa ${index+1}`,
            location: "Luanda, Angola",
            start_date: new Date("2023-05"),
            end_date: new Date("2023-05"),
            responsibilities: [
                "Desenvolvimento de interfaces de usuário com React",
                "Colaboração com designers e desenvolvedores back-end",
                "Implementação de testes automatizados"
            ]
        }
    )),
    certifications: Array.from({length: 3}).map((_,index)=>(
        {
        title: `${index+1}ª Certificação`,
        provider: "Instituto de Tecnologia",
        date: new Date("2023-05")
        }
    )),
    languages: [
        "Português",
        "Inglês"
    ]
};

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

export default function Page(){
  return (
    <main className='w-full h-screen bg-white px-2'>
        <div className="h-full max-w-4xl mx-auto w-full">
            <header className="bg-white w-full flex h-20 items-center justify-between sticky top-0">
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
                        <svg className="fill-slate-700 size-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button>
                </nav>
            </header>
            <section id='' className="mb-8 py-5">
                <h1 className="text-3xl font-bold mb-2">{portfolio.personal.name}</h1>
                <div className="w-max">
                    <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap border-r-2 border-r-gray-700 pr-5 overflow-hidden animate-typing">
                        {portfolio.personal.title}
                    </h2>
                </div>
                <p className="text-gray-600 mt-4">{portfolio.personal.about}</p>
                <div className="mt-4 flex flex-col gap-3">
                    <p className="text-gray-600">📍 {portfolio.personal.address}</p>
                    <p className="text-gray-600">✉️ <a href={portfolio.contact.email} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{portfolio.contact.email}</a></p>
                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                        {Array.from({length: 4}).map((_,index)=>(
                            <a key={index} href="#" className="p-1 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 71 72" fill="none">
                                    <path d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"fill="#111827" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section id='skills' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
                <ul className="ml-5 space-y-1 text-gray-800 list-inside">
                    {portfolio.skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
            <section id='projects' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
                {portfolio.projects.map((item, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <p className="text-gray-600 mb-2"><b>Tecnologias</b>: {item.techs.join(', ')}</p>
                        <a href={item.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Visitar</a>
                    </div>
                ))}
            </section>
            <section id='experiences' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Experiência de Trabalho</h2>
                {portfolio.experiences.map((item, index) => (
                <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-2">{item.company} - {item.location}</p>
                    <p className="text-gray-600 mb-2">{(new Date(item.start_date).getFullYear())} - {item.end_date ? (new Date(item.end_date).getFullYear()) : "Actual"}</p>
                    <ul className="list-disc ml-5 text-gray-800">
                    {item.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </section>
            <section id='certifications'>
                <h2 className="text-2xl font-semibold mb-4">Certificações</h2>
                {portfolio.certifications.map((item, index) => (
                <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.provider} - {(new Date(item.date).getFullYear())}</p>
                </div>
                ))}
            </section>
            <section id='languages' className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Idiomas</h2>
                <ul className="list-disc ml-5 text-gray-800">
                    {portfolio.languages.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
            <footer className="w-full text-sm leading-6 mt-8 py-4 border-t border-slate-200 sm:flex justify-between text-slate-500">
                <p>Copyright © 2024 MyFolio.</p>
                <a href="https://github.com/manuelbento19" className="hover:text-slate-500">
                    <svg width="25" height="24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z">
                        </path>
                    </svg>
                </a>
            </footer>
        </div>
    </main>
  );
};
