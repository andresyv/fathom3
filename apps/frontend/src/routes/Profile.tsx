import DefaultLayout from '../components/layouts/DefaultLayout'
import { useAuthStore } from '../stores/auth'
import { MdAccountCircle as AccountIcon, MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { usePostsStore } from '../stores/posts'
import PostCard from '../components/PostCard'

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user)
  const profile = useAuthStore((state) => state.profile)
  const savedSpots = usePostsStore((state) => state.savedPosts)

  return (
    <DefaultLayout>
      <main className="flex flex-col w-full p-4 gap-10 justify-center items-center">
        <section id="profile" className="flex flex-col text-center justify-center">
          <AccountIcon className="w-full text-gray-400 h-48 w-48 mx-auto" />
          <div className="text-center text-sm font-medium">{`@${profile?.userName ?? ''}`}</div>
          <div className="text-center text-indigo-500 flex items-center gap-2 font-semibold">
            <EmailIcon />
            {`${user?.email ?? ''}`}
          </div>
        </section>
        <section id="saved-posts" className="flex py-4 flex-col gap-4">
          <h3 className="font-semibold text-indigo-500">Saved posts</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {!savedSpots.length && <span className="text-gray-500 font-medium">No posts saved</span>}
            {savedSpots.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </section>
      </main>
    </DefaultLayout>
  )
}
