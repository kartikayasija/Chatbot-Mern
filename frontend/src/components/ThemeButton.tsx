type Prop = {
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeButton:React.FC<Prop> = ({setTheme})=>{
  const handleTheme = (theme:string)=>{
    localStorage.setItem('theme',theme);
    setTheme(theme);
  }
  return (
    <div>
      <button onClick={()=>handleTheme('red')}>Red</button>
      <button onClick={()=>handleTheme('blue')}>Blue</button>
    </div>
  )
}

export default ThemeButton;