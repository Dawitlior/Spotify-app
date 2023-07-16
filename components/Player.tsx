"use client"

import usePlayer from "@/hooks/usePlayer"

const Player = () => {
    const player = usePlayer();

    return (
        <div>
            Player !
        </div>
    )
}

export default Player