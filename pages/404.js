import { useEffect } from 'react';
import Link from "next/dist/client/link";
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/', undefined, { shallow: true });
        }, 3000);
    }, [router]);

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link> </p>
        </div>
    );
}
 
export default NotFound;