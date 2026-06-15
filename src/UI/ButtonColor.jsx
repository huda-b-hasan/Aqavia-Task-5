import { useTheme } from "../context/ColorContext"
export default function ButtonColor(){
    const {theme,handleChangeTheme,listcolor}=useTheme();
    return <div className="flex items-center gap-2 ">
        {
            listcolor.map((element,index)=>{
                return <button key={index} className={`p-3 rounded-full  ${theme==element.value ?"border-2 border-gray-200":""} `}
              style={{backgroundColor:`${element.value}`}}
              onClick={()=>handleChangeTheme(element.id)}
              id={element.id}/>
            })
        }
    </div>
}