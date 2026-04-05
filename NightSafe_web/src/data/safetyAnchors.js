export const safetyAnchors = [
  // 派出所
  { id: 'ps-1', type: 'police', name: '信義分局', lat: 25.0330, lng: 121.5654, address: '信義區信義路五段150號' },
  { id: 'ps-2', type: 'police', name: '中正一分局', lat: 25.0478, lng: 121.5170, address: '中正區忠孝西路一段6號' },
  { id: 'ps-3', type: 'police', name: '大安分局', lat: 25.0268, lng: 121.5435, address: '大安區仁愛路四段27巷8號' },
  { id: 'ps-4', type: 'police', name: '松山分局', lat: 25.0510, lng: 121.5577, address: '松山區八德路四段679號' },
  { id: 'ps-5', type: 'police', name: '萬華分局', lat: 25.0374, lng: 121.5001, address: '萬華區萬大路555號' },
  { id: 'ps-6', type: 'police', name: '文山一分局', lat: 24.9882, lng: 121.5406, address: '文山區木柵路三段220號' },
  { id: 'ps-7', type: 'police', name: '士林分局', lat: 25.0930, lng: 121.5262, address: '士林區中正路420號' },

  // CCTV
  { id: 'cctv-1', type: 'cctv', name: 'CCTV 忠孝東路/基隆路口', lat: 25.0416, lng: 121.5570 },
  { id: 'cctv-2', type: 'cctv', name: 'CCTV 信義路/敦化南路口', lat: 25.0332, lng: 121.5497 },
  { id: 'cctv-3', type: 'cctv', name: 'CCTV 復興南路/忠孝東路口', lat: 25.0429, lng: 121.5434 },
  { id: 'cctv-4', type: 'cctv', name: 'CCTV 中山北路/民族東路口', lat: 25.0654, lng: 121.5236 },
  { id: 'cctv-5', type: 'cctv', name: 'CCTV 羅斯福路/景文街口', lat: 24.9949, lng: 121.5411 },
  { id: 'cctv-6', type: 'cctv', name: 'CCTV 市民大道/光復南路口', lat: 25.0448, lng: 121.5577 },

  // YouBike 站點
  { id: 'yb-1', type: 'youbike', name: 'YouBike 市府站(3號出口)', lat: 25.0408, lng: 121.5673, bikes: 12, spaces: 8, updateTime: '22:15' },
  { id: 'yb-2', type: 'youbike', name: 'YouBike 永春站(2號出口)', lat: 25.0401, lng: 121.5754, bikes: 5, spaces: 15, updateTime: '22:15' },
  { id: 'yb-3', type: 'youbike', name: 'YouBike 台北車站(忠孝)', lat: 25.0479, lng: 121.5172, bikes: 23, spaces: 7, updateTime: '22:15' },
  { id: 'yb-4', type: 'youbike', name: 'YouBike 景美站(1號出口)', lat: 24.9935, lng: 121.5396, bikes: 8, spaces: 22, updateTime: '22:15' },
  { id: 'yb-5', type: 'youbike', name: 'YouBike 西門站(6號出口)', lat: 25.0422, lng: 121.5083, bikes: 15, spaces: 5, updateTime: '22:15' },
  { id: 'yb-6', type: 'youbike', name: 'YouBike 士林站(1號出口)', lat: 25.0935, lng: 121.5258, bikes: 19, spaces: 11, updateTime: '22:15' },
  { id: 'yb-7', type: 'youbike', name: 'YouBike 大巨蛋(忠孝東路)', lat: 25.0427, lng: 121.5618, bikes: 3, spaces: 27, updateTime: '22:15' },

  // 路燈密集區段 (simplified as zone markers)
  { id: 'light-1', type: 'streetlight', name: '忠孝東路段（復興-基隆路）', lat: 25.0419, lng: 121.5500, density: 'high' },
  { id: 'light-2', type: 'streetlight', name: '信義路段（敦化-基隆路）', lat: 25.0332, lng: 121.5540, density: 'high' },
  { id: 'light-3', type: 'streetlight', name: '羅斯福路段（公館-景美）', lat: 25.0050, lng: 121.5350, density: 'medium' },
  { id: 'light-4', type: 'streetlight', name: '中山北路段（中山-圓山）', lat: 25.0600, lng: 121.5227, density: 'high' },
];

export const anchorTypeConfig = {
  police: {
    label: '派出所',
    color: '#3B82F6',
    icon: 'Shield',
  },
  cctv: {
    label: 'CCTV 監視器',
    color: '#A855F7',
    icon: 'Camera',
  },
  youbike: {
    label: 'YouBike 站點',
    color: '#22C55E',
    icon: 'Bike',
  },
  streetlight: {
    label: '路燈密集區',
    color: '#F59E0B',
    icon: 'Lightbulb',
  },
};
