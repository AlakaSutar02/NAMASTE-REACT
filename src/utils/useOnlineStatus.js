import { useEffect, useState } from "react";

// Custom hooks
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => setIsOnline(false));
    window.addEventListener("online", () => setIsOnline(true));

    console.log(isOnline);
  }, []);
  return isOnline;
};

export default useOnlineStatus;
