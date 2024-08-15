import { Portfolio   } from '@/helpers/types';
import React from 'react';
import { Template } from '../_components/template';

export const portfolio:Portfolio = {
    personal: {
        name: "Manuel Bento",
        title: "Software Developer",
        about: "Passionate about technology since a young age, i'm self-taught developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. Love learning new things and enjoys a good technical challenge.",
        address: "Luanda, Angola"
    },
    contact: {
        email: "manuelbentomb.223@gmail.com",
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

export default function Page(){
    return (
    <main className='w-full h-screen bg-white px-2'>
        <Template portfolio={portfolio}/>
    </main>
  );
};
