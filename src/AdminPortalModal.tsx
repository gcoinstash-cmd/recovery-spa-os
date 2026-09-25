import React, { useState } from 'react';
import { Shield, Key, X, Activity, Droplets, Flame, ThermometerSnowflake, UserCheck, Sparkles } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'recovery2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Recovery Passkey. Hint: Use 1-Click Auto-Fill Demo Passkey.');
    }
  };

  const autofillPasskey = () => {
    setPasskey('recovery2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0e0a17] border border-purple-900/50 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl overflow-hidden">
        {/* Violet backdrop glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">RECOVERY LAB OS DOOR</h3>
                <p className="text-base text-zinc-200 leading-relaxed">Hyperbaric, IV Lounge & Contrast Therapy Administration</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold font-mono text-purple-400 uppercase tracking-wider mb-2">
                  Staff Access Passkey
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3.5 w-4 h-4 text-slate-300" />
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-purple-600/25 text-center"
                >
                  Verify Access
                </button>
                <button
                  type="button"
                  onClick={autofillPasskey}
                  className="py-3 px-4 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 font-mono text-base font-semibold min-h-[44px] rounded-xl transition-all"
                >
                  ⚡ Auto-Fill: recovery2026
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Security Level: Clinical Wellness Tier-3</span>
              <span className="font-mono text-purple-400">Auth Gate Active</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-purple-500/20 border border-purple-500/40 rounded-xl text-purple-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Live Chamber & Suite Telemetry</h4>
                  <p className="text-base text-zinc-200 leading-relaxed">Real-Time Temperature, Oxygen Flow & Lounge Queue</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold tracking-wider font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>HBOT Chambers</span>
                  <Activity className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">2.0 ATA</div>
                <div className="text-xs font-semibold tracking-wider text-purple-400 mt-1">Chamber 1 & 2 In Cycle</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Cold Plunge</span>
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">38.4°F</div>
                <div className="text-xs font-semibold tracking-wider text-cyan-400 mt-1">Ozone Filtration Active</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Finnish Cedar Sauna</span>
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">212°F</div>
                <div className="text-xs font-semibold tracking-wider text-amber-400 mt-1">Far-Infrared Activated</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Live Infusion & Recovery Queue</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Alexander Wright (Founders Club)</span>
                    <span className="text-slate-400 ml-2">500mg NAD+ Cellular IV // Suite 3</span>
                  </div>
                  <span className="text-purple-400 font-mono text-xs font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">INFUSING (35m)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Seraphina Fox</span>
                    <span className="text-slate-400 ml-2">Contrast Circuit (Sauna + Plunge) // Bay 1</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-xs font-semibold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">ROUND 3/4</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Dr. Henrik Meyer</span>
                    <span className="text-slate-400 ml-2">60m Hyperbaric Oxygen ATA 2.0 // Pod A</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-xs font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">COMPLETED</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Log Out
              </button>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-5 py-3 min-h-[44px] bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-base font-semibold min-h-[44px] transition-all shadow-md"
                >
                  Close Console
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
