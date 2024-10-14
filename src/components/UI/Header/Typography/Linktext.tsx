type TLinkText={
    text:string
}

export const Linktext=({text}:TLinkText)=>{
    return(
        <a>{text}</a>
    )
}