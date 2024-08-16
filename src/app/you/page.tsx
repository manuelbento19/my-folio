import React from 'react';
import { Template } from '../_components/template';
import { notFound } from 'next/navigation';
import { Portfolio } from '@/helpers/types';
import { Serializer } from '@/helpers/serializer';
import { Metadata } from 'next';

type Props = {
  searchParams: {
    data: string;
  }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const portfolio:Portfolio = Serializer.decode(JSON.stringify(searchParams?.data));
  if(!portfolio) return {}

  return {
    title: `${portfolio?.personal?.name} - MyFolio`,
    openGraph: {
      siteName: "MyFoli",
      type: "website",
      title: `${portfolio?.personal?.name} - MyFolio`,
    },
  };
}

export default function Page({searchParams}: Props){
  if(!searchParams?.data) return notFound();

  const portfolio:Portfolio = Serializer.decode(JSON.stringify(searchParams.data));
  if(!portfolio)
  return notFound();

  return (
    <main className='w-full h-screen bg-white px-2'>
      <Template portfolio={portfolio}/>
    </main>
  );
};
