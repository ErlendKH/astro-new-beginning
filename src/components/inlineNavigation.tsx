
export const InlineNavigationTSX = ({navigationList} : {navigationList:any[]}) => {

    return(
        <div
            style={{ display: "flex", flexDirection: "column", fontStyle: "italic" }}
        >
            {
                navigationList.map((value, index) => (
                    <a key={`${index}`} href={`${value.route}`}>
                        {value.title}
                    </a>
                ))
            }
        </div>
    )

}
