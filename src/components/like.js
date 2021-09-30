import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'

const Like = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <FavoriteIcon
        color={props.liked ? 'error' : 'info'}
        style={{ cursor: 'pointer' }}
      />
    </IconButton>
  )
}

export default Like
