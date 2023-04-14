import { useSnapshot } from 'valtio'
import state from '../store'

const CustomButton = ({ type, title, onClick, className }) => {
  const snap = useSnapshot(state)
  const genereateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${className}`}
      onClick={() => onClick()}
      style={genereateStyle(type)}
    >
      {title}
    </button>
  )
}
export default CustomButton
