
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
