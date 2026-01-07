<header className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    {/* IZQUIERDA */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-electric mb-8 shadow-sm uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
        v3.0 Release
      </div>

      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
        Deja de <br />
        {/* CAMBIO AQUÍ: Sin animación, solo Drop-Shadow fuerte para efecto luz */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-electric-light to-electric drop-shadow-[0_0_25px_rgba(67,56,202,0.6)]">
          adivinar tus números.
        </span>
      </h1>

      <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
        Gestión comercial con acabado de precisión. Controla stock, caja y
        deudores con una interfaz diseñada para brillar.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-electric text-white rounded-xl font-bold text-sm hover:bg-indigo-800 transition-all shadow-glow-blue hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
          Prueba Gratis 14 Días
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-8 py-4 bg-white text-titanium border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm hover:border-titanium">
          Ver Video Demo
        </button>
      </div>
    </motion.div>

    {/* DERECHA: DASHBOARD */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative perspective-1000"
    >
      {/* Glow trasero */}
      <div className="absolute inset-0 bg-electric/20 blur-3xl rounded-full -z-10"></div>

      {/* WIDGET FLOTANTE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -right-8 top-12 z-30 bg-white/95 backdrop-blur p-4 rounded-xl shadow-glass border border-slate-200 w-64 hidden xl:block hover:scale-105 transition-transform cursor-help"
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 p-1.5 bg-emerald-50 rounded text-emerald-600">
            <TrendingUp size={16} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Métricas Reales
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-titanium">Sin mentiras.</span>{" "}
              Cruzamos ventas vs. gastos operativos para darte tu ganancia neta
              exacta.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contenedor Principal Dashboard */}
      <motion.div
        whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 w-full max-w-lg mx-auto relative z-20 cursor-pointer"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Hola, Admin 👋</h3>
            <p className="text-xs text-slate-400 font-medium">
              Resumen de actividad.
            </p>
          </div>
          <div className="px-3 py-1 bg-gradient-to-r from-electric to-indigo-500 text-white text-[10px] font-bold rounded-full shadow-glow-blue flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>{" "}
            ONLINE
          </div>
        </div>

        {/* Tarjetas Superiores */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex justify-between items-center group hover:border-emerald-200 transition-colors">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Ingresos
              </p>
              <h4 className="text-xl font-black text-slate-800">$803k</h4>
            </div>
            <div className="p-2 bg-white rounded-lg text-emerald-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
              <TrendingUp size={18} />
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex justify-between items-center group hover:border-red-200 transition-colors">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Gastos
              </p>
              <h4 className="text-xl font-black text-slate-800">$36k</h4>
            </div>
            <div className="p-2 bg-white rounded-lg text-red-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
              <TrendingUp size={18} className="rotate-180" />
            </div>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-inner">
          <div className="mb-4 flex justify-between items-end">
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                Flujo de Caja
              </h4>
              <p className="text-[10px] text-slate-400">Comparativa Semanal</p>
            </div>
            <div className="bg-titanium text-white text-[10px] font-bold py-1 px-2 rounded shadow-lg flex flex-col items-center animate-bounce">
              $1,349.99
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-titanium mt-0.5"></div>
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
                  {val === 0 ? "$0" : `${val}k`}
                </div>
              ))}
            </div>

            <svg
              viewBox="0 0 100 50"
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M0,45 C20,45 30,20 50,30 C70,40 80,45 100,40"
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                d="M0,35 C20,30 30,45 50,15 C70,-5 80,20 100,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
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
              <span>Mié</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sáb</span>
              <span>Dom</span>
              <span className="text-slate-800 font-bold">Lun</span>
              <span>Mar</span>
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
      </motion.div>
    </motion.div>
  </div>
</header>;
