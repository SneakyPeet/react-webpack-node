// Provides the inital state to redux for server-side render
export default function getInitialState() {
  return {
    user: {
      isWaiting: false,
      message: '',
      isLogin: true
    }
  };
}
