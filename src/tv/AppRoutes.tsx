// AppRoutes.tsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from 'src/tv/routesConfig';
import ErrorBoundary from 'src/tv/Components/ErrorBoundary/ErrorBoundary';

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.element />} />
                    ))}
                </Routes>
            </ErrorBoundary>
        </Suspense>
    );
};

export default AppRoutes;
