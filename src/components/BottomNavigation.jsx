import { useState } from 'react';
import {
    HiHome,
    HiUser,
    HiShoppingBag,
} from 'react-icons/hi';
import { PiHeartbeatFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate()

    const navigationItems = [
        { id: 'home', icon: HiHome, label: 'Home', path: '/' },
        { id: 'menu', icon: HiShoppingBag, label: 'Menu', path: '/menu' },
        { id: 'favorite', icon: PiHeartbeatFill, label: 'Favorite', path: '/favorite' },
        { id: 'profile', icon: HiUser, label: 'Profile', path: '/profile' },
    ];

    const handleClick = (item) => {
        setActiveTab(item.id)
        navigate(item.path)
    }
    return (
        <nav className="sticky bottom-0 z-50 bg-white border-t border-gray-200 py-2 px-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item)}
                            className={`flex flex-col items-center justify-center p-2 min-w-12 transition-all duration-200 ${isActive
                                ? 'text-green-900 scale-105'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <IconComponent className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
                            <span className={`text-xs mt-1 font-medium ${isActive ? 'text-green-900' : 'text-gray-500'
                                }`}>
                                {item.label}
                            </span>

                            {/* Active Indicator */}
                            {isActive && (
                                <div className="w-1 h-1 bg-green-900 rounded-full mt-1"></div>
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavigation;