// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, ClickingImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl} = imageDetails
  const onClicking = () => {
    ClickingImg(imageUrl)
  }

  const isTrue = isActive ? 'noBlur' : ''
  return (
    <li className="imageDiv">
      <button type="button">
        <img
          className={`img ${isTrue}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClicking}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
