import React, { ReactNode, createContext, useState } from 'react';
type AppContentContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    isAppReady: boolean;
    setIsAppReady: (isAppReady: boolean) => void;
    handleLogin: () => void;
    handleLogout: () => void;
    handleRegister: () => void;
    handleForgotPassword: () => void;
    handleResetPassword: () => void;
    fromStation: string;
    setFromStation: (fromStation: string) => void;
    toStation: string;
    setToStation: (toStation: string) => void;
}

const AppContentContext = createContext<AppContentContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    isAppReady: false,
    setIsAppReady: () => { },
    handleLogin: () => { },
    handleLogout: () => { },
    handleRegister: () => { },
    handleForgotPassword: () => { },
    handleResetPassword: () => { },
    fromStation: '',
    setFromStation: () => { },
    toStation: '',
    setToStation: () => { },
});
interface Props {
    children: ReactNode;
}
const AppContextProvider = ({ children }: Props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isAppReady, setIsAppReady] = useState(false);
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToStation] = useState('');
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    const handleRegister = () => {
        setIsLoggedIn(true);
    }

    const handleForgotPassword = () => {
        setIsLoggedIn(true);
    }
    const handleResetPassword = () => {
        setIsLoggedIn(true);
    }
    const value = {
        isLoggedIn,
        setIsLoggedIn,
        isAppReady,
        setIsAppReady,
        handleLogin,
        handleLogout,
        handleRegister,
        handleForgotPassword,
        handleResetPassword,
        fromStation,
        setFromStation,
        toStation,
        setToStation,
    }
    return (
        <AppContentContext.Provider value={value}>
            {children}
        </AppContentContext.Provider>
    )
}


interface StationContextType {
    fromStation: string;
    setFromStation: (station: string) => void;
    toStation: string;
    setToStation: (station: string) => void;
    // adult, children, traintype, class, ticketype, 
    adult: number;
    setAdult: (adult: number) => void;
    child: number;
    setChild: (child: number) => void;
    trainType: string;
    setTrainType: (trainType: string) => void;
    classType: string;
    setClass: (classType: string) => void;
    ticketType: string;
    setTicketType: (ticketType: string) => void;
}


export const StationContext = createContext<StationContextType>({
    fromStation: '',
    setFromStation: () => { },
    toStation: '',
    setToStation: () => { },
    adult: 0,
    setAdult: () => { },
    child: 0,
    setChild: () => { },
    trainType: '',
    setTrainType: () => { },
    classType: '',
    setClass: () => { },
    ticketType: '',
    setTicketType: () => { },

});
export const StationProvider = ({ children }: Props) => {
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToStation] = useState('');
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [trainType, setTrainType] = useState('ORDINARY');
    const [classType, setClass] = useState('SECOND');
    const [ticketType, setTicketType] = useState('ONE_WAY');
    return (
        <StationContext.Provider
            value={{
                fromStation,
                setFromStation,
                toStation,
                setToStation,
                adult,
                setAdult,
                child,
                setChild,
                trainType,
                setTrainType,
                setClass,
                ticketType,
                setTicketType,
                classType,
            }}
        >
            {children}
        </StationContext.Provider>
    );
};


export { AppContentContext, AppContextProvider };

