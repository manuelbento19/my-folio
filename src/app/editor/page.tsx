"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaMapPin, FaPlus } from 'react-icons/fa';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  Box,
  Button,
  InputGroup,InputLeftElement,
  Select
} from '@chakra-ui/react';
import { BiChevronDown, BiPlus, BiX } from 'react-icons/bi';
import { GoRocket } from 'react-icons/go';
import { CiDesktop, CiMobile1 } from 'react-icons/ci';
import { Desktop } from '../_components/devices/desktop';
import { Template } from '../_components/template';
import { portfolio } from '../you/page';
import { Mobile } from '../_components/devices/mobile';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PortfolioSchema } from '@/helpers/schema';
import { Portfolio } from '@/helpers/types';

const icons = [
  { name: 'Facebook', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', icon: 'fab fa-twitter' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', icon: 'fab fa-instagram' },
  { name: 'GitHub', icon: 'fab fa-github' }
];

export default function Page(){
  const [mobileView,setMobileView] = useState(false);
  const {register,handleSubmit,formState: {errors}} = useForm<Portfolio>({
    resolver: zodResolver(PortfolioSchema)
  });

  const onSubmit = (data:Portfolio) => {
    console.log(data)
  };

  return (
    <main className='w-screen h-screen flex items-center'>
      <aside className="h-screen p-4 overflow-y-auto bg-white w-[400px]">
        <header className='flex items-center justify-between'>
          <h5 className="text-base font-semibold text-gray-500">🚀MyFolio Editor</h5>
          <button type="button" className="text-gray-400 bg-transparent hover:text-gray-900 text-sm px-1" >
            <BiX className="size-6"/>
          </button>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-3">
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Dados pessoais</h2>
            </header>
            <div className="px-5 py-2 flex flex-col gap-2">
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">Nome</label>
                <input {...register('personal.name')} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                {errors.personal?.name && <span className='text-xs text-red-500'>{errors.personal.name.message}</span>}
              </div>
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">Título</label>
                <input {...register('personal.title')} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                {errors.personal?.title && <span className='text-xs text-red-500'>{errors.personal?.title.message}</span>}
              </div>
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">Biografia</label>
                <textarea {...register('personal.about')} className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm" rows={4}></textarea>
              </div>
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">E-mail</label>
                <input {...register('personal.email')} type='email' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
              </div>
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">Endereço</label>
                <input {...register('personal.address')} type='email' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Projectos</h2>
              <button className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {Array.from({length:3}).map((_,index)=>(
              <div key={index} className="py-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Projecto {index+1}</span>
                    <span className="p-1 bg-none transition group-open:rotate-180">
                      <BiChevronDown/>
                    </span>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Nome</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Descrição</label>
                      <textarea className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm" rows={4}></textarea>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Link</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Tecnologias</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Habilidades</h2>
              <button className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {Array.from({length:1}).map((_,index)=>(
                <div key={index} className="py-4 text-neutral-600 flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Habilidade</label>
                  <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Experiências</h2>
              <button className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {Array.from({length:3}).map((_,index)=>(
              <div key={index} className="py-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Experiência {index+1}</span>
                    <span className="p-1 bg-none transition group-open:rotate-180">
                      <BiChevronDown/>
                    </span>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Cargo</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Empresa</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Local</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de início</label>
                      <input type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de término</label>
                      <input type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Responsabilidades (separado por vírgula)</label>
                      <textarea className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm" rows={4}></textarea>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Certificações</h2>
              <button className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {Array.from({length:3}).map((_,index)=>(
              <div key={index} className="py-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Certificação {index+1}</span>
                    <span className="p-1 bg-none transition group-open:rotate-180">
                      <BiChevronDown/>
                    </span>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Título</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Entidade</label>
                      <input className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de emissão</label>
                      <input type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Contactos</h2>
              <button className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {Array.from({length:3}).map((_,index)=>(
              <div key={index} className="py-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Contacto {index+1}</span>
                    <span className="p-1 bg-none transition group-open:rotate-180">
                      <BiChevronDown/>
                    </span>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-sm font-medium text-gray-700">Rede</label>
                      <select className="p-2 border w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                        {icons.map(icon => (
                          <option key={icon.name} value={icon.name}>
                            {icon.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">URL</label>
                      <input type='url' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          <Button type='submit' leftIcon={<GoRocket/>} colorScheme={"blue"} w={"100%"}>
            Publicar
          </Button>
        </form>
      </aside>
      <section className='size-full flex-1 bg-gray-200'>
        {mobileView ? (
          <Mobile>
            <Template portfolio={portfolio}/>
          </Mobile>
        ):(
          <Desktop>
            <Template portfolio={portfolio}/>
          </Desktop>
        )}
        <button onClick={()=>setMobileView(prev=>!prev)} className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-full shadow-lg">
          {!mobileView ? <CiMobile1 className='size-6'/> : <CiDesktop className='size-6'/>}
        </button>
      </section>
    </main>
)}
/*
<div class="mb-4">
<label for="guests" class="mb-2 text-sm font-medium text-gray-900 sr-only">Invite guests</label>
<div class="relative">
    <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"/>
    <button type="button" className="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded-lg end-2 bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      <BiPlus className="size-3 me-1.5"/>
      Add
    </button>
</div>
</div>
*/