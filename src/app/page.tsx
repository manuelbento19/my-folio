"use client"
import React from 'react';
import { FaEnvelope, FaGithub, FaMapPin } from 'react-icons/fa';
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
} from '@chakra-ui/react'

const icons = [
  { name: 'Facebook', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', icon: 'fab fa-twitter' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', icon: 'fab fa-instagram' },
  { name: 'GitHub', icon: 'fab fa-github' }
];

export default function Page(){

  const handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className='w-screen h-screen bg-gray-200 overflow-auto'>
      <div className="h-full container mx-auto">
        <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto p-6 flex flex-col gap-4">
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg flex flex-col gap-2'>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input name='name'/>
              <FormErrorMessage>Campo obrigatório</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input name='title'/>
              <FormErrorMessage>Campo obrigatório</FormErrorMessage>
            </FormControl>
            <Box>
              <Text>Biografia</Text>
              <Textarea size='full' rounded={5} resize={"none"}/>
            </Box>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FaEnvelope/>
                </InputLeftElement>
                <Input type='email'/>
              </InputGroup>
              <FormErrorMessage>Campo obrigatório</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Endereço</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FaMapPin/>
                </InputLeftElement>
                <Input/>
              </InputGroup>
              <FormErrorMessage>Campo obrigatório</FormErrorMessage>
            </FormControl>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input name='title'/>
                <FormErrorMessage>Campo obrigatório</FormErrorMessage>
              </FormControl>
              <Box>
                <Text>Descrição</Text>
                <Textarea size='full' rounded={5} resize={"none"}/>
              </Box>
              <FormControl>
                <FormLabel>Tecnologias</FormLabel>
                <Input name='technologies'/>
                <FormErrorMessage>Campo obrigatório</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input type='url' name='link'/>
                <FormErrorMessage>Campo obrigatório</FormErrorMessage>
              </FormControl>
              <Button colorScheme='red' mt={3}>
                Remover
              </Button>
            </div>
            <Button colorScheme='blue'>
              Adicionar
            </Button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
            <FormControl>
              <FormLabel>Habilidade</FormLabel>
              <Input name='skills'/>
              <FormErrorMessage>Campo obrigatório</FormErrorMessage>
            </FormControl>
            <Button colorScheme='blue' mt={2}>
              Adicionar
            </Button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Experiências</h2>
              <div className="mb-6 p-4 border rounded-lg shadow-sm">
                <FormControl>
                  <FormLabel>Cargo</FormLabel>
                  <Input name='jobTitle'/>
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Empresa</FormLabel>
                  <Input name='company'/>
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Local</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FaMapPin/>
                    </InputLeftElement>
                    <Input/>
                  </InputGroup>
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Data de início</FormLabel>
                  <Input type='month' name='startDate'/>
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Data de término</FormLabel>
                  <Input type='month' name='endDate'/>
                </FormControl>
                <Box>
                  <Text>Responsabilidades (separado por vírgula)</Text>
                  <Textarea size='full' rounded={5} resize={"none"}/>
                </Box>
                <Button colorScheme='red' mt={3}>
                  Remover
                </Button>
              </div>
            <Button colorScheme='blue'>
              Adicionar
            </Button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Certificações</h2>
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
              <FormControl>
                <FormLabel>Título</FormLabel>
                <Input name='title'/>
              </FormControl>
              <FormControl>
                <FormLabel>Entidade</FormLabel>
                <Input name='issuer'/>
              </FormControl>
              <FormControl>
                <FormLabel>Data de emissão</FormLabel>
                <Input type='month' name='issueDate'/>
              </FormControl>
              <Button colorScheme='red' mt={3}>
                Remover
              </Button>
            </div>
            <Button colorScheme='blue'>
              Adicionar
            </Button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Contactos</h2>
            <FormControl>
              <FormLabel>Rede</FormLabel>
              <Select>
                {icons.map(icon => (
                  <option key={icon.name} value={icon.name}>
                    {icon.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Link</FormLabel>
              <Input name='link'/>
            </FormControl>
          </section>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Enviar
          </button>
        </form>
        <footer className="w-full text-sm leading-6 mt-8 py-4 border-t border-slate-200 sm:flex justify-between text-slate-500">
          <p>Copyright © 2024 MyFolio.</p>
          <a href="https://github.com/manuelbento19" className="hover:text-slate-500">
              <FaGithub className='size-5'/>
          </a>
        </footer>
      </div>
    </main>
  );
};