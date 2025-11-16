export default function handler(req, res) {
  const contract = req.query.contract || 'TDrr3YJGTSWsKviPjYXzFoxQcHWBmN2Bvy';  
  res.status(200).json({
    [contract]: {
      usd: 1.00,          
      currency: 'USD',    
      timestamp: new Date().toISOString()  
    }
  });
}
