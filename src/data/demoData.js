export const cameras = [
  { id: 'CAM-01', name: 'Connaught Place Outer Circle', coords: [28.6315, 77.2167], traffic: 'high', speed: 13, plates: 52 },
  { id: 'CAM-02', name: 'India Gate C-Hexagon', coords: [28.6129, 77.2295], traffic: 'medium', speed: 24, plates: 31 },
  { id: 'CAM-03', name: 'ITO Crossing', coords: [28.628, 77.241], traffic: 'high', speed: 11, plates: 48 },
  { id: 'CAM-04', name: 'AIIMS Flyover', coords: [28.5678, 77.2104], traffic: 'low', speed: 41, plates: 18 },
  { id: 'CAM-05', name: 'DND Toll Plaza', coords: [28.5945, 77.2672], traffic: 'low', speed: 54, plates: 22 },
  { id: 'CAM-06', name: 'Dhaula Kuan Interchange', coords: [28.5912, 77.1616], traffic: 'medium', speed: 29, plates: 36 }
  ,{ id: 'CAM-07', name: 'Kashmere Gate ISBT', coords: [28.6674, 77.2271], traffic: 'high', speed: 16, plates: 45 }
  ,{ id: 'CAM-08', name: 'Nehru Place Junction', coords: [28.5497, 77.2510], traffic: 'medium', speed: 26, plates: 28 }
];
export const demoPath = cameras.slice(0, 5).map((camera, index) => ({ ...camera, timestamp: new Date(Date.now() - (4 - index) * 540000).toISOString(), confidence: .94 - index * .01 }));
export const alerts = [
  { level: 'critical', title: 'Possible cloned plate', text: 'DL08CE9021 appeared at CAM-05 and CAM-04 within 4 min.', plate: 'DL08CE9021', camera: 'CAM-04' },
  { level: 'warning', title: 'Unusually delayed journey', text: 'DL01AB1234 is 18 min behind its expected travel time.', plate: 'DL01AB1234', camera: 'CAM-03' },
  { level: 'info', title: 'High-traffic corridor', text: 'Connaught Place → ITO is 42% slower than normal.', camera: 'CAM-03' }
];
