import animationData from './lotties/empty-state-animation'

export const SCROLLBAR_STYLE = {
  '&&::-webkit-scrollbar': {
    width: '5px',
    height: '5px',
  },
  '&&::-webkit-scrollbar-thumb': {
    background: '#808080',
    borderRadius: '8px',
  },
  '&&::-webkit-scrollbar-thumb:hover': {
    background: '#808080',
  },
  '&&::-webkit-scrollbar-track': {
    background: 'black',
    borderRadius: '10px',
  },
}

export const ANIMATION_DEFAULT_OPTIONS = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
