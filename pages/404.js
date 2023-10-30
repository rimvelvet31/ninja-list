import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to{" "}
        <Link href="/" className="link">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
