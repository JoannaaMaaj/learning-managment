import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";
import StoreProvider from "@/state/redux";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div className="nondashboard-layout">
        <NonDashboardNavbar />
        <main className="nondashboard-layout__main">{children}</main>
        <Footer />
      </div>
    </StoreProvider>
  );
}