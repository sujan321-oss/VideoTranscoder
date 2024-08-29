import { useCallback, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const useContentFetching = () => {
    const [content, setContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const contentFetching = useCallback(() => {
        console.log("clicked and fetcing the content")

        if (Cookies.get("authcookie")) {
              console.log("fetching data")
            fetch("http://localhost:8001/protected-resource",
                {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${Cookies.get("authcookie")}` }
                })

                .then(data => data.json())
                .catch((err) => setError(err))
                .then((data) => setContent(data))
                .finally(() => setLoading(false));
           
        }

        else {
            console.log("navigating to login")
            navigate("/login")
        }
        return { loading, content, error }
    }, [])


    return { loading, content, error, contentFetching }
}

export default useContentFetching;
