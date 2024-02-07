import NavLinks from "@/components/nav-links";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:bg-blue-500 sm:text-white sm:p-4">
      {children}
    </div>
  );
}