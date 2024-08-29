
import React, { useCallback, useState } from "react"

export default  function useFetchContent() {
    const [videourl, setVideoUrl] = useState<null | string>(null)
    const [loading , setLoading] = useState<boolean>(true)
    const [error,setError] = useState<null|string>(null)

    const fetchData = useCallback(function (url:string) {
        fetch("http://localhost:8001/videocontent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videourl: url })
        })
            .then((data) => data.json())
            .catch((err) => setError(err))
            .then((data) => setVideoUrl(data))
            .finally(() => setLoading(false))
    }, [])

    return { videourl , loading, error , fetchData }
}



