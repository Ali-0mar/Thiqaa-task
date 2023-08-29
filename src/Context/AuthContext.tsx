import  { createContext, useContext, useState, ReactNode, ReactElement } from 'react';

interface UserData {
    id?: number;
    studentName?: string;
    username: string;
    password: string
}

interface UserContextType {
    activeUser: UserData | null;
    users: UserData[] | null;
    signup: (userData: UserData) => boolean;
    login: (userData: UserData) => boolean;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps): ReactElement {
    const [activeUser, setActiveUser] = useState<UserData | null>(null);
    const res =localStorage.getItem("users");
    const users: UserData[] = JSON.parse(res!);
    console.log(users)
    const login = (userData: UserData) => {
        const authenticatedUser = users.find((user) =>
            user.username == userData.username &&
                user.password == userData.password
        );
        if(authenticatedUser) {
            setActiveUser(authenticatedUser);
            return true
        } else {
            return false;
        }
    };

    const logout = () => {
        setActiveUser(null);
    };

    const signup = (userData: UserData) => {
        const match = users && users.some((user) => user.username == userData.username)
        if (users && match) {
            return false;
        }
        const transformedUserData = {
            id: users ? users.length + 1 : 1,
            ...userData
        }
        localStorage.setItem("users", JSON.stringify([
                ...(users ?? []),
                {
                    ...transformedUserData
                }
            ]
        ));
        setActiveUser(transformedUserData);
        return true;
    }

    return (
        <UserContext.Provider value={{
            activeUser,
            users,
            signup,
            login,
            logout,
             }}>
            {children}
        </UserContext.Provider>
);
}
