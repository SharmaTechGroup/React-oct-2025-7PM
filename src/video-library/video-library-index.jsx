import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { VideoLibraryHome } from "./video-library-home";
import { AdminLogin } from "./admin/admin-login";
import { AdminDashboard } from "./admin/admin-dashboard";
import { AddVideo } from "./admin/add-video";
import { DeleteVideo } from "./admin/delete-video";
import { EditVideo } from "./admin/edit-video";
import { UserRegister } from "./user/user-register";
import { UserLogin } from "./user/user-login";

export function VideoLibraryIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
              <header className="p-2 text-center bg-dark text-white">
                  <Link to="/" className="text-white text-decoration-none"><div className="fw-bold fs-2 bi bi-house-door-fill"> Video Library </div></Link>
              </header>
              <section className="mt-3">
                 <Routes>
                    <Route path="/" element={<VideoLibraryHome />} />
                    <Route path="admin-login" element={<AdminLogin />} />
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
                    <Route path="add-video" element={<AddVideo />} />
                    <Route path="delete-video/:id" element={<DeleteVideo />} />
                    <Route path="edit-video/:id" element={<EditVideo />} />
                    <Route path="user-register" element={<UserRegister />} />
                    <Route path="user-login" element={<UserLogin />} />
                 </Routes>
              </section>
            </BrowserRouter>
        </div>
    )
}