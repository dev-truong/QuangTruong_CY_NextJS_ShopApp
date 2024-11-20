import "./globals.css";

export const metadata = {
    title: "ShopApp by NextJS",
    description: "First NextJS App",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
