import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>This page could not be found</h2>
      <p>
        <Link href="/">Go to main page</Link> in a 3 seconds...
      </p>
    </div>
  );
};

export default NotFoundPage;
