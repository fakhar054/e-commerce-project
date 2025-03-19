import { createContext, useState } from "react";

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [response_Context, setResponse_Context] = useState({});
  return (
    <ResponseContext.Provider value={{ response_Context, setResponse_Context }}>
      {children}
    </ResponseContext.Provider>
  );
};
