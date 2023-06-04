import { useParams } from 'react-router-dom'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { usePostData } from '../hooks/usePostData'
import { userPriceFormatter } from '../hooks/usePriceFormatter'
import { MdAccountCircle as AccountIcon, MdOutlineEmail as EmailIcon } from 'react-icons/md'

function PostView() {
  const { id } = useParams()

  const { data: postData, isError, isLoading } = usePostData(id)
  const { priceToEUR } = userPriceFormatter()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError || !postData) {
    return <span>Something went wrong</span>
  }

  return (
    <DefaultLayout>
      <main className="flex flex-col w-full p-4 justify-center">
        <section id="resume" className="flex justify-center gap-10">
          <div className="flex flex-col w-1/2 items-center gap-10">
            {postData.picture ? (
              <img
                src={postData.picture}
                className="rounded-lg  border border-gray-200 object-center object-cover w-full h-86"
                alt="Post picture"
              />
            ) : (
              <img
                src="/image-placeholder.jpg"
                className="rounded-lg  border border-gray-200 object-center object-cover w-full h-86"
                alt="Post picture"
              />
            )}
            <div className="flex flex-col justify-start w-full gap-2">
              <h2 className="text-2xl">{postData.title}</h2>
              <strong className="text-4xl">{priceToEUR(postData.price)}</strong>
            </div>
            <div className="flex flex-col justify-start w-full gap-4">
              <span className="text-md font-bold">Description</span>
              <p className="text-left text-lg">{postData.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/4">
            <div className="flex gap-2 items-center border border-gray-100 rounded-lg px-4 py-2">
              <AccountIcon className="text-gray-200 w-24 h-24" />
              <span className="font-semibold">{`${postData.creator.profile.userName}'s offer`}</span>
            </div>
            <a
              className="flex gap-2 items-center px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 font-semibold justify-center"
              href={`mailto:${postData.creator.email}`}
            >
              <EmailIcon /> Send email
            </a>
          </div>
        </section>
      </main>
    </DefaultLayout>
  )
}

export default PostView
