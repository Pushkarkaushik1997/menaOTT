import React, { useState, useEffect } from 'react';
import Layout from 'src/tv/Components/Layout/Layout';
import useBackNavigation from 'src/tv/hooks/useBackNavigation';
import AppRoutes from 'src/tv/AppRoutes'; // Import the extracted routes
import { DataProvider } from 'src/tv/Context/DataContext';

const AppContent: React.FC = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const handleSidebarFocus = () => {
        setIsSidebarExpanded(true);
    };

    const handleSidebarBlur = () => {
        setIsSidebarExpanded(false);
    };

    useBackNavigation();

    return (
        <DataProvider>
            <Layout
                isSidebarExpanded={isSidebarExpanded}
                handleSidebarFocus={handleSidebarFocus}
                handleSidebarBlur={handleSidebarBlur}
            >
                <AppRoutes />
            </Layout>
        </DataProvider>
    );
};

export default AppContent;
