import { useEffect, useState } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const media = window.matchMedia(query);
            setMatches(media.matches);

            const listener = () => setMatches(media.matches);
            media.addEventListener("change", listener);

            return () => media.removeEventListener("change", listener);
        }

        return () => {};
    }, [query]);

    return matches;
}
