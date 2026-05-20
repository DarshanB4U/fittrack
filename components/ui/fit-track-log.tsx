import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="
              text-foreground
              text-2xl
              font-black
              tracking-tight
              uppercase
            "
      >
        fittrack
      </Link>
    </div>
  );
}

export default Logo;
