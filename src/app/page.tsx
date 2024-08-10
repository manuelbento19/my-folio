"use client"
import React from 'react';

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
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              name="title"
              placeholder="Título"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <textarea
              name="bio"
              placeholder="Bio"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              name="address"
              placeholder="Endereço"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                {icons.map(icon => (
                  <option key={icon.name} value={icon.name}>
                    {icon.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className={`size-2 bg-red-500 text-xl`} />
              </div>
            </div>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
              <input
                type="text"
                name="title"
                placeholder="Nome"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <textarea
                name="description"
                placeholder="Descrição"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="text"
                name="technologies"
                placeholder="Tecnologias"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="url"
                name="link"
                placeholder="Link"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <button
                type="button"
                className="text-red-600 hover:underline"
              >
                Remover Projeto
              </button>
            </div>
            <button type="button" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
              Adicionar
            </button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
            <input
              type="text"
              name="skills"
              placeholder="Habilidade"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <button type="button" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
              Adicionar
            </button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Experiências</h2>
              <div className="mb-6 p-4 border rounded-lg shadow-sm">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Cargo"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Local"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="month"
                  name="startDate"
                  placeholder="Data de início"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="month"
                  name="endDate"
                  placeholder="Data de término"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <textarea
                  name="responsibilities"
                  placeholder="Responsabilidades"
                  className="block w-full p-2 mb-4 border rounded-md"
                />
                <button
                  type="button"
                  className="text-red-600 hover:underline"
                >
                  Remover
                </button>
              </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Adicionar
            </button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Certificações</h2>
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
              <input
                type="text"
                name="title"
                placeholder="Título"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="text"
                name="issuer"
                placeholder="Emitido por..."
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="month"
                name="issueDate"
                placeholder="Data de emissão"
                className="block w-full p-2 mb-4 border rounded-md"
              />
              <button
                type="button"
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Adicionar Certificação
            </button>
          </section>
          <section className='bg-white px-4 py-8 shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4">Contactos</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              className="block w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              name="portfolio"
              placeholder="Portfólio"
              className="block w-full p-2 mb-4 border rounded-md"
            />
          </section>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};