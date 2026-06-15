export default function NavLink ({isTopNav}){
    const links=[
        "Home",
        "Users",
        "Setting"
    ]
    return <nav className={`flex ${isTopNav?"flex-row":"flex-col"} gap-2`}>
            {
                links.map((link,index)=>{
                    return <a key={index} href="#" className="text-xl font-bold p-2 hover:bg-[#ffffffde]">
                        {link}
                    </a>
                })
            }
    </nav>  
}