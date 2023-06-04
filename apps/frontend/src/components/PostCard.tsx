import { FC } from 'react'
import { Post } from '../models/post'
import { MdFavoriteBorder as FavoriteIcon } from 'react-icons/md'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { userPriceFormatter } from '../hooks/usePriceFormatter'

interface PostCardProps {
  post: Post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate()
  const { priceToEUR } = userPriceFormatter()

  const onPostClicked = () => {
    navigate(`/post/${post.id}`)
  }
  return (
    <article
      className="border rounded-lg cursor-pointer flex flex-col border-gray-200 shadow my-2 w-full gap-4 md:w-4/12 lg:w-3/12 hover:shadow-lg"
      key={post.id}
      onClick={onPostClicked}
    >
      <img
        src={post.picture}
        className="rounded-t-lg object-center object-cover aspect-square"
        width="100%"
        alt={`${post.title} picture`}
        loading="lazy"
      />
      <div className="flex flex-col py-4 px-6 gap-4">
        <div className="flex gap-2 justify-between items-center">
          <h3 className="font-regular text-xl">{post.title}</h3>
          <Button sm variant="neutral">
            <FavoriteIcon />
          </Button>
        </div>
        {post.price ? <strong className="text-lg">{priceToEUR(post.price)}</strong> : <strong>Free</strong>}
        <p>{post.description}</p>
      </div>
    </article>
  )
}

export default PostCard
