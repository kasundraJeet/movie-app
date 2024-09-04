import Image from "next/image"

const imageDomain = process.env.IMAGE_DOMAIN

export default function CustomImage({src, alt}){
    return(
        <Image src={`${imageDomain}${src}`} alt={alt} fill={true} placeholder="empty" />
    )
}