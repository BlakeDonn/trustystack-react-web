import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Authentication logic here
  }, []);

  return { user };
};

export default useAuth; 