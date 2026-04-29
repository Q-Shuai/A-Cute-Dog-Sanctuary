import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, Sparkles, PawPrint, MessageCircleHeart } from 'lucide-react';

// Components
const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-pink-100/30 bg-pink-100/10"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const DogHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative min-height-[90vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-2xl mb-12"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4 tracking-wide uppercase font-body">
          寻觅最淳朴的陪伴
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-brown-900 mb-6 drop-shadow-sm font-serif">
          愈心<span className="text-orange-400">田园</span>
        </h1>
        <p className="text-xl text-brown-600 leading-relaxed font-light italic">
          "中华田园犬，是这片土地上最温暖的守候。"
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white"
        >
          <img
            src="https://images.unsplash.com/photo-1591160690060-631776997637?auto=format&fit=crop&q=80&w=800"
            alt="Chinese Rural Dog"
            className="w-full h-full object-cover filter contrast-[0.95] sepia-[0.1] saturate-[1.1]"
            referrerPolicy="no-referrer"
          />
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute top-1/4 right-1/4"
              >
                <div className="bg-white px-4 py-2 rounded-2xl shadow-lg relative">
                  <span className="text-sm font-bold text-brown-800 italic">汪！我也能治愈你吗？🐾</span>
                  <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [1, -2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-yellow-100 p-6 rounded-full shadow-lg border-4 border-white"
        >
          <PawPrint className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const PetArea = () => {
  const [petCount, setPetCount] = useState(0);
  const [showHeart, setShowHeart] = useState<{ id: number; x: number; y: number }[]>([]);

  const handlePet = (e: React.MouseEvent) => {
    setPetCount(prev => prev + 1);
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY - 20,
    };
    setShowHeart(prev => [...prev, newHeart]);
    setTimeout(() => {
      setShowHeart(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-cream-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-brown-800 mb-8 flex items-center justify-center gap-3 font-serif">
          <Heart className="text-orange-400 fill-orange-400" /> 给予一份温情 <Heart className="text-orange-400 fill-orange-400" />
        </h2>
        <p className="text-brown-600 mb-12">点击屏幕，轻轻抚摸这只憨厚的大黄吧。</p>
        
        <div 
          onClick={handlePet}
          className="relative inline-block cursor-heart group"
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-[60px] shadow-xl border-4 border-white overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600"
              alt="Golden Puppy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
          </motion.div>
          
          <div className="mt-6 font-bold text-brown-700 bg-white inline-block px-6 py-2 rounded-full shadow-sm">
            抚摸次数: <span className="text-orange-500">{petCount}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showHeart.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: -100, scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="fixed pointer-events-none z-50"
            style={{ left: heart.x, top: heart.y }}
          >
            <Heart className="text-pink-400 fill-pink-400" />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <PawPrint className="absolute top-10 left-1/4 w-32 h-32 rotate-12" />
        <PawPrint className="absolute bottom-20 right-1/4 w-48 h-48 -rotate-12" />
      </div>
    </section>
  );
};

const DogGrid = () => {
  const dogs = [
    { name: "大黄", trait: "忠诚守卫者", img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=400", color: "bg-orange-50" },
    { name: "奥利奥", trait: "憨厚的阿拉斯加", img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400", color: "bg-stone-100" },
    { name: "金金", trait: "温柔的大暖男", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400", color: "bg-yellow-50" },
    { name: "花花", trait: "活泼的艺术家", img: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=400", color: "bg-pink-50" },
    { name: "土豆", trait: "专业午睡员", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=400", color: "bg-yellow-50" },
    { name: "糯米", trait: "纯真小黄狗", img: "https://images.unsplash.com/photo-1591160690060-631776997637?auto=format&fit=crop&q=80&w=400", color: "bg-green-50" },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h2 className="text-4xl font-bold text-brown-900 mb-2 font-serif tracking-tight">我们的伙伴</h2>
          <p className="text-brown-600">看看这些等待与你击掌的小可爱们。</p>
        </div>
        <div className="hidden md:flex gap-2">
          <Stars className="text-yellow-400" />
          <Sparkles className="text-orange-300" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dogs.map((dog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`p-6 rounded-[40px] ${dog.color} border-4 border-white shadow-sm hover:shadow-xl transition-all duration-300 group`}
          >
            <div className="relative h-64 mb-6 rounded-[30px] overflow-hidden">
              <img
                src={dog.img}
                alt={dog.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brown-800 mb-1">{dog.name}</h3>
            <p className="text-brown-500 italic flex items-center gap-2">
              <MessageCircleHeart className="w-4 h-4" /> {dog.trait}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-4 text-center bg-white border-t border-orange-100 relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-8">
          <PawPrint className="w-12 h-12 text-orange-300 mx-auto animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-brown-900 mb-4 font-serif">保持联络</h2>
        <p className="text-brown-600 mb-8 max-w-md mx-auto leading-relaxed">
          最好的良药是田园犬那憨厚的陪伴。希望你的内心此刻感到了些许轻盈。
        </p>
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brown-900 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            加入田园之友
          </motion.button>
        </div>
        <div className="mt-16 text-sm text-brown-400 font-body">
          © 2026 愈心田园空间. 用 🦴 和 ❤️ 构筑.
        </div>
      </div>
      
      {/* Decorative paws */}
      <div className="absolute bottom-0 left-0 opacity-5 -mb-10 -ml-10">
        <PawPrint className="w-48 h-48 rotate-45" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 -mb-10 -mr-10">
        <PawPrint className="w-48 h-48 -rotate-45" />
      </div>
    </footer>
  );
};

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-stone-800 selection:bg-pink-200 selection:text-pink-900">
      <AnimatePresence>
        {isWelcomeVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <PawPrint className="w-20 h-20 text-orange-300 mx-auto mb-8 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-4 font-serif">静谧时刻</h1>
              <p className="text-xl text-brown-600 mb-10 max-w-md mx-auto">
                深呼吸。让田园犬的纯真眼神，治愈你疲惫的灵魂。
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWelcomeVisible(false)}
                className="bg-orange-400 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-200"
              >
                进入静谧空间
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor Progress */}
      <motion.div
        className="fixed top-0 left-0 h-2 bg-pink-300 z-50 rounded-r-full"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <FloatingBubbles />
      
      <main className="relative">
        <DogHero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto py-20 px-4 text-center"
        >
          <div className="w-1 h-20 bg-orange-100 mx-auto rounded-full mb-12" />
          <p className="text-2xl text-brown-700 italic font-serif leading-relaxed">
            “田园犬或许只是你世界的一部分，但对它们来说，你就是它们的全世界。”
          </p>
        </motion.div>

        <DogGrid />
        
        <PetArea />
        
        <section className="py-24 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-brown-900 font-serif">治愈的力量</h2>
              <p className="text-brown-700 leading-relaxed">
                与温顺的田园犬互动可以降低压力激素（皮质醇），并增加催产素的释放，这是一种天然减少压力的化学物质。
              </p>
              <ul className="space-y-4">
                {['瞬间提升心情', '缓解焦虑感', '恒久的陪伴', '无条件的爱'].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-brown-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-yellow-50 rounded-[80px] overflow-hidden border-8 border-white shadow-xl rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600"
                  alt="Cute Alaskan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full blur-xl opacity-40" />
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
      
      {/* Audio toggle button placeholder - dogs love soft music */}
      <div className="fixed bottom-6 right-6 z-40 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg border border-pink-100 border-white cursor-pointer hover:scale-110 active:scale-95 transition-all">
        <MessageCircleHeart className="w-6 h-6 text-pink-400" />
      </div>
    </div>
  );
}
