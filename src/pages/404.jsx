import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="notFoundBox">
      <div className="twinBox">
        <span>
          {/* <Image 
            src={notFound}
            alt="not found 404" 
            height="80"
            width="90"
          /> */}
        </span>
        <Link href="/">This page could not be found</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
