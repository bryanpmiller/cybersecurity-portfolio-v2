import Image from "next/image";

type GitHubLogoProps = {
  className?: string;
  variant?: "invertocat" | "lockup";
};

const githubLogos = {
  invertocat: {
    height: 96,
    sizes: "44px",
    src: "/images/logos/GitHub_Invertocat_White.svg",
    width: 98
  },
  lockup: {
    height: 127,
    sizes: "112px",
    src: "/images/logos/GitHub_Lockup_White_Clearspace.svg",
    width: 448
  }
};

export function GitHubLogo({ className, variant = "lockup" }: GitHubLogoProps) {
  const logo = githubLogos[variant];

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={logo.height}
      loading="eager"
      sizes={logo.sizes}
      src={logo.src}
      unoptimized
      width={logo.width}
    />
  );
}
