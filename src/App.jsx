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
  { id: 1, date: 'Jan 15, 2024', sender: 'Marco Holger', initials: 'MH', bank: 'Bank of America', amount: 550000000, status: 'Completed', color: 'bg-green-600' },
  { id: 2, date: 'Jan 14, 2024', sender: 'Marco Holger', initials: 'MH', bank: 'G&C Mutual Bank', amount: 86400000, status: 'Completed', color: 'bg-green-600' },
  { id: 3, date: 'Jan 10, 2024', sender: 'Michelle', initials: 'M', bank: 'Chase Bank', amount: 12500000, status: 'Completed', color: 'bg-purple-600' },
  { id: 4, date: 'Jan 08, 2024', sender: 'Widmer', initials: 'W', bank: 'Wells Fargo', amount: 8750000, status: 'Completed', color: 'bg-indigo-600' },
  { id: 5, date: 'Jan 05, 2024', sender: 'Janet', initials: 'J', bank: 'Citibank', amount: 15000000, status: 'Completed', color: 'bg-pink-600' },
  { id: 6, date: 'Jan 03, 2024', sender: 'Meinrad', initials: 'M', bank: 'HSBC', amount: 22000000, status: 'Completed', color: 'bg-green-600' },
  { id: 7, date: 'Jan 01, 2024', sender: 'Anton', initials: 'A', bank: 'Deutsche Bank', amount: 18500000, status: 'Completed', color: 'bg-orange-600' },
];

const accountHolders = [
  { name: 'Marco', initial: 'M' },
  { name: 'Michelle', initial: 'M' },
  { name: 'Janet', initial: 'J' },
  { name: 'Widmer', initial: 'W' },
  { name: 'Meinrad', initial: 'M' },
  { name: 'Anton', initial: 'A' },
];

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
      <section className="bg-gradient-to-br from-green-700 to-slate-800 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium flex items-center">
                  <Shield className="mr-2 text-yellow-400" size={16} />
                  FDIC Insured • Secure Banking
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Banking Built on<br />
                <span className="text-yellow-400">Trust & Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience institutional-grade banking with personalized service. Secure accounts, advanced wealth management, and 24/7 digital access.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigateTo('signup')}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded font-semibold text-lg hover:bg-yellow-500 transition"
                >
                  Get Started
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white/20 transition">
                  Learn More
                </button>
              </div>
              <div className="mt-12 flex items-center flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">$45B+</div>
                  <div className="text-sm text-gray-400">Assets Under Management</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">150K+</div>
                  <div className="text-sm text-gray-400">Trusted Clients</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">70+</div>
                  <div className="text-sm text-gray-400">Years of Service</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-300">Account Overview</div>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-gray-400 mb-2">Total Balance</div>
                  <div className="text-4xl font-bold">$636,400,000.00</div>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-green-600 font-semibold mb-2">Why Choose G&C Mutual Bank</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Banking Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced financial services designed for individuals and businesses who demand excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Premium Banking?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Join thousands of satisfied clients who trust G&C Mutual Bank with their financial future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigateTo('signup')}
              className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition shadow-lg"
            >
              Open an Account Today
            </button>
            <button
              onClick={() => navigateTo('login')}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition"
            >
              Sign In to Your Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                {/* <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                  <Building2 className="text-gray-900" size={20} />
                </div>
                <div className="text-xl font-bold text-white">G&C Mutual Bank</div> */}
                <img
                  src={logo}
                  alt="FinFlow logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Providing trusted financial services and wealth management solutions since 1952.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} className="text-orange-400" />
                <a href="mailto:admin@gcmutualbank.com" className="hover:text-orange-400">
                  admin@gcmutualbank.com
                </a>
              </div>
            </div>
            {[
              { title: 'Services', links: ['Personal Banking', 'Business Banking', 'Joint Accounts', 'Wealth Management'] },
              { title: 'Support', links: ['Help Center', 'Contact Us', 'Security', 'FAQs'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'FDIC Insurance', 'Compliance'] },
            ].map((col, idx) => (
              <div key={idx}>
                <div className="font-semibold text-white mb-4">{col.title}</div>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link, i) => (
                    <li key={i}><a href="#" className="hover:text-yellow-400 transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
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

// Dashboard Layout Component
const DashboardLayout = ({ children, activePage }) => {
  const { logout, sidebarOpen, toggleSidebar } = useStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                <Building2 className="text-white" size={20} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-gray-900">G&C Mutual Bank</h1>
                <p className="text-xs text-gray-500">Enterprise Banking</p>
              </div> */}
              <img
                src={logo}
                alt="FinFlow logo"
                className="h-14 w-auto"
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

      <div className="flex">
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.aside
              initial={isMobile ? { x: -300 } : false}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className={`${isMobile ? 'fixed inset-y-0 left-0 z-30' : 'sticky top-16'} w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] overflow-y-auto`}
            >
              <nav className="p-4">
                <ul className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => navigateTo(item.id)}
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

        <main className="flex-1 p-4 sm:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      {isMobile && sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-20"
        />
      )}
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  return (
    <DashboardLayout activePage="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Welcome Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Welcome back, Marco</h2>
          <p className="text-gray-600">Last login: Today at 9:42 AM EST</p>
        </section>

        {/* Account Summary Card */}
        <section>
          <div className="bg-gradient-to-br from-bank-primary/90 to-bank-primary/60 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-sm opacity-90 mb-1">Joint Account</p>
                <h3 className="text-xl sm:text-2xl font-semibold">Total Balance</h3>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <p className="text-xs opacity-90">Account Status</p>
                <p className="text-sm font-semibold flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Active
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-3xl sm:text-5xl font-bold mb-2">$636,400,000.00</p>
              <p className="text-sm opacity-90">USD</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-xs opacity-75 mb-1">Available Balance</p>
                <p className="text-lg font-semibold">$636,400,000.00</p>
              </div>
              <div>
                <p className="text-xs opacity-75 mb-1">Account Number</p>
                <p className="text-lg font-semibold">•••• •••• 4892</p>
              </div>
              <div>
                <p className="text-xs opacity-75 mb-1">Currency</p>
                <p className="text-lg font-semibold">USD</p>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 pt-6">
              <p className="text-xs opacity-75 mb-3">Joint Account Holders</p>
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <div className="flex -space-x-2">
                  {accountHolders.map((holder, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-900"
                    >
                      {holder.initial}
                    </div>
                  ))}
                </div>
                <span className="text-sm ml-2">Marco, Michelle, Janet, Widmer, Meinrad, Anton</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Receipt, title: 'View Transactions', desc: 'Review account activity', color: 'green', page: 'transactions' },
              { icon: ArrowRightLeft, title: 'Transfer Funds', desc: 'Send money securely', color: 'green', page: 'transfers' },
              { icon: Download, title: 'Download Statement', desc: 'Export account records', color: 'purple', page: 'statements' },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => useStore.getState().setPage(action.page)}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-bank-primary hover:shadow-lg transition text-left"
                >
                  <div className={`w-12 h-12 bg-${action.color}-50 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`text-${action.color}-600`} size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.desc}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recent Transactions */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
            <button
              onClick={() => useStore.getState().setPage('transactions')}
              className="text-bank-primary text-sm font-medium hover:underline"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sender</th>
                    <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">Origin Bank</th>
                    <th className="px-4 sm:px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                    <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.slice(0, 4).map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50 transition cursor-pointer">
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{tx.date}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 ${tx.color} rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3`}>
                            {tx.initials}
                          </div>
                          <span className="text-sm font-medium text-gray-800">{tx.sender}</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-700 hidden sm:table-cell">{tx.bank}</td>
                      <td className="px-4 sm:px-6 py-4 text-right text-sm font-semibold text-green-600 whitespace-nowrap">
                        {formatCurrency(tx.amount)}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center hidden md:table-cell">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CircleCheck size={14} className="mr-1.5" />
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Activity Overview */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Activity Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ArrowDown, label: 'Total Deposits', value: '$657.65M', change: '+12.5%', positive: true, color: 'green' },
              { icon: ArrowUp, label: 'Total Withdrawals', value: '$0.00', change: '0%', positive: false, color: 'red' },
              { icon: Receipt, label: 'Transactions (30d)', value: '24', change: null, positive: true, color: 'purple' },
              { icon: ChartLine, label: 'Avg. Monthly Growth', value: '$52.1M', change: '+8.2%', positive: true, color: 'green' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-${stat.color}-50 rounded-lg flex items-center justify-center`}>
                      <Icon className={`text-${stat.color}-600`} size={20} />
                    </div>
                    {stat.change && (
                      <span className={`text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-gray-500'}`}>
                        {stat.change}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </section>
      </motion.div>
    </DashboardLayout>
  );
};

// Transactions Page
const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTransactions = transactions.filter((tx) =>
    tx.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout activePage="transactions">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Transaction History</h2>
          <p className="text-gray-600">View and manage all your account transactions</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-bank-primary text-white rounded-lg hover:bg-bank-primary/90 transition">
              <Download size={20} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sender</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">Origin Bank</th>
                  <th className="px-4 sm:px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                  <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">Status</th>
                  <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{tx.date}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${tx.color} rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3`}>
                          {tx.initials}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800">{tx.sender}</div>
                          <div className="text-xs text-gray-500 lg:hidden">{tx.bank}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-700 hidden lg:table-cell">{tx.bank}</td>
                    <td className="px-4 sm:px-6 py-4 text-right text-sm font-semibold text-green-600 whitespace-nowrap">
                      {formatCurrency(tx.amount)}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center hidden sm:table-cell">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CircleCheck size={14} className="mr-1.5" />
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <button className="text-bank-primary hover:text-green-900 text-sm font-medium">
                        View
                      </button>
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
};

// Accounts Page
const AccountsPage = () => {
  return (
    <DashboardLayout activePage="accounts">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Accounts</h2>
          <p className="text-gray-600">Manage your banking accounts</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Name</p>
                  <p className="text-lg font-semibold text-gray-900">Joint Checking Account</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Number</p>
                  <p className="text-lg font-semibold text-gray-900">•••• •••• •••• 4892</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Account Type</p>
                  <p className="text-lg font-semibold text-gray-900">Joint Account</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Currency</p>
                  <p className="text-lg font-semibold text-gray-900">USD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle2 size={16} className="mr-1.5" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Balance Information</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-bank-primary/50 from-bank-primary/90 rounded-lg p-6">
                  <p className="text-sm text-bank-primary mb-1">Available Balance</p>
                  <p className="text-3xl font-bold text-green-900">$636,400,000.00</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-sm text-gray-600 mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-900">$636,400,000.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Joint Account Holders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {accountHolders.map((holder, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-bank-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {holder.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{holder.name}</p>
                    <p className="text-sm text-gray-600">Account Holder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


// Transfers Page
const TransfersPage = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  return (
    <DashboardLayout activePage="transfers">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Transfer Funds</h2>
          <p className="text-gray-600">Send money securely to other accounts</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Type</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none">
                <option>Internal Transfer</option>
                <option>External Bank Transfer</option>
                <option>International Transfer</option>
                <option>Wire Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient name or account"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Note (Optional)</label>
              <textarea
                rows={3}
                placeholder="Add a note for this transfer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start space-x-3">
                <Shield className="text-bank-primary mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-medium text-green-900">Secure Transfer</p>
                  <p className="text-xs text-bank-primary mt-1">
                    All transfers are encrypted and protected by multi-factor authentication
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-bank-primary text-white py-3 rounded-lg font-semibold hover:bg-bank-primary/90 transition"
            >
              Continue to Review
            </button>
          </form>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

// Statements Page
const StatementsPage = () => {
  return (
    <DashboardLayout activePage="statements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Statements</h2>
          <p className="text-gray-600">Download and view your account statements</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['January 2024', 'December 2023', 'November 2023', 'October 2023', 'September 2023', 'August 2023'].map((month, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-bank-primary hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                      <FileText className="text-bank-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{month}</p>
                      <p className="text-xs text-gray-500">PDF Statement</p>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-bank-primary text-white rounded-lg hover:bg-bank-primary/90 transition text-sm">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

// Security Page
const SecurityPage = () => {
  return (
    <DashboardLayout activePage="security">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Security Settings</h2>
          <p className="text-gray-600">Manage your account security and authentication</p>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Change Password', desc: 'Update your account password regularly', icon: Lock },
            { title: 'Two-Factor Authentication', desc: 'Add an extra layer of security', icon: Shield },
            { title: 'Active Sessions', desc: 'Manage devices with access to your account', icon: User },
            { title: 'Login History', desc: 'View recent login activity', icon: Calendar },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between hover:border-bank-primary transition">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon className="text-bank-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-bank-primary text-white rounded-lg hover:bg-bank-primary/90 transition text-sm font-medium">
                  Manage
                </button>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-600">
          For assistance, contact <strong>admin@gcmutualbank.com</strong>
        </p>
      </motion.div>
    </DashboardLayout>
  );
};

// Settings Page
const SettingsPage = () => {
  return (
    <DashboardLayout activePage="settings">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Settings</h2>
          <p className="text-gray-600">Manage your account preferences</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Marco Holger"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="manianton@hispeed.ch"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bank-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', desc: 'Receive account updates via email' },
                  { label: 'SMS Alerts', desc: 'Get text messages for transactions' },
                  { label: 'Push Notifications', desc: 'Mobile app notifications' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-bank-primary">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full sm:w-auto px-6 py-3 bg-bank-primary text-white rounded-lg font-semibold hover:bg-bank-primary/90 transition">
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


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