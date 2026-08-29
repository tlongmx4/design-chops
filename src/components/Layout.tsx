import Header from './Header.tsx';
import Footer from './Footer.tsx';

function Layout({ children }: { children?: React.ReactNode}) {

    return(
        <div className="layout">
            <Header />
            <main className="body">
                { children }
            </main>
            <Footer />
        </div>
    );

}

export default Layout