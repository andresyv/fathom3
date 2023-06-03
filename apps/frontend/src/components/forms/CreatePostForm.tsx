import { FC } from 'react'
import Form from '../Form'
import Input from '../Input'
import { CreatePostFormType } from '../../types'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { useCreatePost } from '../../hooks/useCreatePost'
import { useAuthStore } from '../../stores/auth'

const CreatePostForm: FC = () => {
  const navigate = useNavigate()
  const { createPost } = useCreatePost()
  const user = useAuthStore((state) => state.user)

  const onSubmit = async (form: CreatePostFormType) => {
    try {
      if (user) {
        await createPost({ ...form, creatorId: user.id })
        navigate('/')
      }
    } catch (e) {
      alert('error')
      console.log(e)
    }
  }

  return (
    <Form<CreatePostFormType>
      className="bg-white rounded-lg flex flex-col shadow-md w-full p-6 gap-8 md:max-w-lg"
      onSubmit={onSubmit}
    >
      <div className="flex">
        <h3 className="font-bold text-3xl text-indigo-500">Create post</h3>
      </div>
      <div className="flex flex-col gap-3">
        <Input name="title" placeholder="Ad title" />
        <Input name="description" placeholder="Ad description" />
        <Input name="price" placeholder="price" type="number" />
        <Input name="picture" placeholder="picture url" />
      </div>
      <Button block>Create</Button>
    </Form>
  )
}

export default CreatePostForm
