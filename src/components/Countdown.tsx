import { useEffect, useState } from 'react';

const TARGET = new Date('2026-09-13T07:45:00').getTime();

function getRemaining() {
  const now = Date.now();
  const diff = Math.max(TARGET - now, 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const interval = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-4 md:gap-6">
          <div className="glass-gold rounded-2xl px-6 py-5 md:px-8 md:py-6 min-w-[100px] md:min-w-[120px] text-center">
            <div className="font-cinzel text-4xl md:text-5xl font-bold text-gradient-gold tabular-nums">
              {String(u.value).padStart(2, '0')}
            </div>
            <div className="mt-1 font-poppins text-xs md:text-sm text-ivory/50 uppercase tracking-widest">
              {u.label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span className="font-cinzel text-3xl md:text-4xl text-gold/30 hidden sm:block">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
