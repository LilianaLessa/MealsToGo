import React, { createContext, useState } from "react";

export const UserProfileContext = createContext();
export const UserProfileContextProvider = ({ children }) => {
  const [userProfilePictureUri, setUserProfilePictureUri] = useState(null);

  return (
    <UserProfileContext.Provider
      value={{
        userProfilePictureUri,
        setUserProfilePictureUri,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
