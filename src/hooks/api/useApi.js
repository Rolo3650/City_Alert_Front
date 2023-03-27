import { useState } from "react";

const useApi = (propApiFunc) => {
    const [res, setRes] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        setError("");
        try {
            const result = await propApiFunc(...args);
            setRes(result.data);
            return result.data;
        } catch (err) {
            if (err.response.data.error) {
                setError(err.response.data.error || "Error...");
            }
            if (typeof err.response.data.error != 'undefined') {
                setError(err.response.data.error || "Error...");
            } else if (typeof err.response.data.err.message != 'undefined') {
                setError(err.response.data.err.message || "Error...");
            }
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { res, error, loading, request, setError };
};

export { useApi }