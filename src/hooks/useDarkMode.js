import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('false');

    useEffect(() => {
        const bodyDiv= document.body;
        return value ? bodyDiv.classList.add('dark-mode') : bodyDiv.classList.remove('dark-mode');
    
    }, [value])

    return [value, setValue];
}

export default useDarkMode;