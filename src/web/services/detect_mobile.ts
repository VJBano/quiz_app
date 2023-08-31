
export const isMobileDevice = () => {

const userAgent = window.navigator.userAgent;
const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return mobileDeviceRegex.test(userAgent);
}