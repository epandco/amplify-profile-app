import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { RequireAuth } from './RequireAuth';
import { PageLayout } from './components/PageLayout';
import { SignIn } from './components/SignIn';
import { Profile } from './components/Profile';
import { Home } from './components/Home';

export function MyRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/profile" element={
                                <RequireAuth>
                                    <Profile />
                                </RequireAuth>}/>
                        <Route path="/login" element={<SignIn />} />
                    </Route>
                </Routes>

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