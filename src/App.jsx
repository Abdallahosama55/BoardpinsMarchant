import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/LayoutDashboard";
import Dashboard from "./pages/Merchant/Dashboard";
import MyBoardPins from "./pages/Merchant/MyBoardPins";
import Merchant from "./pages/Merchant/Services Provider";
import MerchantPinned from "./pages/Merchant/Services ProviderPinned";
import Upgrade from "./pages/Merchant/Upgrade";
import Home from "./pages/Landing/Home";
import LayoutLanding from "./utils/LayoutLanding";
import Pricing from "./pages/Landing/Pricing";
import About from "./pages/Landing/About";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgotPassword";
import LayoutAuth from "./utils/LayoutAuth";
import NewPassword from "./pages/Auth/NewPassword";
import VerifyMail from "./pages/Auth/VerfiyMail";
import RecoverySuccess from "./pages/Auth/RecoverySuccess";
import Chat from "./pages/Merchant/Chat";
import ChatWelcome from "./components/provider/Chat/ChatWelcome";
import ChatMessages from "./components/provider/Chat/ChatMessages";
import KnowledgeBase from "./pages/Merchant/KnowledgeBase";
import ProjectmangementTasks from "./pages/Merchant/ProjectmangementTasks";
import SharedProjects from "./pages/Merchant/SharedProjects";
import SettingProfile from "./pages/Merchant/SettingProfile";
import SettingBilling from "./pages/Merchant/SettingBilling";
import OrderBilling from "./pages/Merchant/OrderBilling";
import BiddingProject from "./pages/Merchant/BiddingProject";
import MyBids from "./pages/Merchant/MyBids";
import SavedBiddingProject from "./pages/Merchant/SavedBiddingProject";
import BiddingProjectDetails from "./pages/Merchant/BiddingProjectDetails";
import CompareInProvider from "./pages/Merchant/CompareInProvider";
import CompareBetween from "./pages/Merchant/CompareBetween";
import CompareSaved from "./pages/Merchant/CompareSaved";
import CompareForms from "./pages/Merchant/CompareForms";
import ProductionGroup from "./pages/Merchant/ProductionGroup";
import ProductionGroupDetails from "./pages/Merchant/ProductionGroupDetails";
import SearchResult from "./pages/Landing/SearchResult";
import CreateBiddingProject from "./pages/Merchant/CreateBiddingProject";
import SavedProductionGroup from "./pages/Merchant/SavedProductionGroup";
import MyRequestsProductionGroup from "./pages/Merchant/MyRequestsProductionGroup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route path="/recoverysuccess" element={<RecoverySuccess />} />
          <Route path="/verifymail" element={<VerifyMail />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<LayoutLanding />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="/knowledgebase" element={<KnowledgeBase />} />

          <Route path="/myboard" element={<MyBoardPins />} />
          <Route path="/services-provider" element={<Merchant />} />
          <Route
            path="/services-provider-pinned"
            element={<MerchantPinned />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Chat />}>
            <Route path="chat" element={<ChatWelcome />} />
            <Route path="chatmessages" element={<ChatMessages />} />
          </Route>
          <Route
            path="/projectmangement-SharedProjects"
            element={<SharedProjects />}
          />
          <Route
            path="/projectmangement-tasks"
            element={<ProjectmangementTasks />}
          />
          <Route path="/create-bidding-project" element={<CreateBiddingProject />} />
          <Route path="/bidding-project" element={<BiddingProject />} />
          <Route path="/mybids" element={<MyBids />} />
          <Route
            path="/saved-BiddingProject"
            element={<SavedBiddingProject />}
          />
          <Route
            path="/bidding-project/offer"
            element={<BiddingProjectDetails />}
          />
          <Route path="/compare" element={<CompareInProvider />} />
          <Route path="/compare/saved" element={<CompareSaved />} />
          <Route path="/compare/forms" element={<CompareForms />} />
          <Route path="/compare-between" element={<CompareBetween />} />
          <Route path="/production-group" element={<ProductionGroup />} />
          <Route path="/production-group/myrequests" element={<MyRequestsProductionGroup />} />
          <Route path="/production-group/saved" element={<SavedProductionGroup />} />
          <Route
            path="/production-group/:id"
            element={<ProductionGroupDetails />}
          />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/setting-profile" element={<SettingProfile />} />
          <Route path="/Setting-billing" element={<SettingBilling />} />
        </Route>
        <Route path="/ordering-billing" element={<OrderBilling />} />
      </Routes>
    </Router>
  );
};

export default App;
