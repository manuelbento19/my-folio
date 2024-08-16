import { Portfolio   } from '@/helpers/types';
import React from 'react';
import { Template } from '../_components/template';

export default function Page(){
    return (
    <main className='w-full h-screen bg-white px-2'>
        <Template portfolio={portfolio}/>
    </main>
  );
};
