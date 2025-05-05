import Image from "next/image";

function NavBar() {
  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50">
      <button className="bg-background card-shadow p-3 md:hidden rounded">
        <Image
          alt="light menu icon"
          className="dark:hidden block"
          src={"/menu_icon_light.svg"}
          height={20}
          width={20}
        />
        <Image
          alt="light menu icon"
          className="dark:block hidden"
          src={"/menu_icon_dark.svg"}
          height={20}
          width={20}
        />
      </button>
    </div>
  );
}

export default NavBar;
