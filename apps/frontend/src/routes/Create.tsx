import { useEffect } from 'react'
import CreatePostForm from '../components/forms/CreatePostForm'
import DefaultLayout from '../components/layouts/DefaultLayout'

function CreatePage() {
  useEffect(() => {
    document.title = '100Anuncios - Crear anuncio'
  }, [])

  return (
    <DefaultLayout>
      <main className="flex flex-col h-main items-center justify-center">
        <CreatePostForm />
      </main>
    </DefaultLayout>
  )
}

export default CreatePage
