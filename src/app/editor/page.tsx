"use client"
import React, { useState } from 'react';
import {
  Button,
} from '@chakra-ui/react';
import { BiChevronDown, BiPlus, BiTrash, BiX } from 'react-icons/bi';
import { GoRocket } from 'react-icons/go';
import { CiDesktop, CiMobile1 } from 'react-icons/ci';
import { Desktop } from '../_components/devices/desktop';
import { Template } from '../_components/template';
import { Mobile } from '../_components/devices/mobile';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PortfolioSchema } from '@/helpers/schema';
import { Portfolio, Social } from '@/helpers/types';
import { SOCIAIS } from '@/helpers/constants';
import { CopyLinkModal } from '../_components/modal';

export default function Page(){
  const [mobileView,setMobileView] = useState(false);
  const [viewModal,setViewModal] = useState(false);
  const {register,handleSubmit,formState: {errors},control,watch} = useForm<Portfolio>({
    resolver: zodResolver(PortfolioSchema),
  });

  const portfolioData = watch();

  const closeModal = () => {
    setViewModal(prev=>!prev)
  }

  const {append:appendSkill,remove:removeSkill,fields:skills} = useFieldArray({
    name: "skills",
    control
  })
  const {append:appendProject,remove:removeProject,fields:projects} = useFieldArray({
    name: "projects",
    control
  })
  const {append:appendExperience,remove:removeExperience,fields:experiences} = useFieldArray({
    name: "experiences",
    control
  })
  const {append:appendCertification,remove:removeCertification,fields:certifications} = useFieldArray({
    name: "certifications",
    control
  })
  const {append:appendContact,remove:removeContact,fields:contacts} = useFieldArray({
    name: "contacts",
    control
  })
  const {append:appendLanguage,remove:removeLanguage,fields:languages} = useFieldArray({
    name: "languages",
    control
  })

  const onSubmit = (data:Portfolio) => {
    console.log(data)
    closeModal()
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
        <form onSubmit={handleSubmit(onSubmit,error=>console.log(error))} className="mt-8 space-y-3">
          {/*Personal*/}
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
                {errors.personal?.email && <span className='text-xs text-red-500'>{errors.personal.email.message}</span>}
              </div>
              <div className='flex flex-col gap-1'>
                <label className="text-xs font-medium text-gray-700">Endereço</label>
                <input {...register('personal.address')} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
              </div>
            </div>
          </div>
          {/*Projects*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Projectos</h2>
              <button type='button' onClick={()=>appendProject({title: "",description: "", link: "",techs:""})} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {projects.map((item,index)=>(
              <div key={index} className="py-2">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Projecto {index+1}</span>
                    <div className='flex items-center gap-2'>
                      <span className="p-1 bg-none transition group-open:rotate-180">
                        <BiChevronDown/>
                      </span>
                      <button onClick={()=>removeProject(Number(item.id))} type='button' className='p-1 text-red-500'>
                        <BiTrash className='size-4'/>
                      </button>
                    </div>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Nome</label>
                      <input {...register(`projects.${index}.title`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Descrição</label>
                      <textarea {...register(`projects.${index}.description`)} className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm" rows={4}></textarea>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Link</label>
                      <input {...register(`projects.${index}.link`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Tecnologias (separado por vírgula)</label>
                      <input {...register(`projects.${index}.techs`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          {/*Skills*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Habilidades</h2>
              <button type='button' onClick={()=>appendSkill({name:""})} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {skills.map((item,index)=>(
                <div key={index} className="py-4 text-neutral-600 flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Habilidade</label>
                  <div className="flex items-center gap-2">
                    <input {...register(`skills.${index}.name`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    <button onClick={()=>removeSkill(Number(item.id))} type='button' className='p-1 text-red-500'>
                      <BiTrash className='size-4'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Experiences*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Experiências</h2>
              <button type='button' onClick={()=>appendExperience({title:"",company:"",location:"",start_date: "",responsibilities:""})} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {experiences.map((item,index)=>(
              <div key={index} className="py-4">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Experiência {index+1}</span>
                    <div className='flex items-center gap-2'>
                      <span className="p-1 bg-none transition group-open:rotate-180">
                        <BiChevronDown/>
                      </span>
                      <button onClick={()=>removeExperience(Number(item.id))} type='button' className='p-1 text-red-500'>
                        <BiTrash className='size-4'/>
                      </button>
                    </div>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Cargo</label>
                      <input {...register(`experiences.${index}.title`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Empresa</label>
                      <input {...register(`experiences.${index}.company`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Local</label>
                      <input {...register(`experiences.${index}.location`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de início</label>
                      <input {...register(`experiences.${index}.start_date`)} type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de término</label>
                      <input {...register(`experiences.${index}.end_date`)} type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Responsabilidades (separado por vírgula)</label>
                      <textarea {...register(`experiences.${index}.responsibilities`)} className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm" rows={4}></textarea>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          {/*Certificações*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Certificações</h2>
              <button type='button' onClick={()=>appendCertification({title:"",provider:"",date:""})} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {certifications.map((item,index)=>(
              <div key={index} className="py-4">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Certificação {index+1}</span>
                    <div className='flex items-center gap-2'>
                      <span className="p-1 bg-none transition group-open:rotate-180">
                        <BiChevronDown/>
                      </span>
                      <button onClick={()=>removeCertification(Number(item.id))} type='button' className='p-1 text-red-500'>
                        <BiTrash className='size-4'/>
                      </button>
                    </div>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Título</label>
                      <input {...register(`certifications.${index}.title`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Entidade</label>
                      <input {...register(`certifications.${index}.provider`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">Data de emissão</label>
                      <input {...register(`certifications.${index}.date`)} type='month' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          {/*Contacts*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Contactos</h2>
              <button type='button' onClick={()=>appendContact({type: Social[0],link: "" })} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {contacts.map((item,index)=>(
              <div key={item.id} className="py-4">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className='text-sm'>Contacto {index+1}</span>
                    <div className='flex items-center gap-2'>
                      <span className="p-1 bg-none transition group-open:rotate-180">
                        <BiChevronDown/>
                      </span>
                      <button onClick={()=>removeContact(Number(item.id))} type='button' className='p-1 text-red-500'>
                        <BiTrash className='size-4'/>
                      </button>
                    </div>
                  </summary>
                  <div className="group-open:animate-fadeIn mt-2 text-neutral-600 flex flex-col gap-2">
                    <div className='flex flex-col gap-1'>
                      <label className="text-sm font-medium text-gray-700">Rede</label>
                      <select {...register(`contacts.${index}.type`)} className="p-2 border w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                        {SOCIAIS.map(item => (
                          <option key={item.type} value={Social[item.type]}>
                            {Social[item.type]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className="text-xs font-medium text-gray-700">URL</label>
                      <input {...register(`contacts.${index}.link`)} type='url' className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    </div>
                  </div>
                </details>
              </div>
              ))}
            </div>
          </div>
          {/*Languages*/}
          <div className="w-full flex flex-col gap-2 py-4 border">
            <header className="px-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-tight md:text-base">Idiomas</h2>
              <button type='button' onClick={()=>appendLanguage({name:""})} className="rounded-md border shadow-sm inline-block p-3 text-gray-700 hover:bg-gray-50">
                <BiPlus className='size-4'/>
              </button>
            </header>
            <div className="px-5 divide-y divide-neutral-200 max-h-48 py-2 overflow-y-auto">
              {languages.map((item,index)=>(
                <div key={index} className="py-4 text-neutral-600 flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Idioma</label>
                  <div className="flex items-center gap-2">
                    <input {...register(`languages.${index}.name`)} className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
                    <button onClick={()=>removeLanguage(Number(item.id))} type='button' className='p-1 text-red-500'>
                      <BiTrash className='size-4'/>
                    </button>
                  </div>
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
            <Template portfolio={portfolioData}/>
          </Mobile>
        ):(
          <Desktop>
            <Template portfolio={portfolioData}/>
          </Desktop>
        )}
        <button onClick={()=>setMobileView(prev=>!prev)} className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-full shadow-lg">
          {!mobileView ? <CiMobile1 className='size-6'/> : <CiDesktop className='size-6'/>}
        </button>
      </section>
      {viewModal && <CopyLinkModal onClose={closeModal} link='defv'/>}
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