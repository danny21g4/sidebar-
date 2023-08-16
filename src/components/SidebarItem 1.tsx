import { useState } from "react"



export default function SidebarItem({ item }) {

    const [open, setOpen] = useState(false)


    function toggle() {
        setOpen((prev) => {
            return prev = !prev
        });
    }


    if (item.childrens) {
        return (

            <section className={open ? "sidebar-item open" : "sidebar-item"} >
                

              

                <div className="sidebar-title" onClick={toggle} >
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" ></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child: string, index: number) => <SidebarItem key={index} item={child} />)}
               
                </div>
            </section>

        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </a>
        )
    }
}