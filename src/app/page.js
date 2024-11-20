import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function HomePage() {
  return (
      <div>
        <Header/>
        <div className="underline text-red-500">
          this is homepage
        </div>
        <Footer/>
      </div>
)
  ;
}
