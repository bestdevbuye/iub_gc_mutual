import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';
import {
  Building2, ChartLine, Wallet, Receipt, ArrowRightLeft, FileText,
  Shield, Settings, LogOut, Bell, Search, ChevronDown, Download,
  CircleCheck, Menu, X, User, Lock, Mail, Eye, EyeOff, Home,
  CreditCard, Users, TrendingUp, ArrowDown, ArrowUp, DollarSign,
  Calendar, Filter, ExternalLink, CheckCircle2, CheckCircle
} from 'lucide-react';
import logo from "./assets/logo.png";
import icon from "./assets/icon.png";

// Zustand Store for State Management
const useStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  sidebarOpen: true,
  notifications: 3,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

// Demo Data
const transactions = [
  { id: 1, date: 'Jan 21, 2026', sender: 'Marco Holger', initials: 'MH', bank: 'Bank of America', amount: 550000000, status: 'Completed', color: 'bg-green-600' },
  { id: 2, date: 'Jan 21, 2026', sender: 'Marco Holger', initials: 'MH', bank: 'G&C Mutual Bank', amount: 86400000, status: 'Completed', color: 'bg-green-600' },
];

const accountHolders = [
  { name: 'Marco Michelle Janet', initial: 'M' },
  { name: 'Widmer Meinrad Anton ', initial: 'W' },
];

// Fixed account and routing numbers
const ACCOUNT_NUMBER = '4782916503';
const ROUTING_NUMBER = '021000021';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

// Helper to get page from URL hash
const getPageFromHash = () => {
  const hash = window.location.hash.replace('#/', '');
  return hash || 'landing';
};

// Helper to navigate
const navigateTo = (page) => {
  window.location.hash = `/${page}`;
};

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                <Building2 className="text-white" size={20} />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">G&C Mutual Bank</div>
                <div className="text-xs text-gray-500">Trusted Since 1952</div>
              </div> */}
              <img
                src={logo}
                alt="FinFlow logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateTo('login')}
                className="text-sm font-medium text-green-700 hover:text-green-900 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigateTo('signup')}
                className="bg-green-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-green-700 transition"
              >
                Open Account
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-slate-800 text-white py-12 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium flex items-center">
                  <Shield className="mr-1.5 sm:mr-2 text-yellow-400" size={14} />
                  FDIC Insured • Secure Banking
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Banking Built on<br />
                <span className="text-yellow-400">Trust & Excellence</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Experience institutional-grade banking with personalized service. Secure accounts, advanced wealth management, and 24/7 digital access.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => navigateTo('signup')}
                  className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-yellow-500 transition w-full sm:w-auto text-center"
                >
                  Get Started
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-white/20 transition w-full sm:w-auto text-center">
                  Learn More
                </button>
              </div>
              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">$45B+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">150K+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Trusted Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">70+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Years of Service</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-300">Account Overview</div>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-gray-400 mb-2">Total Balance</div>
                  <div className="text-3xl lg:text-4xl font-bold">$636,400,000.00</div>
                  <div className="text-sm text-green-400 mt-2 flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    +12.5% this month
                  </div>
                </div>
                <div className="space-y-4">
                  {transactions.slice(0, 2).map((tx) => (
                    <div key={tx.id} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                          <ArrowDown className="text-green-400" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{tx.sender}</div>
                          <div className="text-xs text-gray-400">{tx.bank}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-400">
                          +${(tx.amount / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-gray-400">{tx.date.split(',')[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="text-green-600 font-semibold mb-2 text-sm sm:text-base">Why Choose G&C Mutual Bank</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Enterprise Banking Solutions</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced financial services designed for individuals and businesses who demand excellence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: 'Bank-Grade Security', desc: 'Multi-factor authentication, 256-bit encryption, and real-time fraud monitoring protect your assets 24/7.' },
              { icon: Users, title: 'Joint Account Management', desc: 'Seamlessly manage accounts with multiple holders. Perfect for families, partners, and business teams.' },
              { icon: ChartLine, title: 'Wealth Management', desc: 'Dedicated advisors and sophisticated tools to grow and protect your wealth across generations.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Experience Premium Banking?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10">
            Join thousands of satisfied clients who trust G&C Mutual Bank with their financial future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigateTo('signup')}
              className="bg-yellow-400 text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-yellow-500 transition shadow-lg w-full sm:w-auto"
            >
              Open an Account Today
            </button>
            <button
              onClick={() => navigateTo('login')}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition w-full sm:w-auto"
            >
              Sign In to Your Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                {/* <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                  <Building2 className="text-gray-900" size={20} />
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">G&C Mutual Bank</div> */}
                <img
                  src={logo}
                  alt="FinFlow logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Providing trusted financial services and wealth management solutions since 1952.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} className="text-orange-400 flex-shrink-0" />
                <a href="mailto:toptecch007@gmail.com" className="hover:text-orange-400 break-all">
                  admin@gandcus.com
                </a>
              </div>
            </div>
            {[
              { title: 'Services', links: ['Personal Banking', 'Business Banking', 'Joint Accounts', 'Wealth Management'] },
              { title: 'Support', links: ['Help Center', 'Contact Us', 'Security', 'FAQs'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'FDIC Insurance', 'Compliance'] },
            ].map((col, idx) => (
              <div key={idx}>
                <div className="font-semibold text-white mb-3 sm:mb-4 text-base">{col.title}</div>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link, i) => (
                    <li key={i}><a href="#" className="hover:text-yellow-400 transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            © 2024 G&C Mutual Bank. All rights reserved. Member FDIC. Equal Housing Lender.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Login Page Component
const LoginPage = () => {
  const { login } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const DEMO_EMAIL = 'manianton@hispeed.ch';
  const DEMO_PASSWORD = 'ManiAnton123!';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setLoading(true);
      setPopup({
        show: true,
        type: 'success',
        message: 'Login successful. Redirecting to dashboard...',
      });

      setTimeout(() => {
        login({ name: 'Mani Anton', email: DEMO_EMAIL });
        navigateTo('dashboard');
      }, 1500);
    } else {
      setPopup({
        show: true,
        type: 'error',
        message: 'Invalid email or password. Please try again.',
      });

      setTimeout(() => {
        setPopup({ show: false, type: '', message: '' });
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-slate-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {/* <Building2 className="text-white" size={32} /> */}
            <img
              src={icon}
              alt="FinFlow logo"
              className="h-10 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to access your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigateTo('signup')}
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Sign Up
            </button>
          </div>
        </form>

        <button
          onClick={() => navigateTo('landing')}
          className="mt-6 w-full text-center text-sm text-gray-600 hover:text-gray-800"
        >
          ← Back to Home
        </button>

        <AnimatePresence>
          {popup.show && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
            >
              <div
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl shadow-xl border ${popup.type === 'success'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
                  }`}
              >
                {popup.type === 'success' ? (
                  <CircleCheck className="text-green-600" size={22} />
                ) : (
                  <X className="text-red-600" size={22} />
                )}

                <p
                  className={`text-sm font-medium ${popup.type === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}
                >
                  {popup.message}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Signup Page Component
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [popup, setPopup] = useState({ show: false, message: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setPopup({
      show: true,
      message: 'Application submitted successfully. Please log in using your account.',
    });

    setTimeout(() => {
      setPopup({ show: false, message: '' });
      navigateTo('login');
    }, 3000);
  };

  const ApplicationSubmittedCard = () => (
    <div className="max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="text-green-600" size={32} />
      </div>
      <h2 className="mt-6 text-xl font-semibold">Application Submitted</h2>
      <p className="mt-3 text-sm text-gray-600">
        Your application has been received. Please proceed to login using your account.
      </p>
      <button
        onClick={() => navigateTo('login')}
        className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
      >
        Go to Login
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-slate-800 flex items-center justify-center p-4">
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center space-x-3 px-6 py-4 bg-green-50 border border-green-200 rounded-xl shadow-lg">
              <CheckCircle className="text-green-600" size={22} />
              <p className="text-sm font-medium text-green-800">{popup.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full max-w-4xl rounded-2xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-green-600 text-white p-10">
          <h2 className="text-3xl font-semibold">Apply for an Account</h2>
          <p className="mt-4 text-sm text-white/80">
            Secure. Regulated. International banking solutions.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex justify-center"
            >
              <ApplicationSubmittedCard />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* <Building2 className="text-white" size={32} /> */}
                  <img
                    src={icon}
                    alt="FinFlow logo"
                    className="h-10 w-auto"
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                <p className="text-gray-600 mt-2">Join G&C Mutual Bank today</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Submit Application
                </button>

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigateTo('login')}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Sign In
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    By continuing, you agree to G&C Mutual Bank's onboarding and compliance review.
                  </p>
                </div>
              </form>

              <button
                onClick={() => navigateTo('landing')}
                className="mt-6 w-full text-sm text-gray-600 hover:text-gray-800"
              >
                ← Back to Home
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Layout Component - FIXED VERSION
const DashboardLayout = ({ children, activePage }) => {
  const { logout, sidebarOpen, toggleSidebar } = useStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, sidebarOpen]);

  const menuItems = [
    { id: 'dashboard', icon: ChartLine, label: 'Dashboard' },
    { id: 'accounts', icon: Wallet, label: 'Accounts' },
    { id: 'transactions', icon: Receipt, label: 'Transactions' },
    { id: 'transfers', icon: ArrowRightLeft, label: 'Transfers' },
    { id: 'statements', icon: FileText, label: 'Statements' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    logout();
    navigateTo('landing');
  };

  const handleNavigation = (page) => {
    navigateTo(page);
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - FIXED */}
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="FinFlow logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition">
              <Bell className="text-gray-600" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">Marco</p>
                <p className="text-xs text-gray-500">Account Holder</p>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                M
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay - FIXED */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            style={{ top: '73px' }} // Below navbar
          />
        )}
      </AnimatePresence>

      <div className="flex pt-[73px]"> {/* Add padding-top to account for fixed navbar */}
        {/* Sidebar - FIXED */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.aside
              initial={isMobile ? { x: -300 } : false}
              animate={{ x: 0 }}
              exit={isMobile ? { x: -300 } : false}
              transition={{ type: "tween", duration: 0.3 }}
              className={`
                ${isMobile
                  ? 'fixed left-0 z-40 shadow-2xl'
                  : 'sticky'
                }
                top-[73px]
                w-64 
                bg-white 
                border-r 
                border-gray-200 
                h-[calc(100vh-73px)]
                overflow-y-auto
              `}
            >
              <nav className="p-4">
                <ul className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigation(item.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive
                            ? 'bg-green-600 text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition w-full"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content - FIXED */}
        <main className="flex-1 p-4 sm:p-8 overflow-x-hidden min-h-[calc(100vh-73px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

// Dashboard Page (simplified for space)
const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <DashboardLayout activePage="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 sm:space-y-8"
      >
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Welcome back, Marco</h2>
          <p className="text-sm sm:text-base text-gray-600">Last login: Today at 9:42 AM EST</p>
        </section>

        <section>
          <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl">
            <div className="flex items-start justify-between mb-6 sm:mb-8 flex-wrap gap-3 sm:gap-4">
              <div>
                <p className="text-xs sm:text-sm opacity-90 mb-1">Joint Account</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Total Balance</h3>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
                <p className="text-xs opacity-90">Account Status</p>
                <p className="text-xs sm:text-sm font-semibold flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Active
                </p>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {showBalance ? '$636,400,000.00' : '••••••••••'}
                </p>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="ml-4 p-2 hover:bg-white/10 rounded-lg transition"
                  aria-label={showBalance ? "Hide balance" : "Show balance"}
                >
                  {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs sm:text-sm opacity-90">USD</p>
            </div>

            <div className="border-t border-white border-opacity-20 pt-4 sm:pt-6">
              <p className="text-xs opacity-75 mb-2 sm:mb-3">Joint Account Holders</p>
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <div className="flex -space-x-2">
                  {accountHolders.map((holder, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-900"
                    >
                      {holder.initial}
                    </div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm ml-2">Marco Michelle Janet, Widmer Meinrad Anton</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Transactions</h3>
            <button
              onClick={() => navigateTo('transactions')}
              className="text-green-600 text-xs sm:text-sm font-medium hover:underline"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase">Sender</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.slice(0, 4).map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">{tx.date}</td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                        <div className="flex items-center">
                          <div className={`w-7 h-7 sm:w-8 sm:h-8 ${tx.color} rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2 sm:mr-3 flex-shrink-0`}>
                            {tx.initials}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-gray-800 truncate">{tx.sender}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-semibold text-green-600 whitespace-nowrap">
                        {formatCurrency(tx.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </motion.div>
    </DashboardLayout>
  );
};

// Simple placeholder pages for other routes
const TransactionsPage = () => (
  <DashboardLayout activePage="transactions">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Transaction History</h2>
        <p className="text-sm sm:text-base text-gray-600">View and manage all your account transactions</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase">Sender</th>
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase hidden lg:table-cell">Bank</th>
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">{tx.date}</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${tx.color} rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2 sm:mr-3 flex-shrink-0`}>
                        {tx.initials}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-gray-800">{tx.sender}</div>
                        <div className="text-xs text-gray-500 lg:hidden">{tx.bank}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 hidden lg:table-cell">{tx.bank}</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-semibold text-green-600 whitespace-nowrap">
                    {formatCurrency(tx.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

const AccountsPage = () => {
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [showRoutingNumber, setShowRoutingNumber] = useState(false);

  return (
    <DashboardLayout activePage="accounts">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 sm:space-y-6"
      >
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Accounts</h2>
          <p className="text-sm sm:text-base text-gray-600">Manage your banking accounts</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Account Details</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Account Name</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">Joint Checking Account</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-base sm:text-lg font-semibold text-gray-900 font-mono">
                      {showAccountNumber ? ACCOUNT_NUMBER : '••••••' + ACCOUNT_NUMBER.slice(-4)}
                    </p>
                    <button
                      onClick={() => setShowAccountNumber(!showAccountNumber)}
                      className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition"
                      aria-label={showAccountNumber ? "Hide account number" : "Show account number"}
                    >
                      {showAccountNumber ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Routing Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-base sm:text-lg font-semibold text-gray-900 font-mono">
                      {showRoutingNumber ? ROUTING_NUMBER : '•••••' + ROUTING_NUMBER.slice(-4)}
                    </p>
                    <button
                      onClick={() => setShowRoutingNumber(!showRoutingNumber)}
                      className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition"
                      aria-label={showRoutingNumber ? "Hide routing number" : "Show routing number"}
                    >
                      {showRoutingNumber ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Account Type</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">Joint Account</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Status</p>
                  <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle2 size={14} className="mr-1 sm:mr-1.5" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Balance Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-green-100 mb-1">Available Balance</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      {showBalance ? '$636,400,000.00' : '••••••••••'}
                    </p>
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="ml-4 p-2 hover:bg-white/10 rounded-lg transition"
                      aria-label={showBalance ? "Hide balance" : "Show balance"}
                    >
                      {showBalance ? <EyeOff size={20} className="text-white" /> : <Eye size={20} className="text-white" />}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Balance</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {showBalance ? '$636,400,000.00' : '••••••••••'}
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Joint Account Holders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {accountHolders.map((holder, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0">
                    {holder.initial}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{holder.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Account Holder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
};

const TransfersPage = () => {
  const [formData, setFormData] = useState({
    transferType: 'Internal Transfer',
    bankName: '',
    accountNumber: '',
    recipient: '',
    amount: '',
    note: ''
  });
  const [showWarning, setShowWarning] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger shake animation
    setShake(true);
    setTimeout(() => setShake(false), 500);

    // Show warning
    setShowWarning(true);

    // Auto-hide after 8 seconds
    setTimeout(() => {
      setShowWarning(false);
    }, 8000);
  };

  return (
    <DashboardLayout activePage="transfers">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 sm:space-y-6"
      >
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Transfer Funds</h2>
          <p className="text-sm sm:text-base text-gray-600">Send money securely to other accounts</p>
        </div>

        {/* Warning Alert */}
        <AnimatePresence>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-6 shadow-lg"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-2">
                    ⚠️ Transfer Authorization Required
                  </h3>
                  <p className="text-sm sm:text-base text-red-700 mb-3">
                    For security reasons, all outgoing transfers require administrative approval. This helps protect your account from unauthorized transactions.
                  </p>
                  <div className="bg-red-100 rounded-lg p-3 sm:p-4 border border-red-200">
                    <p className="text-sm font-medium text-red-900 mb-2">
                      📧 Please Contact:
                    </p>
                    <p className="text-sm text-red-800">
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:toptecch007@gmail.com"
                        className="underline hover:text-red-900 font-semibold"
                      >
                        admin@gandcus.com
                      </a>
                    </p>
                    <p className="text-xs text-red-700 mt-2">
                      Our admin team will review and process your transfer request within 24-48 hours.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowWarning(false)}
                  className="flex-shrink-0 ml-4 text-red-400 hover:text-red-600 transition"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8 max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Type</label>
              <select
                value={formData.transferType}
                onChange={(e) => setFormData({ ...formData, transferType: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
              >
                <option>Internal Transfer</option>
                <option>External Bank Transfer</option>
                <option>International Transfer</option>
                <option>Wire Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
              <input
                type="text"
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                placeholder="Enter recipient's bank name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
              <input
                type="text"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                placeholder="Enter recipient's account number"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name</label>
              <input
                type="text"
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                placeholder="Enter recipient's full name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  required
                  min="0.01"
                  step="0.01"
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Note (Optional)</label>
              <textarea
                rows={3}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="Add a note for this transfer"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-100">
              <div className="flex items-start space-x-3">
                <Shield className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-green-900">Secure Transfer</p>
                  <p className="text-xs text-green-700 mt-1">
                    All transfers are encrypted and protected by multi-factor authentication
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm sm:text-base flex items-center justify-center space-x-2"
            >
              <span>Continue to Review</span>
              <ArrowRightLeft size={18} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

const StatementsPage = () => (
  <DashboardLayout activePage="statements">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Statements</h2>
        <p className="text-sm sm:text-base text-gray-600">Download and view your account statements</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {['January 2026', 'December 2025', 'November 2025', 'October 2025', 'September 2025', 'August 2025'].map((month, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-green-600 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{month}</p>
                    <p className="text-xs text-gray-500">PDF Statement</p>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-xs sm:text-sm">
                <Download size={14} />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

const SecurityPage = () => (
  <DashboardLayout activePage="security">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Security Settings</h2>
        <p className="text-sm sm:text-base text-gray-600">Manage your account security and authentication</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {[
          { title: 'Change Password', desc: 'Update your account password regularly', icon: Lock },
          { title: 'Two-Factor Authentication', desc: 'Add an extra layer of security', icon: Shield },
          { title: 'Active Sessions', desc: 'Manage devices with access', icon: User },
          { title: 'Login History', desc: 'View recent login activity', icon: Calendar },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:border-green-600 transition">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-xs sm:text-sm font-medium">
                Manage
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-4">
        For assistance, contact <strong>admin@gandcus.com</strong>
      </p>
    </motion.div>
  </DashboardLayout>
);

const SettingsPage = () => (
  <DashboardLayout activePage="settings">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Settings</h2>
        <p className="text-sm sm:text-base text-gray-600">Manage your account preferences</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Profile Information</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Marco Michelle Janet, Widmer Meinrad Anton"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="manianton@hispeed.ch"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-sm sm:text-base">
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

// Main App Component with Hash Routing
const App = () => {
  const { isAuthenticated, logout } = useStore();
  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title based on current page
  useEffect(() => {
    const titles = {
      landing: 'G&C Mutual Bank - Home',
      login: 'G&C Mutual Bank - Sign In',
      signup: 'G&C Mutual Bank - Create Account',
      dashboard: 'G&C Mutual Bank - Dashboard',
      accounts: 'G&C Mutual Bank - Accounts',
      transactions: 'G&C Mutual Bank - Transactions',
      transfers: 'G&C Mutual Bank - Transfers',
      statements: 'G&C Mutual Bank - Statements',
      security: 'G&C Mutual Bank - Security',
      settings: 'G&C Mutual Bank - Settings',
    };
    document.title = titles[currentPage] || 'G&C Mutual Bank';
  }, [currentPage]);

  // Auth guard - redirect to dashboard if authenticated and on auth pages
  useEffect(() => {
    if (isAuthenticated && (currentPage === 'login' || currentPage === 'signup')) {
      navigateTo('dashboard');
    }
  }, [isAuthenticated, currentPage]);

  // Protected routes - redirect to login if not authenticated
  const protectedPages = ['dashboard', 'accounts', 'transactions', 'transfers', 'statements', 'security', 'settings'];
  useEffect(() => {
    if (!isAuthenticated && protectedPages.includes(currentPage)) {
      navigateTo('login');
    }
  }, [isAuthenticated, currentPage]);

  // Render appropriate page
  const renderPage = () => {
    if (!isAuthenticated) {
      switch (currentPage) {
        case 'login':
          return <LoginPage key="login" />;
        case 'signup':
          return <SignupPage key="signup" />;
        default:
          return <LandingPage key="landing" />;
      }
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'accounts':
        return <AccountsPage />;
      case 'transactions':
        return <TransactionsPage />;
      case 'transfers':
        return <TransfersPage />;
      case 'statements':
        return <StatementsPage />;
      case 'security':
        return <SecurityPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={currentPage}>
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
};

export default App;