import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";
import StoreProvider from "@/state/redux";

export default function Home() {
  return (
    <StoreProvider>
      <div className="nondashboard-layout">
        <NonDashboardNavbar />
        <main className="nondashboard-layout__main">
          <Landing />
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
