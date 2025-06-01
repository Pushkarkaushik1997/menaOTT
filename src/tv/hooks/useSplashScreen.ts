import { useEffect, useState } from "react";
import { useDataContext } from "src/tv/hooks/useDataContext";

const useSplashScreen = () => {
    const [isTimeoutComplete, setIsTimeoutComplete] = useState<boolean>(false);
    const { loading } = useDataContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTimeoutComplete(true);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []); 

    const showSplash = !isTimeoutComplete || loading;

    return { showSplash };
}

export default useSplashScreen;