"use client"

interface CoverImageProps {
    url ?: string
    preview ?: boolean
}

const Cover = ({
    url,
    preview
} : CoverImageProps) => {
    return (
        <div>
            Cover Image
        </div>
    );
}
 
export default Cover;