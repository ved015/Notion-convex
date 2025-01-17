"use client"

import { useEffect,useState } from "react"
import { CoverImageModal } from "../modals/cover-image-modal"

export const ModalProvider = () => {
    const [isMounted,setisMounted] = useState(false);

    useEffect(() => {
        setisMounted(true);
    }, []);

    if(!isMounted) return null;

    return(
        <>
            <CoverImageModal />
        </>
    )
}