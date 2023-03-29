import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { RequireAuth } from './RequireAuth';
import { PageLayout } from './components/PageLayout';
import { SignIn } from './components/SignIn';
import { Profile } from './components/Profile';
export function MyRoutes() {
    return (
        <BrowserRouter>
            <PageLayout>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes>
            </PageLayout>

            {/*<Routes>*/}
            {/*    <Route path="/" element={<PageLayout />}>*/}

            {/*        <Route element={<RequireAuth />}>*/}
            {/*            <Route path="/profile" element={<Profile />} />*/}
            {/*        </Route>*/}

            {/*        <Route path="/SignIn" element={<SignIn />} />*/}

            {/*    </Route>*/}
            {/*</Routes>*/}
        </BrowserRouter>
    );
}