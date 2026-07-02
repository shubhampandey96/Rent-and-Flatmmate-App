import { createBrowserRouter } from "react-router-dom";
import Compatibility from "../pages/compatibility/Compatibility";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MyRequests from "../pages/requests/MyRequests";
import ReceivedRequests from "../pages/requests/ReceivedRequests";
import Listings from "../pages/listings/Listings";
import CreateListing from "../pages/listings/CreateListing";
import ListingDetails from "../pages/listings/ListingDetails";
import EditListing from "../pages/listings/EditListing";
import Chat from "../pages/chat/Chat";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/notifications/Notifications";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import AdminListings from "../pages/admin/Listings";
import Analytics from "../pages/admin/Analytics";
const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
  path: "/register",
  element: <Register />,
},
  {
    path: "/register",
    element: <Register />,
  },
  {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  ),
},

{
  path: "/admin/users",
  element: (
    <ProtectedRoute>
      <Users />
    </ProtectedRoute>
  ),
},

{
  path: "/admin/listings",
  element: (
    <ProtectedRoute>
      <AdminListings />
    </ProtectedRoute>
  ),
},

{
  path: "/admin/analytics",
  element: (
    <ProtectedRoute>
      <Analytics />
    </ProtectedRoute>
  ),
},
  {
  path: "/notifications",
  element: (
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  ),
},

  // Protected Routes
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
  path: "/chat",
  element: (
    <ProtectedRoute>
      <Chat />
    </ProtectedRoute>
  ),
},
  {
  path: "/my-requests",
  element: (
    <ProtectedRoute>
      <MyRequests />
    </ProtectedRoute>
  ),
},

{
  path: "/received-requests",
  element: (
    <ProtectedRoute>
      <ReceivedRequests />
    </ProtectedRoute>
  ),
},
  {
  path: "/compatibility/:listingId",
  element: (
    <ProtectedRoute>
      <Compatibility />
    </ProtectedRoute>
  ),
},

  {
    path: "/listings",
    element: (
      <ProtectedRoute>
        <Listings />
      </ProtectedRoute>
    ),
  },

  {
    path: "/create-listing",
    element: (
      <ProtectedRoute>
        <CreateListing />
      </ProtectedRoute>
    ),
  },

  {
    path: "/listings/:id",
    element: (
      <ProtectedRoute>
        <ListingDetails />
      </ProtectedRoute>
    ),
  },

  {
    path: "/edit-listing/:id",
    element: (
      <ProtectedRoute>
        <EditListing />
      </ProtectedRoute>
    ),
  },

  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

export default router;