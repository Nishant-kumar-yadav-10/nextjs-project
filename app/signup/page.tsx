import Link from "next/link";
import axios from 'axios'
import { useState } from "react";

const TASKS = [
  "Draft the proposal",
  "Review open PRs",
  "Reply to Sam",
  "Ship v1.2",
];

export default function SignUpPage() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

  const handleSubmit=async()=>{
    await axios.post("http://localhost:3000/api/auth/signup",{
      email,
      password,
      name
    })
  }
  return (
    <div className="min-h-screen w-full flex bg-[#F7F5EF]">
      {/* Left: ink panel */}
      <div className="hidden lg:flex lg:w-[44%] relative bg-[#1B1F3B] text-[#F7F5EF] flex-col justify-between overflow-hidden px-14 py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #F7F5EF 0px, #F7F5EF 1px, transparent 1px, transparent 32px)",
          }}
        />

        <span className="relative z-10 font-mono text-[11px] tracking-[0.3em] uppercase text-[#8E93B8]">
          Listless — Task manager
        </span>

        <div className="relative z-10">
          <h1 className="font-serif text-[3.4rem] leading-[1.02] tracking-tight">
            Get it
            <br />
            done
            <span className="text-[#C1573A]">.</span>
          </h1>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#B7BBDA]">
            One list, everything on it, nothing forgotten. Sign up and start
            checking things off.
          </p>

          <ul className="mt-10 space-y-3">
            {TASKS.map((task, i) => (
              <li
                key={task}
                className="flex items-center gap-3 font-mono text-[13px] text-[#D7D9EC] checklist-item"
                style={{ animationDelay: `${0.4 + i * 0.55}s` }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <rect x="1" y="1" width="16" height="16" rx="3" stroke="#5A5F8A" strokeWidth="1.4" />
                  <path
                    d="M4 9.2L7.2 12.4L14 5"
                    stroke="#C1573A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="checkmark-path"
                  />
                </svg>
                <span className="checklist-label">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 font-mono text-[11px] tracking-[0.2em] uppercase text-[#5A5F8A]">
          5 tasks · 1 list · 0 excuses
        </div>

        <style>{`
          .checkmark-path { stroke-dasharray: 14; stroke-dashoffset: 14; animation: draw-check 0.4s ease forwards; animation-delay: inherit; }
          .checklist-item { animation: fade-in 0.3s ease forwards; animation-delay: inherit; opacity: 0; }
          .checklist-label { position: relative; }
          .checklist-item .checklist-label::after { content: ""; position: absolute; left: 0; top: 50%; height: 1px; width: 0%; background: #6b6f99; animation: strike 0.3s ease forwards; animation-delay: inherit; }
          @keyframes draw-check { to { stroke-dashoffset: 0; } }
          @keyframes fade-in { to { opacity: 1; } }
          @keyframes strike { to { width: 100%; } }
          @media (prefers-reduced-motion: reduce) {
            .checkmark-path, .checklist-item, .checklist-item .checklist-label::after { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
          }
        `}</style>
      </div>

      {/* Right: paper form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-[380px]">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#BF4E30]">
            Get started
          </span>
          <h2 className="mt-3 font-serif text-[2.1rem] leading-tight text-[#20221E] tracking-tight">
            Create your list
          </h2>
          <p className="mt-2 text-[14px] text-[#6B6A63] leading-relaxed">
            Takes about a minute. No credit card, no clutter.
          </p>

          <form className="mt-9 space-y-4" onSubmit={()=>{handleSubmit()}}>
            <label className="block">
              <span className="block text-[12.5px] font-medium text-[#3D3C36] mb-1.5">
                Name
              </span>
              <input
                type="text"
                placeholder="Ada Lovelace"
                className="w-full rounded-md border border-[#DEDACB] bg-white px-3.5 py-2.5 text-[14.5px] text-[#20221E] placeholder:text-[#B0AEA2] outline-none transition-colors focus:border-[#BF4E30] focus:ring-2 focus:ring-[#BF4E30]/15"
              />
            </label>

            <label className="block">
              <span className="block text-[12.5px] font-medium text-[#3D3C36] mb-1.5">
                Email
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-[#DEDACB] bg-white px-3.5 py-2.5 text-[14.5px] text-[#20221E] placeholder:text-[#B0AEA2] outline-none transition-colors focus:border-[#BF4E30] focus:ring-2 focus:ring-[#BF4E30]/15"
              />
            </label>

            <label className="block">
              <span className="block text-[12.5px] font-medium text-[#3D3C36] mb-1.5">
                Password
              </span>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full rounded-md border border-[#DEDACB] bg-white px-3.5 py-2.5 text-[14.5px] text-[#20221E] placeholder:text-[#B0AEA2] outline-none transition-colors focus:border-[#BF4E30] focus:ring-2 focus:ring-[#BF4E30]/15"
              />
            </label>

            <label className="block">
              <span className="block text-[12.5px] font-medium text-[#3D3C36] mb-1.5">
                Confirm password
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border border-[#DEDACB] bg-white px-3.5 py-2.5 text-[14.5px] text-[#20221E] placeholder:text-[#B0AEA2] outline-none transition-colors focus:border-[#BF4E30] focus:ring-2 focus:ring-[#BF4E30]/15"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-md bg-[#1B1F3B] text-[#F7F5EF] text-[14.5px] font-medium py-2.75 px-4 transition-colors hover:bg-[#262B52]"
              style={{ paddingTop: "0.68rem", paddingBottom: "0.68rem" }}
            >
              Create account
            </button>

            <p className="text-[12px] leading-relaxed text-[#9C9A8E] text-center pt-1">
              By continuing you agree to the Terms and Privacy Policy.
            </p>
          </form>

          <p className="mt-8 text-[13.5px] text-[#6B6A63]">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-[#BF4E30] font-medium hover:underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}