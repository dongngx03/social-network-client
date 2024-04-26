import { Route, Routes } from "react-router-dom"
import AuthLayout from "../_auth/AuthLayout"
import MemberLayout from "../_member/MemberLayout"
import Home from "../_member/pages/Home"
import Chat from "../_member/pages/Chat"
import Profile from "../_member/pages/Profile"
import SignIn from "../_auth/pages/SignIn"
import NotFound from "../components/NotFound"

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {/* auth router */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SignIn />} />
                </Route>

                {/* Member router */}
                <Route element={<MemberLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes