import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 ">
                <div className=" max-w-3xl mx-auto">
                    <Outlet />
                </div>
            </main>

            <BottomNavigation />
        </div>
    );
};

export default MainLayout;