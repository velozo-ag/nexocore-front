import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  TrendingUp,
  Smartphone,
  CheckCircle2,
  LayoutGrid,
  List,
  Lock,
  FileText,
  ShieldCheck,
  HelpCircle,
  Plus,
  Minus,
  Trash2,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  UserPlus,
  ShoppingBag,
  Users,
  Package,
  Activity,
  NotebookText,
} from "lucide-react";
import isologotipo from "../assets/isologotipo.png";
import ParticlesBackground from "../components/ParticlesBackground";

const LandingPage = () => {
  const [posView, setPosView] = useState("grid");

  // Datos Mockup Fiados (Lógica Semáforo)
  const debtors = [
    { name: "Jose Gomez", phone: "3482******", total: 1500, paid: 200 }, // ~13% (Rojo)
    { name: "Mariano Lopez", phone: "3415******", total: 1000, paid: 550 }, // 55% (Naranja)
    { name: "Club Sportivo", phone: "3421******", total: 5000, paid: 4800 }, // 96% (Verde)
  ];

  // Función para calcular porcentaje y color
  const getDebtStatus = (paid, total) => {
    const percent = Math.round((paid / total) * 100);
    let color = "bg-status-green";
    let textColor = "text-status-green";

    if (percent < 25) {
      color = "bg-status-red";
      textColor = "text-status-red";
    } else if (percent < 75) {
      color = "bg-status-orange";
      textColor = "text-status-orange";
    }

    return { percent, color, textColor };
  };

  return (
    <div className="min-h-screen bg-surface text-slate-800 font-sans selection:bg-electric selection:text-white overflow-x-hidden relative">
      {/* --- FONDO ANIMADO ("LUCIÉRNAGAS" & TECH) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-metal-gradient overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <ParticlesBackground />

        {/* Orbes de Luz Ambiental */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* LOGO NUEVO */}
          <div className="flex items-center gap-3">
            <img
              src={isologotipo}
              alt="Logo nexo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-3xl font-black tracking-tighter text-titanium-dark font-sans lowercase mb-1">
              nexo.
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a
              href="#audit"
              className="hover:text-electric hover:scale-105 transition-all"
            >
              Finanzas
            </a>
            <a
              href="#pos"
              className="hover:text-electric hover:scale-105 transition-all"
            >
              POS
            </a>
            <a
              href="#pricing"
              className="hover:text-electric hover:scale-105 transition-all"
            >
              Precios
            </a>
          </div>

          <button className="px-6 py-2.5 text-xs font-bold text-white bg-titanium rounded-lg hover:bg-electric transition-all shadow-glow-blue hover:shadow-lg transform hover:-translate-y-0.5">
            INGRESAR
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (CTA ACTUALIZADO: DEMO & VIDEO) --- */}
      <header className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-visible">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- IZQUIERDA: Texto y Nuevos CTAs --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-electric mb-8 shadow-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
              v3.0 Release
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-titanium-dark mb-8 leading-[1.1]">
              Empieza a gestionar
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-light via-titanium-light to-titanium animate-text-shimmer drop-shadow-[0_2px_10px_rgba(67,56,202,0.5)]">
                tus números.
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
              Gestión comercial con acabado de precisión. Controla stock, caja y
              deudores con una interfaz diseñada para brillar.
            </p>

            {/* --- NUEVOS BOTONES (DEMO + VIDEO) --- */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/549xxxxxxxxxx?text=Hola,%20me%20gustaria%20agendar%20una%20demo%20de%20Nexo."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-electric text-white rounded-xl font-bold text-sm hover:bg-indigo-800 transition-all shadow-glow-blue hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1 cursor-pointer"
              >
                Solicitar Demo
                <ArrowRight className="w-4 h-4" />
              </a>

              <button className="px-8 py-4 bg-white text-titanium border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm hover:border-titanium flex items-center justify-center gap-2">
                Ver Video Explicativo
              </button>
            </div>
          </motion.div>

          {/* --- DERECHA: ECOSISTEMA DE WIDGETS FLOTANTES (INTACTO) --- */}
          <div className="relative h-[600px] w-full flex items-center justify-center lg:-mr-24 perspective-1000">
            {/* Glow Ambiental Trasero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/10 blur-[100px] rounded-full -z-20"></div>

            {/* WIDGET EXPLICATIVO */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.04 }}
              className="absolute right-0 top-16 md:top-0 z-40 bg-white/90 backdrop-blur p-4 rounded-xl shadow-glass border border-slate-200 w-60"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">
                    Tu Negocio Real
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    <span className="font-black text-electric">
                      Sin mentiras.
                    </span>{" "}
                    Panel centralizado para control total.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 1. WIDGET DEUDORES */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
              transition={{
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5 },
              }}
              className="absolute -left-8 top-0 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-metal border border-slate-100 w-64 scale-90 hover:scale-100 transition-all hidden md:block duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-slate-700">
                  Estado Cuentas
                </h4>
                <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-bold">
                  3 Activos
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[9px] font-bold text-red-600">
                    JG
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-[9px] font-bold text-slate-600">
                      <span>Jose G.</span>
                      <span className="text-red-500">13%</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full mt-1">
                      <div className="h-full w-[13%] bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[9px] font-bold text-orange-600">
                    ML
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-[9px] font-bold text-slate-600">
                      <span>Mariano</span>
                      <span className="text-orange-500">55%</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full mt-1">
                      <div className="h-full w-[55%] bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. DASHBOARD CENTRAL */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.04 }}
              className="relative z-20 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 w-full max-w-[550px]"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Hola, Admin 👋
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Resumen de actividad.
                  </p>
                </div>
                <div className="px-2 py-1 bg-gradient-to-r from-electric to-indigo-500 text-white text-[9px] font-bold rounded shadow-glow-blue">
                  EN VIVO
                </div>
              </div>

              {/* KPIs Row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex justify-between items-center group hover:border-emerald-200 transition-colors">
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Ingresos
                    </p>
                    <h4 className="text-sm font-black text-slate-800">$803k</h4>
                  </div>
                  <div className="p-2 bg-white rounded-lg text-emerald-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    <TrendingUp size={16} />
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex justify-between items-center group hover:border-red-200 transition-colors">
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Gastos
                    </p>
                    <h4 className="text-sm font-black text-slate-800">$36k</h4>
                  </div>
                  <div className="p-2 bg-white rounded-lg text-red-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    <TrendingUp size={16} className="rotate-180" />
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-inner mb-5  m-auto">
                <div className="mb-4 flex justify-between items-end">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-800">
                      Flujo de Caja
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Comparativa Semanal
                    </p>
                  </div>
                </div>

                <div className="h-40 w-full relative">
                  <div className="absolute inset-0 flex flex-col justify-between text-[9px] text-slate-300 font-mono pointer-events-none">
                    {[280, 210, 140, 70, 0].map((val, i) => (
                      <div
                        key={i}
                        className={`border-b ${
                          val === 0
                            ? "border-slate-200 text-slate-400"
                            : "border-slate-50"
                        } w-full border-dashed`}
                      >
                        {i % 2 === 0 ? (val === 0 ? "$0" : `${val}k`) : null}
                      </div>
                    ))}
                  </div>

                  <svg
                    viewBox="0 0 100 50"
                    className="absolute inset-0 w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="greenGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#10b981"
                          stopOpacity="0.1"
                        />
                        <stop
                          offset="100%"
                          stopColor="#10b981"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                      d="M0,45 C20,45 30,20 50,30 C70,40 80,45 100,40"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      d="M0,35 C20,30 30,45 50,15 C70,-5 80,20 100,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                      d="M0,35 C20,30 30,45 50,15 C70,-5 80,20 100,10 L100,50 L0,50 Z"
                      fill="url(#greenGradient)"
                      stroke="none"
                    />
                  </svg>

                  <div className="absolute -bottom-5 w-full flex justify-between text-[9px] text-slate-400 font-medium">
                    <span>Lun</span>
                    <span className="hidden md:block">Mar</span>
                    <span>Mié</span>
                    <span className="hidden md:block">Jue</span>
                    <span>Vie</span>
                    <span className="hidden md:block">Sáb</span>
                    <span>Dom</span>
                  </div>
                </div>

                <div className="flex justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-red-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      Gastos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      Ingresos
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="hidden md:grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <Package size={12} className="text-blue-500" /> Stock
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <Users size={12} className="text-purple-500" /> Staff
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <ShoppingBag size={12} className="text-emerald-500" /> Ventas
                </div>
              </div>
            </motion.div>

            {/* 3. WIDGET POS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                delay: 0.4,
              }}
              className="absolute -right-0 lg:-right-16 -bottom-12 z-30 bg-white p-3 rounded-2xl shadow-2xl border border-slate-200 w-84 hover:scale-105 transition-transform origin-top-left hidden md:block"
            >
              <div className="w-72 bg-slate-50 border-l border-slate-200 p-5 flex flex-col justify-between rounded-r-xl">
                <div className="flex-1 flex flex-col overflow-hidden">
                  <button className="w-full py-2.5 bg-white border border-slate-200 border-dashed rounded-lg text-slate-500 text-[10px] font-bold mb-4 hover:border-electric hover:text-electric transition-colors flex items-center justify-center gap-2">
                    <UserPlus size={16} /> Asignar Cliente
                  </button>
                  <h4 className="font-bold text-[10px] text-titanium mb-4 pb-2 border-b border-slate-200">
                    Ticket de Venta
                  </h4>
                  <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-[10px] text-slate-700">
                          iPhone 15 Pro
                        </span>
                        <span className="font-black text-[10px] text-slate-800">
                          $1,399
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-200 mt-4 bg-slate-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-slate-600">
                      Total a Pagar
                    </span>
                    <span className="text-[10px] font-black text-titanium">
                      $1,399
                    </span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-titanium to-titanium-dark text-white font-bold rounded-xl text-[10px] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    <Zap size={14} fill="currentColor" className="text-gold" />{" "}
                    COBRAR
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 4. WIDGET LIBRO DIARIO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                delay: 0.6,
              }}
              className="absolute -left-0 lg:-left-16 -bottom-16 z-20 md:z-10 bg-white/90 backdrop-blur p-3 rounded-xl shadow-metal border border-slate-200 w-84 scale-90 rotate-[-5deg]"
            >
              <div className="bg-slate-50/80 backdrop-blur px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FileText size={18} className="text-electric" />
                  <span className="font-bold text-slate-700 text-[10px]">
                    Libro Diario
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                  06/01/2026
                </span>
              </div>
              <div className="overflow-x-hidden">
                <table className="w-full text-[10px]">
                  <thead className="bg-white border-b border-slate-100 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4 text-left">Concepto</th>
                      <th className="px-6 py-4 text-right">Entrada</th>
                      <th className="px-6 py-4 text-right">Salida</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="block font-bold text-[10px] text-slate-700">
                          Saldo Inicial
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Apertura de caja
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-emerald-600 bg-emerald-50/10">
                        $200.00
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-300 bg-red-50/10">
                        -
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="block font-bold text-slate-700">
                          Pago Proveedor
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Logística "El Rápido"
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-300 bg-emerald-50/10">
                        -
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-red-600 bg-red-50/10">
                        $149.99
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN 1: LIBRO DIARIO --- */}
      <section
        id="audit"
        className="py-24 bg-white border-y border-slate-200 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-titanium mb-6 leading-tight">
                Cuentas Claras,
                <br />
                Negocio Sano.
              </h2>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                Un sistema contable de doble entrada simplificado. Registra cada
                centavo con columnas separadas para Ingresos y Egresos.
              </p>
              <div className="mb-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex gap-4 transition-all hover:bg-indigo-50">
                <HelpCircle className="text-electric shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs font-bold text-electric mb-1 uppercase tracking-wider">
                    ¿Por qué doble columna?
                  </p>
                  <p className="text-xs text-slate-600">
                    Para evitar errores de caja. Si entra dinero es verde, si
                    sale es rojo. Imposible confundirse.
                  </p>
                </div>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-gold" /> Cierre de Caja
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Al finalizar el día, el sistema congela los movimientos.
                </p>
                <button className="w-full py-2.5 bg-titanium text-white text-xs font-bold rounded-lg shadow-md hover:bg-titanium-dark transition-colors">
                  SIMULAR CIERRE DE CAJA
                </button>
              </div>
            </div>

            <div className="md:w-2/3 w-full bg-white rounded-2xl shadow-metal border border-slate-200 overflow-hidden relative z-10">
              <div className="bg-slate-50/80 backdrop-blur px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FileText size={18} className="text-electric" />
                  <span className="font-bold text-slate-700 text-sm">
                    Libro Diario
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                  06/01/2026
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white border-b border-slate-100 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4 text-left">Concepto</th>
                      <th className="px-6 py-4 text-right">Entrada</th>
                      <th className="px-6 py-4 text-right">Salida</th>
                      <th className="hidden md:block px-6 py-4 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="pl-6 py-4">
                        <span className="text-[12px] block font-bold text-slate-700">
                          Saldo Inicial
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Apertura de caja
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-emerald-600 bg-emerald-50/10 text-[12px]">
                        $200.00
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-300 bg-red-50/10">
                        -
                      </td>
                      <td className="hidden md:block px-6 py-4 text-right font-bold text-slate-700">
                        $200.00
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-100 transition-colors">
                      <td className="pl-6 py-4">
                        <span className="text-[12px] block font-bold text-slate-700">
                          Venta #3402
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Pago en Efectivo
                        </span>
                      </td>
                      <td className="text-[12px] px-6 py-4 text-right font-mono font-bold text-emerald-600 bg-emerald-50/10">
                        $1,349.99
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-300 bg-red-50/10">
                        -
                      </td>
                      <td className="hidden md:block px-6 py-4 text-right font-bold text-slate-700">
                        $1,549.99
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="pl-6 py-4">
                        <span className="text-[12px] block font-bold text-slate-700">
                          Pago Proveedor
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Logística "El Rápido"
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-300 bg-emerald-50/10">
                        -
                      </td>
                      <td className="text-[12px] px-6 py-4 text-right font-mono font-bold text-red-600 bg-red-50/10">
                        $149.99
                      </td>
                      <td className="hidden md:block px-6 py-4 text-right font-bold text-slate-700">
                        $1,400.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: POS HÍBRIDO --- */}
      <section
        id="pos"
        className="py-24 bg-slate-50/50  relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-titanium mb-4">
              POS Híbrido
            </h2>
            <p className="text-slate-500 text-lg">
              Adáptate a tu estilo de venta. Visual para rapidez, Lista para
              inventarios grandes.
            </p>
          </div>
          <div className="flex justify-center mb-10 relative">
            <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm flex gap-1">
              <button
                onClick={() => setPosView("grid")}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                  posView === "grid"
                    ? "bg-titanium text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                <LayoutGrid size={16} /> VISUAL
              </button>
              <button
                onClick={() => setPosView("list")}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                  posView === "list"
                    ? "bg-titanium text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                <List size={16} /> LISTA / SKU
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 h-[600px] flex gap-6">
            <div className="flex-1 flex flex-col">
              <div className="mb-4">
                <input
                  disabled
                  placeholder="Buscar por nombre, código de barras o SKU..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-electric/20 outline-none"
                />
              </div>
              <div className="flex-1 overflow-y-auto pr-2">
                {posView === "grid" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                      {
                        name: "iPhone 15 Pro",
                        price: 1399,
                        img: "bg-slate-800",
                      },
                      { name: "AirPods Max", price: 549, img: "bg-slate-200" },
                      { name: "Galaxy S24", price: 1349, img: "bg-slate-900" },
                      { name: "Pixel 8 Pro", price: 1099, img: "bg-slate-100" },
                      { name: "Sony XM5", price: 349, img: "bg-slate-300" },
                      { name: "iPad Air", price: 599, img: "bg-blue-100" },
                      { name: "MacBook Air", price: 999, img: "bg-slate-200" },
                      { name: "JBL Flip", price: 129, img: "bg-red-500" },
                    ].map((p, i) => (
                      <motion.div
                        key={i}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-3 hover:shadow-lg hover:border-electric transition-all"
                      >
                        <div
                          className={`aspect-square rounded-lg ${p.img} mb-3 flex items-center justify-center shadow-inner relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                          <Smartphone
                            className={`${
                              p.img.includes("800") || p.img.includes("900")
                                ? "text-white/50"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                        <div className="text-xs font-bold text-slate-700 truncate">
                          {p.name}
                        </div>
                        <div className="text-sm font-black text-electric">
                          ${p.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-slate-100 rounded-xl overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase sticky top-0">
                        <tr>
                          <th className="px-4 py-3">SKU</th>
                          <th className="px-4 py-3">Producto</th>
                          <th className="px-4 py-3">Stock</th>
                          <th className="px-4 py-3 text-right">Precio</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[1, 2, 3, 4, 5, 6].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-slate-50 cursor-pointer"
                          >
                            <td className="px-4 py-3 font-mono text-xs text-slate-400">
                              APL-{100 + i}
                            </td>
                            <td className="px-4 py-3 font-bold text-slate-700">
                              Producto Demo {i + 1}
                            </td>
                            <td className="px-4 py-3 text-emerald-600 font-bold bg-emerald-50/30 rounded w-fit">
                              24 un.
                            </td>
                            <td className="px-4 py-3 font-bold text-right">
                              $100.00
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
            <div className="w-96 bg-slate-50 border-l border-slate-200 p-5 flex flex-col justify-between hidden md:flex rounded-r-xl">
              <div className="flex-1 flex flex-col overflow-hidden">
                <button className="w-full py-2.5 bg-white border border-slate-200 border-dashed rounded-lg text-slate-500 text-sm font-bold mb-4 hover:border-electric hover:text-electric transition-colors flex items-center justify-center gap-2">
                  <UserPlus size={16} /> Asignar Cliente
                </button>
                <h4 className="font-bold text-titanium mb-4 pb-2 border-b border-slate-200">
                  Ticket de Venta
                </h4>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-sm text-slate-700">
                        iPhone 15 Pro
                      </span>
                      <span className="font-black text-sm text-slate-800">
                        $1,399
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                        <button className="w-6 h-6 flex items-center justify-center bg-white rounded text-slate-600 hover:text-electric shadow-sm">
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          1
                        </span>
                        <button className="w-6 h-6 flex items-center justify-center bg-white rounded text-slate-600 hover:text-electric shadow-sm">
                          <Plus size={12} />
                        </button>
                      </div>
                      <button className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-200 mt-4 bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-slate-600">
                    Total a Pagar
                  </span>
                  <span className="text-3xl font-black text-titanium">
                    $1,399
                  </span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-titanium to-titanium-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Zap size={18} fill="currentColor" className="text-gold" />{" "}
                  COBRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: CUENTAS CORRIENTES --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-titanium text-center mb-12">
            Gestiona Deudas Comodamente
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Semáforo de Deuda
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Visualiza instantáneamente la salud de crédito de tus clientes.
                El sistema categoriza automáticamente el riesgo según el
                porcentaje pagado.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex gap-4 mb-6">
                <ShieldCheck className="text-electric shrink-0" size={24} />
                <div>
                  <p className="text-sm font-bold text-titanium uppercase mb-1">
                    Bloqueo Automático
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Si el cliente supera su límite o cae en zona roja, el POS
                    impide nuevas ventas a cuenta.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-metal border border-slate-200 p-6 relative">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-700">Estado de Cuentas</h3>
                <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500">
                  3 Activos
                </div>
              </div>
              <div className="space-y-4">
                {debtors.map((d, i) => {
                  const { percent, color, textColor } = getDebtStatus(
                    d.paid,
                    d.total
                  );
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm ${color}`}
                      >
                        {d.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <div className="font-bold text-sm text-slate-800">
                              {d.name}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {d.phone}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-3">
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                Abonado
                              </div>
                              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${color}`}
                                  style={{ width: `${percent}%` }}
                                ></div>
                              </div>
                              <div className={`text-xs font-bold ${textColor}`}>
                                {percent}%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-50 mt-1">
                          <div className="text-xs text-slate-500">
                            Deuda:{" "}
                            <span className="font-bold text-slate-700">
                              ${d.total}
                            </span>
                          </div>
                          <div className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">
                            Restante: -${d.total - d.paid}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN COTIZACIÓN / CONTACTO (ENRIQUECIDA & ANIMADA) --- */}
      <section
        id="pricing"
        className="py-24 bg-titanium/10 relative overflow-visible"
      >
        {/* Decoración de Fondo (Más viva) */}
        <motion.div
          animate={{
            y: [0, Math.random() * -150 - 10, 0],
            x: [0, Math.random() * -150 - 10, 0],
            scale: [1, 1.2, 2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-0 top-20 w-[500px] h-[500px] bg-electric rounded-full blur-[100px] -z-60"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, Math.random() * 150 - 10, 0],
            x: [0, Math.random() * 150 - 10, 0],
            scale: [1, 1.2, 2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-0 bottom-16 w-[500px] h-[600px] bg-emerald-600 blur-[150px] rounded-full -z-60"
        ></motion.div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* WIDGET FLOTANTE 1: ADIÓS PAPEL (Izquierda Arriba) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-12 -top-6 z-20 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 hidden lg:flex"
          >
            <div className="bg-sky-50 p-2 rounded-lg text-sky-500">
              <NotebookText size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Impacto Inmediato
              </p>
              <p className="text-xs font-black text-slate-700">
                Elimina el "cuaderno" de fiados
              </p>
            </div>
          </motion.div>

          {/* WIDGET FLOTANTE 2: SEGURIDAD (Derecha Abajo) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -right-4 md:-right-8 -bottom-8 z-20 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 hidden lg:flex"
          >
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Tranquilidad Total
              </p>
              <p className="text-xs font-black text-slate-700">
                Auditoría y Roles de Usuario
              </p>
            </div>
          </motion.div>

          {/* CARD PRINCIPAL */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">
            {/* LADO IZQUIERDO: FEATURES (El Producto Sólido) */}
            <div className="md:w-3/5 p-8 md:p-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titanium/5 text-titanium text-[10px] font-bold uppercase tracking-wider mb-6 border border-titanium/10">
                <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                Software Integral de Gestión
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-titanium mb-4 leading-tight">
                El Centro de Comando <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-light via-titanium-light to-titanium animate-text-shimmer drop-shadow-[0_2px_10px_rgba(67,56,202,0.5)]">
                  que tu negocio necesita.
                </span>
              </h2>

              <p className="text-slate-500 mb-10 leading-relaxed text-sm md:text-base max-w-lg">
                Transforma tu comercio de barrio en una empresa organizada.
                Desde la venta rápida hasta el balance contable automático. Todo
                en una sola plataforma.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {/* Feature 1: POS */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md group-hover:scale-110 transition-transform">
                      <Zap size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      POS Inteligente
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    Venta en 3 clics, tickets PDF automáticos y candado de
                    stock.
                  </p>
                </div>

                {/* Feature 2: Deudores */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-orange-50 text-orange-600 rounded-md group-hover:scale-110 transition-transform">
                      <Users size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Control de Fiados
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    Ranking de deudores, bloqueo de sobrepagos y alertas.
                  </p>
                </div>

                {/* Feature 3: Contabilidad */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md group-hover:scale-110 transition-transform">
                      <FileText size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Contabilidad Auto
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    Libro diario automático (Debe/Haber) y balance en tiempo
                    real.
                  </p>
                </div>

                {/* Feature 4: Dashboard BI */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-purple-50 text-purple-600 rounded-md group-hover:scale-110 transition-transform">
                      <Activity size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Business Intelligence
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    KPIs en vivo, tendencias de ingresos vs gastos y métricas
                    clave.
                  </p>
                </div>

                {/* Feature 5: Inventario */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md group-hover:scale-110 transition-transform">
                      <Package size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Inventario Blindado
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    Alertas de stock bajo y gestión centralizada de precios.
                  </p>
                </div>

                {/* Feature 6: Seguridad */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-slate-100 text-slate-600 rounded-md group-hover:scale-110 transition-transform">
                      <Lock size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Seguridad Admin
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 pl-8 leading-snug">
                    Roles de empleados, validación anti-error y trazabilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: EL LLAMADO A LA ACCIÓN (CTA) */}
            <div className="md:w-2/5 bg-titanium-dark p-10 md:p-14 flex flex-col justify-center relative overflow-hidden text-white">
              {/* Efectos de fondo del CTA ANIMADOS (Tipo "Luciérnaga Gigante") */}
              <motion.div
                animate={{
                  y: [0, Math.random() * -150 - 10, 0],
                  x: [0, Math.random() * -150 - 10, 0],
                  scale: [1, 1.2, 2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-80 h-80 bg-electric rounded-full blur-[100px] -mr-20 -mt-20"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, Math.random() * 150 - 10, 0],
                  x: [0, Math.random() * 150 - 10, 0],
                  scale: [1, 1.2, 2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1, // Desfase para movimiento más orgánico
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] -ml-10 -mb-10"
              ></motion.div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-black mb-3 tracking-tight">
                    ¿Listo para escalar?
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Deja de perder dinero en errores manuales. Hablemos sobre
                    tus necesidades y digitalicemos tu negocio hoy mismo.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/549xxxxxxxxxx?text=Hola,%20me%20interesa%20una%20demo%20de%20Nexo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-titanium-dark font-black rounded-xl text-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                  >
                    <Mail
                      size={20}
                      className="text-electric group-hover:scale-110 transition-transform"
                    />
                    SOLICITAR COTIZACIÓN
                  </a>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Respuesta en menos de 24hs hábiles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-titanium-dark text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* COLUMNA 1: MARCA */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                {/* LOGO FOOTER */}
                <img
                  src={isologotipo}
                  alt="Logo nexo"
                  className="w-8 h-8 object-contain brightness-0 invert" // Invertimos color si es negro para que se vea blanco, o quita la clase si ya es blanco/color
                />
                <span className="text-3xl font-black text-white tracking-tighter font-sans lowercase mb-1">
                  nexo
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                El sistema operativo comercial elegido por tiendas de
                tecnología, kioscos modernos y distribuidores en toda
                Latinoamérica.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-electric flex items-center justify-center text-white transition-colors">
                  <Instagram size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-electric flex items-center justify-center text-white transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-electric flex items-center justify-center text-white transition-colors">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                Producto
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Hardware Compatible
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Integraciones (API)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                Recursos
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Blog de Finanzas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Comunidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric transition-colors">
                    Estado del Servicio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                Mantente al día
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Recibe tips de gestión y actualizaciones del sistema.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-electric"
                />
                <button className="bg-electric hover:bg-indigo-600 text-white p-2 rounded-lg transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2026 Nexo SaaS Technologies. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
