import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ onScrollEnd }) => {
    const sentinelRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // 10% of the element must be visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onScrollEnd();
                }
            });
        }, options);

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [onScrollEnd]);

    return <div ref={sentinelRef} />;
};

export default InfiniteScroll;
