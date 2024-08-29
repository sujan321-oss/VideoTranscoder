import { useCallback, useEffect, useState } from "react"

interface thumbnailData {
    Key: string,
    LastModified: Date,
    ETag: string,
    Size: number,
    StorageClass: string,
}

const useThumbnailFetching = () => {
    const [thumbnail, setThumbnail] = useState<[thumbnailData] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const fetchThumbanail = useCallback(() => {
        fetch("http://localhost:8001/thumbnail")
            .then((data) => data.json())
            .catch((err) => setError(err))
            .then((data) => setThumbnail(data))
            .finally(() => setLoading(false))
        return { loading, thumbnail, error }

    }, [])

    return { loading, thumbnail, error, fetchThumbanail }
}

export default useThumbnailFetching

