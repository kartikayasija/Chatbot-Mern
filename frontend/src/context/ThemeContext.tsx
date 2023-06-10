import { createContext,ReactNode,useState,useEffect } from "react";

interface ThemeContextType{
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
  customColor: string,
  setCustomColor: React.Dispatch<React.SetStateAction<string>>
};
type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme:'default',
  setTheme:()=>{},
  customColor:'',
  setCustomColor:()=>{}
})

export const ThemeProvider:React.FC<ThemeProviderProps> = ({children})=>{
  const [theme, setTheme] = useState("default");
  const [customColor, setCustomColor] = useState('');
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) setTheme(newTheme);
    const color = localStorage.getItem('color');
    if(color) setCustomColor(color);
  }, []);
  return(
    <ThemeContext.Provider
      value={{ theme,setTheme,customColor,setCustomColor } as ThemeContextType}
    >
      {children}
    </ThemeContext.Provider>
  )
}