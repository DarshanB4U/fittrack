import Link from "next/link";

function Logo() {
  return (
    <div className="flex justify-center items-start">
      <Link
        href="/"
        className="
              text-foreground
              text-2xl
              tracking-tight
              uppercase

              font-bold
              
            "
      >
        fittrack
      </Link>
    </div>
  );
}

export default Logo;
