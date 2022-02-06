
function TabsCategory({ categories, categCurrent, setCategCurrent }) {

    return (
        <>
            {categories.map((item, index) => {
                return (
                    <h1
                        key={index}
                        className={item.name === categCurrent ? "active" : ""}
                        onClick={() => { setCategCurrent(item.name) }}
                    >
                        {item.label}
                    </h1>
                )
            })}
        </>
    )

}

export default TabsCategory