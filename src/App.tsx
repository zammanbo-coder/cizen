/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  Search, 
  Code2, 
  Globe,
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '제품소개', href: '#tech' },
    { name: '기술지원', href: '#sdk' },
    { name: '다운로드', href: '#inspection' },
    { name: '고객문의', href: '#ai' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 border-b border-slate-200/50 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-xs group-hover:rotate-45 transition-transform duration-500">
            <div className="w-5 h-5 border-2 border-white rotate-45"></div>
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter uppercase italic ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Cizen Tech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-slate-500 hover:text-blue-600' : 'text-slate-300 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
          <div className="flex gap-1 items-center font-mono border-l border-slate-200/20 pl-8">
            <span className={`px-2 py-0.5 rounded-sm text-[10px] ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>KO</span>
            <span className={`px-2 py-0.5 text-[10px] ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>EN</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden p-2 rounded-lg ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 z-50 p-8 flex flex-col shadow-2xl"
          >
            <div className="flex justify-end mb-12">
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <X />
               </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-display font-light text-slate-400 hover:text-white hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/10">
               <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xs uppercase tracking-widest text-xs hover:bg-blue-500 transition-colors">
                  Contact Us
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden px-6 md:px-10 pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] bg-blue-600/30 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0)_2px,#0f172a_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 text-[10px] font-bold mb-8 tracking-[0.3em] uppercase rounded-full glow-blue">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
            Precision Image Lab
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter italic">
            LIMITLESS<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white">PERFORMANCE</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            FPGA 기반 프레임 그래버 개발부터 ISO 12233 표준 알고리즘까지,<br className="hidden md:block" /> 
            Cizen Tech는 비전 시스템의 정점을 정의합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative px-10 py-5 bg-blue-600 text-white font-bold transition-all rounded-xs overflow-hidden shadow-2xl shadow-blue-500/20">
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
               <span className="relative flex items-center gap-2 text-sm tracking-widest uppercase">
                  솔루션 데이터셋
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all rounded-xs text-sm tracking-widest uppercase">
               제품 문의하기
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
          animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block relative"
        >
           <div className="relative z-10 dark-glass p-1 rounded-sm glow-blue rotate-2">
              <div className="bg-slate-950 p-8 rounded-sm font-mono text-[13px] leading-relaxed relative overflow-hidden">
                 <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600/10 text-blue-500 text-[10px] uppercase font-bold tracking-widest">v2.1.0_stable</div>
                 <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="space-y-1.5 min-h-[220px]">
                    <div className="flex gap-4"><span className="text-slate-600">01</span><span className="text-blue-400">#include &lt;cizen_vision.h&gt;</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">02</span><span className="text-slate-500">// Device initialization...</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">03</span><span className="text-indigo-400">auto</span> device = cizen::grabber::init(<span className="text-amber-400">"MIG-S6"</span>);</div>
                    <div className="flex gap-4"><span className="text-slate-600">04</span><span className="text-slate-500">if</span> (!device.ready()) <span className="text-slate-500">throw</span> err;</div>
                    <div className="flex gap-4"><span className="text-slate-600">05</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">06</span><span className="text-green-400">STATUS_OK: GPU BUS engaged (40Gbps)</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">07</span><span className="text-blue-300">CALIB: MTF_SFR auto-zero sequence...</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">08</span><span className="text-slate-400">ANALYSIS: Resolution peaks at 98.4%</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">09</span><span className="text-blue-500 opacity-50">--------------------------------</span></div>
                    <div className="flex gap-4 animate-pulse"><span className="text-slate-600">10</span><span className="text-blue-500 font-bold uppercase tracking-wider">&gt; SYSTEM STANDBY</span></div>
                 </div>
              </div>
           </div>
           {/* Decorative floating dots */}
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, tags = [], borderAccent = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group flex-1 bg-white border border-slate-200 p-10 flex flex-col hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:translate-y-[-8px] transition-all duration-500 rounded-xs relative overflow-hidden ${borderAccent ? 'border-t-4 border-t-blue-600 shadow-sm' : ''}`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
       <Icon size={120} />
    </div>
    <div className="w-12 h-12 bg-slate-50 rounded-xs flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-10 font-medium">
      {description}
    </p>
    
    <div className="mt-auto pt-8 border-t border-slate-100 flex flex-wrap gap-2">
      {tags.length > 0 ? (
        tags.map(tag => (
          <span key={tag} className="text-[9px] font-mono font-bold px-2 py-1 bg-slate-50 border border-slate-200 text-slate-400 rounded-xs group-hover:border-blue-200 group-hover:text-blue-500 transition-colors">
            {tag}
          </span>
        ))
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACTIVE_NODE</span>
        </div>
      )}
    </div>
  </motion.div>
);

const ExpertiseSection = () => {
  const expertiseProducts = [
    {
      icon: Cpu,
      title: "MIG Series Grabber",
      description: "FPGA 기반 MIPI 인터페이스 탑재. USB 3.0 및 Thunderbolt 3(40Gbps) 지원으로 GMSL, FPD-Link, MIPI 연결을 완벽하게 구현합니다.",
      tags: ["MIG-S2_PRO", "FPGA_LOGIC", "40GBPS_TB3"],
      delay: 0.1
    },
    {
      icon: Activity,
      title: "TCL Collimator",
      description: "Telecentric Collimator Lens 시스템. Full-Automation 제어 및 실거리 100M 이상의 정밀 상관관계 검증이 완료된 광학 엔진입니다.",
      tags: ["RT-TCL_L15", "AUTO_FOCUS", "OPTIC_ENG"],
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: "DPS & PMU Module",
      description: "6채널 Device Power Supply 및 Parametric Measurement Units. FVMI 통합 제어를 통한 초정밀 전력 측정 솔루션을 제공합니다.",
      tags: ["FVMI_TECH", "6CH_POWER", "PRECISION"],
      delay: 0.3
    }
  ];

  return (
    <section id="tech" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-100/50 skew-x-[-15deg] translate-x-20" />
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl">
            <span className="font-mono text-blue-600 font-bold block mb-4 tracking-[0.4em] uppercase text-xs">Core systems</span>
            <h2 className="text-6xl font-display font-black text-slate-900 tracking-tight leading-[0.9] italic">HARDWARE.</h2>
          </div>
          <div className="h-[2px] flex-grow mx-12 mb-4 bg-slate-200 hidden lg:block" />
          <div className="mt-8 md:mt-0 font-medium text-slate-400 uppercase tracking-widest text-xs">01 / Main lineup</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseProducts.map((product, idx) => (
            <FeatureCard 
              key={idx}
              icon={product.icon}
              title={product.title}
              description={product.description}
              tags={product.tags}
              delay={product.delay}
              borderAccent={idx === 1}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group bg-slate-900 p-12 rounded-xs border border-slate-800 flex flex-col md:flex-row gap-8 items-center hover:border-blue-500/50 transition-all duration-500">
             <div className="w-16 h-16 shrink-0 bg-blue-600 flex items-center justify-center rounded-xs text-white">
                <Code2 size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-display font-black text-white mb-2 group-hover:text-blue-400 transition-colors">Algorithm & SDK</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  ISO 12233 표준 기반 최신 SFR 알고리즘. C/C++, C#, Python API를 통해 모든 OS 환경을 완벽하게 커버합니다.
                </p>
             </div>
          </div>
          <div className="group bg-slate-900 p-12 rounded-xs border border-slate-800 flex flex-col md:flex-row gap-8 items-center hover:border-blue-500/50 transition-all duration-500">
             <div className="w-16 h-16 shrink-0 bg-slate-800 flex items-center justify-center rounded-xs text-white group-hover:bg-blue-600 transition-colors">
                <Monitor size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-display font-black text-white mb-2 group-hover:text-blue-400 transition-colors">Jetson Edge AI</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Nvidia Jetson 기반 카메라 드라이버 최적화. MIPI/SerDes 인터페이스와 AI 연산 모델의 하이브리드 결합을 지원합니다.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "IEEE P2020 I/Q Test Lab",
      category: "LAB_SYS",
      description: "ISO 12233:2022 표준 기반 SFR 해상력 측정 알고리즘을 적용한 온도 드리프트 및 해상력 측정 장비 개발"
    },
    {
      title: "Active Alignment Machine",
      category: "ROBOT_UNIT",
      description: "렌즈-센서 간 3D Plane fitting 알고리즘 및 GPU 가속 기반 최고 UPH(Unit Per Hour) 정밀 정렬 장비 구축"
    },
    {
      title: "Resolution & Flare Tester",
      category: "QUAL_INSP",
      description: "Blemish, Flare, Ghost 현상 등 저대비 이미지 결함 자동 검출 알고리즘 및 양산 검사 시스템 적용"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden backdrop-blur-3xl">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="text-blue-500 font-mono font-bold block mb-4 tracking-[0.4em] uppercase text-xs">Production machines</span>
            <h2 className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter italic">실현된 기술력.</h2>
          </div>
          <div className="mt-8 md:mt-0 text-slate-500 font-medium max-w-md md:text-right">
             다수의 양산 라인에서 증명된 Cizen Tech만의 하드웨어 및 소프트웨어 통합 노하우를 확인하세요.
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 translate-x-2 translate-y-2 opacity-0 group-hover:opacity-10 transition-opacity rounded-xs"></div>
              <div className="relative bg-slate-800/50 border border-slate-700 p-10 h-full flex flex-col group-hover:border-blue-500/50 transition-all duration-500 rounded-xs">
                <span className="font-mono text-[9px] text-blue-500 font-bold mb-4 bg-blue-600/10 px-2 py-0.5 rounded-xs w-fit">[{exp.category}]</span>
                <h3 className="text-2xl font-display font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-8 flex-grow">{exp.description}</p>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="text-blue-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyDeepDive = () => {
  return (
    <section id="ai" className="py-32 bg-white relative overflow-hidden backdrop-blur-3xl">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-slate-100 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-blue-600 font-bold mb-6 block tracking-[0.4em] uppercase text-xs">A.I Core architecture</span>
          <h2 className="text-6xl md:text-7xl font-display font-black text-slate-900 mb-10 tracking-tight italic">SYNERGY.</h2>
          <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
            Cizen Tech는 단순한 소프트웨어 개발을 넘어, 하드웨어의 한계를 뛰어넘는 최적화된 알고리즘을 지향합니다. GPU 병렬 가속과 딥러닝 결함 검출의 결합은 검사 효율을 최대 20배까지 향상시킵니다.
          </p>
          
          <div className="grid grid-cols-2 gap-10 mb-12">
            <div className="group">
                <div className="text-4xl font-display font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">99.9%</div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Detection_Accuracy</div>
                <div className="w-full h-[1px] bg-slate-100 mt-4 group-hover:bg-blue-200 transition-colors"></div>
            </div>
            <div className="group">
                <div className="text-4xl font-display font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">&lt;10ms</div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Processing_Latency</div>
                <div className="w-full h-[1px] bg-slate-100 mt-4 group-hover:bg-blue-200 transition-colors"></div>
            </div>
          </div>
          
          <button className="flex items-center gap-4 text-slate-900 font-black uppercase text-xs tracking-[0.2em] hover:text-blue-600 transition-colors group">
            자세한 기술 명세 다운로드
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ArrowRight size={14} />
             </div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[4/5] bg-slate-50 border border-slate-200 overflow-hidden shadow-2xl rounded-xs relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="High Tech Visualization" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay group-hover:bg-blue-600/20 transition-colors" />
            
            {/* Scanning Line Effect */}
            <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_15px_#3b82f6] z-10"
            />

            <div className="absolute bottom-8 left-8 right-8 dark-glass p-6 rounded-xs border-white/5">
                <div className="flex justify-between items-center mb-4">
                   <div className="px-2 py-0.5 bg-blue-600 text-white text-[8px] font-bold uppercase tracking-widest rounded-xs">Real-time_Analysis</div>
                   <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <div className="w-1 h-1 rounded-full bg-green-500 anim-pulse"></div>
                   </div>
                </div>
                <div className="space-y-1">
                   <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                         animate={{ width: ['40%', '85%', '60%', '95%', '70%'] }}
                         transition={{ duration: 5, repeat: Infinity }}
                         className="h-full bg-blue-500 uppercase font-bold text-[6px] flex items-center px-2"
                      />
                   </div>
                   <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                         animate={{ width: ['20%', '55%', '40%', '75%', '30%'] }}
                         transition={{ duration: 7, repeat: Infinity }}
                         className="h-full bg-blue-400"
                      />
                   </div>
                </div>
            </div>
          </div>
          
          {/* Decorative frame bits */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-slate-300" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-slate-300" />
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>
      <div className="max-w-6xl mx-auto px-10 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-blue-500 font-bold mb-8 block tracking-[0.6em] uppercase text-xs">Ready to innovate?</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 tracking-tighter italic">ENGINEERED<br/>FOR SUCCESS.</h2>
          <p className="text-slate-400 mb-16 text-xl leading-relaxed max-w-3xl mx-auto font-light">
            세계 최고 수준의 프레임 그래버 및 화질 검사 기술로 귀사의 경쟁력을 높여드립니다. <br className="hidden md:block" />
            현존하는 가장 정밀한 비전 솔루션을 지금 바로 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <button className="group relative bg-white text-slate-950 px-12 py-6 font-black text-xs tracking-[0.3em] uppercase transition-all rounded-xs overflow-hidden">
               <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
               <span className="relative group-hover:text-white transition-colors">제품 문의 하기</span>
            </button>
            <button className="px-12 py-6 bg-transparent text-white font-black text-xs tracking-[0.3em] uppercase border border-white/20 hover:bg-white hover:text-slate-950 transition-all rounded-xs">
              기술 지원 요청
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/5 flex flex-col items-center justify-center px-10 text-[9px] text-slate-600 uppercase tracking-[0.3em] shrink-0 font-mono">
      <div className="flex flex-wrap justify-center gap-10 items-center mb-8">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-5 h-5 bg-slate-800 flex items-center justify-center rounded-xs group-hover:bg-blue-600 transition-colors">
            <div className="w-2.5 h-2.5 border border-white/50 rotate-45"></div>
          </div>
          <span className="text-slate-400 font-display font-black tracking-tighter">CIZEN</span>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center opacity-50">
        <span>© 2024 CIZEN TECH. ALL RIGHTS RESERVED.</span>
        <span>경기도 안양시 동안구 시민대로</span>
        <div className="flex gap-6">
           <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div> 
              BUS: <span className="text-slate-400">ENGAGED</span>
           </span>
           <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div> 
              SYSTEM: <span className="text-slate-400">NOMINAL</span>
           </span>
        </div>
      </div>
    </footer>
  );
};

const CompanyProfile = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-slate-50 skew-y-[-10deg] translate-y-10" />
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-24 relative z-10">
        <div>
           <span className="font-mono text-blue-600 font-bold mb-6 block tracking-[0.4em] uppercase text-xs">Establishment & Core</span>
           <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 tracking-tight italic">PROFILE.</h2>
          <div className="space-y-6">
            <div className="group flex border-b border-slate-100 pb-6 transition-colors hover:border-blue-600/30">
              <span className="w-40 text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest pt-1">Company_Name</span>
              <span className="text-slate-900 font-black text-xl font-display group-hover:text-blue-600 transition-colors tracking-tight italic">시젠테크 주식회사</span>
            </div>
            <div className="flex border-b border-slate-100 pb-6">
              <span className="w-40 text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest pt-1">EST.</span>
              <span className="text-slate-900 font-bold font-display text-lg">2021. 07. 23</span>
            </div>
            <div className="flex border-b border-slate-100 pb-6">
              <span className="w-40 text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest pt-1">Business_Area</span>
              <span className="text-slate-900 font-medium text-sm leading-relaxed max-w-sm">
                MTF Test & Adjustment, Image Quality Inspection, Geometric Calibration, Edge AI Camera Platform, MIPI Grabber, SerDes Interface
              </span>
            </div>
            <div className="flex">
              <span className="w-40 text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest pt-1">Location</span>
              <span className="text-slate-900 font-semibold text-sm">경기도 군포시 산본로324번길 8, 507호</span>
            </div>
          </div>
        </div>
        <div className="relative group">
           <div className="absolute inset-0 bg-blue-600 rotate-2 group-hover:rotate-0 transition-transform duration-700 opacity-5" />
           <div className="relative bg-slate-50 p-12 lg:p-20 rounded-xs border border-slate-200 flex flex-col justify-center italic text-slate-500 font-display text-3xl md:text-4xl leading-[1.1] font-light tracking-tighter">
              "시대의 흐름과 기술의 발전에 맞추어 <br/> 
              <span className="text-slate-900 font-black">지속 가능한 솔루션</span>을<br />
              개발하여 리더가 되고자 노력합니다."
              <div className="mt-12 not-italic flex items-center gap-6">
                 <div className="w-12 h-[2px] bg-blue-600" />
                 <div className="flex flex-col">
                    <span className="text-slate-900 font-black text-sm uppercase tracking-widest">Yang Sang Kyu</span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">CEO, Cizen Tech</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <ExperienceSection />
      <CompanyProfile />
      
      {/* OS Section */}
      <section id="sdk" className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "C/C++", desc: "MIG Series SDK" },
              { label: "C# / .NET", desc: "Control App Support" },
              { label: "LINUX", desc: "Jetson Driver support" },
              { label: "PYTHON", desc: "AI Optimization" }
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-slate-200 hover:border-blue-600 transition-all flex flex-col items-center">
                <span className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase italic">{item.label}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyDeepDive />
      <ContactSection />
      <Footer />
    </div>
  );
}
