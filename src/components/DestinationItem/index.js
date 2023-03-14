const DestinationItem = props => {
  const {eachPlace} = props
  const {imageUrl, name} = eachPlace
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
