import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await authService.login(username, password);
      if (user) {
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F9FAFB] font-sans tracking-tight">
      {/* Container Putih Utama */}
      <div className="w-full max-w-[480px] bg-white border border-gray-200  p-12 py-16">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-[28px] font-bold text-[#E30613] leading-tight mb-2">
            Welcome back,
          </h1>
          <p className="text-gray-500 text-[15px]">
            Please enter your detail to login.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-[13px] rounded-lg font-medium text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Input Username */}
          <div className="space-y-2">
            <label className="text-[14px] font-semibold text-slate-700">Username</label>
            <div className="relative flex items-center group">
              <div className="absolute left-4 text-gray-400 group-focus-within:text-slate-600 transition-colors">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full h-12 pl-12 pr-4 bg-[#F9FAFB] border border-gray-100 outline-none text-[14px] focus:border-gray-200 focus:bg-white transition-all placeholder-gray-300"
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="space-y-2">
            <label className="text-[14px] font-semibold text-slate-700">Password</label>
            <div className="relative flex items-center group">
              <div className="absolute left-4 text-gray-400 group-focus-within:text-slate-600 transition-colors">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full h-12 pl-12 pr-12 bg-[#F9FAFB] border border-gray-100 outline-none text-[14px] focus:border-gray-200 focus:bg-white transition-all placeholder-gray-300"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={showPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-[13px] font-semibold text-[#2563EB] hover:underline decoration-2 underline-offset-4">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="pt-4 flex justify-center">
            <button 
              type="submit"
              disabled={loading}
              className="w-44 h-12 bg-[#1D63ED] text-white rounded-md flex items-center justify-center gap-2 font-bold text-[15px] hover:bg-[#1652D1] transition-colors shadow-sm active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
              {!loading && (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l4-4m0 0l-4-4m4 4H9m11 11H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
