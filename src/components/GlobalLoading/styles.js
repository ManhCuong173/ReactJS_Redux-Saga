const styles = () => ({
  globalLoading: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99,
    background: 'rgba(0,0,0,0.4)',
  },
  icon: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    maxWidth: 200,
    maxHeight: 200,
    width: '100%',
    height: '100%',
    transform: 'translate(-50%,-50%)',
  },
});

export default styles;
