import React, { useState, useCallback } from 'react';
import ChromaGrid from '@/components/ChromaGrid';
import Noise from '@/components/Noise';
import OfficeWavePreloader from './OfficeWavePreloader';
import { ChromaItem } from '@/components/ChromaGrid';

interface Item {
  image: string;
  title: string;
  subtitle: string;
  borderColor: string;
  gradient: string;
  url: string;
  thoughts: string;
}

interface Drawer {
  id: string;
  label: string;
  items: Item[];
}

const CABINET_DATA: Drawer[] = [
  {
    id: 'nirvana-primary',
    label: 'FILE-001: Grunge',
    items: [
      {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Nirvana-Bleach.jpg/250px-Nirvana-Bleach.jpg",
        title: "ASSET_001: BLEACH",
        subtitle: "STATUS: TRAILBLAZING // 1989",
        borderColor: "#333333",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/1KVGkkahKY4MvHFS7fELdB",
        thoughts: "The raw, dark energy of this album set the stage. It's the sound of Seattle still finding its voice, unpolished and vital. Favorite track: School."
      },
      {
        image: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
        title: "ASSET_002: NEVERMIND",
        subtitle: "STATUS: CRITICAL // 1991",
        borderColor: "#0055ff",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ",
        thoughts: "The one that changed everything. Perfectly produced, slightly too clean, but undeniable pop sensibility fused with punk angst. A true cultural shift."
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg",
        title: "ASSET_003: IN_UTERO",
        subtitle: "STATUS: TITANIC // 1993",
        borderColor: "#ff3333",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/7wOOA7l306K8HfBKfPoafr",
        thoughts: "A masterpiece of defiance. Steve Albini's production made it sound raw and abrasive, exactly what they wanted after Nevermind. The contrast between beauty and noise is perfect."
      },
      {
        image: "https://i.scdn.co/image/ab67616d0000b273e1f5fcef5fb5f70aa0a717fc",
        title: "ASSET_005: INCESTICIDE",
        subtitle: "STATUS: GRITTY // 1992",
        borderColor: "#d4af37",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/5K2xNMi6tbmLj9P6c8GEne",
        thoughts: "A collection for the hardcore fans—B-sides and rarities that demonstrate their punk roots. Dive into 'Aero Zeppelin' for a noisy ride."
      }
    ],
  },
  {

    id: 'outsiders',
    label: 'FILE-002: personal favorites',
    items: [
      {
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png",
        title: "ASSET_001: BLUE",
        subtitle: "STATUS: OUTLIER_DETECTED // 1994",
        borderColor: "#0088ff",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/4LH7ZurR7uC2cXab86NauS",
        thoughts: "An anomaly in this archive, but essential. Perfect nerd-rock with flawless hooks. It balances the melancholy here perfectly. Undone is a masterpiece."
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/5/59/Radiohead_-_OKNOTOK_-_Physical_Album_Cover_Art.jpg",
        title: "ASSET_002: OK COMPUTER",
        subtitle: "STATUS: OK // 1995",
        borderColor: "#0088ff",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/4LH7ZurR7uC2cXab86NauS",
        thoughts: "An anomaly in this archive, but essential. Perfect nerd-rock with flawless hooks. It balances the melancholy here perfectly. Undone is a masterpiece."
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/5/54/Nirvana_mtv_unplugged_in_new_york.png",
        title: "ASSET_003: UNPLUGGED",
        subtitle: "STATUS: FAVORITE // 1993",
        borderColor: "#551a8b",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/7gjAqPXKthUBQ3TOh6NQ3i",
        thoughts: "This showcases their vulnerability and songwriting depth. It feels like an intimate funeral, especially the Bowie cover. It's chilling and beautiful."
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Pearl_Jam_Ten_Alt_Cover.jpg",
        title: "ASSET_004: EVEN",
        subtitle: "STATUS: 2000s HEART WRENCHER",
        borderColor: "#58252cff",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a?si=dTssjGE1SOWQk4FWpx-HAA",
        thoughts: "It's actually post nirvana grunge at it's finest even though there is no connection to nirvana, but the moodyness and still really smooth tracklist is something you cant ignore"
      },
    ],
  },
  {
    id: 'rap',
    label: 'FILE-003: HIP-HOP',
    items: [
      {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/AmericanDream.jpeg/250px-AmericanDream.jpeg",
        title: "ASSET_001: AMERICAN DREAM",
        subtitle: "STATUS: FIRE // 2024",
        borderColor: "#333333",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/2RRYaYHY7fIIdvFlvgb5vq?si=z5kpTxj0Qc62sziTvB1osg",
        thoughts: "2nd favorite album from my favorite rapper, I remember listening to it on the way to school on the bus the day it came out"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/3/36/21_Savage_%E2%80%93_I_Am_Greater_Than_I_Was.png",
        title: "ASSET_002: I AM > I WAS",
        subtitle: "STATUS: DEFINING // 2018",
        borderColor: "#0055ff",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/007DWn799UWvfY1wwZeENR?si=lt13AXzoQLyzpkFAQn9e7Q",
        thoughts: "My favorite album in Hip-Hop I have so many memories that make this an ungodly amount of special to me"
      },
      {
        image: "https://images.genius.com/611f464f56628a64c2c8e9254b00832c.1000x1000x1.jpg",
        title: "ASSET_003: WE DONT TRUST YOU",
        subtitle: "STATUS: WAR WINNING // 2024",
        borderColor: "#ff3333",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/4iqbFIdGOTzXeDtt9owjQn?si=TOH6FTCOSxiHve3ISJSlBA",
        thoughts: "Aged amazingly and still carries the same energy it did that summer"
      },
      {
        image: "https://open.spotify.com/album/18NOKLkZETa4sWwLMIm0UZ",
        title: "ASSET_004: UTOPIA",
        subtitle: "STATUS: ANTHEM // 2024",
        borderColor: "#d4af37",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/18NOKLkZETa4sWwLMIm0UZ?si=s23zMYh7Smag6nGD0kJvKg",
        thoughts: "Crazy how much it changed the atmosphere of what a Trav album would be, it has to be in my top 5"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/1/15/Travis_Scott_-_Rodeo.png",
        title: "ASSET_005: RODEO",
        subtitle: "STATUS: DEFINING // 2015",
        borderColor: "#d4af37",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg?si=ed8aVkZTQB6xbO18Q5ioNA",
        thoughts: "I think its the best travis album even though its his early work it defined him and has aged really well"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg",
        title: "ASSET_006: MM..FOOD",
        subtitle: "STATUS: FLOWY // 2004",
        borderColor: "#d4af37",
        gradient: "linear-gradient(to bottom, #dcdad1, #b0aea4)",
        url: "https://open.spotify.com/album/1UcS2nqUhxrZjrBZ3tHk2N?si=1kz46dF1StCC9aaL5Wesew",
        thoughts: "As he put it Mm.. Food"
      }
    ],
  },
];

const AudioArchive: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openDrawerId, setOpenDrawerId] = useState<string | null>('nirvana-primary');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handlePreloaderFinish = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleToggleDrawer = useCallback((id: string) => {
    setOpenDrawerId(prevId => (prevId === id ? null : id));
    setSelectedItem(null);
  }, []);

  const handleItemSelect = useCallback((item: Item | ChromaItem) => {
    setSelectedItem(item as Item);
  }, []);

  const currentDrawer = CABINET_DATA.find(d => d.id === openDrawerId);
  const itemsToDisplay = currentDrawer ? currentDrawer.items : [];

  return (
    <>
      {isLoading && <OfficeWavePreloader onFinish={handlePreloaderFinish} />}

      <div className={`min-h-screen bg-[#C69B7B] relative overflow-hidden font-mono selection:bg-[#D77A3D] selection:text-white ${isLoading ? 'hidden' : 'block'}`}>

        <div className="fixed inset-0 pointer-events-none z-40 opacity-20 mix-blend-multiply"><Noise /></div>
        <div className="fixed inset-0 pointer-events-none z-0 opacity-15"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(45, 35, 25, 0.1) 35px, rgba(45, 35, 25, 0.1) 70px)',
          }}>
        </div>

        <div className="relative z-10 flex flex-col items-center min-h-screen py-12 px-4">

          <div className="w-full max-w-6xl flex justify-between items-center text-xs md:text-sm tracking-widest text-[#4A3728] mb-8 uppercase border-b-2 border-[#8B5A3C] pb-2">
            <span>TEMPORAL ARCHIVE: GUEST</span>
            <span>VARIANT_ID: 808-X</span>
            <span className="animate-pulse">● ACTIVE</span>
          </div>

          <div className="w-full max-w-5xl border-4 border-[#4A3728] shadow-[8px_8px_0px_0px_rgba(45,35,25,0.8)] bg-[#D4A574]">

            <div className="p-4 text-center border-b-2 border-[#4A3728] bg-[#E8C4A0]">
              <h2 className="text-2xl font-serif font-bold text-[#2D2319] uppercase tracking-tight">
                TEMPORAL AUDIO ARCHIVE • CABINET {CABINET_DATA.length}
              </h2>
            </div>

            {CABINET_DATA.map((drawer, index) => (
              <div key={drawer.id} className={`w-full ${index < CABINET_DATA.length - 1 ? 'border-b-2 border-[#4A3728]' : ''}`}>

                <div
                  className={`flex justify-between items-center p-4 cursor-pointer bg-[#D4A574] hover:bg-[#C69B7B] transition-colors border-l-8 border-r-8 ${openDrawerId === drawer.id ? 'border-[#D77A3D]' : 'border-[#8B5A3C]'}`}
                  onClick={() => handleToggleDrawer(drawer.id)}
                >
                  <span className="font-mono text-sm tracking-wider uppercase text-[#2D2319] font-bold">
                    {drawer.label}
                  </span>
                  <svg className={`w-4 h-4 transition-transform text-[#4A3728] ${openDrawerId === drawer.id ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openDrawerId === drawer.id ? 'max-h-[1000px] border-t-2 border-[#4A3728]' : 'max-h-0'}`}>
                  <div className="relative bg-[#3A2F24] p-8 border-b-4 border-[#2D2319] min-h-[500px]">

                    <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_100px_rgba(29,23,19,0.9)]"></div>

                    <div className="absolute inset-0 z-20 pointer-events-none opacity-10"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(215, 122, 61, 0.3) 2px, rgba(215, 122, 61, 0.3) 4px)',
                      }}>
                    </div>

                    <div className="absolute inset-0" style={{ height: '100%', position: 'relative', zIndex: 10 }}>
                      <ChromaGrid
                        items={itemsToDisplay as ChromaItem[]}
                        radius={280}
                        damping={0.3}
                        fadeOut={0.7}
                      />

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div
              className="fixed inset-0 bg-[#2D2319]/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="w-full max-w-lg p-8 border-4 border-[#4A3728] bg-[#E8C4A0] shadow-[12px_12px_0px_0px_rgba(45,35,25,0.9)] animate-flicker-slow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-right mb-4">
                  <button onClick={() => setSelectedItem(null)} className="text-sm font-mono text-[#8B3A1A] hover:text-[#D77A3D] border-2 border-[#8B3A1A] px-3 py-1 uppercase tracking-wider font-bold">
                    [CLOSE X]
                  </button>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 uppercase text-[#2D2319] border-b-2 border-[#D77A3D] pb-2">{selectedItem.title}</h3>
                <p className="text-xs font-mono text-[#4A3728] border-b border-[#8B5A3C] pb-3 mb-4 uppercase tracking-wide">{selectedItem.subtitle}</p>

                <div className="border-2 border-[#4A3728] p-4 bg-[#F5DCC4] min-h-[150px]">
                  <h4 className="text-sm font-mono font-bold mb-2 uppercase text-[#2D2319] tracking-wider">Temporal Analysis Notes:</h4>
                  <p className="font-serif italic text-base text-[#3A2F24] whitespace-pre-wrap leading-relaxed">
                    "{selectedItem.thoughts}"
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #8B5A3C; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #D77A3D; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #E89050; }
          @keyframes flicker-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.98; }
          }
          .animate-flicker-slow { animation: flicker-slow 4s infinite; }
        `}</style>
      </div>
    </>
  );
};

export default AudioArchive;