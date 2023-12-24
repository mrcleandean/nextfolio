"use client";
import { useEffect } from "react";
import { isValidFilter } from "@/util";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InitQueries = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const limitVal = Number(params.get('limit')?.toString());
        const filterVal = params.get('filter')?.toString();
        let triggered = false;
        if (isNaN(limitVal) || limitVal > 150) {
            triggered = true;
            params.set('limit', '10');
        }
        if (!filterVal || !isValidFilter(filterVal)) {
            triggered = true;
            params.set('filter', 'newest');
        }
        if (triggered) replace(`${pathname}?${params.toString()}`);
    }, []);
    return null;
}

export default InitQueries;