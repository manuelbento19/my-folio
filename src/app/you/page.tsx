import React from 'react';
import { Template } from '../_components/template';
import { notFound, useSearchParams } from 'next/navigation';
import { Portfolio } from '@/helpers/types';
import { Serializer } from '@/helpers/serializer';

type Props = {
  searchParams: {
    data: string;
  }
}

export default function Page({searchParams}: Props){
    if(!searchParams?.data) return notFound();

    const portfolio:Portfolio = Serializer.decode(JSON.stringify(searchParams.data));
    if(!portfolio)
    return notFound();

    console.log(portfolio)
    
    return (
    <main className='w-full h-screen bg-white px-2'>
      <Template portfolio={portfolio}/>
    </main>
  );
};
