import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show for 3 seconds then fade out
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#07070A',
          }}
        >
          {/* Animated rings */}
          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: '1px solid rgba(201,169,98,0.3)',
            }}
          />
          <m.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: 340,
              height: 340,
              borderRadius: '50%',
              border: '1px solid rgba(201,169,98,0.2)',
            }}
          />

          {/* Logo */}
          <m.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
          >
            <img
              src="/logo.png"
              alt="Obula"
              style={{ 
                width: 140, 
                height: 140,
                filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.5))'
              }}
            />
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                marginTop: 24,
                fontSize: 42,
                fontWeight: 800,
                letterSpacing: '0.15em',
                background: 'linear-gradient(135deg, #F0E6C8 0%, #C9A962 45%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
              }}
            >
              OBULA
            </m.h1>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                marginTop: 12,
                fontSize: 12,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(201,169,98,0.6)',
              }}
            >
              AI Clip Generator
            </m.p>
          </m.div>

          {/* Progress bar */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 200,
              height: 2,
              background: 'linear-gradient(90deg, #C9A962, #D4AF37)',
              transformOrigin: 'left',
            }}
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}
