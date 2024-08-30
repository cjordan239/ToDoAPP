import NavigationBar from "../components/Molecule/NavigationBar";
import SideBar from "../components/Molecule/SideBar";

export default function RootLayout({ children }: any) {
    return (
      <div className="flex h-screen">
        <SideBar/>
        <div className=" absolute w-screen">
          <NavigationBar />
          <main className="flex-1 flex justify-center items-center">
            {children}
          </main>
        </div>
      </div>
    );
  }