import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <Image
            src="/assets/NF.png"
            alt="not found 404"
            height={500}
            width={500}
          />
        </div>

        <Link className="text-white text-lg " href="/">
          This page could not be found
          <span className="text-[#35FFAE]"> Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
