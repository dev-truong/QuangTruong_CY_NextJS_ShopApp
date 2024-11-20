import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function ProductLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
